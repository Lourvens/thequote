import React from "react";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { AiOutlineSetting, AiFillCopy } from "react-icons/ai";
import { useAuthContext } from "../../../firebase/authContext";

function UserDropdown() {
  const { user } = useAuthContext();
  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-slate-50 text-slate-900 shadow-sm align-middle hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black transition-all text-sm"
      >
        <img
          className="w-8 h-auto rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Maria"
        />
        <span className="text-slate-600 font-medium truncate max-w-[7.5rem]">
          Maria
        </span>
        <BiChevronDown className="transform hs-dropdown-open:hidden text-lg text-gray-600" />
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <Item icon={<AiFillCopy />} name="new quotes" />
        <Item icon={<AiOutlineSetting />} name="acounts settings" />
        <Item icon={<BiLogOut />} name="log out" />
      </div>
    </div>
  );
}

export default UserDropdown;

interface ItemProps {
  icon: JSX.Element;
  name: string;
}
function Item(props: ItemProps) {
  return (
    <a
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-black capitalize hover:bg-slate-200 focus:ring-2 focus:ring-slate-500"
      href="#"
    >
      {props.icon}
      <span>{props.name}</span>
    </a>
  );
}
