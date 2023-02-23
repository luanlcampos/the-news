import { INews } from "@/interfaces/News";
import { getDateDiffInDays } from "@/utils/getDateDiffInDays";
import Link from "next/link";
import SeeMoreSVG from "./SeeMoreSVG";

type PropType = {
  article: INews;
};

export default function NewsCard({ article }: PropType) {
  const urlToImage =
    article.urlToImage ??
    "http://via.placeholder.com/298x150/666666/FFFFFF/?text=The News";
  return (
    <Link
      href={article.url}
      passHref
      key={self.crypto.randomUUID()}
      legacyBehavior
    >
      <a target="_blank" rel="noopener noreferrer">
        <div className="news-card fadeIn">
          <div className="card-overlay">
            <SeeMoreSVG className="w-10 h-10" />
          </div>
          <div className="card-image">
            <img src={urlToImage} alt={article.title} />
          </div>
          <div className="card-content">
            <div className="card-date text-sm opacity-50 z-10">
              <span>{getDateDiffInDays(article.publishedAt)}</span>
            </div>
            <div className="card-date text-[#0D160B]">
              <span>
                {article.author?.split(",")[0]} at {article.source.name}
              </span>
            </div>
            <div className="card-title text-lg font-semibold">
              <h3>{article.title}</h3>
            </div>

            <div className="card-desc">
              <span>{article.description}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
