import Link from "next/link";
import { FiX } from "react-icons/fi";
import Drawer from "./components/Drawer";
import Overlay from "./components/Overlay";

interface MenuMobileProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
}

const routes = [
  {
    name: "Home",
    href: "/#",
  },
];

export default function MenuMobile({ isOpen, onClose }: MenuMobileProps) {
  return (
    <>
      <Drawer className={`${isOpen ? "left-0" : "-left-[120%]"} px-6 pt-5`}>
        <FiX fill="white" fontSize="50px" onClick={onClose} />

        <div className="flex h-full flex-col justify-between">
          <div className="mt-20 flex flex-col gap-y-5">
            <nav>
              <ul className="flex flex-col gap-y-7">
                {routes.map((route) => (
                  <li key={route.name}>
                    <Link
                      href={route.href}
                      onClick={onClose}
                      className="font-heading flex h-32 w-full items-center justify-center text-3xl font-bold"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Drawer>
      <Overlay className={`${isOpen ? "block" : "hidden"}`} onClick={onClose} />
    </>
  );
}
