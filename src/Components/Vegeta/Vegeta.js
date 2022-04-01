import React, { Component } from 'react';
import vegeta from './vegeta.png';
import './vegeta.css';

class Vegeta extends Component {

    state = {
        bg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render() {

        return (
            <div className={`col ${this.state.bg}`}>
                <img
                    src={vegeta}
                    alt='Vegeta'
                    className='vegeta'
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Vegeta;