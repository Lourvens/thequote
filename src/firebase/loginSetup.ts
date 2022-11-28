import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  AuthProvider,
  FacebookAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { firebase_auth } from "./clientApp";

type ProviderOption = "google" | "twitter" | "facebook";

const providers: Record<ProviderOption, AuthProvider> = {
  google: new GoogleAuthProvider(),
  twitter: new TwitterAuthProvider(),
  facebook: new FacebookAuthProvider(),
};

const useLogin = () => {
  const signInMethod = isMobile ? signInWithRedirect : signInWithPopup;
  const navigate = useNavigate();

  return async (method: ProviderOption) => {
    try {
      await signInMethod(firebase_auth, providers[method]);
      navigate("/");
    } catch {}
  };
};

export default useLogin;
