import './percentagesAndComments.css';
import React from 'react';
// import { render } from '@testing-library/react';

class Categories extends React.Component {
    render() {
        return (
            <header className="Categories">
                <div>{this.props.titles}</div>
            </header>
        );
    }
}

class Percentages extends React.Component {
    render() {
        const items = this.props.Labels.map(e => <div>Area {e}</div>)

        const filtered1 = this.props.CArray.filter(n => n => 0);
        const items1 = filtered1.map(n => <div>{n}%</div>)

        const filtered2 = this.props.BArray.filter(n => n => 0);
        const items2 = filtered2.map(n => <div>{n}%</div>)

        const filtered3 = this.props.HArray.filter(n => n => 0);
        const items3 = filtered3.map(n => <div>{n}%</div>)

        return (
            <div className="Container">
                <Categories
                    titles="Cancerous Benign Healthy"
                />
                <div className="Data">
                    <div className="AreaNames">
                        {items}
                    </div>
                    <div className="CancerData">
                        {items1}
                    </div>
                    <div className="BenignData">
                        {items2}
                    </div>
                    <div className="HealthyData">
                        {items3}
                    </div>
                </div>
            </div>
        );
    }
}

export default Percentages
