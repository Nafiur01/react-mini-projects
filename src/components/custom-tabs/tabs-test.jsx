import React from "react";
import Tabs from "./tabs";

const RandomComponent = () => {
  return <h2>this is some random component</h2>;
};

const TabsTest = () => {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for tab1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for tab2</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];

  const HandleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={HandleChange} />;
};

export default TabsTest;
