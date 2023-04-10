/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
// import AudioPlayer from "react-h5-audio-player";
import Head from 'next/head'
// import classes from "./RadioCoPlayer.module.css";

const RadioCoPlayer = (props) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300"
        rel="stylesheet"
        type="text/css"
      />
      <script defer src="https://embed.radio.co/player/8f9750e.js"></script>
      <script defer src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
      <script defer src="https://public.radio.co/playerapi/jquery.radiocoplayer.min.js"></script>
      {/* <script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js" /> */}
    </Head>
    {/* The player decleration */}
    <div
      // style={classes.RadioCoPlayer}
      className="radioplayer"
      data-src="https://streaming.radio.co/your_station/listen"
      data-autoplay="true"
      data-playbutton="true"
      data-volumeslider="true"
      data-elapsedtime="true"
      data-nowplaying="true"
      data-showplayer="true"
      data-volume="90"
    ></div>
    {/* <script>$('.radioplayer').radiocoPlayer();</script> */}
  </>
)

export default RadioCoPlayer
