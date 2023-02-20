import { INews } from "@/interfaces/News";
import Link from "next/link";
import { getDateDiffInDays } from "@/utils/getDateDiffInDays";

type NewsGridProps = {
  news: INews[];
};

export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="hl">
      {news.map((article: INews, i: number) => (
        <Link href={article.url} passHref key={i} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <div className="news-card">
              <div className="card-image">
                <img src={article.urlToImage} alt={article.title} />
              </div>
              <div className="card-content">
                <div className="card-date font-sans opacity-50">
                  <span>{getDateDiffInDays(article.publishedAt)}</span>
                </div>
                <div className="card-title text-lg font-semibold">
                  <h3>{article.title}</h3>
                </div>
                <div className="card-desc font-serif">
                  <span>{article.description}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
