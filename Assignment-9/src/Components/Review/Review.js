import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Review.css";
const Review = (props) => {
  const { name, description, Rating } = props.data;
  return (
    <div className="review">
      <h4>Name : {name}</h4>
      <p>
        <b>Review :</b> {description}
      </p>
      <p>
        <b>I will give : </b>
        {Rating}{" "}
        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
      </p>
    </div>
  );
};

export default Review;
