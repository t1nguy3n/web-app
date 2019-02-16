import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
        const buttonClassname = (pageName) => this.props.location.pathname == pageName
            ? "header-item header-item-active"
            : "header-item";

        return (
            <div className="header">
                <div onClick={() => this.changePage("/dashboard")} className={buttonClassname("/dashboard")}>
                    <i className="fas fa-chart-line fa-2x" />&nbsp;
                    Dashboard
                </div>
                <div onClick={() => this.changePage("/jobs")} className={buttonClassname("/jobs")}>
                    <i className="fas fa-briefcase fa-2x" />&nbsp;
                    Jobs
                </div>
                <div onClick={() => this.changePage("/page3")} className={buttonClassname("/page3")}>
                    <i className="fas fa-user-circle fa-2x" />&nbsp;
                    Profile
                </div>
            </div>
        );
    }
};

export default withRouter(Home);