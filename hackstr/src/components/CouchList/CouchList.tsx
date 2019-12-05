import React, { Component } from 'react';
import './CouchList.css';
import MicroCouch from './MicroCouch';

class CouchList extends Component {

    state = {
        microcouches: ['Danny Boy', 'Pandora', 'Lilith', 'Mars', 'Sierissa'],
        inputField: ''
    }

    render() {
        return (
            <div className="CouchList">
                <table className="table table-dark table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">
                                <h2>PANIC!</h2>
                            </th>
                            <th scope="col">
                                <h2>ATTACK!</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.microcouches.map(
                            villain => {
                                return (
                                    <tr className="Bounty" key={villain}>
                                        <td><MicroCouch>{villain}</MicroCouch></td>
                                        <th scope="row">12/5</th>
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
