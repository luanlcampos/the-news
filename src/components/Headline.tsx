export default function Headline() {
  return (
    <>
      <div
        className="spotlight"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://assets-prd.ignimgs.com/2023/01/23/dead-space-remake-too-scary-1674481345537.png?width=1280') no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div className="spotlight-container">
          <div className="news-data">
            <div className="date">2023-01-23T14:48:04Z</div>
            <div className="author">by Adele Ankers-Range</div>
            <div className="source">at IGN</div>
          </div>
          <div className="news">
            <div className="title">
              <h2>
                Dead Space Remake Is Too Scary for Its Own Technical Director -
                IGN
              </h2>
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
