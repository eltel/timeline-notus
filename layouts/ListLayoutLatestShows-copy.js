import Image from "next/image";
import Link from "next/link";
import Tag from "app/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import AnimateIn from "app/components/Animations/AnimateIn";
import CustomScrollDiv from "app/components/Scrollbars/CustomScrollDiv";

// import { useState } from "react";
// import PaginationAll from "@/components/PaginationAll";

// const postDateTemplate = { year: "numeric", month: "long", day: "numeric" };

export default function ListLayoutLatestShows(props) {
  const shows = props.shows;
  console.log("shows-props", props);

  return (
    <>
      {/* <div className="divide-y m-auto relative phone:w-full laptop:w-full"> */}
      <div className="divide-y mt-24 divide-gray-200 h-[800px] max-h-[800px] overflow-auto rounded-md bg-slate-900/70 p-4 backdrop-blur dark:divide-gray-700 overflow-y-scroll scrollhost scrollhost::-webkit-scrollbar">
        <CustomScrollDiv>
          <ul className="h-[800px] max-h-[800px] z-0">
            {!shows.length && "No shows found."}
            {shows.map((show) => {
              const { title, message, tag, imageSrc, playCount, id } = show;
              const showLink = `/shows/${show._id}`;
              const defaultImage =
                "/static/img/review-images/Steven Ruttler-album cover.jpeg";
              return (
                <AnimateIn>
                  <li key={show._id} className="">
                    <article className="flex justify-center min-w-full space-x-4 p-60 mt-28 laptop:w-full">
                      <div className="p-8 mt-8">
                        <div className="w-56 phone:float-none min-w-full phone:w-full laptop:w-full laptop:min-w-full">
                          <div className="flex flex-wrap float-right">
                            <Tag key={show.audioSrc} text={tag} />
                            <span className="inline-flex items-center justify-center rounded-full bg-gray-500 px-2 py-1 text-xs font-bold leading-none text-red-100">
                              <h1>{playCount > 3 ? playCount : 3} plays</h1>
                            </span>
                          </div>
                          <Link
                            href={showLink}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            <div className="min-w-[180px] min-h-[180px]">
                              <Image
                                src={imageSrc || defaultImage}
                                alt="list-visual"
                                // style={{ objectFit: "contain" }}
                                // fill={true}
                                width={180}
                                height={180}
                                className="list-image"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="xl:col-span-3 space-y-3">
                          <div>
                            <Link href={showLink}>
                              <h3 className="text-right text-2xl font-bold leading-8 tracking-tight text-gray-500">
                                {title}
                              </h3>
                            </Link>
                          </div>
                          <div className="prose max-w-none text-teal-500 dark:text-gray-400">
                            {message.length > 160
                              ? message.substr(0, 160) + "...[Read More]"
                              : message}
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </AnimateIn>
              );
            })}
          </ul>
        </CustomScrollDiv>
      </div>

      {/* <PaginationAll currentPage={pagination.currentPage} totalPages={pagination.totalPages} /> */}
    </>
  );
}
