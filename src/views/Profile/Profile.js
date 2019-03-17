import React from 'react';
import swal from 'sweetalert';

import male from '../../images/male.png'
import './Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Kyle",
            lastName: "Surowiec",
            location: "Chicago, IL",
            email: "email@example.com",
            editFirst: false,
            editLast: false,
            editLocation: false,
            editEmail: false,
            resumeUploaded: false
        };
    }

    inputHandler = (e, boxType) => {
        const temp = {};
        temp[boxType] = e.target.value;
        this.setState(temp);
    }

    showSuccessAlert = () => {
        swal("Upload Successful!", "", "success");
        this.setState({ resumeUploaded: true });
    }

    render() {
        const { firstName, lastName, email, location } = this.state;

        const firstNameBox = () => {
            const { editFirst } = this.state;

            if (editFirst) {
                return (
                    <div>
                        <input type="textbox" onChange={(e) => this.inputHandler(e, "firstName")} />
                        &nbsp;&nbsp;
                        <i className="fas fa-check-square" onClick={() => this.setState({ editFirst: false })} />
                    </div>
                )
            }

            return (
                <div>
                    {firstName}
                    &nbsp;&nbsp;
                    <i className="fas fa-pencil-alt" onClick={() => this.setState({ editFirst: true })} />
                </div>
            );
        }

        const lastNameBox = () => {
            const { editLast } = this.state;

            if (editLast) {
                return (
                    <div>
                        <input type="textbox" onChange={(e) => this.inputHandler(e, "lastName")} />
                        &nbsp;&nbsp;
                        <i className="fas fa-check-square" onClick={() => this.setState({ editLast: false })} />
                    </div>
                )
            }

            return (
                <div>
                    {lastName}
                    &nbsp;&nbsp;
                    <i className="fas fa-pencil-alt" onClick={() => this.setState({ editLast: true })} />
                </div>
            );
        }

        const locationBox = () => {
            const { editLocation } = this.state;

            if (editLocation) {
                return (
                    <div>
                        <input type="textbox" onChange={(e) => this.inputHandler(e, "location")} />
                        &nbsp;&nbsp;
                        <i className="fas fa-check-square" onClick={() => this.setState({ editLocation: false })} />
                    </div>
                )
            }

            return (
                <div>
                    {location}
                    &nbsp;&nbsp;
                    <i className="fas fa-pencil-alt" onClick={() => this.setState({ editLocation: true })} />
                </div>
            );
        }

        const emailBox = () => {
            const { editEmail } = this.state;

            if (editEmail) {
                return (
                    <div>
                        <input type="textbox" onChange={(e) => this.inputHandler(e, "email")} />
                        &nbsp;&nbsp;
                        <i className="fas fa-check-square" onClick={() => this.setState({ editEmail: false })} />
                    </div>
                )
            }

            return (
                <div>
                    {email}
                    &nbsp;&nbsp;
                    <i className="fas fa-pencil-alt" onClick={() => this.setState({ editEmail: true })} />
                </div>
            );
        }

        const uploadButton = () => {
            const { resumeUploaded } = this.state;

            if (resumeUploaded) {
                return (
                    <span>We have your resume on file!</span>
                );
            }

            return (
                <div className="upload-flex">
                    <span>Resume</span>
                    <input type="file" onChange={() => this.showSuccessAlert()} />
                </div>
            );
        }

        return (
            <div className="profile-wrapper">
                <div className="profile-box">
                    <div className="avatar">
                        <img src={male} />
                    </div>
                    <div className="info">
                        <div className="info-flex">
                            {firstNameBox()}
                        </div>
                        <div className="info-flex">
                            {lastNameBox()}
                        </div>
                        <div className="info-flex">
                            {locationBox()}
                        </div>
                        <div className="info-flex">
                            {emailBox()}
                        </div>
                        <div className="info-flex-button">
                            {uploadButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}