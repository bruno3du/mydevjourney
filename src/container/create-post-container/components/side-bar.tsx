import { FunctionComponent } from "react";
import { StatusPost } from "./status-post";

interface SidebarProps {}

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="hidden flex-col space-y-4 sm:flex md:order-2">
      <StatusPost />
    </div>
  );
};
