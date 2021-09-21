import * as React from "react";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";

import HeroBanner from "../component/HeroBanner";
import SplitBanner from "../component/SplitBanner";
import MainCopy from "../component/MainCopy";
import Presenters from "../component/presenters/Presenters";
import Schedule from "../component/schedule/Schedule";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import Acknowledgements from "../component/Acknowledgements";
import FirstImage from "../images/pexels-meruyert-gonullu-6588933.jpg";
import SecondImage from "../images/alex-ivashenko-RLdcScGQEJ4-unsplash.jpg";
import Charges from "../component/Charges";

function IndexPage() {
  return (
    <main>
      <GlobalStyle />
      <Helmet>
        <title>Suicide: The Silent Pandemic</title>

        {/* og:url, og:type, og:title, og:image, og:description, fb:app_id */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HXGRMMZXNP"
        ></script> */}
      </Helmet>

      <noscript>
        <iframe
          title="google tag manager"
          src="https://www.googletagmanager.com/ns.html?id=GTM-W736F9X"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <HeroBanner />
      <MainCopy />
      <SplitBanner
        src={FirstImage}
        heading="Who Should Attend"
        body={[
          "Anyone who seeks to stand up and acknowledge our responsibility in perpetuating the stigma and silence of suicide.",
          "Anyone who is concerned about the increasing number of suicides and suicide attempts in the country and wants to help do something to prevent suicide.",
        ]}
      />
      <SplitBanner
        src={SecondImage}
        heading="Why Attend"
        body="Because preventing suicide is everyone’s responsibility. You may be able to save a life if you’re more informed about the many faces of suicide. Come be a part of something that can literally make a life or death difference."
      />
      <Charges />
      <Schedule />
      <Presenters />
      <Contact />
      <Acknowledgements />
      <hr />
      <Footer />
    </main>
  );
}

export default IndexPage;
