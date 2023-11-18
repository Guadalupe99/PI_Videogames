import React from 'react';
import styles  from './Pagination.module.css';

const Paginacion = ({ videogames, pagination, perPage, currentPage }) => {
    const pagesCount = Math.ceil(videogames / perPage);

    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1);

    if(endPage -startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1); 
    }

    for( let i = startPage; i <= endPage; i++){
        pageNumbers.push(i);
    }

    const handleClick = (page) => {
        pagination(page);
    };

    const handleFirstPage = () => {
        if (currentPage !== 1) {
            pagination(pagesCount);
        }
    };

    const handleLastPage = () => {
        if (currentPage !== pagesCount) {
            pagination(pagesCount);
        }
    };

    return (
        <div className={ styles.Pagination }>
            <button 
            className={ currentPage !== 1 ? styles['pagination-button'] :
        styles.disable }
        onClick={ handleFirstPage }>First</button>

        <button
        className={ styles.disable }
        onClick={ () => handleClick(currentPage - 1) }
        disabled={ currentPage === 1 }>Prev</button>

        {pageNumbers.map((number) => (
            <div key={ number }>
                <button 
                onCLick={ () => handleClick(number) }
                className={ styles.buttonNumber }>{number}</button>
            </div>
        ))}

        <button 
        className={ styles.disable }
        onClick={ () => handleClick(currentPage + 1) }
        disabled={ currentPage === pagesCount }>Next</button>

        <button
        className={ styles.disable }
        onClick={ handleLastPage }>Last</button>
        </div>
        );
};

export default Paginacion;