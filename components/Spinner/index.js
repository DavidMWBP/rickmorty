import { CircularProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
    },
    spinner: {
        color: '#000000'
    }
});

const Spinner = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <CircularProgress className={classes.spinner} />
            {children}
        </div>
    )

};

export default Spinner;
