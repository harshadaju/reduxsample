import React from 'react'
import {Card,Button} from 'react-bootstrap'
// import images from '../json-data/images'

export default function CardsItem (props){
    return(
        <Card >
        {/* <Card.Img variant="top" src={images[0].urls.regular} /> */}
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}