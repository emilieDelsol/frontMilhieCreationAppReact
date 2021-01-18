import { Card, Button, Carousel, Container} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import axios from "axios";

function LifeTree() {
    const [LifeTrees, setLifeTrees] = useState([])
    const url = "https://localhost:44321/MilhieCreation/Category/1" 
    // axios request to get tournaments
    const getLifeTrees =()=>{
      axios
          .get(url)
          .then((res)=> setLifeTrees(res.data))
          .catch((error) => {
              console.error(error);
            });   
  }
    useEffect(() => {
      getLifeTrees();
    }, [])
    return (
        <Container fluid className="m-0">

            <h1>Arbres de vie</h1>
        <Container fluid className="d-flex flex-wrap justify-content-center">
            {LifeTrees.map(item =>
          
          <Card className="m-0 m-lg-5" id="cardItem" >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.disponibility ? "Disponible" : "Sur commande"}</Card.Text>
                
                <Carousel className="m-4" interval='10000'slide='false'>
               {item.images.map(image =>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image}
                    alt="slide"
                    />
                    
                </Carousel.Item>
                )}
                </Carousel>
                <Card.Body>
                    <Card.Text>
                        <p>
                            {item.description}
                        </p>
                        <p>
                            Prix: {item.price}€
                        </p>
                        <p>{item.disponibility ? "Disponible" : "Sur commande"}</p>
                    </Card.Text>
                    <Button variant="primary" href={item.link}>link </Button>
                </Card.Body>
                <Card.Footer>
                    {item.reference}
                </Card.Footer>
            </Card>
        )}
        </Container>
        </Container>
    );}


export default LifeTree;