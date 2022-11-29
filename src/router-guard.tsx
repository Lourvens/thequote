import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./firebase/authContext";

function RouterGuard({ element }: IProp) {
  const { isAuthentified } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentified) {
      navigate("/auth");
    }
  }, []);

  return <>{element}</>;
}

export default RouterGuard;

interface IProp {
  element: JSX.Element;
}
