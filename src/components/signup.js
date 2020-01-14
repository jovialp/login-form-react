import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.dataHandler = this.dataHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    dataHandler(e) {
        let na = e.target.name;
        let va = e.target.value;
        this.setState({
            [na]: va
        });
    }
    onSubmitHandler(e) {
        e.preventDefault();
        const body = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(body);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h3>Sign Up Form</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <form method="post" onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" name="username" onChange={this.dataHandler} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Rate of Interest</label>
                                <input type="password" name="password" onChange={this.dataHandler} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Register" className="btn btn-warning" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;