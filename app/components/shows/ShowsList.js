import ShowItem from './ShowItem'
import classes from './ShowItem.module.css'

export default function ShowsList(props) {
  const { shows, tag } = props
  const showsArray = shows
  console.log('showsList-props', props)
  const filteredShows = showsArray.filter(
    (filteredShow) => filteredShow.tag.toLowerCase() === tag.toLowerCase()
  )

  if (!showsArray) {
    return 'Loading...'
  }
  return (
    <div className="max-h-72 overflow-x-hidden overflow-y-scroll bg-white bg-opacity-10">
      <ul className={classes.list}>
        {filteredShows.map((show) => (
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
        ))}
      </ul>
    </div>
  )
}
