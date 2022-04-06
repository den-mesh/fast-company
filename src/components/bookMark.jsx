import React from "react";
import button from "bootstrap/js/src/button";

const BookMark = () => {

    const getBookMarkStatus = (event) => {
        const {target} = event

        target.className = target.className !== 'bi bi-bookmark-star-fill'
            ? 'bi bi-bookmark-star-fill'
            : "bi bi-bookmark"
    }

    return (
        <button>
            <i onClick={(event) => getBookMarkStatus(event)}
               className="bi bi-bookmark">
            </i>
        </button>
    )
}

export default BookMark;
