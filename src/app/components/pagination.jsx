import React, { useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    useEffect(() => {
        if (itemsCount % pageSize === 0 && currentPage > itemsCount / pageSize) onPageChange(itemsCount / pageSize);
    }, [itemsCount]);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={"page-item " + (page === currentPage ? "active" : "")}
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => {
                                onPageChange(page);
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
