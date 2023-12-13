import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper } from "ui";

export default function Home({ allProjects }) {
  return (
    <>
      <NextSeo
        title="Projects – Ahmad Taufiq"
        description="A list of all my selected projects"
        openGraph={{
          site_name: "Projects – Ahmad Taufiq",
          title: "Projects – Ahmad Taufiq",
          description:
            "A list of all my selected projects",
        }}
        twitter={{
          handle: "@ahtaufiiq",
          site: "@ahtaufiiq",
          cardType: "summary_large_image",
        }}
      />
      <ContentWrapper width="620px">
        <WorkList allPosts={allProjects} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "highlight",
    "icon",
  ]);

  return {
    props: { allProjects },
  };
}
