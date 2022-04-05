import React from "react";
import logo from "./../Home/macbook.jpg";
import "./Home.css";
import useReviews from "./../../Hooks/useReviews";
import ShowThree from "./../ShowThree/ShowThree";
import { Link } from "react-router-dom";

const Home = () => {
  const [datas, setDatas, three] = useReviews();
  return (
    <div>
      <div className="home-container">
        <div className="text-container">
          <h1>Your MacBook Next Generation</h1>
          <h1>
            <span className="red-text">Your MacBook Next Generation</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            natus, laudantium nihil, itaque molestias accusantium voluptas
            perferendis est, odit debitis atque. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nisi, illum. Sed blanditiis laborum
            aliquam ipsam ducimus eos nostrum reiciendis dicta saepe porro?
          </p>

          <button>
            <a href="#">Purchase Now</a>
          </button>
        </div>
        <div className="image-container">
          <img src={logo} alt="" width={650} />
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Customer Reviews
      </h1>
      <div className="three">
        {three.map((items) => (
          <ShowThree data={items}></ShowThree>
        ))}
      </div>
      <button className="show-all-reviews">
        <Link to="/reviews" className="redirect">
          See All Reviews
        </Link>
      </button>
    </div>
  );
};

export default Home;
