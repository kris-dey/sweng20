import React, { Component, PropTypes } from 'react';

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import App from './App'


export default class Export extends Component {
    constructor(props) {
        super(props);
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({ orientation: 'l' });
                pdf.addImage(imgData, 'JPEG', 0, 0, 192 * 2, 108 * 2);
                pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }

    render() {
        return (<div>
            <div className="mb5">
                <button onClick={this.printDocument}>Print</button>
            </div>
            <div id="divToPrint" className="mt4">
                <App />
            </div>
        </div>);
    }
}
