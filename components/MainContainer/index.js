import { Container } from '@material-ui/core';

const MainContainer = ({children}) => {
    return (
        <Container id="mainContainer">
            {children}
        </Container>
    );
};

export default MainContainer;