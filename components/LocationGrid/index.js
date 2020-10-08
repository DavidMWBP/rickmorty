import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getLocations } from '../../lib/apollo/queries';
import LocationCard from "./LocationCard";
import Spinner from "../Spinner";
import PageBar from '../PageBar';
import GridContainer from "../GridContainer";

const LocationGrid = ({page}) => {
    const { loading, error, data } = useQuery(getLocations({page}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Locations...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Locations not found!</Typography>;

    const { info, results } = data.locations;

    const sortedLocations = [...results].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div id="locations">
            <PageBar 
                pageCount={info.pages}
                itemCount={info.count}
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