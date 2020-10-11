import React, { Component } from 'react';
import { Schedule } from '../module/Schedule';
import { Form} from 'react-bootstrap';

export class TimeSheetPage extends Component {

  // 생성자 추가
  constructor(props) {
      super(props)

      var day = new Date();
      this.state = {date: day, month: day.getMonth() + 1, mode: "1"};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeMonth = this.changeMonth.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( this.state )
    };
    alert(JSON.stringify( this.state ));
    return false;
  }

  changeMonth(event, cal) {
    event.preventDefault();
    
    var day = this.state.date;
    if (cal === 1) {
      day.setMonth(day.getMonth() - 1);
    } else {
      day.setMonth(day.getMonth() + 1);
    }
    this.setState({date: day, month: day.getMonth() + 1 , mode: "2"});
    console.log("date:"+ day);
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-sm-8 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <div className="row">
                    <div className="col-md-3">
                      <div className="icons-list">
                        <div> 
                          <i className="fa fa-angle-left" onClick={event => this.changeMonth(event, 1)}/>
                          <i className="fa"><h4>{this.state.month}</h4></i>
                          <i className="fa fa-angle-right" onClick={event => this.changeMonth(event, 2)}/>
                        </div>
                      </div>
                    </div>
                </div>
                <Form className="pt-3" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <Schedule schedule={this.state}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeSheetPage
