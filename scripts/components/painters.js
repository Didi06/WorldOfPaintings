import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Painters extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };


    }

    /* function to hide the bio of artist to a collapsible button  */
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.artists.map((artist, index) =>
                            (<div key={index} className="col-md-4 text-center" id="try">
                                <p id="artists"><button id="grey">Artist: {artist.name}</button></p> 
                                <img src={artist.image} alt="" />
                                <p id="artists"><button id="gr">Nationality: {artist.nationality}</button> </p> 
                                <p id="artists"><button id="gry">Birthday: </button> {artist.birthday}</p>
                                <p id="artists"><button id="rey">Deathday:</button> {artist.deathday}</p> 
                                <p id="artists"><button id="ey">Notable Work:</button> {artist.work}</p>
                                <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Biography</Button>
                                <Collapse isOpen={this.state.collapse}>
                                    <Card>
                                        <CardBody>
                                        {artist.biography}
                                        </CardBody>     
                                    </Card>
                                </Collapse>
                                



                            </div>)
                        )

                    }

                </div>
            </div>
        )
    }
}

export default Painters;