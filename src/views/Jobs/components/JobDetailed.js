import React from 'react';
import swal from 'sweetalert';

const showSuccessAlert = () => {
    swal(
        "",
        "You've successfully applied for this job! We wen't ahead and attached your resume and relevant information. Good luck!",
        "success"
    );
}

export const JobDetailedContainer = ({ jobDetails }) => {
    if (jobDetails.Position != undefined) {
        return (
            <div className="job-detailed-container">
                <div className="detailed-header" />
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
                    <button onClick={showSuccessAlert}>APPLY NOW</button>
                </div>
            </div>
        )
    }

    return <div />
}