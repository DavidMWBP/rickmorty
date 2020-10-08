import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@material-ui/core";
import { getEpisodes } from '../../lib/apollo/queries';
import EpisodeCard from "./EpisodeCard";
import PageBar from '../PageBar';
import GridContainer from "../GridContainer";
import SkeletonEpisodeCards from "./SkeletonEpisodeCards";

import './style.scss';

const EpisodeGrid = ({page}) => {
    const { loading, error, data } = useQuery(getEpisodes({page}));

    if (loading) return (
        <div id="episodes__loading">
            <PageBar
                countLabel={'episodes found'}
            />
            <GridContainer>
                <SkeletonEpisodeCards />
            </GridContainer>
        </div>
    );

    if (error) return <Typography variant="h4" className="errorHeader">Episodes not found!</Typography>;

    const { info, results } = data.episodes;

    return (
        <div id="episodes__loaded">
            <PageBar 
                currentPage={parseInt(page)}
                totalPages={info.pages}
                itemCount={info.count}
                itemsShown={results.length}
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