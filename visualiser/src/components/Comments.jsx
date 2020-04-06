import './percentagesAndComments.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Comments extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="Comments">
                    <p> Annotations / Comments: </p>
                    <div>{this.props.annotations}</div>
                </div>
            </div>
        );
    }
}

export default Comments
