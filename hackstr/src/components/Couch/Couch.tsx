import React from 'react';
import ReactDOM from 'react-dom';
import './Couch.css';
import { Container, Col, Row } from 'reactstrap';


let couchListing = {
    id: '',
    userId: '',
    address: '',
    rentPrice: 0,
    isActive: false,
    description: '',
    pictureUrl: ''
}

const Couch = (props: any) => {
    return <section id="CouchSection" >
        <Container>
        <Row>
        <Col><img id="CouchImage" src="{couchListing.pictureUrl}" /></Col>
        <Col><span className="Label">Listing Name: </span>{couchListing.id}</Col>
        </Row>
        <Row>
        <div><span className="Label">Host: </span>{couchListing.userId}</div>
        <div><span className="Label">Address: </span>{couchListing.address}</div>
        </Row>
        <div><span className="Label">Rental Price: </span>{couchListing.rentPrice}</div>
        <div><span className="Label">Description: </span>{couchListing.description}</div>
        <div><button id="CouchButton" color="Primary">Contact Host</button></div>
        </Container>
    </section>
}


export default Couch;
