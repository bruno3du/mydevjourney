import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/layout";
import HomeContainer from "~/container/HomeContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My DevJourney</title>
        <meta name="description" content="My blog your content" />
      </Head>
      <Layout>
        <HomeContainer />
      </Layout>
    </>
  );
};

export default Home;
