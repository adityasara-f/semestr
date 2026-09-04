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
      // Ensure Google Play Services are available (Android only; no-op on iOS).
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const response = await GoogleSignin.signIn();

      if (response.type === "cancelled") {
        // User dismissed the account picker — not an error.
        setState({ status: "cancelled" });
        return;
      }

      // response.type === "success"
      const { user, idToken } = response.data;

      setState({
        status: "success",
        user: user.user,
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
          message: error.message ?? "An unknown error occurred during sign-in.",
        });
      }
    }
  }, []);

  /** Resets state back to idle (e.g. to clear an error banner). */
  const reset = useCallback(() => setState({ status: "idle" }), []);

  return { state, signIn, reset };
}
