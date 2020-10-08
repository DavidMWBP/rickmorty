import { useRouter } from 'next/router';
import BackToTopButton from "../../components/BackToTopButton";
import EpisodeList from "../../components/EpisodeList";
import MyAppBar from '../../components/AppBar';
import MainContainer from '../../components/MainContainer';

const Episode = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div id="episode">
      <div id="back-to-top-anchor" />
      <MyAppBar />
      <MainContainer>
        <EpisodeList id={id} />
      </MainContainer>      
  
      <BackToTopButton />
    </div>
  );
};

export default Episode;