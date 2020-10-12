import { useQuery } from "@apollo/react-hooks";
import { Typography } from "@material-ui/core";
import { getCharacter } from '../../lib/apollo/queries';

import Spinner from "../Spinner";
import CharacterOverview from "./CharacterOverview";

const CharacterContainer = ({id}) => {
    const { loading, error, data } = useQuery(getCharacter({id}));

    if (loading) return <Spinner><p className="spinnerText">Fetching Character...</p></Spinner>
    if (error) return <Typography variant="h4" className="errorHeader">Character not found!</Typography>;

    return <CharacterOverview {...data.character} />;
};

export default CharacterContainer;