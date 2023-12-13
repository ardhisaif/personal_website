import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function ExperimentList({ allExperiments }) {
  const {
    query: { slug },
  } = useRouter();

  return (
    <div className="w-full">
      <div
      // className={clsx(
      //   "bg-gray-50 dark:bg-gray-900 overflow-auto rounded-lg h-full border border-gray-200/50 dark:border-gray-800/50"
      // )}
      >
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">
          Experiments
        </h2>
        <div className="last:!border-b-0">
          {allExperiments?.map((experiment) => (
            <div
              key={experiment.slug}
              // className="border-gray-200/50 dark:border-gray-800/50 py-[5px] border-b"
            >
              <Link href={`/experiments/${experiment.slug}`} className="w-full">
                <article
                  className="flex  border-dashed font-medium w-full py-3 md:py-[12px]  dark:text-white border-b border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 flex-row "
                >
                  {experiment?.icon ? (
                    <img
                      src={experiment?.icon}
                      alt={experiment.title}
                      className="w-6 h-6  shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:border-gray-800"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white bg-black border border-gray-100 rounded-full dark:border-gray-800">
                      {experiment?.title?.slice(0, 1)}
                    </div>
                  )}
                  <h2 className={clsx("font-semibold ml-3")}>{experiment.title}</h2>
                 
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
