import React, { Component } from 'react';

class Cform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.userHandler = this.userHandler.bind(this);
    }
    userHandler(event) {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <form action="">
                            <div className="form-group">
                                <label>Enter Name</label>
                                <input type="text" onChange={this.userHandler} value={this.state.username} className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 alert alert-success">
                        <h3>{this.state.username}</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cform;