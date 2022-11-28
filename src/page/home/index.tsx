import React, { useState } from "react";
import Header from "../../layouts/header";
import LargeCard from "./components/largeCard";
import { ToastContainer } from "react-toastify";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import FilterModal from "./components/filterModal";

function HomePage() {
  const [cardsKey, setCardKey] = useState(1);
  const reloadCard = () => {
    setCardKey(Date.now());
  };
  return (
    <div className="mx-auto max-w-5xl relative p-6 lg:py-4 lg:px-8">
      <Header />
      <div className="mt-24">
        <div className="flex justify-between items-center">
          <h1 className="flex gap-2 text-lg capitalize">
            quotes of the day <RiDoubleQuotesR />
          </h1>
          <button
            className="text-slate-200 border-2 border-slate-300 bg-slate-500 rounded-full p-2 "
            data-hs-overlay="#hs-modal-filter"
          >
            <GoSettings size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-6 my-4 overflow-hidden pb-4 justify-between">
        <React.Fragment key={cardsKey}>
          {Array.from(Array(3)).map((v, i) => (
            <LargeCard key={`card-quote-${i}`} />
          ))}
        </React.Fragment>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-slate-100 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-500 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm"
          onClick={reloadCard}
        >
          <TfiReload />
          <span>Reload for more</span>
        </button>
      </div>
      <FilterModal />
      <ToastContainer limit={1} />
    </div>
  );
}

export default HomePage;
