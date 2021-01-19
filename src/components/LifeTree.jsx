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
        <Container fluid className="m-auto">
            <h1 className="titlePages"><i class="fas fa-paperclip"></i> <span style={{textDecoration:'underline'}}>Arbres de vie</span></h1>
        <Tabs defaultActiveKey="bigLifeTree" id="uncontrolled-tab-example" >
            <Tab eventKey="bigLifeTree" title="Grands" className="border">
                <Container fluid className="m-0">
                    <Container fluid className="d-flex flex-wrap justify-content-around">
                        
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
                    <Container fluid className="d-flex flex-wrap justify-content-around">
                        
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
                    <Container fluid className="d-flex flex-wrap justify-content-around">
                        
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