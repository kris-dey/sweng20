import './percentagesAndComments.css';
import React from 'react';
// import { render } from '@testing-library/react';

class Categories extends React.Component {
    render() {
        return (
            <header className="Categories">
                <div><b>{this.props.titles}</b></div>
            </header>
        );
    }
}

class Percentages extends React.Component {
    render() {
        let k = 1;

        const filtered = this.props.CArray.filter(n => n => 0);
        const items = filtered.map(n => <div><b>ROI {k++}</b></div>)

        const filtered1 = this.props.CArray.filter(n => n => 0);
        const items1 = filtered1.map(n => <div>&ensp;{n}%</div>)

        const filtered2 = this.props.BArray.filter(n => n => 0);
        const items2 = filtered2.map(n => <div>&ensp;{n}%</div>)

        const filtered3 = this.props.HArray.filter(n => n => 0);
        const items3 = filtered3.map(n => <div>&emsp;&ensp;{n}%</div>)

        return (
            <div className="Container">
                <Categories
                    titles="&emsp;&emsp;Cancerous &emsp;Benign &emsp;Healthy"
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
