import { gql } from "@apollo/react-hooks";

const getEpisode = (cfg) => {
    const id = (cfg && cfg.id) ? cfg.id : 1;

    return gql`
        query {
            location(id: ${id}) {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    status
                    species
                    type
                    gender
                    location {
                        id
                        name
                        type
                        dimension
                    }
                    image
                }
            }
        }
    `;
}

export default getEpisode;