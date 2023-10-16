import { api } from "@/utils/api";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { PropsWithChildren, useState } from "react";

const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export const EditorField = (props: PropsWithChildren) => {
  const content = api.postApi.update.useMutation();
  const [slug, setSlug] = useState("third-post");
  const read = api.postApi.getAll.useQuery();

  const onSaveEditor = () => {};

  const handlePost = (data: OutputData) => {
    const slugExists = read.data?.some((ele) => ele.slug === slug);

    if (slugExists || read.isLoading || read.isError || data) return;

    content.mutate({
      content: JSON.stringify(data) || "Insert yout content here",
      slug,
      title: "My first post",
      status: "draft",
      id: "",
    });
  };

  return (
    <div className="md:order-1">
      <div className="flex h-full flex-col space-y-4">
        <EditorBlock
          onChange={async (api, event) => {
            const data = await api.saver.save();
            handlePost(data);
          }}
        />
      </div>
    </div>
  );
};
