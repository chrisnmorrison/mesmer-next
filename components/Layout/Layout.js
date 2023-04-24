import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

import { Montserrat, Merriweather, Source_Sans_Pro } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export function Layout({ children }) {
  return (
    <>
      <Script src="/js/scripts.js" />
      <div className={montserrat.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </div>
    </>
  );
}
