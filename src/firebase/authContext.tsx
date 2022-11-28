import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export interface AuthConfig {
  isAuthentified: boolean;
  user: User | null;
}

export const initialState: AuthConfig = {
  isAuthentified: false,
  user: null,
};

const authContext = createContext<AuthConfig>(initialState);

export const useAuthContext = () => {
  return useContext(authContext);
};

export default authContext;
