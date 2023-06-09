import ButtonHamburger from "~/assets/Icons/ButtonHamburger";
import Logo from "../Logo";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (isOpen) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "visible";
  // }, [isOpen]);

  const onOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const onClose = () => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return (
    <header className="h-28 bg-gray-700">
      <div className="container mx-auto flex h-full items-center justify-between gap-12 rounded-md px-5 md:gap-0">
        <button className="md:hidden" type="button" onClick={onOpen}>
          <ButtonHamburger />
        </button>
        <Link href="/#">
          <Logo />
        </Link>
        <nav>
          <ul className="hidden items-center gap-x-9  md:flex">
            <li>
              <Link
                href="/#"
                className="text-md font-semibold text-white no-underline transition hover:text-orange"
              >
                Home
              </Link>
            </li>
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => (!session ? void router.push("/login") : null)}
            >
              {session ? "Logged In" : "Sign in"}
            </button>
          </ul>
        </nav>
      </div>
      <MenuMobile isOpen={isOpen} onClose={onClose} />
    </header>
  );
}
