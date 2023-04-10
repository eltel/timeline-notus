"use client";

import { useState } from "react";
import TabButtons from "./TabButtons";

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  // console.log("tabs", children);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  let content;
  let buttons = [];

  children.forEach((child) => {
    buttons.push(child.props.label);
    if (child.props.label === activeTab) content = child.props.children;
  });

  const child = children.map((child) => child);
  // console.log("TabsChild", child.index);

  return (
    <div className="max-h-[1800px] overflow-x-hidden  rounded-md bg-slate-900/70 p-4 backdrop-blur-sm">
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content relative w-full overflow-scroll">
        {content}
      </div>
    </div>
  );
}

/* class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  }
  changeTab = (tab) => {
    this.setState({ activeTab: tab })
  }
  render() {
    let content
    let buttons = []
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}

        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
        <div className="tab-content">{content}</div>
      </div>
    )
  }
} */
