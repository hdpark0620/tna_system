import React, { Component } from 'react';
import { Clock } from '../module/Clock';
import { Form, Button} from 'react-bootstrap';

export class TimeCheckPage extends Component {

  // 생성자 추가
  constructor(props) {
      super(props)
      this.state = {mode: null, date: null}
      this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-8 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <Form className="pt-3" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <Clock date={this.state.date}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="template-demo d-sm-flex justify-content-center flex-nowrap">
                    <Button name="start_date" onClick={() => this.setState({mode: 1, date : new Date().toLocaleString()})} type="submit" className="btn btn-primary">
                      <i className="fa fa-clock-o mr-2"></i>출 근
                    </Button>
                    <Button name="end_date" onClick={() => this.setState({mode: 2, date : new Date().toLocaleString()})} type="submit" className="btn btn-secondary">
                      <i className="fa fa-history mr-2"></i>퇴 근
                    </Button>
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

export default TimeCheckPage
