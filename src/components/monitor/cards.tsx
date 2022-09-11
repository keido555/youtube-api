import { useState } from "react";
import { Division } from "./divisionCard";
import Monitor from "./monitorCard";
import { Select } from "./selectCard";
import Slideshow from "./slideshowCard";

export const Cards = () => {
  const [monitor, setMonitor] = useState(false);
  const [slide, setSlide] = useState(false);
  const [division, setDivision] = useState(false);

  const handleBackBtn = () => {
    setMonitor(false);
    setSlide(false);
    setDivision(false);
  };

  return (
    <div>
      <div onClick={handleBackBtn} className="backBtn">
        戻る
      </div>
      {monitor == false && slide == false && division == false ? (
        <Select
          monitor={monitor}
          setMonitor={setMonitor}
          slide={slide}
          setSlide={setSlide}
          division={division}
          setDivision={setDivision}
        />
      ) : monitor == true && slide == false && division == false ? (
        <Monitor />
      ) : monitor == false && slide == true && division == false ? (
        <Slideshow />
      ) : monitor == false && slide == false && division == true ? (
        <Division />
      ) : null}
    </div>
  );
};
