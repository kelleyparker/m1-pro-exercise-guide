# The theme bridge is called from JavaScript, so it must survive shrinking.
-keepclassmembers class com.kp.m1proformguide.MainActivity$ThemeBridge {
    @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface
