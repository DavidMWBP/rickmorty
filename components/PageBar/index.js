import Link from 'next/link';
import { Button, Container, Typography } from '@material-ui/core';

import './style.scss';

const PageBar = ({previousPage, nextPage, itemCount, countLabel, collectionUrl}) => {

    const renderPreviousPageButton = () => {
        if (previousPage) {
            return (
                <Link href={`${collectionUrl}page/[page]`} as={`${collectionUrl}page/${[previousPage]}`}>
                    <Button color="primary" variant="outlined">Previous</Button> 
                </Link>
            );
        } else {
            return <div />
        }
    }

    const renderNextPageButton = () => {
        if (nextPage) {
            return (
                <Link href={`${collectionUrl}page/[page]`} as={`${collectionUrl}page/${[nextPage]}`}>
                    <Button color="primary" variant="outlined">Next</Button> 
                </Link>
            );
        } else {
            return <div />
        }
    }

    return (
        <div id="pageBar">
            <Container style={{color: 'black', textAlign: 'center'}}>
                <div id="pageBar__headerCount">
                    <Typography variant="h5">{itemCount} {countLabel}</Typography>
                </div>
            </Container>
            <Container id="pageBar__controls">
                {renderPreviousPageButton()}
                {renderNextPageButton()}
            </Container>
        </div>
        
    );
}

PageBar.defaultProps = {
    itemCount: 0,
    countLabel: 'items found',
    collectionUrl: '/'
}
export default PageBar;
