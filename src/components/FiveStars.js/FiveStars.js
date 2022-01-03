import React from 'react'
import StarIcon from '../Icon/StarIcon'

const FiveStars = () => {
    const fiveStarts=Array.from({length:5},(_,i)=><StarIcon key={i} />)
    return (
        <>
         {fiveStarts}   
        </>
    )
}

export default FiveStars
