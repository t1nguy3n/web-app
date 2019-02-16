import React from 'react';

export const JobDetailedContainer = ({ jobDetails }) => {
    console.log(jobDetails);

    if (jobDetails.Position != undefined) {
        return (
            <div className="job-detailed-container">
                <div className="detailed-header">
                </div>
                <div className="detailed-title">
                    {jobDetails.Position}
                </div>
                <div className="detailed-company">
                    {jobDetails.Company}
                </div>
                <div className="detailed-location">
                    {jobDetails.Location}
                </div>
                <br />
                <hr />
                <div className="snippet-container">
                    <div className="detailed-snippet">
                        {jobDetails.Snippet}
                    </div>
                    <button>APPLY NOW</button>
                </div>
            </div>    
        )    
    }

    return <div />
}