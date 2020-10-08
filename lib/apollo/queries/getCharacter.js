import { gql } from "@apollo/react-hooks";

const getCharacter = (cfg) => {
    const id = (cfg && cfg.id) ? cfg.id : 1;

    return gql`
        query {
            character(id: ${id}) {
                id
                name
                status
                species
                type
                gender
                origin {
                    id
                    name
                    type
                    dimension
                }
                location {
                    id
                    name
                    type
                    dimension
                }
                image
                episode {
                    id
                    name
                    air_date
                    episode
                }
            }
        }
    `;
}

export default getCharacter;