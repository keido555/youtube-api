import { FC, useState } from "react";

interface Props {
  isClickImg1: boolean;
  isClickImg2: boolean;
  isClickImg3: boolean;
  setIsClickImg1: any;
  setIsClickImg2: any;
  setIsClickImg3: any;
}

export const ButtonArea: FC<Props> = (props: any) => {
  const {
    isClickImg1,
    isClickImg2,
    isClickImg3,
    setIsClickImg1,
    setIsClickImg2,
    setIsClickImg3,
  } = props;

  const handleClickImg1 = () => {
    setIsClickImg1(!isClickImg1);
    setIsClickImg2(false);
    setIsClickImg3(false);
  };
  const handleClickImg2 = () => {
    setIsClickImg1(false);
    setIsClickImg2(!isClickImg2);
    setIsClickImg3(false);
  };
  const handleClickImg3 = () => {
    setIsClickImg1(false);
    setIsClickImg2(false);
    setIsClickImg3(!isClickImg3);
  };

  return (
    <div>
      <p>以下よりお選びください</p>
      <div>
        <button className="imageButton" onClick={handleClickImg1}>
          画像：1
        </button>
        <button className="imageButton" onClick={handleClickImg2}>
          画像：2
        </button>
        <button className="imageButton" onClick={handleClickImg3}>
          画像：3
        </button>
      </div>
    </div>
  );
};
