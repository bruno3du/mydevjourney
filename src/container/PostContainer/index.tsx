import Breadcrumb from "~/components/Breadcrumb";

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
    <div className="container mx-auto px-24 py-32">
      <h1 className="mb-10 px-5 text-6xl">Posts</h1>
      <Breadcrumb pageList={routes} />
      <div className="flex gap-12 pt-5">
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
