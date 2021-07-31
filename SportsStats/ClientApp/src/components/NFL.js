import React, { Component } from 'react';

export class NFL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
    }

    componentDidMount() {
        fetch("https://localhost:5001/teams")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        teams: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        let teamList = this.state.teams.map((team) => {
            return <li>{team.teamName}</li>;
        });

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <ol>
                    {teamList}
                </ol>
            );
            
        }
    }
}