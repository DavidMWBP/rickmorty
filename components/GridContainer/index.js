import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const GridContainer = ({container, direction, justify, alignContent, alignItems, spacing, children}) => {
    return (
        <Grid  
            container={container}
            direction={direction}
            justify={justify}
            alignContent={alignContent}
            alignItems={alignItems}
            spacing={spacing}
        >
            {children}
        </Grid>
    );
};

GridContainer.propTypes = {
    container: PropTypes.bool,
    direction: PropTypes.string,
    justify: PropTypes.string,
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    spacing: PropTypes.number
}

GridContainer.defaultProps = {
    container: true,
    direction: 'row',
    justify: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    spacing: 2
};

export default GridContainer;