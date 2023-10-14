import { Typography } from "@/components/ui/typography";
import CardListLatestPosts from "./components/card-list-latest-posts";

export default function HomeContainer() {
  return (
    <div className="mx-auto w-[1440px] max-w-full px-4 py-32 sm:px-10 lg:px-24">
      <Typography.h1 className="mb-10">Latest Post</Typography.h1>

      <section className="flex w-full flex-wrap gap-8 pb-28 pt-4">
        <CardListLatestPosts />
        <CardListLatestPosts />
        <CardListLatestPosts />
      </section>
    </div>
  );
}
