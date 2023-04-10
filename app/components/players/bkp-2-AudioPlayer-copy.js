import React, { useState, useContext, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
// import NotificationContext from "../../store/notification-context";

function counter() {
  return (
    <div>
      <h3>Hello from Counter</h3>
    </div>
  )
}

const Player = (props) => {
  // console.log("player-props", props);
  // Set the initial count state to zero, 0
  const [count, setCount] = useState()
  const [isFetchingCount, setIsFetchingCount] = useState(false)
  // const notificationCtx = useContext(NotificationContext);
  const { showId } = props

  const handleIncrement = () => {
    setTimeout(() => {
      // notificationCtx.showNotification({
      //   title: "Adding this play to the count...",
      //   message: "Adding this play to the count...",
      //   status: "pending",
      // });

      // fetch user input (state or refs)
      fetch('/api/players/play-count', {
        method: 'POST',
        body: JSON.stringify({
          showId: showId,
          // tag: enteredTag,
          // message: enteredShowMessage,
          // audioSrc: enteredAudioSrc,
          // imageSrc: enteredImageSrc,
          // trackDetails: enteredTrackDetails,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // console.log("audio-player-then: boo!");
          if (response.ok) {
            return response.json()
          }

          return response.json().then((data) => {
            throw new Error(data.message || 'Something went wrong!')
          })
        })
        .then((data) => {
          // notificationCtx.showNotification({
          //   title: "Success!",
          //   message: "Succesfully Registered show",
          //   status: "success",
          // });
        })
        .catch((error) => {
          // notificationCtx.showNotification({
          //   title: "Error!",
          //   message: error.message || "Something went wrong!",
          //   status: "error",
          // });
        })
    }, 36000)
  }

  return (
    <>
      <AudioPlayer
        src={props.src}
        onPlay={handleIncrement}
        // other props here
      />
      <div className="relative mt-2 h-4 w-11/12 laptop:w-full">
        <span className="float-right inline-flex items-center justify-center rounded-full bg-gray-500 px-2 py-1 text-xs font-bold leading-none text-red-100">
          <h1>{props.playCount > 3 ? props.playCount : 3} plays</h1>
        </span>
      </div>
    </>
  )
}

export default Player
