import React from "react";
import ArslanAshIMG from "../../assets/img/ArslanAshIMG.svg";
import Course2 from "../../assets/img/course2.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";

var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: ArslanAshIMG,
    name: "James Wiik",
    rating: "5.0",
    // price: "19.99 | 50 min",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    // price: "19.99 | 50 min",
    test: "2",
  },
];

const MyWallet = () => {
  return (
    <>
      <div className="followList"></div>
    </>
  );
};

export default MyWallet;
