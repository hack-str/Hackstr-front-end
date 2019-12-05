import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        name: ""
    };

    render() {
        return (
            <div className="Login bg">
                <div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12"></div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <form className="form-container backgroundcolor">
                                <div className="form-group">
                                    <h2>User Login</h2>
                                    <label >Email address</label> <input
                                        type="email" className="form-control" id="exampleInputEmail1"
                                        placeholder="Email"></input>
                                </div>
                                <div className="form-group">
                                    <label >Password</label> <input
                                        type="password" className="form-control" id="exampleInputPassword1"
                                        placeholder="Password"></input>
                                </div>
                                    <button type="submit" className="btn btn-info btn-block">Submit</button>
				</form>
			</div>
                            <div className="col-md-4 col-sm-4 col-xs-12"></div>
                        </div>
                    </div>>
      </div>
                );
            }
        }
        
        export default Login;
