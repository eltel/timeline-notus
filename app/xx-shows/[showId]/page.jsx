"use client";

import { Fragment, createRef } from "react";
// import Head from "next/head";
// import { NextSeo } from 'next-seo'
// import { useRouter } from "next/router";

// import Image from '@/components/Image'
import {
  // getSelectedDocuments,
  getAllDocuments,
  connectDatabase,
} from "../../../helpers/db-util";
// import { getEventById, getFeaturedShows } from "../../helpers/api-util";
import AudioPlayer from "@/components/players/AudioPlayer";

import NextShare from "@/components/social-share/NextShare";
// import siteMetadata from "@/data/siteMetadata";
import { data } from "autoprefixer";
import Image from "next/image";
import IndexNavbar from "app/components/Navbars/IndexNavbar.js";

function ShowDetailPage(props) {
  const { show, audioSrc, imageSrc, title, showId, message } = props;
  const summary = "show and track list";
  console.log("showIdProps", props);
  // console.log("srcProps", audioSrc);
  // console.log("showId", showId);
  // console.log("imageSrc", show[0].imageSrc);
  // const router = useRouter();
  console.log("showId", show);
  const playCount = props.show[0].playCount;
  let player = createRef();
  // console.log("player", player.current.audio.current);

  async function getData(context) {
    // params contains the post `id`.
    const showId = JSON.stringify(context.params.showId);
    console.log("ShowId", showId);
    const client = await connectDatabase();
    const documents = await getAllDocuments(client, "shows", { _id: -1 });
    let shows = await documents;
    // console.log("index-Page-gsp", JSON.parse(JSON.stringify(shows)));
    shows = JSON.parse(JSON.stringify(shows));

    return shows;
  }

  if (!show) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  const tracklist = show[0].trackDetails;
  const tracklistArray = tracklist.split(",");
  const showIdURL = showId.replace(/^"+|"+$/g, "");
  // console.log("showIdURL", showIdURL);
  // console.log("tracklistArray", tracklistArray);

  return (
    <Fragment>
      <IndexNavbar fixed />
      <div className="bg-white bg-opacity-5 p-4">
        {/* <h1 className="flex h-24 mt-24 flex-wrap justify-center text-blueGray-700  text-center text-3xl phonesm:text-2xl phone:text-3xl">text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase */}
        <h1 className="h-24 mt-24 text-blueGray-700 text-center text-3xl phonesm:text-2xl phone:text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase w-full">
          {show[0].title}
        </h1>
        <div className="hero max-w-1/5 container mx-auto mb-10  flex justify-centerrounded-md bg-slate-900/70 p-4 backdrop-blur phonesm:p-1">
          {/* <Image
            className="mx-auto"
            src={show[0].imageSrc}
            alt="show"
            width={400}
            height={400}
          /> */}
          <AudioPlayer
            showId={showId}
            src={show[0].audioSrc}
            playCount={playCount}
            imageSrc={show[0].imageSrc}
          />
          {show[0].message && show[0].message.length > 1 && (
            <div className="flex items-center h-96 border border-gray-300 dark:border-gray-600">
              <p class="p-4">{show[0].message}</p>
            </div>
          )}
        </div>
        <div className="flex w-2/3 m-auto">
          <NextShare
            // url={siteMetadata.siteUrl + "/shows/" + showIdURL}
            url={`${siteMetadata.siteUrl}/shows/${showIdURL}`}
            summary={summary}
            title={show[0].title}
          />
        </div>

        {/* <ShowComments showId={props.showId} /> */}

        <div className="mx-auto mt-8  tablet:max-w-2xl laptop:p-7 text-base text-gray-400 divide-y divide-gray-200 h-[800px] max-h-[800px] overflow-auto rounded-md bg-slate-900/70 p-4 backdrop-blur dark:divide-gray-700 overflow-y-scroll scrollhost scrollhost::-webkit-scrollbar">
          <ol className="p-4">
            {tracklistArray.map((tracklist) => (
              <li type="1" key={show[0]._id++}>
                {tracklist}
              </li>
            ))}
          </ol>
        </div>
        {/* <Comments showId={show.id} /> */}
      </div>
    </Fragment>
  );
}

/* export async function getStaticPaths() {
  // const showId = 1234;
  const client = await connectDatabase();
  const shows = await getSelectedDocuments(client, "shows", { _id: -1 });
  // const show = documents.filter((document) => {
  //   if (document._id === showId) return true;
  // });
  const paths = shows.map((show) => ({
    params: { showId: show._id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// This also gets called at build time
export async function getStaticProps(context) {
  // params contains the post `id`.
  const showId = JSON.stringify(context.params.showId);
  const client = await connectDatabase();
  const documents = await getSelectedDocuments(client, "shows", { _id: -1 });
  // console.log("showIdGSPdocuments", documents);
  const shows = await documents;
  // console.log("showsGSProps", shows);
  // const allShowIds = shows.objectId.toString();
  // console.log("allShowIdsGSProps", allShowIds);
  const showArray = shows.filter((show) => {
    const id = JSON.stringify(show._id);
    // console.log("id", id);
    if (id === showId) return true;
    // console.log("show._id", show._id);
    // console.log("object", show._id.$id);
  });

  // convert array to an object
  const showObject = { ...showArray };

  const show = JSON.stringify(showObject);

  const show2 = JSON.parse(show);

  return { props: { show: show2, showId: showId }, revalidate: 864 };

}
 */

export default ShowDetailPage;
