import Breadcrumb from "@/components/ui/breadcrumb";

import { Typography } from "@/components/ui/typography";
import Article from "./components/Article";
import PostUserProfile from "./components/PostUserProfile";

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
      <Typography.h2 className="mb-10 w-fit border-b-0 text-6xl">
        Posts Name
      </Typography.h2>
      <Breadcrumb pageList={routes} />
      <div className="flex gap-12 pt-5 max-[1120px]:flex-col">
        <Article />
        <PostUserProfile
          github="https://github.com/bruno3du"
          linkedin="https://www.linkedin.com/in/bruno-eduardo-alves/"
          image=""
          name="Bruno Eduardo"
        />
      </div>
    </div>
  );
}
