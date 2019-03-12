import React, { Component } from 'react';

import male from '../../images/male.png'
import female from '../../images/female.png'
import './Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Kyle",
            lastName: "Surowiec",
            email: "sample@email.com",
            editFirst: false,
            editLast: false,
            editEmail: false
        };
    }

    inputHandler = (e, boxType) => {
        const temp = {};
        temp[boxType] = e.target.value;
        this.setState(temp);
    }

    render() {
        const { firstName, lastName, email } = this.state;

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

        return (
            <div className="profile-wrapper">
                <div className="profile-box">
                    <div className="avatar">
                        <img src={male} />
                    </div>
                    <div className="info">
                        {firstNameBox()}
                        {lastNameBox()}
                        {emailBox()}
                    </div>
                </div>
            </div>
        )
    }
}