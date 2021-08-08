import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 345,
        margin: '20px'
    },
    media: {
        height: 160,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export function TeamCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.teamImage}
                    title={props.teamName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.teamName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.teamName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}