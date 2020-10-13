import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getLocation } from '../../lib/apollo/queries';
import CharacterCard from "../CharacterList/CharacterCard";
import GridContainer from "../GridContainer";
import Spinner from "../Spinner";

const LocationList = ({id}) => {
    const { loading, error, data } = useQuery(getLocation({id}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Location...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Location not found!</Typography>;

    const { name, type, residents } = data.location;
    const sortedResidents = [...residents].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <Typography id="locationHeader" variant="h4">Location {name} - {type}</Typography>

            <GridContainer>
                {
                    sortedResidents.map(resident => {
                        return (
                            <Grid item lg={3} key={`resident_${resident.id}`}>
                                <CharacterCard showLocation={false} {...resident} />
                            </Grid>
                        )
                    })
                }
            </GridContainer>
        </div>
    )
};

export default LocationList;