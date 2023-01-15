import { ThemeProvider } from "next-themes";
import { Layout } from "./../components/Layout";


import "@assets/scss/style.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      {" "}
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
