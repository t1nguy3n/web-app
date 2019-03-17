import React from 'react';

export default class DashboardExpanded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const url = this.props.url;
        const vizContainer = this.vizContainer;
        const options = {
            hideTabs: true,
            hideToolbar: true,
            width: 1200,
            height: 600
        };
        const viz = new tableau.Viz(vizContainer, url, options);
    }

    render() {
        return (
            <div className="tab-expand-container">
                <span onClick={() => this.props.close()}>CLICK TO CLOSE</span>
                <div
                    className="tableau-embed-container"
                    ref={(div) => {
                        this.vizContainer = div;
                    }}
                />
            </div>
        )
    }
}