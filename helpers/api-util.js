export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-course-35116-default-rtdb.firebaseio.com/events.json'
  )
  const data = await response.json()

  const events = []

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    })
  }
  return events
}

export async function getFeaturedShows() {
  const allShows = await getAllEvents()
  return allShows.filter((show) => show.isFeatured)
}

export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find((show) => show.id === id)
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  const allEvents = await getAllEvents()

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}
