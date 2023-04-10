import Image from "next/image";

// import AudioPlayer from "../players/AudioPlayer";
// import ShowsModal from "./ShowsModal";

import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Link from "next/link";
// import classes from "./ShowItem.module.css";

function LatestShowItem(props) {
  const {
    title,
    image,
    date,
    location,
    id,
    tag,
    src,
    trackList,
    playCount,
    message,
  } = props;
  const showLink = `/shows/${id}`;
  const showId = JSON.stringify(id);
  console.log("LatestShowItem", props);
  console.log("image", image);
  // console.log("showItem-playCount", playCount);

  // const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // const formattedAddress = location.replace(", ", "\n");

  return (
    <div className="m-2 h-auto overflow-auto border border-gray-200 p-2 dark:border-gray-900 ">
      <div className="">
        <div className="">
          <h2 className="mb-2 text-center font-medium phonesm:text-sm laptop:text-lg">
            {title}
          </h2>
        </div>
      </div>
      <div className="">
        {/* <div className="w-full">
          <AudioPlayer showId={showId} sdefaultImagerc={src} playCount={playCount} />
        </div> */}

        <div className="mb-4 flex justify-center phone:float-none  desktop:float-right desktop:w-40">
          <Image
            src={image}
            alt="list-visual"
            width={300}
            height={300}
            className="list-image"
          />
        </div>
        <div className="float-left text-lg phone:w-full phone:p-2 laptop:w-2/3 laptop:p-6  ">
          <p>
            {message && message.length > 190
              ? message.substr(0, 190) + "...[Read More]"
              : message}
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <Link href={showLink}>
            {/* <Button link={exploreLink}>
                <span>Check Show</span>
                <span className={classes.icon}>
                  <ArrowRightIcon />
                </span>
              </Button> */}

            <button
              className="float-right mb-1 mt-4 rounded bg-gray-500 px-12 py-2 text-lg uppercase uppercase text-white text-yellow-500 shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-200 hover:text-blue-600 hover:shadow-lg focus:outline-none active:bg-gray-300 dark:hover:text-blue-400"
              type="button"
            >
              Open Show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestShowItem;
