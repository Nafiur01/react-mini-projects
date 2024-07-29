import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

const StarRating = ({ NoOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const HandleClick = (CurrentIndex) => {
    // console.log(CurrentIndex);
    setRating(CurrentIndex);
  };
  const HandleMouseEnter = (CurrentIndex) => {
    // console.log(CurrentIndex);
    setHover(CurrentIndex);
  };
  const HandleMouseLeave = (CurrentIndex) => {
    // console.log(CurrentIndex);
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(NoOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating)? 'active' : 'inactive' }
            onClick={() => HandleClick(index)}
            onMouseMove={() => HandleMouseEnter(index)}
            onMouseLeave={() => HandleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
