import React from 'react';
import VisionLanding from '../components/visionMission/visionLanding';
import CoreValues from '../components/visionMission/coreValues';
import VisionGoals from '../components/visionMission/visionGoals';
import GlobalImpact from '../components/visionMission/globalImpact';

const Page = () => {
  return (
    <div>
      <VisionLanding />
      <CoreValues />
      <VisionGoals />
      <GlobalImpact />
    </div>
  );
};

export default Page;