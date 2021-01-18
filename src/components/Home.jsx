import React from "react";

import { Card, Container} from 'react-bootstrap';
import products from './products/Products';
function Home() {

    return (
        <Container fluid >

        <h1>Home</h1>
        <Container fluid className="d-flex flex-wrap m-auto">

        {products.map((product) => (
            <Card className="bg-dark text-white m-4"style={{ width: '18rem', height:'auto'}}>
                <Card.Img src={product.image} alt="" style={{ width: '100%'}} className="m-auto"/>
                <Card.ImgOverlay className="w-100">
                    <Card.Title class="btn m-auto" style={{color:'white', backgroundColor:'rgba(0,0,0,0.5)'}} >{product.title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        ))}
        </Container>
        </Container>

    );}


export default Home;