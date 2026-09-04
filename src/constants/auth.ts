/**
 * Google OAuth Web Client ID.
 *
 * This is the "Web application" OAuth 2.0 client ID from Google Cloud Console.
 * It is NOT a secret — it is embedded in the app bundle by the native SDK.
 *
 * ⚠️  Use the WEB APPLICATION client ID here, NOT the Android client ID.
 *     Using the Android client ID will cause a silent DEVELOPER_ERROR (code 10).
 *
 * Where to find it:
 *   https://console.cloud.google.com/apis/credentials
 *   → OAuth 2.0 Client IDs → Type: "Web application"
 *
 * Format: "XXXXXXXXXX-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
 */
export const GOOGLE_WEB_CLIENT_ID = "67426507044-lf9pv1k670k0ui10smnqvt1k7fa2ej79.apps.googleusercontent.com";
