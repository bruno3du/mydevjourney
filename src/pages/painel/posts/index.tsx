import { Typography } from "@/components/ui/typography";
import Layout from "@/layout";
import { FunctionComponent } from "react";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <Layout title="POSTS | PAINEL" description="Painel de posts">
      <Typography.h1>WELCOME</Typography.h1>
    </Layout>
  );
};

export default Posts;
