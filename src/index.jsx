import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Header from './js/components/Header';
import './scss/base.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    sampleFetch() {
        // fetch('/_data/fares.json')
        //   .then((response) => {
        //     return response.json()
        //   }).then((json) => {
        //     this.setState({ faresData: json });
        //   });
    }

    render() {
        return (
            <Header />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#content'));
