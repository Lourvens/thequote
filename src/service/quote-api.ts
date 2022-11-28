import axios from "axios";

const quoteApi = axios.create({
  baseURL: "https://api.quotable.io",
});

export async function getRandomQuote() {
  const { data } = await quoteApi.get<IQuoteResponse>("/random", {
    params: {
      minLength: 75,
      maxLength: 105,
    },
  });
  return data;
}

export async function getTags() {
  return quoteApi.get<ITagResponse>("tags");
}

interface IQuoteResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: string;
}

type ITagResponse = Array<{
  _id: string;
  name: string;
}>;
