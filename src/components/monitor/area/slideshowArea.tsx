import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Image from "next/image";
import image1 from "./public/87833581_p0.jpg";
import image2 from "./public/88542296_p0.jpg";
import image3 from "./public/88725956_p0.jpeg";
import image4 from "./public/88291859_p0.png";
import image5 from "./public/98879978_p0.png";
import image6 from "./public/99103144_p0.jpeg";
import image7 from "./public/E1fFDZvVoAYAHP1.jpeg";

export const SlideshowArea = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} className="imageArea_item">
            <Image style={{ width: "100%" }} src={each} alt="images" />
          </div>
        ))}
      </Zoom>
    </div>
  );
};
