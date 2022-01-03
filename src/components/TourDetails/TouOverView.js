import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./TourOverView.css";
import TourMap from "./TourMap";
import TourTestimonial from "./TourTestimonial";
import TourBooking from "./TourBooking";
import TourHeading from "./TourHeading";
import TourDetails from "./TourDetails";
import TourImgBox from "./TourImgBox";
const TouOverView = () => {
  const { tours } = useSelector((state) => state.tours);
  const { tourTitle } = useParams();
  const tourRef = useRef();

  const optionsObs = useMemo(() => {
    return {
      root: null,
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    if (!tourRef.current) return;
    const obs = new IntersectionObserver((entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      const target = entry.target;
      target.classList.add("open");
      if (target.classList.contains("open")) observer.unobserve(target);
    }, optionsObs);
    const tourChildren = Array.from(tourRef.current.children).slice(1);
    tourChildren.forEach((tour) => {
      obs.observe(tour);
    });
  });

  const correctTour = tours.find((tour) => {
    const transformSegment = tourTitle.split("-").join("");
    const transformTourTitle = tour.title.toLowerCase().split(" ").join("");
    return transformSegment === transformTourTitle;
  });
  if (!correctTour) return <></>;

  const tourId = correctTour.id;

  return (
    <section ref={tourRef} className="tour-overview">
      <TourHeading
        location={correctTour.location}
        tourId={tourId}
        title={correctTour.title}
      />
      <TourDetails
        tourGuides={correctTour.tourGuides}
        tourId={tourId}
        title={correctTour.title}
        date={correctTour.title}
        difficulty={correctTour.difficulty}
        possiblePeople={correctTour.possiblePeople}
        rating={correctTour.rating}
      />
      <TourImgBox tourId={tourId} />
      <TourMap latLng={correctTour.latLng} />
      <TourTestimonial />
      <TourBooking
        title={correctTour.title}
        days={correctTour.days}
        tour={correctTour}
      />
    </section>
  );
};

export default TouOverView;
