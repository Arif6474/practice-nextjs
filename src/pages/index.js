import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title> Home page</title>
      </Head>
      HomePage
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
