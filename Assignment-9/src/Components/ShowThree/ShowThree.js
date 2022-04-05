import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ShowThree.css";

const ShowThree = (props) => {
  const { name, description, Rating } = props.data;
  return (
    <div className="each-three">
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

export default ShowThree;
