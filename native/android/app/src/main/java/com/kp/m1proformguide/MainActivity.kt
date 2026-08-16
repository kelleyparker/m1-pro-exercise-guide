package com.kp.m1proformguide

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Color
import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.webkit.WebViewAssetLoader

/**
 * Hosts the bundled single-file guide in a WebView.
 *
 * Everything ships inside the APK (assets/index.html), so the app never
 * touches the network - it works in a garage with no signal, on a plane,
 * anywhere.
 *
 * The page is served through [WebViewAssetLoader] on a virtual https origin
 * rather than a raw file:// URL. That matters: file:// is an opaque origin
 * where DOM storage is unreliable across WebView versions, and this app keeps
 * your 1RMs, favourites and session in localStorage. A real origin makes that
 * persistence a guarantee.
 *
 * The web layer handles its own safe-area insets via env(safe-area-inset-*),
 * so we go edge-to-edge and let the CSS do the spacing.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var web: WebView

    private val assetLoader: WebViewAssetLoader by lazy {
        WebViewAssetLoader.Builder()
            .setDomain(ASSET_DOMAIN)
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
    }

    private companion object {
        const val ASSET_DOMAIN = "appassets.androidplatform.net"
        const val START_URL = "https://appassets.androidplatform.net/assets/index.html"
        // Matches --bg in the web app's two themes.
        val DARK_BG = Color.parseColor("#0f1216")
        val LIGHT_BG = Color.parseColor("#f2f4f7")
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        enableEdgeToEdge()
        super.onCreate(savedInstanceState)

        web = WebView(this).apply {
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
            setBackgroundColor(DARK_BG)

            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true            // localStorage: 1RMs, favourites, session
                cacheMode = WebSettings.LOAD_DEFAULT
                mediaPlaybackRequiresUserGesture = false
                // Nothing is loaded from disk or the network directly; the
                // asset loader serves every byte from inside the APK.
                allowFileAccess = false
                allowContentAccess = false
                // Per the design brief: keep pinch-to-zoom on the animations,
                // but drop the legacy on-screen zoom buttons.
                setSupportZoom(true)
                builtInZoomControls = true
                displayZoomControls = false
                useWideViewPort = true
                loadWithOverviewMode = false
                textZoom = 100                      // the app scales its own type
            }

            addJavascriptInterface(ThemeBridge(), "AndroidTheme")
            webViewClient = LocalAssetClient()
            isVerticalScrollBarEnabled = false
            overScrollMode = WebView.OVER_SCROLL_NEVER
        }

        setContentView(web)
        applyChrome(dark = true)

        if (savedInstanceState != null) web.restoreState(savedInstanceState) else web.loadUrl(START_URL)

        // Gesture/hardware back walks the app's own history (detail -> library)
        // and only leaves the app when there is nothing left to go back to.
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (web.canGoBack()) {
                    web.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        web.saveState(outState)
    }

    /** Keeps the system bars legible against whichever theme the web app shows. */
    private fun applyChrome(dark: Boolean) {
        val bg = if (dark) DARK_BG else LIGHT_BG
        window.decorView.setBackgroundColor(bg)
        web.setBackgroundColor(bg)
        WindowCompat.getInsetsController(window, window.decorView).apply {
            isAppearanceLightStatusBars = !dark
            isAppearanceLightNavigationBars = !dark
        }
    }

    /** The web app flips <html data-theme>; this relays it to the native chrome. */
    inner class ThemeBridge {
        @JavascriptInterface
        fun setTheme(theme: String) {
            runOnUiThread { applyChrome(dark = theme != "light") }
        }
    }

    private inner class LocalAssetClient : WebViewClient() {

        override fun shouldInterceptRequest(
            view: WebView,
            request: WebResourceRequest
        ): WebResourceResponse? = assetLoader.shouldInterceptRequest(request.url)

        override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
            val url = request.url ?: return true
            // In-app navigation stays in the app; anything genuinely external
            // (there is none today) opens in the browser instead of hijacking it.
            if (url.host == ASSET_DOMAIN || url.scheme == "about") return false
            return try {
                startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url.toString())))
                true
            } catch (e: Exception) {
                true
            }
        }

        override fun onPageFinished(view: WebView, url: String) {
            view.evaluateJavascript(THEME_WATCHER, null)
        }
    }
}

/** Injected once per page load; mirrors data-theme changes back to native. */
private const val THEME_WATCHER = """
(function () {
  if (window.__m1ThemeHooked) return;
  window.__m1ThemeHooked = true;
  function send() {
    try {
      AndroidTheme.setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    } catch (e) {}
  }
  new MutationObserver(send).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });
  send();
})();
"""
