import React from 'react'
import { useParams } from 'react-router-dom'
import TourDetails from '../components/TourDetails/TouOverView'
const TourDetailsPage = () => {
    const {tourTitle}=useParams()
    // const tours
    // const correctTour=
    return (
      <TourDetails />
    )
}

export default TourDetailsPage
