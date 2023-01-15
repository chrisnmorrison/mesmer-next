import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import RSSIcon from "@assets/svg/rss.svg";

import { Montserrat } from "@next/font/google";
import Head from "next/head";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"],  weight: ['100','200','300','400','500','600','700','800','900'] });

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


