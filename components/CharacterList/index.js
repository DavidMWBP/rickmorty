import { useQuery } from "@apollo/client";
import { getCharacters } from '../../lib/apollo/queries';
import { Grid } from '@material-ui/core';

import CharacterCard from './CharacterCard';
import Spinner from "../Spinner";
import PageBar from "../PageBar";
import GridContainer from "../GridContainer";

const CharacterList = ({page}) => {
    const { loading, error, data } = useQuery(getCharacters({page}));
    
    if (loading) return <Spinner><p className="spinnerText">Fetching Characters...</p></Spinner>;
    if (error) return <Typography variant="h4" className="errorHeader">Characters not found!</Typography>;

    const renderCharacterList = () => {
        const sortedCharacters = [...data.characters.results].sort((a, b) => a.name.localeCompare(b.name));

        return (
            <GridContainer >
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
        );
    };

    return (
        <div id="characters">
            <PageBar 
                pageCount={data.characters.info.pages}
                itemCount={data.characters.info.count}
                previousPage={data.characters.info.prev}
                nextPage={data.characters.info.next}
                countLabel={'characters found'}
            />
            {renderCharacterList()}
        </div>
    );
};

export default CharacterList;