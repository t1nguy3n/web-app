import React from 'react';

export const JobPreview = ({ jobListing }) => (
    <div className="job-preview-item">
        <div className="job-preview-title job-preview-line">{jobListing.Position}</div>
        <div className="job-preview-company job-preview-line">{jobListing.Company}</div>
        <div className="job-preview-line"><i class="fas fa-desktop"></i>&nbsp;{jobListing.Board}</div>
        <div className="job-preview-line"><i class="fas fa-map-marker-alt">&nbsp;</i>{jobListing.Location}</div>
    </div>
);