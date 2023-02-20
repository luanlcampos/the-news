import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Pagination from "@/components/Pagination";
import NewsGrid from "@/components/NewsGrid";
import { useState, useEffect } from "react";
import { INews } from "@/interfaces/News";
import { NewsAPIResponse } from "@/interfaces/NewsAPI";

async function getNews(loc: string, page: number, category: string) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${loc}&page=${page}&category=${category}&pageSize=12&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  if (res.ok) {
    // convert to json and instantiate data to INews[]
    const data = await res.json();

    console.log(data);
    return data as NewsAPIResponse;
  }
}

export default function Home() {
  // react use to fetch data from api
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const [category, setCategory] = useState("technology");

  useEffect(() => {
    getNews("us", page, category)
      .then((data) => {
        setNews(data?.articles || []);
        setNumOfPages(Math.ceil((data?.totalResults || 12) / 12));
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setError(true);
        setLoading(false);
      });
  }, [page, category]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>The News - Your Tech Headline News</title>
      </Head>
      <Header />
      <main className="relative w-full flex flex-col items-center">
        <div className="max-w-screen-xl">
          <Headline article={news[0]} />
          <section className="m-5">
            <NewsGrid news={news} />
            <Pagination
              numOfPages={numOfPages}
              setPage={setPage}
              active={page}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
