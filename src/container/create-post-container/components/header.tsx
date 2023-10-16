import { Typography } from "@/components/ui/typography";
import { presets } from "../data/presets";
import { PresetActions } from "./preset-actions";
import { PresetSave } from "./preset-save";
import { PresetSelector } from "./preset-selector";
import { PresetShare } from "./preset-share";
import { PreviewPost } from "./preview-post";

export default function Header() {
  return (
    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <Typography.h2 className="w-[120px] text-lg font-semibold">
        Create Post
      </Typography.h2>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <PresetSelector presets={presets} />
        <PresetSave />
        <div className="space-x-2 md:flex">
          <PreviewPost />
          <PresetShare />
        </div>
        <PresetActions />
      </div>
    </div>
  );
}
