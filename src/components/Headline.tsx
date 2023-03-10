import { INews } from "@/types/News";
import { getDateDiffInDays } from "@/utils/getDateDiffInDays";
type Article = {
  article: INews;
};

export default function Headline({ article }: Article) {
  return (
    <>
      <div
        key={self.crypto.randomUUID()}
        className="spotlight fadeIn"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${article.urlToImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="spotlight-container">
          <div className="news-data">
            <span className="date">
              {getDateDiffInDays(article.publishedAt)}{" "}
            </span>
          </div>
          <div className="news">
            <div className="title">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2 className="hover:underline">
                  Dead Space Remake Is Too Scary for Its Own Technical Director
                  - IGN
                </h2>
              </a>
            </div>
            <div className="news-data">
              <span className="author">
                by {article.author?.split(",")[0]}{" "}
              </span>
              <span className="source">at {article.source.name}</span>
            </div>
            <div className="description">
              <span>{article.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
