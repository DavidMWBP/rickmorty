import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, CardMedia, Grid } from '@material-ui/core';

import './style.scss';
import DimensionLink from '../../DimensionLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
  },
  media: {
    height: 500
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#FFFFFF',
    textTransform: 'capitalize'
  }
}));

const CharacterOverview = ({ name, status, gender, species, location, origin, episode, image }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.root} style={{margin: 'auto'}}>
        <CardMedia
        className={classes.media}
        image={image}
        title={name}
        />

        {/* Ideally split up below code in own components */}
        <Accordion style={{textTransform: 'capitalize'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Vitals</Typography>
            <Typography className={classes.secondaryHeading}>{name}</Typography>
          </AccordionSummary>
            <AccordionDetails>
                <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start">
                    <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                        <Typography variant="body1"><strong>Name</strong></Typography>
                        <Typography variant="body1">{name}</Typography>
                    </Grid>
                    <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                        <Typography variant="body1"><strong>Gender</strong></Typography>
                        <Typography variant="body1">{gender}</Typography>
                    </Grid>
                    <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                        <Typography variant="body1"><strong>Species</strong></Typography>
                        <Typography variant="body1">{species}</Typography>
                    </Grid>
                    <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                        <Typography variant="body1"><strong>Status</strong></Typography>
                        <Typography variant="body1">{status}</Typography>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{textTransform: 'capitalize'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Location</Typography>
            <Typography className={classes.secondaryHeading}>
              
              {location.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            >
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                    <Typography variant="body1"><strong>Name</strong></Typography>
                    <Typography variant="body1"><Link href={`/location/[id]`} as={`/location/${location.id}`}><a>{location.name}</a></Link></Typography>
                </Grid>
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                  <Typography variant="body1"><strong>Dimension</strong></Typography>
                  <Typography variant="body1"><DimensionLink dimension={location.dimension}>{location.dimension}</DimensionLink></Typography>
                </Grid>
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                    <Typography variant="body1"><strong>Type</strong></Typography>
                    <Typography variant="body1">{location.type}</Typography>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{textTransform: 'capitalize'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Origin</Typography>
            <Typography className={classes.secondaryHeading}>
              {origin.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            >
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                    <Typography variant="body1"><strong>Name</strong></Typography>
                    <Typography variant="body1"><Link href={`/location/[id]`} as={`/location/${origin.id}`}><a>{origin.name}</a></Link></Typography>
                </Grid>
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                    <Typography variant="body1"><strong>Dimension</strong></Typography>
                    <Typography variant="body1"><DimensionLink dimension={origin.dimension}>{origin.dimension}</DimensionLink></Typography>
                </Grid>
                <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                >
                    <Typography variant="body1"><strong>Type</strong></Typography>
                    <Typography variant="body1">{(origin && origin.type) ? origin.type : 'Unknown'}</Typography>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{textTransform: 'capitalize'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Episodes</Typography>
          </AccordionSummary>
          <AccordionDetails style={{flexDirection: 'column'}}>
            {episode.map(({id, name, episode}) => {
                return (
                    <Button className="episodeButton" variant="contained" key={`episode_${id}`}>
                        <Link href={`/episode/[id]`} as={`/episode/${id}`}><a>{episode} - {name}</a></Link>
                    </Button>
                )
            })}            
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default CharacterOverview;