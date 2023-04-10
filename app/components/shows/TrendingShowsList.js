import ShowItem from './ShowItem'
import classes from './ShowItem.module.css'

function TrendingShowsList(props) {
  const { shows } = props
  console.log('TrendingShowsList-props1', shows)
  // const showsArray = shows; // Object.entries(shows);
  console.log('TrendingShowsList-props', shows)

  return (
    <div className="overflow-x-hidden overflow-y-scroll bg-white bg-opacity-10">
      <ul className={classes.list}>
        {shows.map((show) => {
          const values = Object.values(show) // Get an array of values for each object, ignoring numeric keys
          // console.log("key", key);
          // const show = obj[key];
          // console.log("show.imageSrc", show);
          return (
            <ShowItem
              key={show._id}
              id={show._id}
              title={show.title}
              image={show.imageSrc}
              tag={show.tag}
              src={show.audioSrc}
              trackList={show.trackDetails}
              playCount={show.playCount}
              currentIp={show.currentIp}
              currentTime={show.currentTime}
              show={show}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TrendingShowsList
