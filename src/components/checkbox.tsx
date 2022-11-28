import React from "react";

function Checkbox({ content, id }: IProp) {
  return (
    <div className="flex  ">
      <input
        type="checkbox"
        className="shrink-0 mt-0.5 border-slate-200 rounded text-slate-600 focus:ring-slate-500"
        id={id}
      />
      <label
        htmlFor={id}
        className="text-sm text-slate-500 ml-3 py-1 w-full cursor-pointer"
      >
        {content}
      </label>
    </div>
  );
}

export default Checkbox;

interface IProp {
  content: string;
  id: string;
}
