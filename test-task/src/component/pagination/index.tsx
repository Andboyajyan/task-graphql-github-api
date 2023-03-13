import React from 'react';
import classnames from 'classnames';
import {usePagination} from '../../hooks/usePagination';
import './index.scss';
import {IPagination} from "../../types/paginationTyps";

const Pagination = ({
                        onPageChange,
                        totalCount,
                        siblingCount = 1,
                        currentPage,
                        pageSize,
                        className
                    }: IPagination) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (!paginationRange) {
        return null
    }

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container', {[className]: className})}
        >
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left"/>
            </li>
            {paginationRange.map((pageNumber, index) => {

                return (
                    <li
                        key={pageNumber + index}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right"/>
            </li>
        </ul>
    );
};

export default Pagination;