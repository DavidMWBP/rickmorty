import { gql } from "@apollo/react-hooks";

const getResidentsOfDimension = (cfg) => {
    const id = (cfg && cfg.id) ? cfg.id : 'unknown';

    return gql`
       query {
            locations(filter: {dimension: "${id}"}) {
                results {
                    id
                    name
                    residents {
                        id
                        name
                        status
                        species
                        type
                        gender
                        image
                    }
                }
            }
        }
    `;
}

export default getResidentsOfDimension;