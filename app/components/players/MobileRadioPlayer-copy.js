import Script from 'next/script'

function MobileRadioPlayer() {
  return (
    <>
      {/* The player decleration */}
      <div className="mobile-radio-player-container m-auto w-full bg-stone-500">
        <Script src="https://embed.radio.co/player/8605ede.js"></Script>
        {/* <div
          className="radioplayer m-auto"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="true"
          data-playbutton="true"
          data-volumeslider="false"
          data-elapsedtime="false"
          data-nowplaying="true"
          data-showplayer="false"
          data-volume="100"
        ></div> */}
        {/* <div
          className="radioplayer-mobile m-auto"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="true"
          data-playbutton="true"
          data-volumeslider="false"
          data-elapsedtime="false"
          data-nowplaying="true"
          data-showplayer="false"
          data-volume="100"
        ></div> */}
        {/* <div
          className="radioplayer m-auto w-auto h-[130px] p-2 overflow-hidden"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="true"
          data-playbutton="true"
          data-volumeslider="false"
          data-elapsedtime="true"
          data-nowplaying="true"
          data-showplayer="true"
          data-volume="90"
        ></div> */}
        {/* <div
          className="radioplayer m-auto w-[320px] h-[130px] p-2 overflow-hidden"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="true"
          data-playbutton="true"
          data-volumeslider="false"
          data-elapsedtime="false"
          data-nowplaying="true"
          data-showplayer="true"
          data-volume="100"
          data-showartwork="true"
        ></div> */}
        {/* <div
          className="radioplayer"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="true"
          data-playbutton="true"
          data-volumeslider="false"
          data-elapsedtime="false"
          data-nowplaying="true"
          data-showplayer="true"
          data-volume="90"
        ></div> */}
      </div>
    </>
  )
}

export default MobileRadioPlayer
