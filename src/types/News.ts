// interface for news
// for the following json
/*
"source": {
                "id": null,
                "name": "ESPN.co.uk"
            },
            "author": null,
            "title": "Ricky Stenhouse Jr. wins first Daytona 500 after record 212 laps - ESPN.co.uk",
            "description": "Ricky Stenhouse Jr. won the Daytona 500 in double overtime and under caution Sunday night in the longest running of \"The Great American Race.''",
            "url": "https://www.espn.co.uk/racing/nascar/story/_/id/35698155/ricky-stenhouse-jr-wins-daytona-500-double-over",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0220%2Fr1133932_1296x729_16%2D9.jpg",
            "publishedAt": "2023-02-20T00:11:03Z",
            "content": "DAYTONA BEACH, Fla. -- Ricky Stenhouse Jr. won the Daytona 500 in double overtime and under caution Sunday night in the longest running of \"The Great American Race.''\r\nThe two overtimes pushed the 65… [+4447 chars]"
*/
export type INews = {
  source: {
    id: string | null;
    name: string;
  };

  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
