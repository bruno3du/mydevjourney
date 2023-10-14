import ButtonHamburger from "@/assets/Icons/btn-hamburger";
import Logo from "@/components/ui/logo";
import MenuMobile from "@/components/ui/menu-mobile";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const onOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const onClose = () => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return (
    <header className="h-28">
      <div className="container mx-auto flex h-full items-center justify-between gap-12 rounded-md bg-primary-foreground px-5 md:gap-0">
        <button className="md:hidden" type="button" onClick={onOpen}>
          <ButtonHamburger />
        </button>
        <Link href="/#">
          <Logo size="2xl" />
        </Link>
        <nav>
          <ul className="hidden items-center gap-x-9  md:flex">
            <li>
              <Link
                href="/#"
                className="text-md hover:text-orange font-semibold no-underline transition"
              >
                Home
              </Link>
            </li>
            <Button
              variant="outline"
              onClick={() => (!session ? void router.push("/login") : null)}
            >
              {session ? "Logged In" : "Sign in"}
            </Button>
          </ul>
        </nav>
      </div>
      <MenuMobile isOpen={isOpen} onClose={onClose} />
    </header>
  );
}
