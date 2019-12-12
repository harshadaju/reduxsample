import React from 'react'
import Carousal from '../../carousal/index'
import images from '../../json-data/images'
import Card from '../../cards/cards'
import {Row,Col} from 'react-bootstrap'
const Home=()=>{
    return(
        <div id="Home" className="container-fluid">
            <Carousal images={images}/>        
            <Row>
                {/* <hr /> */}
                <Card title="Regarding" />
            </Row>
        </div>
    );
}

export default Home