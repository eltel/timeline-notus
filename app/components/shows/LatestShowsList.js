import LatestShowItem from './LatestShowItem'
import classes from './ShowItem.module.css'

function LatestShowsList(props) {
  const { shows, tag } = props
  console.log('showslist-shows', shows)

  // console.log("showlist-playcount", showsPlaycount);

  if (!shows) {
    return 'Loading...'
  }

  return (
    <div className="max-h-72 overflow-x-hidden overflow-y-scroll bg-white bg-opacity-10">
      <ul className={classes.list}>
        {shows &&
          shows
            // .filter((show) => {
            //   if (show.tag.toLowerCase() === tag.toLowerCase()) return true;

            //   // console.log("showlist-tag", tag);
            //   // console.log("showlist-show.tag", show.tag);
            // })
            .map((show) => (
              <LatestShowItem
                key={show._id}
                id={show._id}
                title={show.title}
                location={show.location}
                message={show.message}
                date={show.date}
                image={show.imageSrc}
                tag={show.tag}
                src={show.audioSrc}
                trackList={show.trackDetails}
                playCount={show.playCount}
              />
            ))}
      </ul>
    </div>
  )
}

export default LatestShowsList
