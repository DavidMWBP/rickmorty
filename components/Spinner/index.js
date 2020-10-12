import { CircularProgress } from '@material-ui/core';

import './style.scss';

const Spinner = ({children}) => {
    return (
        <div className="spinner__container">
            <CircularProgress className="spinner__circle" />
            {children}
        </div>
    )
};

export default Spinner;
