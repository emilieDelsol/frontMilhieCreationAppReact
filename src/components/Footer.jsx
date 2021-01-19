import React from "react";
import { Card, Container, Button} from 'react-bootstrap';

function Footer() {

    return (
        <footer class="border-top footer text-muted">
        <Container fluid class="d-flex justify-content-between">
            <div class="d-inline-flex"> 
                <p>&copy; 2021 - Milhie création - </p> 
                <p><a href="/privacy">Privacy</a> </p>
            </div> 
            <div class="d-flex flex-row mx-auto justify-content-between col-3"> 
                <p class="ml-2 mr-2">
                    <a href="/"><i class="fab fa-twitter"></i></a>
                </p>
                <p class="ml-2 mr-2">
                    <a href="/"><i class="fab fa-facebook"></i></a>
                </p>
                <p class="ml-2 mr-2">
                    <a href="/"><i class="fab fa-instagram"></i></a>
                </p>
                <p class="ml-2 mr-2">
                    <a href="/"><i class="fab fa-youtube"></i></a>
                </p>
            </div>
        </Container>
    </footer>
    );}


export default Footer;