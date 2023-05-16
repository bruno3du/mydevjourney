import Image from "next/image";
import Button from "../Button";
import { FiArrowRightCircle } from "react-icons/fi";

export default function CardListLatestPosts() {
  return (
    <div className="flex h-64 w-full rounded-lg bg-gray-800">
      <div className="h-full w-96 flex-shrink-0 rounded-lg bg-black">
        {/* <Image
          className="h-10 w-10 rounded-full"
          src="{person.imageUrl}"
          alt="person"
        /> */}
      </div>
      <div className="flex flex-col justify-between px-10 py-10 pb-6">
        <div>
          <h3 className="mb-2 text-3xl">My title</h3>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus,n
          </p>
        </div>
        <div className="flex justify-end">
          <Button iconRight={<FiArrowRightCircle />}>Leia mais</Button>
        </div>
      </div>
    </div>
  );
}
