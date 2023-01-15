import { SEO } from "../components/Seo";

import Cta1 from "@components/Cta/Cta1";
import History from "@components/about/History";
import Team from "@components/about/Team";
import PageTitle from "@components/PageTitle";
import Philosophy from "@components/about/Philosophy";

import Service1 from "@components/services/Service1";
import Workflow from "@components/services/Workflow";

export default function FAQ() {
  return (
    <>
      <SEO title="Services we offer" />
      <PageTitle title="Services" />
      <Service1/>
      <Workflow/>

      <Cta1 />
    </>
  );
}
