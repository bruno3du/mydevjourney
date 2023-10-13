import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from '@/components/ThemeProvider';

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
