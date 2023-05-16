import Logo from "../Logo";

export default function Header() {
  return (
    <header className="h-28 bg-gray-800">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Logo size="4xl" />
        <nav>
          <ul className="flex items-center gap-x-9">
            <li>
              <a
                href="#"
                className="text-md font-semibold text-white no-underline transition hover:text-orange"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md font-semibold text-white no-underline transition hover:text-orange"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
