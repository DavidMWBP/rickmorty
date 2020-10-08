import BackToTopButton from "../../components/BackToTopButton";
import MyAppBar from '../../components/AppBar';
import EpisodeGrid from '../../components/EpisodeGrid'
import MainContainer from "../../components/MainContainer";

const Home = () => {
    return (
        <div>
            <div id="back-to-top-anchor" />
            <MyAppBar />
            <MainContainer>
                <EpisodeGrid />
            </MainContainer>

            <BackToTopButton />
        </div>
    ); 
};

export default Home;