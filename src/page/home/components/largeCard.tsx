import React, { useEffect, useId } from "react";
import { useQuery } from "react-query";
import { getRandomQuote } from "../../../service/quote-api";
import {
  AiFillCopy,
  AiOutlineShareAlt,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "react-toastify";

function LargeCard() {
  const [, copy] = useCopyToClipboard();
  const id = useId();
  const { isFetching, data } = useQuery(["random-quote", id], getRandomQuote);

  const styles = {
    btn: "text-xs py-1 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-teal-500 bg-opacity-5 text-teal-700 hover:bg-teal-100 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:ring-offset-2 transition-all",
    btnText: "lg:hidden",
    dropDownItem:
      "w-full flex gap-2 items-center py-1 capitalize text-slate-500 py-2 px-4 hover:bg-slate-100 focus:bg-slate-200",
  };

  const twitterShare = () => {
    const url = new URL("https://twitter.com/intent/tweet");
    const content = `${data?.content} \n~${data?.author} \n`;
    url.searchParams.append("text", content);
    url.searchParams.append(
      "hashtags",
      `quotes,${data?.tags.join(",").replace("-", "")}`
    );
    return url.href;
  };
  const socialShare = (value: "fa" | "in") => {
    const link =
      value == "fa"
        ? "https://www.facebook.com/sharer/sharer.php"
        : "https://www.linkedin.com/shareArticle?mini=true&";
    const url = new URL(link);
    url.searchParams.append(
      value == "fa" ? "u" : "url",
      "http://thequote.vercel.app"
    );
    return url.href;
  };
  const copyFromCard = () => {
    let text = `${data?.content} \n ~${data?.author} \n from: the quote-app`;
    copy(text).then(() => {
      toast("copied to clipboard", {
        autoClose: 300,
        closeButton: false,
        hideProgressBar: true,
        position: "bottom-center",
        icon: <AiOutlineCheckCircle className="text-green-500 text-4xl" />,
      });
    });
  };
  if (isFetching) {
    // show this skeleton when card is loading
    return (
      <div className="p-4 flex flex-col animate-pulse h-36 bg-gray-200 w-full lg:w-[32%] rounded-lg">
        <div className="flex w-3/5 gap-2">
          <div className="h-4  bg-gray-400 w-2/5 rounded-lg"></div>
          <div className="h-4  bg-gray-400 w-2/5 rounded-lg"></div>
        </div>
        <div className="h-16 mt-3 mb-2 bg-gray-400 w-11/12 rounded-md"></div>
        <div className="h-6 bg-gray-400 w-2/5 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-start gap-2 flex-shrink-0 w-full lg:w-[32%] max-h-96 bg-white rounded-lg p-4 shadow">
      <div className="flex gap-4">
        {data?.tags.slice(0, 2).map((tag, i) => (
          <span
            key={`tag-${i}`}
            className="font-outlined capitalize py-1.5 text-xs text-teal-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-lg font-outlined font-light lg:font-medium first-letter:capitalize text-gray-700 self-center">
        {data?.content}
      </h1>
      <div className="flex justify-between w-full">
        <span className="text-sm text-ellipsis truncate max-w-[10rem] pl-2 pr-8 py-1 italic bg-slate-800 bg-opacity-5 text-slate-500 rounded-full">
          ~ {data?.author}
        </span>

        <div className="flex gap-2">
          <button type="button" className={styles.btn} onClick={copyFromCard}>
            <AiFillCopy />
            <span className={styles.btnText}>copy</span>
          </button>
          <div className="hs-dropdown relative inline-flex">
            <button
              type="button"
              id={"hs-dropdown-share" + id}
              className={`hs-dropdown-toggle ${styles.btn}`}
            >
              <AiOutlineShareAlt />
              <span className={styles.btnText}>share</span>
            </button>
            <div className="bg-white rounded-lg overflow-hidden hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-36 hidden border border-slate-400 z-10 shadow-md">
              <a
                type="button"
                className={styles.dropDownItem}
                href={twitterShare()}
                target="_blank"
              >
                <CiTwitter />
                twitter
              </a>
              <a
                href={socialShare("in")}
                type="button"
                className={styles.dropDownItem}
                target="_blank"
              >
                <CiLinkedin />
                linkedin
              </a>
              <a
                href={socialShare("fa")}
                target="_blank"
                type="button"
                className={styles.dropDownItem}
              >
                <CiFacebook />
                facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
