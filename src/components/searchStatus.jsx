import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({quantityOfUsers}) => {
    const getMessageClasses = () => {
        let classes = "badge m-2 ";

        classes += !quantityOfUsers ? "bg-danger" : "bg-primary";

        return classes;
    };

    const renderPhrase = (number) => {
        let phrase = "";
        const n = number % 10;

        if (number === 0) {
            return (phrase = "Никто с тобой не тусанёт");
        }

        if (n === 1 || (number >= 11 && number <= 20)) {
            return (phrase = "человек с тобой сегодня тусанёт");
        }

        if (n >= 5 && n <= 9) {
            return (phrase = "человек с тобой сегодня тусанёт");
        }

        if (n >= 2 && n <= 4) {
            return (phrase = "человека тусанут с тобой сегодня");
        }

        return (phrase = "человек с тобой сегодня тусанёт");
    };

    return (
        <h2>
      <span className={getMessageClasses()}>
        {!quantityOfUsers ? "" : quantityOfUsers}{" "}
          {renderPhrase(quantityOfUsers)}
      </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    quantityOfUsers: PropTypes.number.isRequired,
}

export default SearchStatus;
