import { useState } from "react";

import { ImgArea } from "src/components/monitor/area/imgArea";
import { ButtonArea } from "src/components/monitor/area/buttonArea";

const Monitor = () => {
  const [isClickImg1, setIsClickImg1] = useState(false);
  const [isClickImg2, setIsClickImg2] = useState(false);
  const [isClickImg3, setIsClickImg3] = useState(false);

  const isClick =
    isClickImg1 == true || isClickImg2 == true || isClickImg3 == true;

  return (
    <div>
      <h3>Monitor</h3>
      <ButtonArea
        isClickImg1={isClickImg1}
        isClickImg2={isClickImg2}
        isClickImg3={isClickImg3}
        setIsClickImg1={setIsClickImg1}
        setIsClickImg2={setIsClickImg2}
        setIsClickImg3={setIsClickImg3}
      />
      {isClick ? (
        <ImgArea
          isClickImg1={isClickImg1}
          isClickImg2={isClickImg2}
          isClickImg3={isClickImg3}
          setIsClickImg1={setIsClickImg1}
          setIsClickImg2={setIsClickImg2}
          setIsClickImg3={setIsClickImg3}
        />
      ) : null}
    </div>
  );
};

export default Monitor;
