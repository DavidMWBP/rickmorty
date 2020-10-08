import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DimensionLink from '../../DimensionLink';

const LocationCard = ({id, name, dimension, type}) => {
    return (
        <Card className="locationCard" raised>
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

export default LocationCard;