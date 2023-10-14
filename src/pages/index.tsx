import HomeContainer from "@/container/home-container";
import Layout from "@/layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout
      title="Bruno Eduardo - DEV FullStack"
      description="Desenvolvedor FullStack"
    >
      <HomeContainer />
    </Layout>
  );
};

export default Home;
