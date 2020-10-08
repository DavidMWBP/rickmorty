import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DimensionLink from '../../DimensionLink';

const useStyles = makeStyles({
    root: {
        height: '100%',
        minWidth: 300,
        maxWidth: 300,
        textTransform: 'capitalize'
    }
});

const LocationCard = ({id, name, dimension, type}) => {
    const classes = useStyles();

    return (
        <Card raised className={classes.root}>
            <CardContent>
                <Typography noWrap variant="h6" component="h3">
                    <Link href={`/location/[id]`} as={`/location/${id}`}>
                        <a>{name}</a>
                    </Link>
                </Typography>

                <Typography variant="subtitle2">
                    <DimensionLink dimension={dimension}>Dimension: {dimension}</DimensionLink>
                </Typography>

                <Typography variant="subtitle2">
                    Type: {type}
                </Typography>
            </CardContent>
        </Card>
    );
};

LocationCard.defaultProps = {};
export default LocationCard;