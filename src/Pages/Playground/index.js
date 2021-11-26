import React, { useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
} from "swiper";
/* import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; */
import "swiper/swiper-bundle.min.css";
/* import Banana from "Assets/images/banana.png"; */
import QrReader from "react-qr-reader";

SwiperCore.use([
  Navigation,
  Autoplay,
  Pagination,
  EffectFade,
  FreeMode,
  Thumbs,
]);

const Playground = () => {
  return (
    <div className="flex-center w-screen h-screen">
      {/* <Carousel /> */}
      <QrScanner />
    </div>
  );
};

/* const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper thumbs={{ swiper: thumbsSwiper }}>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper}>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="banana" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}; */

const QrScanner = () => {
  const [result, setResult] = useState("No Result");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
      <h1>Hey</h1>
    </div>
  );
};

export default Playground;
