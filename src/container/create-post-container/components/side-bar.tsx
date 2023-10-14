import { FunctionComponent } from "react";

interface SidebarProps {}

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  return <div className="hidden flex-col space-y-4 sm:flex md:order-2"></div>;
};
