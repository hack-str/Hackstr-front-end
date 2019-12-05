import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './CreateCouch.css';
import { Container, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button, Form } from 'reactstrap';


let couchListing = {
    id: '',
    userId: '',
    address: '',
    rentPrice: 0,
    isActive: false,
    description: '',
    pictureUrl: ''
}

function CreateListing() {
    
}


export class CreateCouch extends Component {
    constructor(props: any){
        super(props);
        this.state = couchListing;
    }

    updateAddress(event: any) {
        //this.setState({address: event.target.value})
    }

    updateRent(event: any) {
        //this.setState({rentPrice: event.target.value})
    }

    updateDescription(event: any) {
       // this.setState({description: event.target.value})
    }

    updateImage(event: any) {
       // this.setState({pictureUrl: event.target.value})
    }

    render(){
        return (<div id="formpage"><div className="col-6" >
            <Form id="form" onSubmit={CreateListing}>
                <FormGroup>
                    <Label for="CCAddress">Address</Label>
                    <Input id="CCAddress" type="text" onChange={this.updateAddress}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="CCRentPrice">Rental Cost
                    </Label>
                    <Input id="CCRentPrice" type="number" onChange={this.updateRent}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="CCDescription">Description
                    </Label>
                    <Input id="CCDescription" type="textarea" onChange={this.updateDescription}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="CCImage">Image URL
                    </Label>
                    <Input id="CCImage" type="text" onChange={this.updateImage}>
                    </Input>
                </FormGroup>
                <Button id="CreateCouchButton" color="Primary">Create Listing</Button>

            </Form>
    </div>
    </div>)
    }
}



export default CreateCouch;
