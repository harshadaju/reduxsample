import React from 'react'

    //indicators in the carousal
    const Indicators=({images,currentIndex,setIndex})=>{
        return (
        <ul className="carousel-indicators">
            {
                images.map(image=>(
                    <li key={image.id} onClick={()=>setIndex(images.indexOf(image))}  className={images.indexOf(image)===currentIndex?'active':''}></li>
                ))
            }        
        </ul>
      );
    }

    export default Indicators