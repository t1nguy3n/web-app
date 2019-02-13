import React from 'react';

import { JobPreview } from './components/JobPreview';
import './Jobs.css';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="job-wrapper">
                <div className="job-preview-container">
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                    <JobPreview />
                </div>
            </div>
        )
    }
}