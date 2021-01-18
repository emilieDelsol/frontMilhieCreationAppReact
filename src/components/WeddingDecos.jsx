import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import ProductCard from './products/ProductCard';
function WeddingDecos() {
    const [Products, setProducts] = useState([])
    const url = "https://localhost:44321/MilhieCreation/UnderCategory/6" 
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
        <Container fluid className="m-0">
          <h1 className="titlePages"><img src="https://milhiecreation.milhie.fr/images/ico_epingle.png" alt=""/>Décorations de mariage</h1>
          <Container fluid className="d-flex flex-wrap justify-content-center">
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


export default WeddingDecos;