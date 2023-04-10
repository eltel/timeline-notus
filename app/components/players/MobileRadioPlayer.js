import Script from 'next/script'

function MobileRadioPlayer() {
  return (
    <>
      {/* The player decleration */}
      <div className="mobile-radio-player-container fixed bottom-0 m-auto w-full bg-stone-500 p-2">
        {/* <Script src="https://embed.radio.co/player/8605ede.js"></Script> */}
        <iframe
          width="100%"
          title="mobile-radio-stream"
          height="330"
          src="https://s9.citrus3.com:2020/AudioPlayer/timelinemusic?showSettingsLink=falsepp&mount=&"
          border="0"
          // style="border: 0;"
          style={{
            width: '95%',
            height: '100%',
            minHeight: '160px',
            border: '0',
            padding: '5px',
            backgroundColor: 'black',
          }}
        ></iframe>
      </div>
    </>
  )
}

export default MobileRadioPlayer
