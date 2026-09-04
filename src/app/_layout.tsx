import { Stack } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GOOGLE_WEB_CLIENT_ID } from "@/constants/auth";

// Configure Google Sign-In once at app startup, before any screen renders.
// offlineAccess can be enabled later when the Spring Boot backend is ready to
// exchange the auth code for a refresh token.
GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}