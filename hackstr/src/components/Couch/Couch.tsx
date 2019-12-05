import React from 'react';
import ReactDOM from 'react-dom';

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
    return <section>
        <img id="CouchImage" src="{couchListing.pictureUrl}" />
        <div><span>Listing Name: </span>{couchListing.id}</div>
        <div><span>Host: </span>{couchListing.userId}</div>
        <div><span>Address: </span>{couchListing.address}</div>
        <div><span>Rental Price: </span>{couchListing.rentPrice}</div>
        <div><span>Description: </span>{couchListing.description}</div>
    </section>
}


export default Couch;
