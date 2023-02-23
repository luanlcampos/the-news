import { INews } from "./News";
export type NewsAPIResponse = {
  status: string;
  totalResults: number;
  articles: INews[];
};
