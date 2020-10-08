import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DimensionLink from '../../DimensionLink';

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

const CharacterCard = ({id, name, gender, species, status, location, image, showLocation, showDimension, showDivider}) => {
    const classes = useStyles();

    const renderStatusIcon = () => {
        let statusColor = '#55cc45';
        if (status && status.toLowerCase() === 'dead') {
            statusColor = '#d63d2e'
        } else if (status && status.toLowerCase() === 'unknown') {
            statusColor = '#dcb62e'
        }
    
        return (
            <span style={{
                height: '0.5rem',
                width: '0.5rem',
                marginRight: '0.375rem',
                background: statusColor,
                borderRadius: '50%',
                alignSelf: 'center'
            }}></span>
        )
    };

    const renderLastSeen = () => {
        if (!location.dimension && !(location.id && location.name)) { 
            return <Typography variant="body1" component="p">
                I haven't been seen in a while...
            </Typography>
        } else {
            return (
                <div>
                    {renderLastSeenLocation()}
                    {renderLastSeenDimension()}
                </div>
            )
        }
    };

    const renderLastSeenLocation = () => {
        if (showLocation && location.id && location.name) {
            return (
                <div className="lastSeenLocation">
                    <Typography variant="body1" component="p">
                        <strong>Last seen location:</strong>
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        <Link href={`/location/[id]`} as={`/location/${location.id}`}>
                            <a>{location.name}</a>
                        </Link>
                    </Typography>
                </div>
            )
        } else {
            return null;
        }
    }

    const renderLastSeenDimension = () => {
        if (showDimension && location.dimension) {
            return (
                <div className="lastSeenDimension">
                    <Typography variant="body1" component="p">
                        <strong>Last seen dimension:</strong>
                    </Typography>
                    <Typography variant="body1" component="p">
                        <DimensionLink dimension={location.dimension}>
                            {location.dimension}
                        </DimensionLink>
                    </Typography>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <Card raised className={classes.root}>
            <Link href={`/character/[id]`} as={`/character/${id}`}>
                <CardMedia
                className={classes.media}
                image={image}
                title={name}
                style={{cursor: 'pointer'}}
                />
            </Link>
            <CardContent>
                <Typography noWrap variant="h5" component="h2">
                    <Link href={`/character/[id]`} as={`/character/${id}`}>
                        <a>{name}</a>
                    </Link>
                </Typography>

                <Typography variant="subtitle1" style={{fontWeight: 500, display: 'flex', justifyItems: 'center', textTransform: 'capitalize'}}>
                    {renderStatusIcon()} {gender} {species} - {status}
                </Typography>
                {showDivider ? <Divider /> : null}
                {renderLastSeen()}
            </CardContent>
        </Card>
    );
};

CharacterCard.defaultProps = {
    showLocation: true,
    showDimension: true,
    showDivider: true
};
export default CharacterCard;