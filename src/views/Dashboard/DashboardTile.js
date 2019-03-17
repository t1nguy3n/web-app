import React from 'react';

export default class DashboardTile extends React.Component {
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
            width: 400,
            height: 350
        };
        const viz = new tableau.Viz(vizContainer, url, options);
    }

    render() {
        return (
            <div
                className="tableau-embed-container"
                ref={(div) => {
                    this.vizContainer = div;
                }}
            />
        )
    }
}