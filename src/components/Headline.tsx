import { INews } from "@/interfaces/News";
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
              {getDateDiffInDays(article.publishedAt)}
            </span>
            <span className="author">by {article.author}</span>
            <span className="source">at {article.source.name}</span>
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
            <div className="description">
              <span>
                Dead Space remake{`'`}s technical director has admitted that he
                struggles to play the game outside of daylight hours because he
                finds it too scary.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
