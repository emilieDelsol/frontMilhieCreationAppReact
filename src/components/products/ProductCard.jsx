import { Card, Button, Carousel, Container} from 'react-bootstrap';

const ProductCard = ({
    title,
    price,
    disponibility,
    description,
    reference,
    link,
    images = [
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg",
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg",
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg",
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg",
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg",
      "http://www.milhiecreation.com/images/arbres/arbre01.jpeg"
    ]
  }) => {
    return (
            <Card className="m-0 my-3 m-lg-5 shadow" id="cardItem" >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{disponibility ? "Disponible" : "Sur commande"}</Card.Text>
                
                <Carousel className="m-4" interval='1000000'slide='false'>
                {images.map(image =>
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
                            {description}
                        </p>
                        <p>
                            Prix: {price}€
                        </p>
                        <p>{disponibility ? "Disponible" : "Sur commande"}</p>
                    </Card.Text>
                    <Button variant="primary" href={link}>link </Button>
                </Card.Body>
                <Card.Footer>
                    {reference}
                </Card.Footer>
            </Card>
    );
  };
  
  export default ProductCard;
  