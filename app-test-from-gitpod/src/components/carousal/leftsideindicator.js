import React from 'react'
import './style.css'

const ImageIndicatorList=({images})=>{
    return <ul className='left-side-indicator-container'>
        {images.map(image=><li><img src={image.urls.regular} width="110%" height="120" style={{objectFit:'cover',border:'1px solid white'}} /></li>)}
    </ul>
}

export default ImageIndicatorList