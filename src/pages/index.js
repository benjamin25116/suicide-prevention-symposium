import * as React from "react";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";

import Layout from "../component/Layout";
import HeroBanner from "../component/HeroBanner";
import Presenters from "../component/presenters/Presenters";
import Schedule from "../component/schedule/Schedule";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import Heading from "../component/Heading";
import Acknowledgements from "../component/Acknowledgements";
import { BodyTag, HeadTag } from "../component/AnalyticTags";

import FirstImage from "../images/pexels-meruyert-gonullu-6588933.jpg";
import SecondImage from "../images/alex-ivashenko-RLdcScGQEJ4-unsplash.jpg";
import SplitBanner from "../component/SplitBanner";
import Charges from "../component/Charges";

function IndexPage() {
  return (
    <main>
      <GlobalStyle />
      <Helmet>
        <title>Suicide: The Silent Pandemic</title>
        <meta
          name="description"
          content="Malaysia's First Multidisciplinary Symposium on Suicide Prevention."
        />

        <HeadTag />
      </Helmet>

      <BodyTag />

      <HeroBanner />
      <Layout backgroundColor="#f9f4f1">
        <Heading>Let’s Talk About Suicide Prevention Together</Heading>
        <p>
          As the world battles with Covid-19, another war rages in Malaysia. Our
          nation is fighting against a silent pandemic, the soaring number of
          suicides in the country. In these uncertain times, everyone is at risk
          of suicide, but the situation is most dire among the most vulnerable
          populations of our society: the neglected, the traumatized and the
          abused.
        </p>
        <p>
          Trapped by cultural, political and religious stigmas and prohibitions,
          those at risk are silenced and isolated by shame and blame,
          meaninglessness and hopelessness. In their inner darkness and
          confusion, the stigma of suicide keeps them from reaching out for
          help.
        </p>
        <p>
          One crucial element of suicide prevention is the fact that suicide has
          many faces. Some of these faces are hidden and unacknowledged.
        </p>
        <p>
          Itʼs been said that it takes a village to raise a child. Thereʼs an
          innate desire to help, but so far, weʼve grappled with the problem in
          isolation within our own fields of expertise and thatʼs why we need to
          discuss this together.
        </p>
        <p>
          This symposium is a first attempt at creating space to openly talk
          about our concerns, our hopes and our plans for our people and for the
          generations that are to come. We need to hear, argue, agree and
          disagree, be enlivened and renewed in our vision, and in the spirit of
          mutuality, respect, safety, to trust and hope that together we are
          stronger and have more resources to share with each other. We are not
          better than each other; we are better together.
        </p>
        <p>
          Weʼre bringing together, as a community, experts from various
          disciplines and they include educators, academicians, lawyers,
          doctors, and mental health and social work professionals. Join us as
          we meet and hear the perspectives of social workers, addiction
          counselors, school principals, medical doctors, therapists, teachers
          and clinicians. <em>ALL</em> of us are in this together: to lessen
          suicidal deaths and reduce the despair in our homes, workplaces,
          schools, and communities. Letʼs talk.
        </p>
      </Layout>
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
