import React, { Component } from 'react';
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
    pictureUrl: 'https://via.placeholder.com/400x90.png'
}

export class Couch extends Component {
    render(){
        return (<section id="CouchSection" >
        <Container>
        <Row>
        <Col><img id="CouchImage" src="{couchListing.pictureUrl}" /></Col>
        <Col><span className="Label">Listing Name: </span>{couchListing.id}</Col>
        </Row>
        <Row>
        <Col><span className="Label">Host: </span>{couchListing.userId}</Col>
        <Col><span className="Label">Address: </span>{couchListing.address}</Col>
        </Row>
        <Row>
        <Col><span className="Label">Rental Price: </span>{couchListing.rentPrice}</Col>
        </Row>
        <Row>
        <Col><span className="Label">Description: </span>{couchListing.description}</Col>
        </Row>
        <div><button id="CouchButton" color="Primary">Contact Host</button></div>
        </Container>
        
    </section>)
    }
}



export default Couch;
