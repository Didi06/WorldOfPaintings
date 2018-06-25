import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItem: true,
            total: 0
        }
    }

    /*function to remove item to cart  */
    removeItem (index) {
        this.props.removeItem(index)
        showItem: false
    }

    /* function to calculate total of items in the cart*/
    componentDidMount() {
        let tempTotal = 0;
        for( var item of this.props.items) {
            tempTotal += item.price

        }
        this.setState({
            total: tempTotal
        })
    }

    render() {
        return (
            <div className="see row" >
                {
                    this.props.items.map((item, index) =>
                        <div key={index} className="col-md-6 text-center" id="car">
                            <p><button id="grey">Piece:{item.piece}</button></p> 
                            <p><button color="secondary">Description:</button> {item.description}</p> 
                            <img src={item.url} alt="" />
                            <p><button id="ey">Price: $ {item.price}</button></p> 
                            <button onClick={this.removeItem.bind(this, index)} id="rem">Remove Item</button>
                        </div>
                )}
                <div id="tot row">
                <button className="button">Total: ${this.state.total}</button>
                    <button>Check Out</button>
                </div>

            </div>
        )
    }
}

export default Cart;