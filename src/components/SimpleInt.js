import React, { Component } from 'react';

class SimpleInt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p: 1000,
            r: 2.5,
            t: 1
        };
        this.userPrHandler = this.userPrHandler.bind(this);
        this.userRtHandler = this.userRtHandler.bind(this);
        this.userTmHandler = this.userTmHandler.bind(this);
    }
    userPrHandler(e) {
        this.setState({
            p: e.target.value
        })
    }
    userRtHandler(e) {
        this.setState({
            r: e.target.value
        })
    }
    userTmHandler(e) {
        this.setState({
            t: e.target.value
        })
    }
    render() {
        const { p, r, t } = this.state;
        const rate = r / 100;
        const total = p * (1 + rate * t);
        const si = total - p;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <form action="">
                            <div className="form-group">
                                <label>Principal Amout</label>
                                <input type="number" onChange={this.userPrHandler} value={this.state.p} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="number" onChange={this.userRtHandler} value={this.state.r} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="number" onChange={this.userTmHandler} value={this.state.t} className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 alert alert-success">
                        <h3>Total Value = {total}</h3>
                        <h3>Simple Interest = {si}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleInt;