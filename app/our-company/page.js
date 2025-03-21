import React from "react";
import CompanyLanding from "../components/company/companyLanding";
import OurMission from "../components/company/ourMission";
import WhyChooseUs from "../components/company/whyChooseUs";
import OurTeam from "../components/company/ourTeam";

export default function Company() {
  return (
    <div>
      <CompanyLanding />
      <OurMission />
      <WhyChooseUs />
      <OurTeam />
    </div>
  );
}
