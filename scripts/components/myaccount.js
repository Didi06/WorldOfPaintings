import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import axios from 'axios';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,
         };
    }

    /* axios call to render user profile image  */
    componentDidMount() {
        axios.get(`https://pixabay.com/get/ea34b2082afc093ed1584d05fb1d4f95e670e5d710ac104497f9c87da5efb3b0_1280.jpg`)
            .then(response => {
                console.log(response);
            })
    }

    /* function to hide contact us info */
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {
        return (
            <div id="my">
                <h2>My  Account</h2>
                <img src="https://pixabay.com/get/ea34b2082afc093ed1584d05fb1d4f95e670e5d710ac104497f9c87da5efb3b0_1280.jpg" alt="" id="img1" />
                <div>
                    <p id="contactus">Account Details</p>
                    <p id="contactus">Change Account Information</p>
                    <p id="contactus">Contact Us</p>
                    <p id="contactus">Frenquly Asked Questions</p>
                    <p id="contactus">Write Review</p>
                </div>
                <div id="contactus">
                    <Button color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Contact Us</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <p id="contactus">Contact Us</p>
                                <p id="contactus">Phone: 310.555.6666</p>
                                <p id="contactus"> 1234 Main St, Los Angeles, CA 90005</p>
                                <p id="contactus">Email: worldOfPaintings@painters.com</p>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div >
        )
    }
}

export default MyAccount;