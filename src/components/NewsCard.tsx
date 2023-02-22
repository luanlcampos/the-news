import { INews } from "@/interfaces/News";
import { getDateDiffInDays } from "@/utils/getDateDiffInDays";
import Link from "next/link";

type PropType = {
  article: INews;
};

export default function NewsCard({ article }: PropType) {
  return (
    <Link
      href={article.url}
      passHref
      key={self.crypto.randomUUID()}
      legacyBehavior
    >
      <a target="_blank" rel="noopener noreferrer">
        <div className="news-card">
          <div className="card-image">
            <img
              src={
                article.urlToImage
                  ? article.urlToImage
                  : "http://via.placeholder.com/298x150/666666/FFFFFF/?text=The News"
              }
              alt={article.title}
            />
          </div>
          <div className="card-content">
            <div className="card-date font-sans text-sm opacity-50">
              <span>{getDateDiffInDays(article.publishedAt)}</span>
            </div>
            <div className="card-date font-sans text-[#0D160B]">
              <span>
                {article.author?.split(",")[0]} at {article.source.name}
              </span>
            </div>
            <div className="card-title text-lg font-semibold hover:underline">
              <h3>{article.title}</h3>
            </div>

            <div className="card-desc font-serif overflow-hidden">
              <span>{article.description}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
