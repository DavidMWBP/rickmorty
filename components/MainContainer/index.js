import { Container } from '@material-ui/core';
import './style.scss';

const MainContainer = ({children}) => {
    return (
        <Container id="mainContainer">
            {children}
        </Container>
    );
};

export default MainContainer;