import Head from "next/head";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import EmailConvert from "../components/EmailConvert";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <Hero />
      <Partners />
      <EmailConvert />
      {/* <Project /> */}
    </div>
  );
}
