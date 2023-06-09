import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import SearchTermAdder from "@/components/SearchTermAdder";
import { ResponsiveBar } from "@nivo/bar";
import ReactWordcloud from "react-wordcloud";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Framoverlent</title>
        <meta
          name="description"
          content="Framoverlent er en app som visualiserer søketermer og hvor populære de er i Finn.no-annonser for utviklere."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-matrix">
          Framoverlent er en fantastisk app som kommer til deg snart...
        </div>
        <SearchTermAdder />
      </div>
    </>
  );
}
