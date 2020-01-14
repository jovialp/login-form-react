import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.userHandler = this.userHandler.bind(this);
        this.pwdHandler = this.pwdHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    userHandler(e) {
        this.setState({
            username: e.target.value
        });
    }
    pwdHandler(e) {
        this.setState({
            password: e.target.value
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
                        <h3>Login Form</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <form method="post" onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" onChange={this.userHandler} value={this.state.username} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Rate of Interest</label>
                                <input type="password" onChange={this.pwdHandler} value={this.state.password} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;