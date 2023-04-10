import { Fragment, createRef } from "react";
// import Head from "next/head";
// import { NextSeo } from 'next-seo'
// import { useRouter } from "next/router";

// import Image from '@/components/Image'
import { getSelectedDocuments, connectDatabase } from "../../helpers/db-util";
// import { getEventById, getFeaturedShows } from "../../helpers/api-util";
import AudioPlayer from "@/components/players/AudioPlayer";

import NextShare from "@/components/social-share/NextShare";
import siteMetadata from "@/data/siteMetadata";
import { data } from "autoprefixer";
import Image from "next/image";

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
      <div className="bg-white bg-opacity-5 p-4">
        <h1 className="flex h-24 flex-wrap justify-center text-center text-3xl phonesm:text-2xl phone:text-3xl">
          {show[0].title}
        </h1>
        <div className="hero max-w-screen-lg container mx-auto mb-10  flex justify-center bg-gray-500 bg-opacity-25 p-10 phonesm:p-1">
          <Image
            className="mx-auto"
            src={show[0].imageSrc}
            alt="show"
            width={700}
            height={700}
          />
        </div>
        <AudioPlayer
          showId={showId}
          src={show[0].audioSrc}
          playCount={playCount}
        />
        {show[0].message && show[0].message.length > 1 && (
          <div className="m-2 mt-4 border border-gray-300 p-3 dark:border-gray-600">
            <p>{show[0].message}</p>
          </div>
        )}
        <NextShare
          // url={siteMetadata.siteUrl + "/shows/" + showIdURL}
          url={`${siteMetadata.siteUrl}/shows/${showIdURL}`}
          summary={summary}
          title={show[0].title}
        />
        {/* <ShowComments showId={props.showId} /> */}

        <div className="float-left m-6 text-base text-gray-400">
          <ol className="m-auto rounded-md tablet:max-w-2xl laptop:p-5 ">
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

export async function getStaticPaths() {
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

  // try {
  //   const client = await connectDatabase();
  //   // const { data, error, documents } = await getAllDocuments(client, "shows", { _id: -1 });
  //   const documents = await getAllDocuments(client, "shows", { _id: -1 });
  //   // console.log("documentsdGSP", documents);
  //   const show = documents.filter((document) => {
  //     if (document._id === showId) return true;
  //   });
  //   console.log("document._idGSP", document);
  //   console.log("showdGSP", show._id);
  //   // let documents = await getAllDocuments(client, "shows", { _id: -1 });
  //   if (!show) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  //   // console.log("data", data);
  //   // let tag = "DJK";
  //   // let shows = data;
  //   // shows = shows.filter((show) => show.tag !== tag);
  //   // res.status(200).json({ show: shows });
  //   return { props: { data } };
  // } catch (error) {
  //   return { notFound: true };
  // }

  // return {
  //   props: { data }, // will be passed to the page component as props
  // };
}

export default ShowDetailPage;
