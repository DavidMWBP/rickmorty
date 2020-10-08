import { useQuery } from "@apollo/client";
import { getCharacters } from '../../lib/apollo/queries';
import { Grid } from '@material-ui/core';

import CharacterCard from './CharacterCard';
import PageBar from "../PageBar";
import GridContainer from "../GridContainer";

import SkeletonCharacterCards from './SkeletonCharacterCards';

const CharacterList = ({page}) => {
    const { loading, error, data } = useQuery(getCharacters({page}));
    
    if (loading) return (
        <div id="characters__loading">
            <PageBar
                countLabel={'characters found'}
            />
            <GridContainer>
                <SkeletonCharacterCards />
            </GridContainer>
        </div>
    );

    if (error) return <Typography variant="h4" className="errorHeader">Characters not found!</Typography>;

    const sortedCharacters = [...data.characters.results].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div id="characters__loaded">
            <PageBar 
                currentPage={parseInt(page)}
                totalPages={data.characters.info.pages}
                itemCount={data.characters.info.count}
                itemsShown={sortedCharacters.length}
                previousPage={data.characters.info.prev}
                nextPage={data.characters.info.next}
                countLabel={'characters found'}
            />
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
    );
};

export default CharacterList;