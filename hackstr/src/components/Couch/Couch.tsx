import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './Couch.css';
import { Container, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Button } from 'reactstrap';


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

    constructor(props: any){
        super(props);
        this.state = {active: false};
    }
    state:{active:boolean};
    togglevalue!: boolean;
 
    toggle = () => { 
        this.togglevalue = this.state.active;
        this.setState({active: !this.state.active});
    }

    render(){
        return (<section id="CouchSection" >
        <Container>
        <Row>
        <Col><img id="CouchImage" src="{couchListing.pictureUrl}" /></Col>
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
        <div><button id="CouchButton" color="Primary" onClick={this.toggle}>Contact Host</button></div>
        </Container>
        
        <Modal isOpen={this.state.active} toggle={this.toggle}>
            <ModalHeader>
                Submit a message to this host.
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Input id="couchSubmission" type="textarea">
                        
                    </Input>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="Secondary" onClick={this.toggle}>Cancel</Button>
                <Button id="SubmitEmail" color="Primary" onClick={this.toggle}>Send Message</Button>
            </ModalFooter>
        </Modal>
        
    </section>)
    }
}



export default Couch;
