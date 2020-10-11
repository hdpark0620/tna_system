import React, { Component } from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import './schedule.css';

export class Schedule extends Component {

    /**
     * The constructor for a React component is called before it is mounted. 
     * When implementing the constructor for a React.Component subclass, 
     * you should call super(props) before any other statement. 
     * Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.state = {date : null , products : null}
    }

    /**
     * getDerivedStateFromProps is invoked right before calling the render method, 
     * both on the initial mount and on subsequent updates.
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return {
            date: props.date,
            products: calrenderModel(props.schedule.date)
        };
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.state.products} striped hover trClassName={trClassFormat} >
                    <TableHeaderColumn isKey dataField='id' width="10%" headerAlign="center" >date</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width="10%" headerAlign="center" >day</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' width="40%" headerAlign="center" >start time</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' width="40%" headerAlign="center" >end time</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' width="40%" headerAlign="center" >end time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

function trClassFormat(rowData,rowIndex) {
    return rowData.etc % 7 === 0 || rowData.etc % 7 === 1 ? "tr-odd" : "tr-even"; // return a class name.
}

function calrenderModel(today) {
    let weekend = ["일","월","화","수","목","금","토"];
    let calrender = [];
    var day = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    for (var date = 1; date <= lastDate.getDate(); date++) {
        calrender.push({
            id: date,
            name: weekend[day++],
            price: 120,
            etc: day
        });

        if (day === 7) {
            day = 0;
        }
    } 
    return calrender;
}