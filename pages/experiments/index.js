import {useEffect, useState} from 'react';
import Link from "next/link"
import { ArrowIcon } from "lib/icons";
import classnames from "classnames";
import {NextSeo} from "next-seo";
import { ContentWrapper, Button } from "ui";
import { getAllExperiments } from 'pages/api/experiments';
import ExperimentList from 'components/experimentList';
export default function Experiments({allExperiments}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 100)
  }, [])

  const LIST = [
    {
      title: "Splash Screen",
      url: "/experiments/splash-screen",
      description: "Splash Screen implementation on Web using Tailwind",
    },
    {
      title: "Modal",
      url: "/experiments/modal",
      description: "A very basic modal component in React",
    },
    // {
    //   title: "Coming Soon",
    //   url: "/experiments",
    //   description: "There's always something cooking in here, stay tuned!",
    //   disabled: true
    // },
  ];

  return     <>
  <NextSeo
    title="Experiments – Ahmad Taufiq"
    description="A list of all my experiments"
    openGraph={{
      site_name: "Experiments – Ahmad Taufiq",
      title: "Experiments – Ahmad Taufiq",
      description:
        "A list of all my experiments",
    }}
    twitter={{
      handle: "@ahtaufiiq",
      site: "@ahtaufiiq",
      cardType: "summary_large_image",
    }}
  />
  <ContentWrapper width="620px">
    <ExperimentList allExperiments={allExperiments} />
  </ContentWrapper>
</>
}
export async function getStaticProps() {

  const allExperiments = getAllExperiments([
    "title",
    "date",
    "slug",
    "tech",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "highlight",
    "active",
    "tagline",
    "web",
    "ios",
    "changelog",
  ]);
  
  return {
    props: {
      allExperiments: allExperiments
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((left, right) =>
          left.hasOwnProperty("active")
            ? -1
            : right.hasOwnProperty("active")
            ? 1
            : 0
        ),
    },
  };
}