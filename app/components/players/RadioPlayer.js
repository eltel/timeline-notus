// import Script from "next/script";

function RadioPlayer() {
  return (
    <>
      {/* The player declaration */}
      <div className="radio-player-container w-[768px] bg-[#403838]">
        {/* <Script src="https://embed.radio.co/player/8605ede.js"></Script> */}
        <iframe
          width="100%"
          title="radio-stream"
          height="330"
          src="https://s9.citrus3.com:2020/AudioPlayer/timelinemusic?showSettingsLink=falsepp&mount=&"
          border="0"
          // style="border: 0;"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '160px',
            border: '0',
            padding: '10px',
            backgroundColor: 'black',
          }}
        ></iframe>
      </div>
    </>
  )
}

export default RadioPlayer
