import React, { Component } from 'react';

export class Clock extends Component {
  
    _isMounted = false;
    
	  // 생성자 추가
    constructor(props) {
        super(props)
        this.state = {date: new Date().toLocaleString()}
    }

    componentDidMount() {
      this._isMounted = true;

      setInterval(() => {
        if (this._isMounted) {
          this.setState({
            date : new Date().toLocaleString()
          })
        }
      }, 1000)
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    
    render() {
        return (
            <div>
                <h1>Current Time</h1>
                <h2>It's {this.state.date}</h2>
            </div>
        )
    }
}