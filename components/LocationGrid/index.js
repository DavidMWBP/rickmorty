import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getLocations } from '../../lib/apollo/queries';
import LocationCard from "./LocationCard";
import PageBar from '../PageBar';
import GridContainer from "../GridContainer";
import SkeletonLocationCards from './SkeletonLocationCards';

import './style.scss';

const LocationGrid = ({page}) => {
    const { loading, error, data } = useQuery(getLocations({page}));

    if (loading) return (
        <div id="locations__loading">
            <PageBar
                countLabel={'locations found'}
            />
            <GridContainer>
                <SkeletonLocationCards />
            </GridContainer>
        </div>
    );

    if (error) return <Typography variant="h4" className="errorHeader">Locations not found!</Typography>;

    const { info, results } = data.locations;
    const sortedLocations = [...results].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div id="locations_loaded">
            <PageBar
                currentPage={parseInt(page)}
                totalPages={info.pages}
                itemCount={info.count}
                itemsShown={sortedLocations.length}
                previousPage={info.prev}
                nextPage={info.next}
                countLabel={'locations found'}
                collectionUrl="/locations/"
            />

            <GridContainer>
                {
                    sortedLocations.map(location => {
                        return (
                            <Grid item lg={3} key={`location_${location.id}`}>
                                <LocationCard {...location} />
                            </Grid>
                        )
                    })
                }
            </GridContainer>
        </div>
    );
};

export default LocationGrid;