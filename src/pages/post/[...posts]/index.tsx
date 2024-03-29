import PostContainer from "@/container/post-container";
import Layout from "@/layout";

export default function Posts() {
  return (
    <Layout
      title="Posts | My dev Journey"
      description="See all latest tech posts you should now"
    >
      <PostContainer />
    </Layout>
  );
}
