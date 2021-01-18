import React from "react";

import { Card, Container} from 'react-bootstrap';
import products from './products/Products';
function Home() {

    return (
        <Container fluid >

        <Container fluid className="d-flex flex-wrap m-auto justify-content-center">

        {products.map((product) => (
            <Card className="bg-dark text-white m-4"style={{ width: '18rem', height:'18rem', background:`url(${product.image})`,backgroundSize:'cover'}}>
                <Card.Body className="w-100">
                    <Card.Title class="btn m-auto" style={{color:'white',  backgroundColor:'rgba(0,0,0,0.5)'}} ><a href={product.link} style={{color:'white'}}> {product.title}</a></Card.Title>
                </Card.Body>
            </Card>
        ))}
        </Container>
        </Container>

    );}


export default Home;