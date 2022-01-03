import React, { useRef, useEffect, useState } from "react";
import styles from "./TourMap.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXVsaXZlciIsImEiOiJja3hpcTUyb3kwcGUxMnF1YmsxdDg3Yjc0In0.oufo7fOyUryDNlWlUEJ4CA";

const TourMap = ({ latLng }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(latLng[1]);
  const [lat] = useState(latLng.at(0));
  const [zoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className={styles.map}>
      <div ref={mapContainer} className={styles["map-container"]} />
    </div>
  );
};

export default TourMap;
