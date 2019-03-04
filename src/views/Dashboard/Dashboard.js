import React from 'react';

import './Dashboard.css';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            local: true
        };
    }

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const url = 'https://us-east-1.online.tableau.com/t/group5project/views/EducationView/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';
        const vizContainer = this.vizContainer;
        const options = {
            hideTabs: true,
            hideToolbar: true,
            width: window.screen.availWidth - 100,
            height: window.screen.availHeight - 200
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