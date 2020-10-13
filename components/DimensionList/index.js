import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getResidentsOfDimension } from '../../lib/apollo/queries';
import CharacterCard from "../CharacterList/CharacterCard";
import GridContainer from "../GridContainer";
import Spinner from "../Spinner";

const DimensionList = ({id}) => {
    const { loading, error, data } = useQuery(getResidentsOfDimension({id}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Dimension...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Dimension not found!</Typography>;

    const { results } = data.locations;

    return (
        <div id="dimension">
            <Typography id="episodeHeader" variant="h4">Dimension - {id}</Typography>
            <GridContainer>
                {
                    results.map(location => {
                        return location.residents.map(resident => {
                            const residentObject = {
                                location: {
                                    id: location.id,
                                    name: location.name
                                },
                                ...resident
                            };

                            // API sometimes reponds with empty semi-empty objects
                            if (residentObject.id && residentObject.name) {
                                return (
                                    <Grid item lg={3} key={`resident_dimension${resident.id}`}>
                                        <CharacterCard {...residentObject} />
                                    </Grid>
                                )
                            } else {
                                return null;
                            }
                        });
                    })
                }
            </GridContainer>
        </div>
    )
};

export default DimensionList;