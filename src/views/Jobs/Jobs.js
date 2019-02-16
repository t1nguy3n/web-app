import React from 'react';
import axios from 'axios';

import { JobPreview } from './components/JobPreview';
import { JobDetailedContainer } from './components/JobDetailed';
import './Jobs.css';

export default class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: [],
            clickedJob: {},
            loading: false
        };
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then((res) => {
                this.setState({ jobList: res.data, clickedJob: res.data[0] });
            });
    }

    setJobClickedOn = (jobClickedOn) => {
        this.setState({ clickedJob: jobClickedOn });
    }

    toggleLoading = () => {
        const { loading } = this.state;
        this.setState({ loading: !loading });
    }

    render() {
        const { jobList } = this.state;

        return (
            <div className="job-wrapper">
                <div className="job-preview-container">
                    {jobList.map((listing) => 
                        <JobPreview 
                            key={listing.id} 
                            jobListing={listing} 
                            onClick={() => this.setJobClickedOn(listing)} 
                        />
                    )}
                </div>
                <JobDetailedContainer jobDetails={this.state.clickedJob} />
            </div>
        )
    }
}