import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@material-ui/core';

import './style.scss';

const PageBar = ({previousPage, nextPage, currentPage, totalPages, itemCount, countLabel, collectionUrl, itemsShown}) => {

    const [ stateItemCount, setStateItemCount ] = useState(0)
    const [ stateItemsShown, setStateItemsShown ] = useState(0)
    const [ stateCurrentPage, setStateCurrentPage ] = useState(1)
    const [ stateTotalPages, setStateTotalPages ] = useState(0)

    useEffect(() => {
        if (itemCount > 0 ) setStateItemCount(itemCount);
        if (itemsShown > 0 ) setStateItemsShown(itemsShown);
        if (currentPage > 0 ) setStateCurrentPage(currentPage);
        if (totalPages > 0 ) setStateTotalPages(totalPages);
    },[currentPage]);

    const calculateAmountOfItemsShown = () => {
        if (stateCurrentPage === stateTotalPages) {
            return stateItemCount;
        } else {
            return stateItemsShown * stateCurrentPage;
        }
    };

    const renderPreviousPageButton = () => {
        return (
            <Link href={`${collectionUrl}page/[page]`} as={`${collectionUrl}page/${[previousPage]}`}>
                <Button color="primary" disabled={previousPage ? false : true}  variant="outlined">Previous</Button> 
            </Link>
        );
    }

    const renderNextPageButton = () => {
        return (
            <Link href={`${collectionUrl}page/[page]`} as={`${collectionUrl}page/${[nextPage]}`}>
                <Button color="primary" disabled={nextPage ? false : true} variant={"outlined"}>Next</Button> 
            </Link>
        );
    }

    return (
        <div id="pageBar">
            <Container style={{color: 'black', textAlign: 'center'}}>
                <div id="pageBar__headerCount">
                    <Typography variant="h5">{calculateAmountOfItemsShown()}/{stateItemCount} {countLabel}</Typography>
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
    countLabel: 'items found',
    collectionUrl: '/'
}
export default PageBar;
