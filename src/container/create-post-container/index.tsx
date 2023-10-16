import { FunctionComponent } from "react";

import { Separator } from "@/components/ui/separator";
import { EditorField } from "./components/editor-field";
import Header from "./components/header";
import { Sidebar } from "./components/side-bar";

const CreatePostContainer: FunctionComponent = () => {
  return (
    <div className="container mt-14 h-full min-h-screen flex-col md:flex">
      <Header />
      <Separator />
      <div className="container h-full py-6">
        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_300px]">
          <Sidebar />
          <EditorField />
        </div>
      </div>
    </div>
  );
};

export default CreatePostContainer;
