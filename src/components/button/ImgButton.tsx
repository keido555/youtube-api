import React, { useState, useRef } from "react";
import Image from "next/image";
import imageConverterStyles from "src/components/button/ImageConverter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

interface Props {
  displayedImages: any;
  setDisplayedImages: any;
}

export type DisplayedImage = {
  url: string;
  size: string;
};

const ImgButton: React.FC<Props> = (props: any) => {
  const { displayedImages, setDisplayedImages } = props;

  const inputRef = useRef<HTMLElement | any>(null!);
  //   const [displayedImages, setDisplayedImages] = useState<DisplayedImage[]>([]);
  const [success, setSuccess] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatFileSize = (bytes: number, decimalPoint: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1000;
      const dm = decimalPoint || 2;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    if (event.currentTarget.files != null) {
      const files = event.currentTarget.files;
      setDisplayedImages(
        Array.from(files).map((file) => {
          return {
            url: window.URL.createObjectURL(file),
            size: formatFileSize(file.size, 1),
          };
        })
      );
    }
  };

  const ClickFireUploadBtn = () => {
    setSuccess(false);
    inputRef.current.click();
  };

  return (
    <div className={imageConverterStyles.ImageConverter}>
      <label>
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          multiple={true}
          ref={inputRef}
          hidden
        />
        <button onClick={ClickFireUploadBtn}>
          <FontAwesomeIcon style={{ width: "50px" }} icon={faImage} />
        </button>
      </label>
      <ul>
        {displayedImages.map((displayedImage: any, index: number) => {
          return (
            <li key={`${index}-li`}>
              <div style={{ width: "300px" }}>
                <img src={displayedImage.url} alt="img" key={`${index}-img`} />
              </div>
              <p>{displayedImage.size}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImgButton;

// https://qiita.com/FumioNonaka/items/4f0fc65975eed5b89c0c
