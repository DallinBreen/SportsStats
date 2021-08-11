import React, { useState, useEffect } from 'react';
import { TeamCard } from './TeamCard';
import './NFL.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



export function NFL() {

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh'
        },
    }));

    const [error, updateError] = useState(null);
    const [isLoaded, updateIsLoaded] = useState(false);
    const [teams, updateTeams] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/teams")
            .then(res => res.json())
            .then(
                (result) => {
                    updateTeams(result);
                    updateIsLoaded(true);
                },

                (error) => {
                    updateIsLoaded(true);
                    updateError(error);
                }
            )

    }, []);

   
    const classes = useStyles();

    let teamList = teams.map((team) => {
        return <TeamCard key={team.teamId} teamName={team.teamName} teamImage={team.teamImage} teamDescription={team.teamDescription} />;
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        )
    }
    else {
        return (
            <div className={"teamGrid"}>
                {teamList}
            </div>
        );
            
    }
}