import { CircularProgress } from '@material-ui/core';

const Spinner = ({children}) => {
    return (
        <div className="spinner__container">
            <CircularProgress className="spinner__circle" />
            {children}
        </div>
    )
};

export default Spinner;
