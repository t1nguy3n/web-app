import React from 'react';
import axios from 'axios';

import { JobPreview } from './components/JobPreview';
import './Jobs.css';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: [],
            loading: false
        };
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then((res) => {
                console.log(res);
                this.setState({ jobList: res.data });
            });
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
                    {jobList.map((listing) => <JobPreview jobListing={listing} />)}
                </div>
            </div>
        )
    }
}