import React, { useState } from "react";
import { RegistrationInterface } from "../../interfaces";
import { RegistrationPage } from "../RegistrationPage";
import { LoginPage } from "../LoginPage";

export const Home = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };
  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <RegistrationPage onNextClick={gotoNext} />;
      case 1:
        return <LoginPage />;
      default:
        return <RegistrationPage onNextClick={gotoNext} />;
    }
  };
  return (
    <div className="flex justify-center items-center lg:py-20 lg:px-20 formPage">
    <div className="bg-white lg:px-10 py-7 rounded-[10px] w-full form-group ">
     {renderCurrentSelection()}
    </div>
    </div>
  );
};
