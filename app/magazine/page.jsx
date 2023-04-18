// import React, { useEffect, useState } from "react";
import IndexNavbar from "app/components/Navbars/IndexNavbar.js";
import styles from "./page.module.css";
// import Tabs from "app/components/tabs/Tabs";
// import Tab from "app/components/tabs/Tab";
import ListLayoutLatestPosts from "@/layouts/ListLayoutLatestPosts";
import LatestShows from "app/components/shows/LatestShows";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../helpers/db-util";

async function getData(req, res) {
  const client = await connectDatabase();
  const documents = await getAllDocuments(client, "shows", { _id: -1 });
  let shows = await documents;
  // console.log("index-Page-gsp", JSON.parse(JSON.stringify(shows)));
  shows = JSON.parse(JSON.stringify(shows));

  return shows;
}

const Magazine = async () => {
  const shows = await getData();
  // console.log("magazine", props.shows);
  // const [shows, setShows] = useState([]);
  // const [isFetchingShows, setIsFetchingShows] = useState(false);

  // const posts = await getData();
  /*   useEffect(() => {
    setIsFetchingShows(true);
    fetch("/api/shows/latest")
      .then((response) => {
        console.log("response", response);
        response.json();
      })
      .then((data) => {
        setShows(data.shows);
        setIsFetchingShows(false);
      });
  }, []); */
  // console.log("magazine", shows);
  return (
    <>
      <IndexNavbar fixed />
      <div className="bg-page bg-cover bg-center bg-no-repeat h-screen">
        <div className={styles.magazine}>
          <main className="flex flex-col max-h-[850px] overflow-hidden phone:w-full phone:p-8 laptop:w-3/4 laptop:m-auto laptop:p-24">
            <LatestShows shows={shows} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Magazine;
