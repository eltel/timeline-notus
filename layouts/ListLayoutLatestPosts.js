import Image from "next/image";
// import Image from "@/components/Image";
import Tag from "app/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
// import { useState } from "react";
// import PaginationAll from "@/components/PaginationAll";

const postDateTemplate = { year: "numeric", month: "long", day: "numeric" };

export default function ListLayoutLatestPosts({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  return (
    <>
      <div className="divide-y">
        <ul>
          {/* {!filteredBlogPosts.length && "No posts found."} */}
          {initialDisplayPosts.map((post) => {
            const { slug, date, title, summary, tags, images } = post;

            const defaultImage =
              "/static/img/review-images/Steven Ruttler-album cover.jpeg";
            return (
              <li key={slug} className="py-4">
                <article className="xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 inline-block w-full flex-none">
                  <Link
                    href={`/content/${slug}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <div className="mb-4 flex justify-center phone:float-none phone:w-full desktop:float-right desktop:w-40">
                      <Image
                        src={images[0] || defaultImage}
                        alt="list-visual"
                        width={300}
                        height={300}
                        className="list-image"
                      />
                    </div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(
                            siteMetadata.locale,
                            postDateTemplate
                          )}
                        </time>
                      </dd>
                    </dl>
                    <div className="xl:col-span-3 space-y-3">
                      <div>
                        <h3 className="text-left text-2xl font-bold leading-8 tracking-tight">
                          {title}
                        </h3>
                        <div className="flex flex-wrap">
                          {tags.map((tag, index) => (
                            <Tag key={index * Math.random()} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary.length > 160
                          ? summary.substr(0, 160) + "...[Read More]"
                          : summary}
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {/* {pagination && pagination.totalPages > 1 && !searchValue && (
        <PaginationAll currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )} */}
    </>
  );
}
