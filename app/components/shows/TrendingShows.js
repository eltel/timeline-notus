import { useState, useEffect, useContext } from 'react'

// import NotificationContext from "../../store/notification-context";
// import TrendingShowsList from "@/components/shows/TrendingShowsList";
import ListLayoutTrendingShows from '@/layouts/ListLayoutTrendingShows'

function TrendingShows(props) {
  const { tag } = props

  // console.log("trending-shows", shows);
  // const showsArray = Object.values(shows).map((show) => ({
  //   id: show._id,
  //   title: show.title,
  //   tag: show.tag,
  //   audioSrc: show.audioSrc,
  //   currentIp: show.currentIp,
  //   currentTime: show.currentTime,
  //   trackDetails: show.trackDetails,
  //   imageSrc: show.imageSrc,
  //   message: show.message,
  //   playCount: show.playCount,
  // }));
  // console.log("showsArray", showsArray);
  const [shows, setShows] = useState([])
  const [isFetchingShows, setIsFetchingShows] = useState(false)

  useEffect(() => {
    setIsFetchingShows(true)
    fetch('/api/shows/trending')
      .then((response) => response.json())
      .then((data) => {
        setShows(data.shows)
        setIsFetchingShows(false)
      })
  }, [tag])

  if (!shows) {
    return 'Loading...'
  }

  // console.log("TrendingShows-shows", shows);

  return (
    <section className="">
      <h1 className="text-left text-2xl font-bold leading-8 tracking-tight">
        The foremost mixes and shows for this month, in order of popularity - determined by the
        number of plays
      </h1>

      <br />
      <hr />
      <br />
      <ListLayoutTrendingShows shows={shows} tag={tag} />
    </section>
  )
}

export default TrendingShows
