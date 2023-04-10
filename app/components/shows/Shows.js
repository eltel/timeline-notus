import { useState, useEffect } from "react";
import ShowsList from "app/components/shows/ShowsList";

export default function Shows(props) {
  const { tag } = props;
  const [shows, setShows] = useState([]);
  const [isFetchingShows, setIsFetchingShows] = useState(false);
  console.log("ShowsComponent-shows", shows);

  useEffect(() => {
    setIsFetchingShows(true);
    fetch("/api/shows/" + tag)
      .then((response) => response.json())
      .then((data) => {
        setShows(data.shows);
        setIsFetchingShows(false);
      });
  }, [tag]);

  return (
    <section className="">
      <ShowsList shows={shows} tag={tag} />
    </section>
  );
}
