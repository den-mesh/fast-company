import React from "react";
import Qualities from "./qualitie";
import BookMark from "./bookMark";
import PropTypes from "prop-types";

const User = (user) => {
  const {
    name,
    qualities,
    _id,
    rate,
    profession,
    completedMeetings,
    onDelete,
  } = user;

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualities key={quality._id} {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.number.isRequired,
    _id: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default User;
