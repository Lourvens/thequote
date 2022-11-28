import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

import cover from "../assets/cover_auth.jpg";
import useLogin from "../firebase/loginSetup";
import { getRedirectResult } from "firebase/auth";
import { firebase_auth } from "../firebase/clientApp";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const handleLogin = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getRedirectResult(firebase_auth);
      if (res) navigate("/");
    })();
  }, []);

  return (
    <main className="h-[100vh] relative">
      <div className="h-full w-full absolute">
        <img src={cover} alt="" className="w-full h-full object-cover" />
        <div
          className="fixed w-full h-full top-0 left-0"
          style={{
            background:
              "linear-gradient(var(--cover-gradient-from), #9e0a76 0%, #db5c00b7 42%, #db1a0040 69%, #db1a0030 100%)",
          }}
        ></div>
      </div>
      <div className="absolute">
        <div className="mt-24 lg:mt-10 mx-8 max-w-[350px]">
          <h1 className="outline-header text-2xl uppercase">make me up </h1>
          <div className="my-12 font-medium text-xl tracking-wider text-orange-100">
            Get inspired, discover new motivational quotes everyday with the
            best creator over the all times. Stay motivated with us.
          </div>
          <div className="flex flex-col gap-y-4">
            <button
              type="button"
              className="btn__icon rounded-full"
              onClick={() => {
                handleLogin("google");
              }}
            >
              <FcGoogle className="w-6 h-auto" />
              Signup with google
            </button>
            <div className="text-center text-white">or connect with</div>
            <div className="flex justify-between">
              <button
                type="button"
                className="btn__icon rounded-full focus:ring-[#3b5998]"
              >
                <MdFacebook className="w-6 h-auto" color="#3b5998" />
                with facebook
              </button>

              <button
                type="button"
                className="btn__icon rounded-full focus:ring-[#00acee]"
              >
                <AiFillTwitterCircle className="w-6 h-auto" color="#00acee" />
                with twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthPage;
