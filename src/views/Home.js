import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { withAuth } from '@okta/okta-react';

import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    changePage = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="header">
                <div onClick={() => this.changePage("/page1")} className="header-item">
                    <i className="fas fa-chart-line fa-2x" />&nbsp;
                    Dashboard
                </div>
                <div onClick={() => this.changePage("/page2")} className="header-item">
                    <i className="fas fa-briefcase fa-2x" />&nbsp;
                    Jobs
                </div>
                <div onClick={() => this.changePage("/page3")} className="header-item">
                    <i className="fas fa-user-circle fa-2x" />&nbsp;
                    Profile
                </div>
            </div>
        );
    }
};

export default withRouter(Home);