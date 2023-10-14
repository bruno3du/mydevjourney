import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="h-28">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Logo textSize="text-2xl" />
      </div>
    </footer>
  );
}
