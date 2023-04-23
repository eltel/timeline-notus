import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import { Icon } from "@iconify/react";
import "react-h5-audio-player/lib/styles.css";
// import NotificationContext from "../../store/notification-context";

function counter() {
  return (
    <div>
      <h3>Hello from Counter</h3>
    </div>
  );
}

const Player = (props) => {
  const [count, setCount] = useState();
  const [isFetchingCount, setIsFetchingCount] = useState(false);
  // const notificationCtx = useContext(NotificationContext);
  const { showId } = props;

  const handleIncrement = () => {
    setTimeout(() => {
      fetch("/api/players/play-count", {
        method: "POST",
        body: JSON.stringify({
          showId: showId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // console.log("audio-player-then: boo!");
          if (response.ok) {
            return response.json();
          }

          return response.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        })
        .then((data) => {})
        .catch((error) => {});
    }, 36000);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-md  p-4 backdrop-blur-sm">
        <div className="">
          <AudioPlayer
            defaultCurrentTime="Loading"
            defaultDuration="Loading"
            showJumpControls={false}
            customVolumeControls={[]}
            Image
            customAdditionalControls={[
              <div>
                <Image
                  // src="/static/images/pic001edit4-sml.jpg"
                  src={props.imageSrc}
                  alt="show-graphic"
                  width={170}
                  height={170}
                  // position="absolute"
                />
              </div>,
            ]}
            src={props.src}
            style={{
              width: "600px",
              height: "250px",
            }}
            customIcons={{
              play: (
                <Icon
                  width="75px"
                  color="white"
                  icon="fluent-emoji-high-contrast:play-button"
                />
              ),
            }}
            onPlay={handleIncrement}
            // other props here
          />
        </div>
        <div className="relative mt-2 h-4 w-11/12 laptop:w-full">
          <span className="float-right inline-flex items-center justify-center rounded-full bg-gray-500 px-2 py-1 text-xs font-bold leading-none text-red-100">
            <h1>{props.playCount > 3 ? props.playCount : 3} plays</h1>
          </span>
        </div>
        {/* <AudioPlayer
        src={props.src}
        onPlay={handleIncrement}
        // other props here
      /> */}
      </div>
    </>
  );
};

export default Player;
