import './CouchList.css';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import "./CouchList.css";
import MicroCouch from "./MicroCouch";
import { getListings } from "../../http/Listing";
import { start } from 'repl';

interface Istate {
    microcouches: any[];
    selectedmicrocouches: any[];
    inputField: string;
}
class CouchList extends Component {
    constructor(props: any) {
        super(props);
        const startingArray = [{ address: "Name: Robert C\t\tCity: Tampa"},{ address: "Name: Trevin C\t\tCity: Tampa" }, { address: "Name: The Steve\t\tCity: Steveton Town" }, { address: "Name: Carolyn\t\tCity: Reston" }, { address: "Name: Ravi\t\tCity: Reston" }];
        this.state = {
            microcouches: startingArray,
            selectedmicrocouches: startingArray,
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
                            <h3> Filter Selection</h3>
                            <input type="text" placeholder=" filter field"
                            onChange= {(event)=>{this.state.inputField=event.target.value}}></input>
                            <button id="filterButton" className= "btn btn-info btn-sm" onClick={this.inputFieldChanged}>Trigger Filter</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <table className="table curveEdge listbg hidden">
                            <thead>
                                <tr id="customHeaderRow curveEdge">
                                    <th scope="col">
                                        <h2>Couch Listings</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.selectedmicrocouches.map((villain, index) => {
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

    getInputField = () =>{
          return this.state.inputField;
      }
  
      inputFieldChanged = () =>{
           /*  inputFieldTemp: String = event.target.value.toLocaleLowerCase(); */

          /* this.setState({
              inputField: event.target.value
            }); */
            console.log(this.state.inputField);


            this.setState({
                selectedmicrocouches:
                    this.state.inputField ? this.state.microcouches.filter(
                        (couches) => couches.address
                        .toLocaleLowerCase()
                        .indexOf(this.state.inputField.toLocaleLowerCase())
                        !== -1) : this.state.microcouches
                    
            });

      }
  
      /* addVillain = (event) => {
          if (event.preventDefault)
              event.preventDefault();
          else
              event.returnValue = false;
      
          this.state.bounties.push(this.state.inputField);
          this.setState({bounties: this.state.bounties});
      }  */
}

export default CouchList;
