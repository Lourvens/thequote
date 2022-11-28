import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./firebase/authContext";
import { firebase_auth } from "./firebase/clientApp";

function RouterGuard({ element }: IProp) {
  const { isAuthentified } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthentified);
    if (!isAuthentified) {
      // navigate("/auth");
    }
  }, []);
  return <>{element}</>;
}

export default RouterGuard;

interface IProp {
  element: JSX.Element;
}
