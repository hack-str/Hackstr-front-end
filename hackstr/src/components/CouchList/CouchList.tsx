import React, { Component } from 'react';
import './CouchList.css';
import MicroCouch from './MicroCouch';
import { Link } from 'react-router-dom';

class CouchList extends Component {

    state = {
        microcouches: ['Petronilo-senpai', 'Robert C', 'The Steve', 'Carolyn', 'Ravi'],
        inputField: ''
    }

    render() {
        return (
            <div className="CouchList">
                <table className="table curveEdge bg hidden">
                    <thead>
                        <tr id="customHeaderRow curveEdge">
                            <th scope="col">
                                <h2>Couch Listings</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.microcouches.map(
                            villain => {
                                return (
                                    <tr className="customRows" key={villain}>
                                            <Link to="/couch/:id">
                                        <td><MicroCouch>{villain}</MicroCouch></td>
                                        </Link>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>

                {/* <form onSubmit={this.addVillain}>
                    <div className="form-group">
                        <label >Add a villain</label>
                        <input value= {this.getInputField()} onChange= {this.inputFieldChanged} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
            </div>
        )
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
