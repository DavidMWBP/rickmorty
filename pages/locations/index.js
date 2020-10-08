import BackToTopButton from "../../components/BackToTopButton";
import MyAppBar from '../../components/AppBar';
import LocationGrid from '../../components/LocationGrid'
import MainContainer from "../../components/MainContainer";

const Home = () => {
    return (
        <div>
            <div id="back-to-top-anchor" />
            <MyAppBar />
            <MainContainer>
                <LocationGrid />
            </MainContainer>

            <BackToTopButton />
        </div>
    ); 
};

export default Home;