import React from 'react';
import ReactDOM from 'react-dom';
import './Couch.css';


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
        <img id="CouchImage" src="{couchListing.pictureUrl}" />
        <div><span className="Label">Listing Name: </span>{couchListing.id}</div>
        <div><span className="Label">Host: </span>{couchListing.userId}</div>
        <div><span className="Label">Address: </span>{couchListing.address}</div>
        <div><span className="Label">Rental Price: </span>{couchListing.rentPrice}</div>
        <div><span className="Label">Description: </span>{couchListing.description}</div>
        <div><button id="CouchButton" type="button">Contact Host</button></div>
    </section>
}


export default Couch;
