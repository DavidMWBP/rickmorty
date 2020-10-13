import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

const ScrollTop = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className="backtotop__container">
        {children}
      </div>
    </Zoom>
  );
}

const BackToTop = (props) => {
  return <ScrollTop {...props}>
    <Fab color="primary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
}

export default BackToTop;