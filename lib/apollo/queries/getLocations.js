import { gql } from "@apollo/react-hooks";

const getLocations = (cfg) => {
    const page = (cfg && cfg.page) ? cfg.page : 1;

    return gql`
            query {
            locations(page: ${page}) {
                info {
                    count
                    pages
                    next
                    prev
                }
                results {
                    id
                    name
                    type
                    dimension
                }
            }
        }
    `;
}

export default getLocations;