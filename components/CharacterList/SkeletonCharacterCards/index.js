import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '100%',
        minWidth: 300,
        maxWidth: 300,
        textTransform: 'capitalize'
    },
    media: {
        height: 250,
    },
});

const SkeletonCharacterCards = () => {
    const classes = useStyles();

    return [...Array(20).keys()].map((__, index) => {
        const characterObject = {
            id: index,
            name: 'testName',
            status: 'Loading',
            species: 'Hi',
            gender: 'Android',
            image: `https://rickandmortyapi.com/api/character/avatar/19.jpeg`
        }

        return (
            <Grid item lg={3} key={`character_${index}`}>
                <Card raised className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={characterObject.image}
                            title={characterObject.name}
                            style={{cursor: 'pointer'}}
                        />
                    <CardContent>
                        <Typography noWrap variant="h5" component="h2">
                                Loading...
                        </Typography>
                        <Typography variant="subtitle1" style={{fontWeight: 500, display: 'flex', justifyItems: 'center', textTransform: 'capitalize'}}>
                        <span style={{
                            height: '0.5rem',
                            width: '0.5rem',
                            marginRight: '0.375rem',
                            background: '#fff',
                            borderRadius: '50%',
                            alignSelf: 'center'
                        }}></span> Loading...
                        </Typography>
                        <Divider />

                        <div className="lastSeenLocation">
                            <Typography variant="body1" component="p">
                                <strong>Last seen location:</strong>
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                Loading...
                            </Typography>
                        </div>
                        <div className="lastSeenDimension">
                            <Typography variant="body1" component="p">
                                <strong>Last seen dimension:</strong>
                            </Typography>
                            <Typography variant="body1" component="p">
                                Loading...
                            </Typography>
                        </div>

                    </CardContent>
                </Card>
            </Grid>
        );

    });
    
};

export default SkeletonCharacterCards;