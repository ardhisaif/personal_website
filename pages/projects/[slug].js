import { useRouter } from "next/router";
import { WorkList, WorkContent } from "components";
import { NextSeo } from "next-seo";
import { getAllProjects, getPostBySlug } from "pages/api/projects";
import md2html from "lib/md2html";
import { ContentWrapper } from "ui";

export default function Post({ allPosts, post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full md:pt-5">
      <NextSeo
        title={`${post.title} - Ahmad Taufiq`}
        description={
          post.content.slice(0, 200)?.replace(/<[^>]*>?/gm, "") || ""
        }
        openGraph={{
          site_name: `${post.title} - Ahmad Taufiq`,
          title: `${post.title} - Ahmad Taufiq`,
          images: [
            {
              url: post.highlight,
              alt: post.title,
            },
          ],
          description:
            post.content.slice(0, 200)?.replace(/<[^>]*>?/gm, "") || "",
        }}
        
        twitter={{
          handle: "@ahtaufiiq",
          site: "@ahtaufiiq",
          cardType: "summary_large_image",
        }}
      />
      <ContentWrapper width="620px">
        <WorkContent post={post} />
      </ContentWrapper>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "link",
    "highlight",
    "icon",
  ]);

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "image",
    "content",
    "excerpt",
    "link",
    "tech",
    "web",
    "code",
    "ios",
    "learn_more",
    "highlight",
    "icon",
  ]);

  const content = await md2html(post.content || post.excerpt || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllProjects(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
