import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const LocationCard = ({id, name, episode, air_date}) => {
    return (
        <Link href={`/episode/[id]`} as={`/episode/${id}`}>
            <Card className="episodeCard" raised >
                <CardContent>
                    <Typography noWrap variant="h6" component="h3">
                        [{episode}] {name}
                    </Typography>

                    <Typography variant="subtitle2">
                        Air date: {air_date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default LocationCard;