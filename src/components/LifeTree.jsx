import { Card, Button, Carousel, Container, Tabs, Tab} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductCard from './products/ProductCard';
import axios from "axios";

function LifeTree() {
    const [ProductsBig, setBigLifeTrees] = useState([])
    const url = "https://localhost:44321/MilhieCreation/UnderCategory/1" 
    // axios request to get tournaments
    const getBigLifeTrees =()=>{
      axios
          .get(url)
          .then((res)=> setBigLifeTrees(res.data))
          .catch((error) => {
              console.error(error);
            });   
  }
    useEffect(() => {
      getBigLifeTrees();
    }, [])
    
    const [ProductsMedium, setMediumLifeTrees] = useState([])
    const urlMedium = "https://localhost:44321/MilhieCreation/UnderCategory/2" 
    // axios request to get tournaments
    const getMediumLifeTrees =()=>{
      axios
          .get(urlMedium)
          .then((res)=> setMediumLifeTrees(res.data))
          .catch((error) => {
              console.error(error);
            });   
  }
    useEffect(() => {
      getMediumLifeTrees();
    }, [])

    const [ProductsSmall, setSmallLifeTrees] = useState([])
    const urlSmall = "https://localhost:44321/MilhieCreation/UnderCategory/3" 
    // axios request to get tournaments
    const getSmallLifeTrees =()=>{
      axios
          .get(urlSmall)
          .then((res)=> setSmallLifeTrees(res.data))
          .catch((error) => {
              console.error(error);
            });   
  }
    useEffect(() => {
      getSmallLifeTrees();
    }, [])
    return (
        <Container fluid className="m-3">
            <h1 className="titlePages"><img src="https://milhiecreation.milhie.fr/images/ico_epingle.png" alt=""/> Arbres de vie</h1>
        <Tabs defaultActiveKey="bigLifeTree" id="uncontrolled-tab-example" >
            <Tab eventKey="bigLifeTree" title="Grands" className="border">
                <Container fluid className="m-0">
                    <Container fluid className="d-flex flex-wrap justify-content-center">
                        
                        {ProductsBig.map((product) => (
                            <ProductCard
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            link={product.link}
                            reference={product.reference}
                            images={product.images}
                            />
                            ))}
                    </Container>
                </Container>
            </Tab>
            <Tab eventKey="mediumLifeTree" title="Moyens" className="border">
                <Container fluid className="m-0">
                    <Container fluid className="d-flex flex-wrap justify-content-center">
                        
                        {ProductsMedium.map((product) => (
                            <ProductCard
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            link={product.link}
                            reference={product.reference}
                            images={product.images}
                            />
                            ))}
                    </Container>
                </Container>
            </Tab>
            <Tab eventKey="smallLifeTree" title="Petits" className="border">
                <Container fluid className="m-0">
                    <Container fluid className="d-flex flex-wrap justify-content-center">
                        
                        {ProductsSmall.map((product) => (
                            <ProductCard
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            link={product.link}
                            reference={product.reference}
                            images={product.images}
                            />
                            ))}
                    </Container>
                </Container>
            </Tab>
        </Tabs>
        </Container>
    );}


export default LifeTree;