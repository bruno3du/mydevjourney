import { FunctionComponent } from "react";

import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { CodeViewer } from "./components/code-viewer";
import { EditorField } from "./components/editor-field";
import { PresetActions } from "./components/preset-actions";
import { PresetSave } from "./components/preset-save";
import { PresetSelector } from "./components/preset-selector";
import { PresetShare } from "./components/preset-share";
import { Sidebar } from "./components/side-bar";
import { presets } from "./data/presets";

const CreatePostContainer: FunctionComponent = () => {
  return (
    <div className="mt-14 hidden h-full flex-col md:flex">
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <Typography.h2 className="w-fit whitespace-nowrap text-lg font-semibold ">
          Create Post
        </Typography.h2>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          <PresetSelector presets={presets} />
          <PresetSave />
          <div className="hidden space-x-2 md:flex">
            <CodeViewer />
            <PresetShare />
          </div>
          <PresetActions />
        </div>
      </div>
      <Separator />

      <div className="container h-full py-6">
        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
          <Sidebar />
          <EditorField />
        </div>
      </div>
    </div>
  );
};

export default CreatePostContainer;
