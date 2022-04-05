import { useEffect, useState } from "react";
const useReviews = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  let three = datas.slice(0, 3).map((item) => item);
  return( [datas, setDatas,three]);
};

export default useReviews;
