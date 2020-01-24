import React from 'react'
import './style.css'

const ImageIndicatorList=({images,handleSelect,index})=>{
    const imgStyle={objectFit:'cover',border:'1px solid white'}
    const selectedImgStyle={objectFit:'cover',border:'1px solid white',opacity:'0.3'}

    return <ul className='left-side-indicator-container'>
    {images.map(image=>(
        <li onClick={()=>handleSelect(images.indexOf(image),undefined)} key={image.id} style={{cursor:'pointer'}}>
            <img  
            src={image.urls.regular} 
            alt={image.alt_description} width="120%" height="125" 
            style={images.indexOf(image)==index?selectedImgStyle:imgStyle} />
        </li>))}
        </ul>
}

export default ImageIndicatorList