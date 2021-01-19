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
            <Card className="m-0 my-3 m-lg-3 pt-3 shadow" id="cardItem" >
                <Card.Title><h2 className="p-0 mx-2">{title}</h2></Card.Title>
                <Card.Text className="m-0 p-0">{disponibility ? "Disponible" : "Sur commande"}</Card.Text>
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
                    <Card.Text className="p-0 m-0">
                        <p>
                            {description}
                        <br/><br/>
                            Prix: {price}€
                        <br/>
                            {disponibility ? "Disponible" : "Sur commande"}</p>
                        <Button variant="primary" href={link}>link </Button>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {reference}
                </Card.Footer>
            </Card>
    );
  };
  
  export default ProductCard;
  