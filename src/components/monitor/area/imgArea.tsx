import { FC, useState } from "react";

import Image from "next/image";
import image1 from "./public/87833581_p0.jpg";
import image2 from "./public/88542296_p0.jpg";
import image3 from "./public/88725956_p0.jpeg";

interface Props {
  isClickImg1: boolean;
  isClickImg2: boolean;
  isClickImg3: boolean;
  setIsClickImg1: any;
  setIsClickImg2: any;
  setIsClickImg3: any;
}

export const ImgArea: FC<Props> = (props: any) => {
  const {
    isClickImg1,
    isClickImg2,
    isClickImg3,
    setIsClickImg1,
    setIsClickImg2,
    setIsClickImg3,
  } = props;

  const handlePrevClick = () => {
    if (isClickImg1 == true) {
      setIsClickImg1(!isClickImg1);
      setIsClickImg3(!isClickImg3);
    } else if (isClickImg2 == true) {
      setIsClickImg2(!isClickImg2);
      setIsClickImg1(!isClickImg1);
    } else if (isClickImg3 == true) {
      setIsClickImg3(!isClickImg3);
      setIsClickImg2(!isClickImg2);
    }
  };
  const handleNextClick = () => {
    if (isClickImg1 == true) {
      setIsClickImg1(!isClickImg1);
      setIsClickImg2(!isClickImg2);
    } else if (isClickImg2 == true) {
      setIsClickImg2(!isClickImg2);
      setIsClickImg3(!isClickImg3);
    } else if (isClickImg3 == true) {
      setIsClickImg3(!isClickImg3);
      setIsClickImg1(!isClickImg1);
    }
  };

  return (
    <div>
      <div className="imageArea">
        <div className="circle_btn_area">
          <button onClick={handlePrevClick} className="circle_btn">
            <p>←</p>
          </button>
        </div>
        {isClickImg1 == true ? (
          <div className="imageArea_item">
            <Image src={image1} alt="image" style={{ width: "100%" }} />
          </div>
        ) : isClickImg2 == true ? (
          <div className="imageArea_item">
            <Image src={image2} alt="image" style={{ width: "100%" }} />
          </div>
        ) : isClickImg3 == true ? (
          <div className="imageArea_item">
            <Image src={image3} alt="image" style={{ width: "100%" }} />
          </div>
        ) : null}
        <div className="circle_btn_area">
          <button onClick={handleNextClick} className="circle_btn">
            <p>→</p>
          </button>
        </div>
      </div>
    </div>
  );
};
