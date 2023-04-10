import { useState, useEffect } from 'react'

// import CommentList from "./comment-list";
// import NewComment from "./new-comment";
// import classes from "./Shows.module.css";
import NotificationContext from '../../store/notification-context'
import ListLayoutLatestShows from '@/layouts/ListLayoutLatestShows'
// import LatestShowsList from "@/components/shows/LatestShowsList";

function LatestShows(props) {
  const { tag } = props
  // console.log("showId", props);

  // const notificationCtx = useContext(NotificationContext);

  // const [showComments, setShowComments] = useState(false);
  const [shows, setShows] = useState([])
  const [isFetchingShows, setIsFetchingShows] = useState(false)
  // console.log("LatestShows", shows);
  // console.log("shows-tag", tag);

  useEffect(() => {
    setIsFetchingShows(true)
    fetch('/api/shows/latest')
      .then((response) => response.json())
      .then((data) => {
        setShows(data.shows)
        setIsFetchingShows(false)
      })
  }, [tag])

  return (
    <section className="">
      <ListLayoutLatestShows shows={shows} tag={tag} />
    </section>
  )
}

export default LatestShows
