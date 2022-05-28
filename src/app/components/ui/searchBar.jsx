import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ userName, handleChange }) => {
    return (
        <div className="input-group mb-3 mt-2">
            <input
                type="text"
                className="form-control p-2"
                value={userName}
                onChange={handleChange}
                placeholder="Поиск по имени..."
            />
            <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
            </span>
        </div>
    );
};

SearchBar.propTypes = {
    handleChange: PropTypes.func,
    userName: PropTypes.string
};

export default SearchBar;
