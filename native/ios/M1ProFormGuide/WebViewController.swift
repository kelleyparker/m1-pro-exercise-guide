//
//  WebViewController.swift
//  M1 Pro Form Guide
//
//  Hosts the bundled single-file guide in a WKWebView. Everything is loaded
//  from the app bundle, so the app never touches the network and works in a
//  garage with no signal. The web layer already handles its own safe-area
//  insets via env(safe-area-inset-*), so the native side deliberately does
//  NOT inset the web view - it just keeps the chrome out of the way.
//

import UIKit
import WebKit

final class WebViewController: UIViewController {

    private var webView: WKWebView!
    /// Mirrors the web app's active theme so the status bar and the window
    /// behind the web view match instead of flashing the opposite colour.
    private var isDarkTheme = true {
        didSet {
            guard isDarkTheme != oldValue else { return }
            applyChrome()
        }
    }

    // Matches --bg in the web app's two themes.
    private static let darkBG = UIColor(red: 0.059, green: 0.071, blue: 0.086, alpha: 1)   // #0f1216
    private static let lightBG = UIColor(red: 0.949, green: 0.957, blue: 0.969, alpha: 1)  // #f2f4f7

    override func viewDidLoad() {
        super.viewDidLoad()
        buildWebView()
        loadGuide()
        applyChrome()
    }

    // MARK: - Setup

    private func buildWebView() {
        let controller = WKUserContentController()
        controller.add(self, name: "theme")
        controller.addUserScript(WKUserScript(source: Self.themeBridgeJS,
                                              injectionTime: .atDocumentEnd,
                                              forMainFrameOnly: true))

        let config = WKWebViewConfiguration()
        config.userContentController = controller
        // Persistent store so localStorage (1RMs, favourites, session) survives relaunch.
        config.websiteDataStore = .default()
        config.allowsInlineMediaPlayback = true
        config.defaultWebpagePreferences.allowsContentJavaScript = true

        webView = WKWebView(frame: .zero, configuration: config)
        webView.translatesAutoresizingMaskIntoConstraints = false
        webView.navigationDelegate = self
        webView.isOpaque = false
        webView.backgroundColor = .clear
        // The app draws its own back button and swipe handling; the system
        // edge-swipe would fight with it.
        webView.allowsBackForwardNavigationGestures = false
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        // Keep pinch-to-zoom on an animation available, per the design brief.
        webView.scrollView.maximumZoomScale = 5.0

        view.addSubview(webView)
        // Pin to the raw edges, not the safe area - the CSS already reserves
        // room for the Dynamic Island and home indicator.
        NSLayoutConstraint.activate([
            webView.topAnchor.constraint(equalTo: view.topAnchor),
            webView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }

    private func loadGuide() {
        guard let url = Bundle.main.url(forResource: "index", withExtension: "html") else {
            showFailure("index.html is missing from the app bundle. In Xcode, confirm it is listed under Target > Build Phases > Copy Bundle Resources.")
            return
        }
        webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
    }

    private func applyChrome() {
        let bg = isDarkTheme ? Self.darkBG : Self.lightBG
        view.backgroundColor = bg
        webView?.scrollView.backgroundColor = bg
        webView?.scrollView.indicatorStyle = isDarkTheme ? .white : .black
        setNeedsStatusBarAppearanceUpdate()
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        isDarkTheme ? .lightContent : .darkContent
    }

    override var prefersHomeIndicatorAutoHidden: Bool { false }

    private func showFailure(_ message: String) {
        let label = UILabel()
        label.text = message
        label.numberOfLines = 0
        label.textAlignment = .center
        label.textColor = .white
        label.font = .systemFont(ofSize: 15)
        label.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(label)
        NSLayoutConstraint.activate([
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            label.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 28),
            label.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -28)
        ])
    }

    /// Watches the <html data-theme> attribute the web app toggles and reports
    /// it back to native. No change to the web app is required.
    private static let themeBridgeJS = """
    (function () {
      function send() {
        try {
          var t = document.documentElement.getAttribute('data-theme') || 'dark';
          window.webkit.messageHandlers.theme.postMessage(t);
        } catch (e) {}
      }
      new MutationObserver(send).observe(document.documentElement, {
        attributes: true, attributeFilter: ['data-theme']
      });
      send();
    })();
    """
}

// MARK: - Theme messages

extension WebViewController: WKScriptMessageHandler {
    func userContentController(_ controller: WKUserContentController,
                               didReceive message: WKScriptMessage) {
        guard message.name == "theme", let theme = message.body as? String else { return }
        isDarkTheme = (theme != "light")
    }
}

// MARK: - Navigation

extension WebViewController: WKNavigationDelegate {

    /// The guide is entirely self-contained. Anything that somehow points at
    /// the open web opens in Safari instead of taking over the app.
    func webView(_ webView: WKWebView,
                 decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        guard let url = navigationAction.request.url else {
            decisionHandler(.allow); return
        }
        if url.isFileURL || url.scheme == "about" {
            decisionHandler(.allow)
        } else if navigationAction.navigationType == .linkActivated {
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
        } else {
            decisionHandler(.cancel)
        }
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        showFailure("Could not display the guide: \(error.localizedDescription)")
    }
}
