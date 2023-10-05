import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="btn-Group d-flex justify-content-center mb-5">
                    <Button className='m-3' variant="outline-success" onClick={() => setFilter(data)}>All</Button>
                    <Button className='m-3' variant="outline-success" onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
                    <Button className='m-3' variant="outline-success" onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
                    <Button className='m-3' variant="outline-success" onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                    <Button className='m-3' variant="outline-success" onClick={() => filterProduct("electronics")}>Electronics</Button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <Card style={{ width: '18rem' }} className='col-m-3 m-2 text-center p-4' key={product.id}>
                                <Card.Img variant="top" src={product.image} height="250px" className='card-img-top'/>
                                <Card.Body>
                                    <Card.Title>{product.title.substring(0,12)}</Card.Title>
                                    <p>${product.price}</p>
                                    <Button className='m-3' variant="outline-success">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </>
        )

    }
    return (
        <div>
            <Container className='my-5 py-5'>
                <Row>
                    <Col className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>
                            Latest Products
                        </h1><hr />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {loading ? <loading /> : <ShowProducts />}
                </Row>
            </Container>
        </div>
    )
}