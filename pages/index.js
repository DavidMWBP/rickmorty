import CharactersList from "../components/CharacterList";
import BackToTopButton from "../components/BackToTopButton";
import MyAppBar from '../components/AppBar';
import MainContainer from "../components/MainContainer";

const Home = () => {
  return (
    <div>
      <div id="back-to-top-anchor" />
      <MyAppBar />
      <MainContainer id="mainContainer">
        <CharactersList />
      </MainContainer>

      <BackToTopButton />
    </div>
  );
};

export default Home;