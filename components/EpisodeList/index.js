import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getEpisode } from '../../lib/apollo/queries';
import CharacterCard from "../CharacterList/CharacterCard";
import GridContainer from "../GridContainer";

import Spinner from "../Spinner";
import './style.scss';

const EpisodeList = ({id}) => {
    const { loading, error, data } = useQuery(getEpisode({id}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Episode...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Episode not found!</Typography>;

    const { episode, name, air_date, characters } = data.episode;
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div id="episodes">
            <Typography id="episodeHeader" variant="h4">[{episode}] {name} ({air_date})</Typography>

            <GridContainer>
                {
                    sortedCharacters.map(character => {
                        return (
                            <Grid item lg={3} key={`character_${character.id}`}>
                                <CharacterCard {...character} />
                            </Grid>
                        )
                    })
                }
            </GridContainer>
        </div>
    )

};

export default EpisodeList;