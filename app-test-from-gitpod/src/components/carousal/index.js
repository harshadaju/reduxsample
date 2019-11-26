import React from 'react'

export default function Carousal({images}){

return <div>{images.map(image=>(
    <img key={image.id} src={image.urls.regular} />
))}</div>
}