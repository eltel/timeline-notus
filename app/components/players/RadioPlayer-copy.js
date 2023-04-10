import Script from 'next/script'

function RadioPlayer() {
  return (
    <>
      {/* The player declaration */}
      <div className="radio-player-container w-[736px] bg-[#403838]">
        <Script src="https://embed.radio.co/player/8605ede.js"></Script>
        <div
          className="radioplayer m-auto h-[125px] w-[736px] overflow-hidden"
          data-src="https://s4.radio.co/sdb474650c/listen"
          data-autoplay="false"
          data-playbutton="true"
          data-volumeslider="true"
          data-elapsedtime="true"
          data-nowplaying="true"
          data-showplayer="true"
          data-volume="100"
        ></div>
      </div>
    </>
  )
}

export default RadioPlayer
