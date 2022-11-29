import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firebase_auth } from "./firebase/clientApp";
import authContext, { AuthConfig, initialState } from "./firebase/authContext";

import AuthPage from "./page/auth";
import HomePage from "./page/home";
import Nomatch from "./page/nomatch";
import RouterGuard from "./router-guard";

function App() {
  const [authState, setAuth] = useState<AuthConfig>(initialState);

  const loginAsUnknownUsr = () => {
    setAuth({ isAuthentified: true, user: null });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, (currentuser) => {
      if (currentuser) {
        setAuth({ isAuthentified: true, user: currentuser });
      } else {
        setAuth(initialState);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <authContext.Provider value={authState}>
        <BrowserRouter>
          <Routes>
            <Route index element={<RouterGuard element={<HomePage />} />} />
            <Route
              path="/auth"
              element={<AuthPage onSkip={loginAsUnknownUsr} />}
            />
            <Route path="*" element={<Nomatch />} />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </div>
  );
}

export default App;
