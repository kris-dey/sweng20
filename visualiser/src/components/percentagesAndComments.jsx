import './percentagesAndComments.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';


class Categories extends React.Component {
    render() {
        return (
            <header className="Categories">
                <div>{this.props.titles}</div>
            </header>
        );
    }
}



class Data extends React.Component {
    render() {
        let k = 1;

        const filtered = this.props.CArray.filter(n => n => 0);
        const items = filtered.map(n => <div>Area {k++}</div>)

        const filtered1 = this.props.CArray.filter(n => n => 0);
        const items1 = filtered1.map(n => <div>{n}%</div>)

        const filtered2 = this.props.BArray.filter(n => n => 0);
        const items2 = filtered2.map(n => <div>{n}%</div>)

        const filtered3 = this.props.HArray.filter(n => n => 0);
        const items3 = filtered3.map(n => <div>{n}%</div>)

        return (
            <body className="Data">
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
            </body>
        );
    }
}

class Comments extends React.Component {
    render() {
        return (
            <body className="Comments">
                <p> Annotations / Comments: </p>
                <div>{this.props.annotations}</div>
            </body>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Categories
                    titles="Cancerous Benign Healthy"
                />
                <Data
                    CArray={[93, 4, 37, 20]}
                    BArray={[0, 13, 44, 30]}
                    HArray={[7, 83, 19, 50]}
                />
                <Comments
                    annotations=" *Enter comments here* "
                />
            </div>
        )
    }
}

export default App;
