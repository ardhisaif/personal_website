import clsx from "clsx";
import Link from "next/link";
import { ArrowSquareOut, InstagramLogo } from "phosphor-react";
import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper, Button } from "ui";

export default function Home({ allPosts,allSkills, allProjects, post }) {
  return (
    <div className="grid md:grid-cols-1 mt-0 md:mt-8">
      <ContentWrapper
        width="620px"
        className="divide-y divide-gray-200 dark:divide-gray-800 space-y-4 px-5"
      >
        <div className="">

          <h2 className="mb-3 md:mb-4 text-3xl">
            <span className="opacity-70">Hi 👋, I'm </span>
            <span className="font-bold text-black dark:text-white">
              Ahmad Saifudin Ardhiansyah!
            </span>
          </h2>

          <div>
          <div className="!mb-0 list-disc space-y-1 md:space-y-[6px]">
              <p className="text-justify">A backend developer with +2 years of experience who is customer-focused and committed to delivering valuable and impactful products.</p>
              <p className="text-justify pt-2">I am a curious person and I love to learn new things.<br/>That's why in the past 6 years most of my free time spent on passion projects</p>
              <p className="text-justify pt-2">prev. Instructor at Hacktiv8 Indonesia</p>
              {/* {allSkills? (
                    <div className="flex my-1  text-xs flex-wrap">
                      {allSkills?.map((tech) => (
                        <div
                          key={tech}
                          className="font-mono mr-4 mt-2 border border-gray-200 dark:border-gray-500 px-1 py-px rounded-md text-gray-600 dark:text-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )} */}
            </div>
            <div className="flex items-center mt-3 border border-gray-300 py-[8px] pl-[12px] pr-[16px] rounded-full w-[fit-content]">
            <span class="relative flex h-3 w-3 mr-2 items-center justify-center">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            <p className="text-xs font-medium ">OPEN TO WORK</p>
          </div>
            {/* <li>
                Building{" "}
                <Link
                  className="border-b border-gray-300 hover:border-gray-400 dark:text-gray-200"
                  href="https://pika.style"
                >
                  Pika
                </Link>{" "}
                (design tool at $2,500 MRR and growing)
              </li> */}
          </div>
        </div>
        <div className="pt-6 pb-2">
          <h2 className="text-xl font-medium text-black dark:text-white mb-4">
            Projects
          </h2>
          <div className="mt-4 grid grid-cols-1  gap-4">
            {allProjects?.map((project) => (
              <div className="min-w-[120px] flex-col px-4 py-2 border border-gray-200 dark:border-gray-700/70 rounded-lg hover:bg-gray-100 dark:bg-gray-800/70 dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:shadow-[0_0_8px_rgba(0,0,0,0.8)] shadow-[0_0_8px_rgba(0,0,0,0.06)] flex relative ">

                <Link
                  href={`/projects/${project?.slug}` || "/"}
                  key={project?.title}
                >
                  {project?.highlight ? <img
                    className="w-full mx-auto rounded drop-shadow-xl "
                    src={project?.highlight}
                    alt={project?.title}
                  />:""}
                  <div className="py-1 relative">
                    {project?.icon ? (
                      <img
                        className="w-[30px] rounded drop-shadow-xl mt-6"
                        src={project?.icon}
                        alt={project?.title}
                      />

                    ) : (
                      <>
                        <div className="flex items-center justify-center w-[42px] h-[42px] text-lg font-medium text-white bg-black border border-gray-100 rounded-full dark:border-gray-800 drop-shadow-xl">
                          {project?.title?.slice(0, 1)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="flex items-center gap-[6px] mt-1">
                        <h3 className="font-medium text-base">
                          {project?.title}
                        </h3>
                        {project?.active ? (
                        <div
                          className="w-[8px] h-[8px] rounded-full bg-green-500"
                          title="Active"
                        />
                      ) : (
                        ""
                      )}
                      </div>
                    {project?.tagline ? (
                      <p className="text-sm opacity-80">{project?.tagline}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  {project?.tech ? (
                    <div className="flex my-1  text-xs flex-wrap">
                      {project?.tech.map((tech) => (
                        <div
                          key={tech}
                          className="font-mono mr-4 mt-2 border border-gray-200 dark:border-gray-400 px-1 py-[3px] rounded-md text-gray-600 dark:text-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="pt-8 pb-2">
          <div className="flex items-center gap-3 pb-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Blog
            </h2>
            <Button variant="secondary" className="text-sm" href="/blog" as="a">
              View all blog posts →
            </Button>
          </div>
          <BlogList data={allPosts?.slice(0, 12)} activeSlug={post?.slug} />
        </div> */}
        {/* <div>
          <div className="mt-12 mb-4">
            <h2 className="text-base flex items-center">
              <Star size={20} className="mr-2 opacity-40" />
              Connecting dots backwards
            </h2>
          </div>

          <div className="">
            <div className="relative pl-8">
              <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[10px] top-[5px] absolute"></div>
              {TIMELINE?.map((item, index) => (
                <div key={item.title + index} className="mb-10 relative">
                  <div className="w-3 h-3 rounded-full absolute left-[-30px] top-[16px]">
                    <ArrowCircleRight
                      size={24}
                      className="bg-white text-gray-400 dark:text-gray-400 dark:bg-gray-900 rounded-full"
                    />
                  </div>
                  <p className="opacity-40 text-xs">{item.date}</p>

                  <h3 className="leading-tight mb-1 font-medium text-sm md:text-base inline-block">
                    <span className="">{item.title}</span>
                    {item?.link ? (
                      <Link href={item.link} target="_blank">
                        <span className="inline-block ml-1 opacity-80">
                          <ArrowSquareOut size={12} />
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                  </h3>

                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </ContentWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
  ]);

  const allProjects = getAllProjects([
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
    "learn_more",
  ]);
  
  return {
    props: {
      // allSkills,
      allPosts,
      allProjects: allProjects
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
