import { useRouter } from 'next/router';
import BackToTopButton from "../../components/BackToTopButton";
import LocationList from "../../components/LocationList";
import MyAppBar from '../../components/AppBar';
import MainContainer from '../../components/MainContainer';

const Location = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div id="location">
      <div id="back-to-top-anchor" />
      <MyAppBar />
      <MainContainer>
        <LocationList id={id} />
      </MainContainer>

      <BackToTopButton />
    </div>
  );
};

export default Location;