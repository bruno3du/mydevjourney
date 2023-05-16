import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="h-28 bg-gray-800">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Logo size="2xl" />
      </div>
    </footer>
  );
}
