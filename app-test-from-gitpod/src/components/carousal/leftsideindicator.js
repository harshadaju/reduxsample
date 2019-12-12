import React from 'react'
import './style.css'

const ImageIndicatorList=({images})=>{
    return <ul className='left-side-indicator-container'>
        {images.map(image=><li key={image.id}><img src={image.urls.regular} alt={image.alt_description} width="120%" height="125" style={{objectFit:'cover',border:'1px solid white'}} /></li>)}
    </ul>
}

export default ImageIndicatorList