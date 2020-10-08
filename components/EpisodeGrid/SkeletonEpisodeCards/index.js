import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const SkeletonEpisodeCards = () => {

    return [...Array(20).keys()].map((__, index) => {
        return (
            <Grid item lg={3} key={`episode_${index}`}>
                <Card className="episodeCard" raised >
                    <CardContent>
                        <Typography noWrap variant="h6" component="h3">
                            Loading...
                        </Typography>

                        <Typography variant="subtitle2">
                            Loading...
                        </Typography>
                    </CardContent>
                 </Card>
            </Grid>
        );

    });
    
};

export default SkeletonEpisodeCards;