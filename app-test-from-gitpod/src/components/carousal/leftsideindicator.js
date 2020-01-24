import React from 'react'
import './style.css'

const ImageIndicatorList=({images,handleSelect,index})=>{
    return <ul className='left-side-indicator-container'>
    {images.map(image=>(
        <li onClick={()=>handleSelect(index,undefined)} key={image.id} style={{cursor:'pointer'}}>
            <img  src={image.urls.regular} alt={image.alt_description} width="120%" height="125" style={{objectFit:'cover',border:'1px solid white'}} />
        </li>))}
        </ul>
}

export default ImageIndicatorList