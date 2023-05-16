import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-850">{children}</main>
      <Footer />
    </>
  );
}
