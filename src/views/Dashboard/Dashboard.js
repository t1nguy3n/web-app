import React from 'react';

import Tile from './DashboardTile';
import Expanded from './DashboardExpanded';

import './Dashboard.css';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "",
            expanded: false
        };
    }

    openExpand = (url) => {
        const { expanded } = this.state;
        this.setState({ expanded: true, activeLink: url });
    }

    closeExpand = () => {
        this.setState({ expanded: false, activeLink: "" });
    }

    render() {
        const { expanded, activeLink } = this.state;

        if (expanded) {
            return (
                <Expanded
                    close={this.closeExpand}
                    url={activeLink}
                />
            );
        }


        return (
            <div className="tableau-flexbox">
                <div className="tableau-flex-container">
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet3?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet3?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet4?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/top10keyboards/Sheet4?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Softwarewithjobboard?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Softwarewithjobboard?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/SoftwareSkills/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                    <div className="tableau-flex-item"
                        onClick={() => this.openExpand("https://us-east-1.online.tableau.com/t/groupfinal/views/LangAvgs/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no")}
                    >
                        <Tile
                            url="https://us-east-1.online.tableau.com/t/groupfinal/views/LangAvgs/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
                        />
                    </div>
                </div>
            </div>
        );
    }
}