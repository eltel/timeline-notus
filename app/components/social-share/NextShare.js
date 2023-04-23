import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

import { Icon } from "@iconify/react";

export default function NextShare(props) {
  const siteUrl = props.url;
  const summary = props.summary;
  const quote = "Today's Live Transmission!";
  const title = props.title;
  const separator = ": ";
  // console.log("next-share", summary);
  return (
    <div className="flex w-full justify-between py-7">
      <FacebookShareButton
        url={siteUrl}
        quote={"Get your Timeline Music goodies here"}
        // quote={title + separator + summary} // quote
        hashtag={"#TimelineMusic"}
      >
        <Icon
          width="40px"
          color="orange"
          icon="streamline:computer-logo-facebook-1-media-facebook-social"
        />
        {/* <FacebookIcon size={40} borderRadius={10} /> */}
      </FacebookShareButton>
      <TwitterShareButton
        url={siteUrl}
        // title={"Timeline Music - Sonic visions of futures and futures passed."}
        title={title}
      >
        {/* <TwitterIcon size={40} borderRadius={10} /> */}
        <Icon
          width="40px"
          color="orange"
          icon="streamline:computer-logo-twitter-media-twitter-social"
        />
      </TwitterShareButton>
      <RedditShareButton
        url={siteUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
      >
        <Icon width="40px" color="orange" icon="uil:reddit-alien-alt" />
      </RedditShareButton>
      <WhatsappShareButton
        url={siteUrl}
        title={"Timeline Music - Sonic visions of futures and futures passed."}
        separator=":: "
      >
        <Icon width="40px" color="orange" icon="ps:whatsapp" />
        {/* <WhatsappIcon size={40} borderRadius={10} /> */}
      </WhatsappShareButton>
    </div>
  );
}
