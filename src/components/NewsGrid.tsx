import { INews } from "@/types/News";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  news: INews[];
};

export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="news-grid">
      {news.map((article: INews, i: number) => (
        <NewsCard article={article} key={self.crypto.randomUUID()} />
      ))}
    </div>
  );
}
