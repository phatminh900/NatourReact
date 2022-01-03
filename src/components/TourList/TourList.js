import React from "react";
import { useSelector } from "react-redux";

import Tour from "../Tour/Tour";
const TourList = () => {
  const { tours } = useSelector((state) => state.tours);

  const tourItem = tours.map((tour) => {
    const ratingQuantity = tour["rating-quantity"];
    return <Tour ratingQuantity={ratingQuantity} key={tour.id} {...tour} />;
  });

  return <ul className="grid-3-columns">{tourItem}</ul>;
};

export default TourList;
