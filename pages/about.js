import { SEO } from "../components/Seo";

import Cta1 from "@components/Cta/Cta1";
import History from "@components/about/History";
import Team from "@components/about/Team";
import PageTitle from "@components/PageTitle";
import Philosophy from "@components/about/Philosophy";

export default function About() {
  return (
    <>
      <SEO title="All posts" />
      <PageTitle title="Frequently Asked Questions" />
      <History />
      <Team />
      <Philosophy />
      <Cta1 />
    </>
  );
}
