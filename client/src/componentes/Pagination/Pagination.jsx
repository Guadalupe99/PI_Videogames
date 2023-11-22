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
    console.log("startPage:", startPage);
console.log("endPage:", endPage);

    for( let i = startPage; i <= endPage; i++){
        pageNumbers.push(i);
    }

    const handleClick = (page) => {
        pagination(page);
    };

    const handleFirstPage = () => {
        if (currentPage !== 1) {
            pagination(1);
        }
    };

    const handleLastPage = () => {
        if (currentPage !== pagesCount) {
            pagination(pagesCount);
        }
        console.log(pagesCount)
    };

    console.log(pageNumbers)

    return (
        <div className={ styles.Pagination }>
            <button 
            className={ styles.disabled }
            onClick={ handleFirstPage }>First</button>

        <button
        className={ styles.disabled }
        onClick={ () => handleClick(currentPage - 1) }>Prev</button>
{pageNumbers.map((number) => (
    <div key={number}>
            <button
              onClick={() => handleClick(number)}
              className={`${styles.buttonNumber} ${
                  currentPage === number ? styles["is-current"] : ""
                }`}
                >
              {number}
            </button>
            </div>
        ))}

        <button 
        className={ styles.disabled }
        onClick={ () => handleClick(currentPage + 1) }>Next</button>

        <button
        className={ styles.disabled }
        onClick={ handleLastPage }>Last</button>
        </div>
        );
};

export default Paginacion;