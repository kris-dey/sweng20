import './percentagesAndComments.css';
import React from 'react';
// import { render } from '@testing-library/react';

class Comments extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="Comments">
                    <p><b>Annotations / Comments:</b></p>
                    <div>{this.props.annotations}</div>
                </div>
            </div>
        );
    }
}

export default Comments
