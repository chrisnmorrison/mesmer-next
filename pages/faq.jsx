import { SEO } from "../components/Seo";

import Cta1 from "@components/Cta/Cta1";
import History from "@components/about/History";
import Team from "@components/about/Team";
import PageTitle from "@components/PageTitle";
import Philosophy from "@components/about/Philosophy";



export default function FAQ() {
  return (
    <>
      <SEO title="FAQs" />
      <PageTitle title="FAQs" />
      <section className="container my-5" id="maincontent">
        <div className="text-center">
          <h2 className="mt-5 mb-5">Frequently Asked Questions</h2>
          <p>Here are some of the most common questions we've been asked.</p>
          <p>
            Please note that before we begin your project, both parties must
            sign our{" "}
            <a href="https://docs.google.com/document/d/1Rn1FFK4E-0x1d8lJ-4EqJz1lFYJfpWRyLb6L1EqseeU/edit?usp=sharing">
              Project Contract
            </a>
            .
          </p>
        </div>
        <section className="container my-5">
          
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                How much does a new website cost?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                Every website is unique, and there isn't a single answer to this
                question. We quote a website design on the needs of an
                individual project, and we consider design complexity, number of
                pages/sections, and other unique business requirements (if
                applicable).
              </p>
              <p className="faq-text">
                As we design for specific business requirements, we can only
                answer this after asking a lot of questions and determining your
                small business needs.
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                How do you determine your quotes?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                We calculate our price using a $75/hour baseline, and use the
                following criteria to determine your quote: initial design and
                planning, number of pages/components, project difficulty, and
                any additional factors that may arise. Our quotes are
                transparent, and we are happy to break down how we determined a
                quote. Don't hesitate to reach out with questions, as a quoted
                price depends on many factors!
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">How/when do I pay?</h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                We require a 50% deposit at the start of the project. For most
                projects, the rest is paid within 30 days upon completion. If
                necessary, we can work with you to set up a schedule that meets
                your needs. We understand that this is a big investment and want
                to help you budget for the expense in whatever way possible.
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                What sets you apart from other designers/developers?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                Many web agencies in North America use WordPress and other
                website builders for simple websites, and unless there is a
                specific reason to, this causes many issues: website bloat, slow
                load times, poor SEO, and high maintenance costs. They quickly
                create a site using a no-code page builder, charge way too much,
                and then charge their clients very high maintenance fees to
                maintain the site. Small business should not need to pay $5000+
                upfront and $1000+ per year to maintain their website, and we
                promise to offer more realistic prices while providing the
                highest quality websites.
              </p>
              <p className="faq-text">
                Our goal is to ensure your website benefits your business, and
                doesn't break your bank account. One example of what we do
                differently: If your website is completely static, we help you
                set up free hosting, and you'll only need to pay the unavoidable
                domain name cost (for standard domain names, typically $15-25
                annually).
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                What tools do you use to create websites?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                We have two tech stacks, depending on the business need:
              </p>
              <ul style={{ textAlign: "center" }}>
                <li>NextJS or GatsbyJS + ReactJS + a suitable headless CMS</li>
                <li>Hugo + a suitable headless CMS</li>
              </ul>
              <p className="faq-text">
                All are modern tools that create incredibly fast, accessible,
                and maintainable sites. However, the technology of choice
                depends on the business needs. These tools are suited for sites
                that do not change often, or sites that do not need a back-end.
                For example, an e-commerce store requires a backend server to
                handle stock, payment, and so on. We only recommend Wordpress or
                other no-code page builders if you are interested in learning
                how to edit your website yourself (without needing to learn how
                to code).
              </p>
              <p className="faq-text">
                If you don't know what any of this means, don't worry. What
                matters is the end result: Your website will help you generate
                business, attend to your customer's questions/needs, and help
                you build your business' brand and image.
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                How do I determine what kind of website I need?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                Typically, this will depend on: How often your website content
                changes, if content needs to be dynamically generated (e.g. a
                blog), if there are products being sold on your site, what kind
                of ways customers interact with your site, and so much more.
              </p>
              <p className="faq-text">
                We will ask a lot of questions to determine all of the features
                that your website should have. Our focus is to build websites
                that only have what they need without any unnecessary bloat,
                which will save you costs in the long run.
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                How much does it cost to maintain a site?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                For a typical small business site, this is the sum of three
                things: domain name, website maintenance, and hosting. A domain
                name is mandatory (e.g. mesmerdesign.ca), and starts at $15-25
                per year. Website maintenance is when there are updates to your
                site, such as adding/removing pages or content, and varies
                depending on the amount of changes. Hosting costs vary greatly,
                and for small businesses, range from $0-50 per month. A static
                site (e.g. no back-end or database) that doesn't change a lot
                can be hosted for free, while a dynamic site with an
                out-of-the-box back-end (e.g. WordPress blog, Shopify online
                store) must be hosted on a paid server, and these range from
                $5-$50 depending on the quality of the server or type of service
                (you get what you pay for).
              </p>
              <p className="faq-text">
                Additional costs may arise for certain online services like
                e-commerce stores. For example, fees per transaction.
              </p>
              <p className="faq-text">
                We'll work with you to ensure that this is all set up properly,
                so that you aren't paying pointless costs for things you don't
                need!
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                Who owns my website and domain name?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                You own everything. We ask that you register your own domain
                name so that you legally own it, and if we set up any hosting
                under our name, it will eventually be transferred to you. After
                the final invoice is settled, we'll provide you with the source
                code.
              </p>
            </div>
          </div>
          <div className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary">
            <div className="position-relative d-flex justify-content-between">
              <h2 className="h4 mx-auto question-title">
                What if I want to maintain my site myself after it is built?
              </h2>
              <div className="top-0 right-0 h-100 d-flex align-items-center my-auto" />
            </div>
          </div>
          <div>
            <div className="faq-card card-body border-0 p-0">
              <p className="faq-text">
                We encourage this! This will help you keep your long-term costs
                low. There is an important consideration, however. We specialize
                in the fastest possibly static sites, and since we code our
                sites from scratch, this is much harder to learn than a website
                builder like Wordpress.
              </p>
              <p className="faq-text">
                This is something we can discuss early on, so that we settle on
                the best solution for you.
              </p>
              <p className="faq-text">
                {" "}
                No matter what, we are just an email away should you need any
                updates.
              </p>
              <p />
            </div>
          </div>
        </section>
        <p className="faq-bottom-text">
          Please don't hesitate to <a href="/contact">reach out to us</a> if you
          have any questions!
        </p>
      </section>

      <Cta1 />
    </>
  );
}
