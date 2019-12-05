import './CouchList.css';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import "./CouchList.css";
import MicroCouch from "./MicroCouch";
import { getListings } from "../../http/Listing";

interface Istate {
    microcouches: any[];
    inputField: string
}
class CouchList extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            microcouches: [{ address: "Robert C" }, { address: "The Steve" }, { address: "Carolyn" }, { address: "Ravi" }],
            inputField: ""
        };
    }
    async componentDidMount() {
        const listing = await getListings();
        console.log(listing);
        listing !== [] ? this.setState({ microcouches: listing }) : console.log(false);
    }
    state: Istate;

    render() {
        return (
            <div className="CouchList">
                <div className="row">
                    <div className="col-3">
                        <div className="filterSection curveEdge hidden">
                            <h2> working</h2>
                        </div>
                    </div>
                    <div className="col-9">
                        <table className="table curveEdge bg hidden">
                            <thead>
                                <tr id="customHeaderRow curveEdge">
                                    <th scope="col">
                                        <h2>Couch Listings</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.microcouches.map((villain, index) => {
                                    return (
                                        <tr className="customRows" key={index}>
                                            <td>
                                                <Link to="/couch/:id">
                                                    <MicroCouch>{villain.address}</MicroCouch>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    /* getInputField = () =>{
          return this.state.inputField;
      }
  
      inputFieldChanged = (event) =>{
          this.setState({
              inputField: event.target.value
            });
      }
  
      addVillain = (event) => {
          if (event.preventDefault)
              event.preventDefault();
          else
              event.returnValue = false;
      
          this.state.bounties.push(this.state.inputField);
          this.setState({bounties: this.state.bounties});
      } */
}

export default CouchList;
