import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const SkeletonLocationCards = () => {
    return [...Array(20).keys()].map((__, index) => {
        return (
            <Grid item lg={3} key={`location_${index}`}>
                <Card className="locationCard" raised >
                    <CardContent>
                        <Typography noWrap variant="h6" component="h3">
                            Loading...
                        </Typography>

                        <Typography variant="subtitle2">
                            Dimension: Loading...
                        </Typography>

                        <Typography variant="subtitle2">
                            Type: Loading...
                        </Typography>
                  </CardContent>
                 </Card>
            </Grid>
        );
    });
};

export default SkeletonLocationCards;