import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            UserName: "",
            PassWord: "",
            isLoggedIn: false
        }
    }


    onSubmit() {        // Function to Clear input fields
        this.setState({
            firstName: "",
            lastName: "",
            UserName: "",
            PassWord: "",
            isLoggedIn: true
        })

    }

    render() {
        return (
            <Form>
               
            
            <div id="see">
                {this.state.isLoggedIn && <Redirect to="/myaccount" />}
                <h2>Sign In</h2>

                 <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <input type="text" className="form-control" value={this.state.firstName} onChange={(event) => { this.setState({ firstName: event.target.value }) }} placeholder="firstname" />
                </FormGroup>

            
                <FormGroup>
                    <Label for="lastname"> Last Name</Label>
                    <input type="text" className="form-control" value={this.state.lastName} onChange={(event) => { this.setState({ lastName: event.target.value }) }} placeholder="lastname" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="UserName"> UserName</Label>
                    <input type="text" className="form-control" value={this.state.UserName} onChange={(event) => { this.setState({ UserName: event.target.value }) }} placeholder="username" />
                </FormGroup>

                <FormGroup>
                    <Label for="PassWord"> PassWord</Label>
                    <input type="text" className="form-control" value={this.state.PassWord} onChange={(event) => { this.setState({ PassWord: event.target.value }) }} placeholder="password"/>
                </FormGroup>
                

                <button className="btn btn-primary float-right" onClick={this.onSubmit.bind(this)}> Sign In! </button>

            </div>
            </Form>
          )
    }
}



export default Login;