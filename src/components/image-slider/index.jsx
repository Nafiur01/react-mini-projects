import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, page, limit }) => {
  const [Image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ErrorMsg, SetErrorMsg] = useState(null);
  const [Loading, SetLoading] = useState(false);

  const fetchImages = async (url) => {
    try {
      SetLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        SetLoading(false);
        throw new Error("Could not fetch the data");
      } else {
        const data = await response.json();
        setImage(data);
        SetLoading(false);
      }
    } catch (e) {
      SetErrorMsg(e.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(Image);

  if (Loading) {
    return <h2>Loading...</h2>;
  }
  if (ErrorMsg !== null) {
    return <h2>Error Occured! : {ErrorMsg}</h2>;
  }

  const HandlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? Image.length - 1 : currentSlide - 1);
  };

  const HandleNext = () => {
    setCurrentSlide(currentSlide === Image.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => HandlePrevious()}
      />
      {Image && Image.length
        ? Image.map((item, index) => (
            <img
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => HandleNext()}
      />
      <span className="circle-indicators">
        {Image && Image.length
          ? Image.map((item, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
