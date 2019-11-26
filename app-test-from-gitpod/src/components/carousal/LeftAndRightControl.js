import React from 'react'

  //action buttons in carousal 
  const LeftAndRightControl=({setIndex,currentIndex,images,interval})=>{
    return(
        <>
        <a style={{cursor:'pointer'}} onClick={()=>{
            clearTimeout(interval)
            return currentIndex==0?setIndex(images.length-1):setIndex(currentIndex-1)}} className="carousel-control-prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a style={{cursor:'pointer'}} onClick={()=>{
            clearTimeout(interval)
            return currentIndex===(images.length-1)?setIndex(0):setIndex(currentIndex+1)}} className="carousel-control-next">
            <span className="carousel-control-next-icon"></span>
        </a>
        </>
    );
}

export default LeftAndRightControl