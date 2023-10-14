import Container from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Github, Linkedin } from "lucide-react";

interface PostUserProfileProps {
  name: string;
  github: string;
  image: string;
  linkedin: string;
}

export default function PostUserProfile({
  name,
  github,
  linkedin,
  image,
}: PostUserProfileProps) {
  return (
    <Container className="px-5 py-20 xl:px-10 ">
      <section className="flex flex-wrap gap-4">
        <div>
          <div className="aspect-square h-[250px] w-[340px] max-w-full rounded bg-primary-foreground xl:h-[240px]">
            {/* <Image /> */}
          </div>
        </div>
        <div className="max-w-[340px]">
          <Typography.h3 className="pb-3 pt-5">{name}</Typography.h3>
          <div className="mb-3 flex space-x-2 text-ellipsis ">
            <Github />
            <a
              href={github}
              target="_blank"
              className="max-w-[340px] overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground underline underline-offset-2"
            >
              {github}
            </a>
          </div>

          <div className="flex space-x-2 text-ellipsis">
            <Linkedin />
            <a
              href={linkedin}
              target="_blank"
              className="max-w-[340px] overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground underline underline-offset-2"
            >
              {linkedin}
            </a>
          </div>
          <Typography.p className="max-w-[340px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Typography.p>
        </div>
      </section>
    </Container>
  );
}
