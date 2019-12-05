import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './CreateCouch.css';
import { Container, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';


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
        this.setState({address: event.target.value})
    }

    updateRent(event: any) {
        this.setState({rentPrice: event.target.value})
    }

    updateDescription(event: any) {
        this.setState({description: event.target.value})
    }

    updateImage(event: any) {
        this.setState({pictureUrl: event.target.value})
    }

    render(){
        return (<section id="CreateCouchSection" >
            <form onSubmit={CreateListing}>
                <FormGroup>
                    <label>Address
                    </label>
                    <input id="CCAddress" type="Text" onChange={this.updateAddress}>
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Rental Cost
                    </label>
                    <input id="CCRentPrice" type="Decimal" onChange={this.updateRent}>
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Description
                    </label>
                    <input id="CCDescription" type="TextArea" onChange={this.updateDescription}>
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Image URL
                    </label>
                    <input id="CCImage" type="Text" onChange={this.updateImage}>
                    </input>
                </FormGroup>
                <button id="CreateCouchButton" color="Primary">Create Listing</button>

            </form>
    </section>)
    }
}



export default CreateCouch;
