import { FC, useState } from "react";

interface Props {
  monitor: boolean;
  setMonitor: any;
  slide: boolean;
  setSlide: any;
  division: boolean;
  setDivision: any;
}

export const Select: FC<Props> = (props: any) => {
  const { monitor, setMonitor, slide, setSlide, division, setDivision } = props;

  const handleClickMonitor = () => {
    setMonitor(!monitor);
  };
  const handleClickSlide = () => {
    setSlide(!slide);
  };
  const handleClickDivision = () => {
    setDivision(!division);
  };

  return (
    <div className="select_moni">
      <h3>Select</h3>
      <p>お選びください</p>
      <div className="select_btn">
        <button onClick={handleClickMonitor} className="select_moni_btn">
          モニター
        </button>
        <button onClick={handleClickSlide} className="select_slide_btn">
          スライドショー
        </button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleClickDivision} className="select_division_btn">
          分割画面
        </button>
      </div>
    </div>
  );
};
