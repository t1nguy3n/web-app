import React from 'react';

import Tile from './DashboardTile';

import './Dashboard.css';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            local: true
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="tableau-flexbox">
                <div className="tableau-flex-container">
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet3?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet4?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Softwarewithjobboard?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item">
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/LangAvgs/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                </div>
            </div>
        );
    }
}