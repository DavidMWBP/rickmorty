import { useRouter } from 'next/router';
import BackToTopButton from "../../../components/BackToTopButton";
import MyAppBar from '../../../components/AppBar';
import LocationGrid from '../../../components/LocationGrid'
import MainContainer from '../../../components/MainContainer';

const Home = () => {
    const router = useRouter();
    const { page } = router.query;

    return (
        <div>
            <div id="back-to-top-anchor" />
            <MyAppBar />
            <MainContainer>
                <LocationGrid page={page} />
            </MainContainer>

            <BackToTopButton />
        </div>
    ); 
};

export default Home;