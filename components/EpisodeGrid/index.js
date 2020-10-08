import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getEpisodes } from '../../lib/apollo/queries';
import EpisodeCard from "./EpisodeCard";
import Spinner from "../Spinner";
import PageBar from '../PageBar';
import GridContainer from "../GridContainer";

const EpisodeGrid = ({page}) => {
    const { loading, error, data } = useQuery(getEpisodes({page}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Episodes...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Episodes not found!</Typography>;

    const { info, results } = data.episodes;

    return (
        <div id="episodes">
            <PageBar 
                pageCount={info.pages}
                itemCount={info.count}
                previousPage={info.prev}
                nextPage={info.next}
                countLabel={'episodes found'}
                collectionUrl="/episodes/"
            />

            <GridContainer >
                {
                    results.map(episode => {
                        return (
                            <Grid item lg={3} key={`episode_${episode.id}`}>
                                <EpisodeCard {...episode} />
                            </Grid>
                        )
                    })
                }
            </GridContainer>
        </div>
    )

};

export default EpisodeGrid;