import React from 'react'
import Card from 'react-bootstrap/Card';
import SiteNav from './SiteNav';


export default function Home() {
    return (
        <div className='hero'>
            <SiteNav />
            <Card className=" text-white border0">
                <Card.Img src="/assets/E-mart2.jpg" alt="Card image" height="550px" />
                <Card.ImgOverlay>
                    <Card.Title className='display-5 fw-bolder mb-0 mt-2'>NEW SEASON ARRIVAL</Card.Title>
                    <Card.Text className='card-text lead fs-2'>
                        <p>CHECK OUT ALL THE TRENDS</p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}
