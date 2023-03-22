import { ThemeProvider } from "next-themes";
import { Layout } from "./../components/Layout";
import CMS from "netlify-cms-app";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);
// import { Montserrat, EB_Garamond } from "@next/font/google";
// import Head from "next/head";
// const montserrat = Montserrat({ subsets: ["latin"] });

// import { Poppins } from "@next/font/google";
// const poppins = Poppins({ subsets: ["latin"],  weight: ['100','200','300','400','500','600','700','800','900'] });

// const garamond = EB_Garamond({
//   variable: "--display-font",
//   weight: [ 'variable']
// });

import "@assets/scss/style.scss";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
  return (
    <>
      {/* <style jsx global>{
      `
        html {
          font-family: ${montserrat.style.fontFamily};
        }
        h1,h2,h3,h3.sm,h4,h5,h6,h6.sm{
  font-family: ${garamond.style.fontFamily};
}` 
      }</style> */}
      <Layout>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>{" "}
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
