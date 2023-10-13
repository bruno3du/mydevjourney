import { TypographyH1 } from '@/components/ui/typography';
import CardListLatestPosts from "./components/CardListLatestPosts";

export default function HomeContainer() {
  return (
    <div className="pt-14">
      <TypographyH1 className="text-center">Latest Post</TypographyH1>

      <section className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-8 px-3 pb-28 pt-4 md:px-10 lg:justify-center lg:px-20">
        <CardListLatestPosts />
        <CardListLatestPosts />
        <CardListLatestPosts />
      </section>
    </div>
  );
}
