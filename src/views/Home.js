import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./Home.css";

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const MenuItem = withRouter(({ history }) => {
            <div onClick={() => history.push("/page1")} className="header-item">Home</div>
        });

        return (
            <div className="header">
                {MenuItem}
                <div className="header-item">Page 2</div>
                <div className="header-item">Page 3</div>
            </div>
        );
    }
});