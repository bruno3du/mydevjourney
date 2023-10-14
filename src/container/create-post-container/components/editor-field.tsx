import { Button } from "@/components/ui/button";
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export const EditorField = (props: PropsWithChildren) => {
  return (
    <div className="md:order-1">
      <div className="flex h-full flex-col space-y-4">
        {/* <Textarea
          placeholder="Write a tagline for an ice cream shop"
          className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
        /> */}
        <EditorBlock />
        <div className="flex items-center space-x-2">
          <Button>Submit</Button>
          <Button variant="secondary">
            <span className="sr-only">Show history</span>
            <CounterClockwiseClockIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
