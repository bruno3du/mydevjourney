import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

interface ILayout {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: ILayout) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <main>{children}</main>
      </ThemeProvider>
      <Footer />
    </>
  );
}
