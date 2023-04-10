import IndexNavbar from "app/components/Navbars/IndexNavbar.js";
import styles from "../page.module.css";

const mainFeed = () => {
  return (
    <>
      <main className={styles.main}>
        <IndexNavbar fixed />
        <h1>mainFeed</h1>
        <div className="w-2/3 h-fit grid grid-cols-1 gap-8 ">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-[300px] m-2">
            <div className="aspect-w-16 aspect-h-9 h-[300px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden m-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden m-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden m-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden m-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
        </div>

        {/*   <div className="absolute w-1/2 h-full">
          <iframe
            src="https://player.vimeo.com/video/808798185?h=1d1b149f47&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="showcase"
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div> */}
        {/* <div className="relative w-1/2 h-full">
          <iframe
            src="https://player.vimeo.com/video/724851361?h=f3f6646fa7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="100%"
            height="400"
            allowFullScreen
            title="showcase"
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div> */}
      </main>
    </>
  );
};

export default mainFeed;
