import React from "react";
import Landing from "./components/home/Landing";
import Business from "./components/home/bussiness";
import HowWorks from "./components/home/howWork";

export default function Home() {
  return <div>
    <Landing/>
    <Business/>
    <HowWorks/>
  </div>;
}
