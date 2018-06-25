import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Art extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
         
    }

    /* function to hide the description of art in a button  */
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    /* funtion to add item to cart  */
    addToCart(item) {
        // console.log(this.props.art[index])
        this.props.addToCart(item)
    }



    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.art.map((item, index) =>
                            <div key={index} className="col-md-4 text-center" id="art">
                                <p><button id="grey">Piece:{item.piece}</button></p> 
                                <img src={item.url} alt="" />
                                <p><button id="ey">Price: $ {item.price}</button></p> 
                                <button onClick={this.addToCart.bind(this, item)} id="des" >Add to cart</button>
                               
                                <div>
                                    <Button color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem'}}>Description</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card>
                                            <CardBody>
                                            <p><button color="secondary">Description:</button> {item.description}</p> 
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Art;


