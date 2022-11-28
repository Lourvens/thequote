import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Checkbox from "../../../components/checkbox";
import { getTags } from "../../../service/quote-api";
import { useForm } from "react-hook-form";

function FilterModal() {
  const { data: tags } = useQuery("tag", getTags);

  return (
    <div
      id="hs-modal-filter"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-48 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-20 opacity-0 transition-all max-w-full w-full sm:hs-overlay-open:mt-10 sm:mt-0 sm:max-w-lg sm:mx-auto px-8">
        <div className="border border-slate-500 bg-white rounded-md p-2">
          <h1 className="capitalize text-slate-500 font-semibold my-2 px-4">
            Filter
          </h1>
          <div className="my-4 bg-slate-100 -mx-2">
            <div className="h-48 relative overflow-y-auto overflow-x-hidden">
              <div className="flex justify-between items-center sticky p-4 bg-slate-300 top-0">
                <h2 className="text-sm text-slate-700  w-40">Tags</h2>
                <div className="flex justify-center items-center w-8 h-6 text-xs text-white bg-slate-500 rounded-full ">
                  5
                </div>
              </div>
              <div className="flex gap-2 px-6 py-2 flex-col">
                <Checkbox content="all" id="tag-all" />
                {tags?.data.map((value) => (
                  <Checkbox content={value.name} id={value._id} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-8 px-4">
            <button
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-slate-500 text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all text-sm"
            >
              Apply Filter
            </button>

            <button
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-slate-400 font-semibold text-slate-500 hover:text-white hover:bg-slate-500 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 transition-all text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
