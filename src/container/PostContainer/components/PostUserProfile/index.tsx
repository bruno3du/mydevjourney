import Image from "next/image";
import Container from "~/components/Container";

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
    <Container className="w-[346px] px-10 py-20">
      <section>
        <div>
          <div className="h-[240px] w-[270px] bg-gray-500">
            {/* <Image /> */}
          </div>
        </div>
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
        <div className="mt-7">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </section>
    </Container>
  );
}
