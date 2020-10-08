import { useRouter } from 'next/router';
import BackToTopButton from "../../components/BackToTopButton";
import DimensionList from "../../components/DimensionList";
import MyAppBar from '../../components/AppBar';
import MainContainer from '../../components/MainContainer';

const Dimension = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div id="back-to-top-anchor" />
      <MyAppBar />

      <MainContainer>
        <DimensionList id={id} />
      </MainContainer>

      <BackToTopButton />
    </div>
  );
};

export default Dimension;