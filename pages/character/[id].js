import { useRouter } from 'next/router';
import BackToTopButton from "../../components/BackToTopButton";
import CharacterContainer from "../../components/CharacterContainer";
import MyAppBar from '../../components/AppBar';
import MainContainer from '../../components/MainContainer';

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
    
  return (
    <div id="character">
      <div id="back-to-top-anchor" />
      <MyAppBar />

      <MainContainer>
        <CharacterContainer id={id} />
      </MainContainer>

      <BackToTopButton />
    </div>
  );
};

export default Home;