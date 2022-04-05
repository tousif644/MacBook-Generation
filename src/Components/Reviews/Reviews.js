import Review from "./../Review/Review";
import "./Reviews.css";
import useReviews from "./../../Hooks/useReviews";

const Reviews = () => {
  const [datas, setDatas] = useReviews();
  return (
    <div>
      <h1 className="review-header">Reviews given by our Customer</h1>
      <div className="reviews">
        {datas.map((data) => (
          <Review data={data}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
