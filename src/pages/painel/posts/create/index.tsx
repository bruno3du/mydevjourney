import { Metadata } from "next";

import CreatePostContainer from "@/container/create-post-container";
import Layout from "@/layout";

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
};

export default function PlaygroundPage() {
  return (
    <Layout description="Hi" title="Playground">
      <CreatePostContainer />
    </Layout>
  );
}
