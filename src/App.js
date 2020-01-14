import React, { Component } from 'react';
import Cform from './components/Cform';
import SimpleInt from './components/SimpleInt';
import Login from './components/login';
import Signup from './components/signup';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { view: false };
    this.viewHandler = this.viewHandler.bind(this);
  }
  viewHandler(e) {
    this.setState({
      view: !this.state.view
    });
  }
  render() {
    const myView = this.state.view ? <Login /> : <Signup />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 jumbotron text-center">
            <h1>React Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 well">
            <div className="form-group">
              <label htmlFor="">Check it</label>
              <input type="checkbox" onChange={this.viewHandler} name="" id="" className="checkbox" />
            </div>
          </div>
        </div>
        {myView}
      </div>
    );
  }

}

export default App;
