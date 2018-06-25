import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// Main React File
import Container from './components/container';
import './components/styles/styles.css';

// React World: <Container />, Connection to html on right
ReactDOM.render(
    <BrowserRouter>
    <Container />
    </BrowserRouter>, document.getElementById("example"));