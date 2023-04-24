import { ThemeProvider } from "next-themes";
import { Layout } from "./../components/Layout";
import { Montserrat, Merriweather, Source_Sans_Pro } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

import "@assets/scss/style.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <style jsx global>{
      `
       .blog-single-content{
        font-family: ${sourceSansPro.style.fontFamily};
       }
      ` 
      }</style>
    <Layout >
      
      {" "}
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
    </>
  );
}
