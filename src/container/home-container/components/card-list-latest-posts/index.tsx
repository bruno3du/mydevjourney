import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "next/router";

export default function CardListLatestPosts() {
  const router = useRouter();
  return (
    <div className="min-h-64 flex max-w-6xl flex-col rounded-lg bg-primary-foreground md:h-auto md:w-full lg:flex-row">
      <div className="h-64 w-full flex-shrink-0 rounded-lg bg-muted sm:aspect-video sm:h-auto lg:aspect-auto lg:h-full lg:w-[360px]">
        {/* <Image
          className="h-10 w-10 rounded-full"
          src="{person.imageUrl}"
          alt="person"
        /> */}
      </div>
      <div className="flex max-w-full flex-col justify-between px-4 py-10 pb-6 md:aspect-auto lg:w-full lg:px-10">
        <div>
          <Typography.h3 className="mb-2 text-3xl">My title</Typography.h3>
          <Typography.p>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus,n
          </Typography.p>
        </div>
        <div className="mt-10 flex justify-end">
          <Button onClick={() => void router.push("/post/abc")}>
            Leia mais
          </Button>
        </div>
      </div>
    </div>
  );
}
