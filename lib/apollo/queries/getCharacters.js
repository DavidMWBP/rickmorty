import { gql } from "@apollo/react-hooks";

const getCharacters = (cfg) => {
    const page = (cfg && cfg.page) ? cfg.page : 1;

    return gql`
        query {
            characters(page: ${page}) {
                info {
                    count
                    pages
                    next
                    prev
                }
                results {
                    id
                    name
                    status
                    species
                    gender
                    location {
                        id
                        name
                        dimension
                    }
                    image
                }
            }
        }
    `;
}

export default getCharacters;