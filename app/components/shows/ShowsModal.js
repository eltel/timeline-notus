import { useState } from 'react'

export default function ShowsModal(props) {
  const [showModal, setShowModal] = useState(false)
  const trackList = props.showDetails
  const tracklistArray = trackList.split(',')
  const title = props.title
  return (
    <>
      <button
        className="ml-6 mb-1 mt-4 self-start rounded bg-gray-500 px-2 py-1 text-sm uppercase uppercase text-white text-yellow-500 shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-200 hover:text-blue-600 hover:shadow-lg focus:outline-none active:bg-gray-300 dark:hover:text-blue-400"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Tracklist
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto overflow-y-auto p-3 outline-none focus:outline-none phone:m-6">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col overflow-x-auto overflow-y-auto rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between overflow-x-auto overflow-y-auto rounded-t border-b border-solid p-5">
                  <h3 className="mt-12 text-3xl font-semibold text-black">{title} Tracklist</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative max-h-72 flex-auto overflow-x-auto overflow-y-auto p-6 text-gray-500">
                  {/* <p className="my-4 text-black text-lg leading-relaxed">{trackList}</p> */}
                  <ol>
                    {tracklistArray.map((tracklist) => (
                      <li type="1" key={tracklist.index}>
                        {tracklist}
                      </li>
                    ))}
                  </ol>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-gray-400 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-gray-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}
