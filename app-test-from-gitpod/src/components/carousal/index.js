import React,{useState} from 'react'
import './style.css'
import {Carousel} from 'react-bootstrap'

const Carousal=({images})=> {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
      <div className="carousal-container">
        <Carousel activeIndex={index} direction={direction} interval={6000} onSelect={handleSelect}>
        {images.map(image=>(
            <Carousel.Item>
            <img
            className="d-block w-100 carousal-container"
            src={image.urls.regular}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>{image.id}</h3>
            <p>{image.alt_description}</p>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
}

export default Carousal