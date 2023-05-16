import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Karma } from "next/font/google";

import { api } from "~/utils/api";

import "../styles/globals.css";

const karma = Karma({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
  variable: "--karma-font",
});



const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${karma.variable}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
