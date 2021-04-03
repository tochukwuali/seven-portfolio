import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <Hero />
    </div>
  );
}
