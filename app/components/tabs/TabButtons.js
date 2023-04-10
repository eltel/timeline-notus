"use client";

import { v4 as uuidv4 } from "uuid";

export default function TabButtons({ buttons, changeTab, activeTab, label }) {
  return (
    <div className="tab-buttons overflow-x-hidden text-white">
      {buttons.map((button) => {
        return (
          <button
            // className={button === activeTab ? 'active' : ''}
            className={`rounded py-2 px-4 ${
              // button === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              button === activeTab ? "text-white" : "text-gray-700"
            }`}
            onClick={() => changeTab(button)}
            key={uuidv4()}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

/* This functional component takes in three props: buttons, changeTab, and activeTab. It renders a div with a class of tab-buttons and maps over the buttons array to render a button for each element. The className of the button is set to 'active' if the button prop matches the activeTab prop. Finally, the onClick handler of the button calls the changeTab prop function with the button prop as an argument. */

/* const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? 'active' : ''}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        )
      })}
    </div>
  )
} */
