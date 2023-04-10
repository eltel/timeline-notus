import Image from "next/image";
import AudioPlayer from "../players/AudioPlayer";
import Link from "next/link";

function ShowItem(props) {
  const {
    title,
    id,
    image,
    show,
    playCount,
    currentIp,
    currentTime,
    trackList,
  } = props;

  console.log("showItemID", id);
  console.log("showItemSrc", image);

  const showLink = `/shows/${id}`;
  console.log("showItem-showLink", showLink);
  // const showId = JSON.stringify(id);
  console.log("showItem-show", show.imageSrc);
  console.log("showItem-showId", props);
  // const playCount = show.playCount;
  console.log("showItem-playCount", playCount);
  console.log("showItem-trackDetails", trackList);
  // const currentIp = show.currentIp;
  // const currentTime = show.currentTime;

  return (
    <Link href={showLink}>
      <div className="m-2 h-auto overflow-auto border border-gray-200 p-2 dark:border-gray-900 ">
        <h3 className="mb-2 text-center phonesm:text-sm laptop:text-lg">
          {title}
        </h3>
        {/* <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-gray-500 rounded-full float-right">
          <h1>{props.playCount > 3 ? props.playCount : 3} plays</h1>
        </span> */}
        <div className="flex h-full justify-between">
          {/* <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-gray-500 rounded-full float-right">
            <h1>{props.playCount > 3 ? props.playCount : 3} plays</h1>
          </span> */}
          <div className="w-1/3 phonesm:w-1/4">
            <Image
              src={show.imageSrc}
              alt="list-visual"
              width={100}
              height={100}
              className="list-image"
            />
          </div>
          <div className="my-auto w-1/3 ">
            <button
              className="float-right clear-both mb-1 h-auto justify-self-center rounded bg-gray-500 px-12 py-2 text-lg uppercase uppercase text-white text-yellow-500 shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-200 hover:text-blue-600 hover:shadow-lg focus:outline-none active:bg-gray-300 dark:hover:text-blue-400 phonesm:px-6 phonesm:text-xs phone:text-sm"
              type="button"
            >
              Open Show
            </button>
          </div>
          <div className="flex w-1/3 justify-end phonesm:w-1/4">
            <span className="my-auto inline-block rounded-full bg-gray-500 px-1 py-1 text-right text-xs font-bold leading-none text-red-100">
              <h1>{props.playCount > 3 ? props.playCount : 3} plays</h1>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowItem;
