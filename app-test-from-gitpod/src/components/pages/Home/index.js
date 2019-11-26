import React from 'react'
import Carousal from '../../carousal/index'
import images from '../../json-data/images'
import Card from '../../cards/cards'
import {Row,Col} from 'react-bootstrap'
import ImageIndicatorList from '../../carousal/leftsideindicator'
const Home=()=>{
    return(
        <div className="container-fluid">
        <Row className='test'>
            <Col >
                <ImageIndicatorList images={images} />
            </Col>
            <Col >
            <Carousal images={images}/>
            </Col>            
        </Row>
        <Row>
            {/* <hr /> */}
            <Card title="Regarding" />
        </Row>
        </div>
    );
}

export default Home