import { ThemeProvider } from '@/components/theme-provider';
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
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
      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
      <Footer />
    </>
  );
}
