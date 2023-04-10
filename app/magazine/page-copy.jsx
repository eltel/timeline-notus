// "use client";

import React from "react";
import IndexNavbar from "app/components/Navbars/IndexNavbar.js";
import Tabs from "app/components/tabs/Tabs";
import Tab from "app/components/tabs/Tab";
import ListLayoutLatestPosts from "@/layouts/ListLayoutLatestPosts";
import LatestShows from "app/components/shows/LatestShows";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../helpers/db-util";

/* async function getData() {
  const res = await fetch("http://localhost:3000/api/shows/latest");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log("res", res.json());

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
} */
async function getData(req, res) {
  /*  const res = await fetch("http://localhost:3000/api/shows/latest");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log("res", res.json());

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json(); */

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connnecting to the database failed" });
    return;
  }
}

const Magazine = async () => {
  const posts = await getData();
  console.log("posts", posts);

  return (
    <>
      <IndexNavbar fixed />
      <div className="mt-20">magazine</div>
      <Tabs value="html">
        <Tab label="Latest Posts">
          <ListLayoutLatestPosts posts={posts} />
        </Tab>
        <Tab label="Latest Shows">
          <LatestShows />
        </Tab>
      </Tabs>
    </>
  );
};

export default Magazine;
