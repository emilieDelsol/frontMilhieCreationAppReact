import React, { useEffect, useState } from 'react';
import { Card, Button, Carousel, Container} from 'react-bootstrap';
import axios from "axios";

import ProductCard from "./products/ProductCard";

function Jewerly() {
    const [Products, setProducts] = useState([])
    const url = "https://localhost:44321/MilhieCreation/Category/3" 
    // axios request to get tournaments
    const getProducts =()=>{
      axios
          .get(url)
          .then((res)=> setProducts(res.data))
          .catch((error) => {
              console.error(error);
            });   
  }
    useEffect(() => {
      getProducts();
    }, [])


    return (
        <Container fluid className="m-auto">
          <h1 className="titlePages"><i class="fas fa-paperclip"></i> <span style={{textDecoration:'underline'}}>Bijoux</span></h1>
          <Container fluid className="d-flex flex-wrap justify-content-around">
              {Products.map((product) => (
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
    );}



export default Jewerly;