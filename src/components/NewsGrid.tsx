import { INews } from "@/interfaces/News";
import Link from "next/link";

type NewsGridProps = {
  news: INews[];
};

export default function NewsGrid(props: NewsGridProps) {
  return (
    <div className="hl">
      {props.news.map((article: INews, i: number) => (
        <Link href={article.url} passHref key={i} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <div className="news-card">
              <div className="card-image">
                <img src={article.urlToImage} alt={article.title} />
              </div>
              <div className="card-content">
                <div className="card-date font-sans opacity-50">
                  <span>{article.publishedAt}</span>
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
