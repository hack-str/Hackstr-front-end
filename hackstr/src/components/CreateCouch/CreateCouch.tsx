import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './Couch.css';
import { Container, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';


let couchListing = {
    id: '',
    userId: '',
    address: '',
    rentPrice: 0,
    isActive: false,
    description: '',
    pictureUrl: 'https://via.placeholder.com/400x90.png'
}


export class CreateCouch extends Component {

    render(){
        return (<section id="CreateCouchSection" >
            <form>
                <FormGroup>
                    <label>Host
                    </label>
                    <output>{couchListing.userId}</output>
                </FormGroup>
                <FormGroup>
                    <label>Address
                    </label>
                    <input type="Text">
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Rental Cost
                    </label>
                    <input type="Decimal">
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Description
                    </label>
                    <input type="TextArea">
                    </input>
                </FormGroup>
                <FormGroup>
                    <label>Image URL
                    </label>
                    <input type="Text">
                    </input>
                </FormGroup>
                <button id="CreateCouchButton" color="Primary">Create Listing</button>

            </form>
    </section>)
    }
}



export default CreateCouch;
