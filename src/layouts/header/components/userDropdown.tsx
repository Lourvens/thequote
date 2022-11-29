import React from "react";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { AiOutlineSetting, AiFillCopy, AiOutlineUser } from "react-icons/ai";
import { useAuthContext } from "../../../firebase/authContext";
import { signOut } from "firebase/auth";
import { firebase_auth } from "../../../firebase/clientApp";
import { useNavigate } from "react-router-dom";

function UserDropdown() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-slate-50 text-slate-900 shadow-sm align-middle hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black transition-all text-sm"
      >
        {user?.photoURL ? (
          <img className="w-8 h-auto rounded-full" src={user.photoURL} />
        ) : (
          <AiOutlineUser className="w-6 h-auto rounded-full" />
        )}
        <span className="text-slate-600 font-medium truncate max-w-[7.5rem]">
          {user?.displayName || "unkown"}
        </span>
        <BiChevronDown className="transform hs-dropdown-open:hidden text-lg text-gray-600" />
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <Item icon={<AiFillCopy />} name="new quotes" />
        <Item icon={<AiOutlineSetting />} name="acounts settings" />
        <Item
          icon={<BiLogOut />}
          name="log out"
          onClick={() => {
            signOut(firebase_auth).then(() => {
              navigate("/auth");
            });
          }}
        />
      </div>
    </div>
  );
}

export default UserDropdown;

interface ItemProps {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
}
function Item(props: ItemProps) {
  return (
    <a
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-black capitalize hover:bg-slate-200 focus:ring-2 focus:ring-slate-500"
      href="#"
      onClick={props.onClick}
    >
      {props.icon}
      <span>{props.name}</span>
    </a>
  );
}
