import React from "react";
import UserDropdown from "./components/userDropdown";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-medium text-2xl">The Quote</h1>
      <UserDropdown />
    </div>
  );
}

export default Header;
