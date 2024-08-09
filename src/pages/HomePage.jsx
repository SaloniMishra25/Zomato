import React, { useState } from "react";

import Header from "../components/common/header/Header";
import Options from "../components/common/tabOptions/Options";
import Footer from "../components/common/footer/Footer";
import Delivery from "../components/delivery/Delivery";
import DiningOut from "../components/diningOut/DiningOut";
import NightLife from "../components/nightLife/NightLife";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <Header />
      <Options activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out": // Corrected case label
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
