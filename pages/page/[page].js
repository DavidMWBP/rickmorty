import { useRouter } from 'next/router';
import CharactersList from "../../components/CharacterList";
import BackToTopButton from "../../components/BackToTopButton";
import MyAppBar from '../../components/AppBar';
import MainContainer from '../../components/MainContainer';

const Home = () => {
    const router = useRouter();
    const { page } = router.query;     

    return (
        <div id="characters">
            <div id="back-to-top-anchor" />
            <MyAppBar />
            <MainContainer id="mainContainer">
                <CharactersList page={page} />
            </MainContainer>

            <BackToTopButton />
        </div>
    );
};

export default Home;