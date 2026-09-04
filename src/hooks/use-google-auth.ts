import { useCallback, useState } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GoogleUser = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
};

export type GoogleAuthState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; user: GoogleUser; idToken: string | null }
  | { status: "cancelled" }
  | { status: "error"; message: string };

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Encapsulates Google Sign-In logic using the Original Google Sign In API.
 *
 * Usage:
 *   const { state, signIn, reset } = useGoogleAuth();
 *
 * Call `GoogleSignin.configure()` once in `_layout.tsx` before using this hook.
 */
export function useGoogleAuth() {
  const [state, setState] = useState<GoogleAuthState>({ status: "idle" });

  const signIn = useCallback(async () => {
    setState({ status: "loading" });

    try {
      // Clear any cached session so Google always prompts the account chooser on Android
      try {
        await GoogleSignin.signOut();
      } catch {
        // Ignore if no active session
      }

      // Ensure Google Play Services are available (Android only; no-op on iOS).
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const response = await GoogleSignin.signIn();

      if (response.type === "cancelled") {
        // User dismissed the account picker — not an error.
        console.log("Google Sign-In: Cancelled by user");
        setState({ status: "cancelled" });
        return;
      }

      // response.type === "success"
      const { user, idToken } = response.data;
      console.log("Google Sign-In Success:", { email: user.email, name: user.name, idToken: idToken ? "present" : "null" });

      setState({
        status: "success",
        user,
        idToken,
      });

      // -----------------------------------------------------------------------
      // TODO: Send `idToken` to your Spring Boot backend for verification.
      //
      //   Example:
      //     const serverResponse = await fetch("https://api.yourserver.com/auth/google", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({ idToken }),
      //     });
      //
      //   After verification, navigate to the authenticated area:
      //     router.replace("/(tabs)/home");
      // -----------------------------------------------------------------------
    } catch (error: any) {
      console.error("Google Sign-In Error:", {
        code: error.code,
        message: error.message,
        error,
      });

      if (error.code === statusCodes.IN_PROGRESS) {
        // Another sign-in is already in progress — silently ignore.
        setState({ status: "idle" });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setState({
          status: "error",
          message: "Google Play Services is not available on this device.",
        });
      } else {
        setState({
          status: "error",
          message: error.message ?? `Sign-in failed (code: ${error.code ?? "unknown"}).`,
        });
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await GoogleSignin.signOut();
    } catch (e) {
      console.error("Error signing out:", e);
    }
    setState({ status: "idle" });
  }, []);

  /** Resets state back to idle (e.g. to clear an error banner). */
  const reset = useCallback(() => setState({ status: "idle" }), []);

  return { state, signIn, signOut, reset };
}
