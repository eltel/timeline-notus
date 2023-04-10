"use client";

import { useState, useEffect } from "react";

import ListLayoutLatestShows from "@/layouts/ListLayoutLatestShows";

function LatestShows() {
  // const { shows } = props;
  // console.log("LatestShows", props);

  const [showComments, setShowComments] = useState(false);
  const [shows, setShows] = useState([]);
  const [isFetchingShows, setIsFetchingShows] = useState(false);
  console.log("LatestShows", shows);
  console.log("shows-tag", tag);

  /* useEffect(async () => {
    setIsFetchingShows(true);
    await fetch("/api/shows/latest")
      .then((response) => response.json())
      .then((data) => {
        setShows(data.shows);
        setIsFetchingShows(false);
      });
  }, [tag]); */
  // ChatGPT remix, original above
  useEffect(() => {
    const fetchData = async () => {
      setIsFetchingShows(true);
      const response = await fetch("/api/shows/latest");
      const data = await response.json();
      setShows(data.shows);
      setIsFetchingShows(false);
    };

    fetchData();
  }, [tag]);

  console.log("shows", shows);
  return (
    <section className="">
      <ListLayoutLatestShows shows={shows} />
    </section>
  );
}

export default LatestShows;
