import React from 'react'
import './style.css'
import {Carousel,Row,Col} from 'react-bootstrap'
import ImageIndicatorList from './leftsideindicator'
import useCarousalHooks from './useCarousalCustomHook'

const Carousal=({images})=> {
const [index,direction,handleSelect]=useCarousalHooks(images);
  return (
      <Row>
        <Col xs={3} md={3} lg={2} className='leftIndicator' >
            <ImageIndicatorList images={images} handleSelect={handleSelect} index={index}/>
        </Col>
        <Col xs={9} md={9} lg={10}>
        <div className="carousal-container">
            <Carousel activeIndex={index} direction={direction} interval={6000} onSelect={handleSelect}>
            {images.map(image=>(
                <Carousel.Item key={image.id}>
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
        </Col>
    </Row>
  );
}

export default Carousal