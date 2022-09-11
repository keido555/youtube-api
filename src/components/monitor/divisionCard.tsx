import { useState } from "react";
import { DivisionArea } from "./area/divisionArea";
import { TrisectArea } from "./area/trisectArea";

export const Division = () => {
  const [fourDiv, setFourDiv] = useState(false);
  const [nineDiv, setNineDiv] = useState(false);

  const handleFourDiv = () => {
    setFourDiv(!fourDiv);
    setNineDiv(false);
  };
  const handleNineDiv = () => {
    setFourDiv(false);
    setNineDiv(!nineDiv);
  };

  return (
    <div>
      <h3>division</h3>
      <p>4分割か9分割かお選びください</p>
      <div>
        <button className="imageButton" onClick={handleFourDiv}>
          4分割
        </button>
        <button className="imageButton" onClick={handleNineDiv}>
          9分割
        </button>
      </div>
      <div>{fourDiv == true ? <DivisionArea /> : null}</div>
      <div>{nineDiv == true ? <TrisectArea /> : null}</div>
    </div>
  );
};
