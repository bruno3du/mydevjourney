import CardListLatestPosts from "~/components/CardListLatestPosts";

export default function HomeContainer() {
  return (
    <div className="pt-14">
      <h1 className="text-center">Latest Post</h1>

      <section className="px-lg-4 max-w-screen-xl mx-auto flex flex-col flex-wrap gap-8 pb-28 pt-4 px-20">
        <CardListLatestPosts />
        <CardListLatestPosts />
        <CardListLatestPosts />
      </section>
    </div>
  );
}
