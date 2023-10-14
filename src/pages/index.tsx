import { type NextPage } from "next";
import Layout from "@/layout";
import HomeContainer from "@/container/home-container";

const Home: NextPage = () => {
  return (
    <Layout title="My dev Journey" description="Sua pagina de noticias tech">
      <HomeContainer />
    </Layout>
  );
};

export default Home;
