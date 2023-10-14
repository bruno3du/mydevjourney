import { FunctionComponent } from "react";
import { models, types } from "../data/model";
import { ModelSelector } from "./model-selector";

interface SidebarProps {}

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="hidden flex-col space-y-4 sm:flex md:order-2">
      <ModelSelector types={types} models={models} />
    </div>
  );
};
