import { gql } from "@apollo/react-hooks";

const getEpisodes = (cfg) => {
    const page = (cfg && cfg.page) ? cfg.page : 1;

    return gql`
        query {
            episodes(page: ${page}) {
                info {
                    count
                    pages
                    next
                    prev
                }
                results {
                    id
                    name
                    air_date
                    episode
                }
            }
        }
    `;
}

export default getEpisodes;