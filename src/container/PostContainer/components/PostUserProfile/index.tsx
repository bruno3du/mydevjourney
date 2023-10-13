import Image from "next/image";
import Container from "@/components/Container";

interface PostUserProfileProps {
  name: string;
  github: string;
  image: string;
}

export default function PostUserProfile({
  name,
  github,
  image,
}: PostUserProfileProps) {
  return (
    <Container className="px-5 py-20 xl:px-10 ">
      <section className="flex flex-wrap gap-4">
        <div>
          <div className="h-[230px] w-[290px] max-w-full rounded bg-blue-950 xl:h-[240px]">
            {/* <Image /> */}
          </div>
        </div>
        <div>
          <h3 className="pt-5">{name}</h3>
          <div className="flex space-x-2 text-ellipsis">
            <strong>Github:</strong>
            <a
              href={github}
              target="_blank"
              className="overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {github}
            </a>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </section>
    </Container>
  );
}
