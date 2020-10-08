import { gql } from "@apollo/react-hooks";

const getEpisode = (cfg) => {
    const id = (cfg && cfg.id) ? cfg.id : 1;

    return gql`
        query {
            episode(id: ${id}) {
                id
                name
                air_date
                episode
                characters {
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