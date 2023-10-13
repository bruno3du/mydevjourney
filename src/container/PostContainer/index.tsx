import Breadcrumb from "@/components/Breadcrumb";

import Article from "./components/Article";
import PostUserProfile from "./components/PostUserProfile";
import { TypographyH1 } from '@/components/ui/typography';

const routes = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];

export default function PostContainer() {
  return (
    <div className="mx-auto w-[1440px] max-w-full px-4 py-32 sm:px-10 lg:px-24 ">
      <TypographyH1 className="mb-10 text-6xl">Posts</TypographyH1>
      <Breadcrumb pageList={routes} />
      <div className="flex gap-12 pt-5 max-[1120px]:flex-col">
        <Article />
        <PostUserProfile
          github="https://github.com/bruno3du"
          image=""
          name="Bruno Eduardo"
        />
      </div>
    </div>
  );
}
