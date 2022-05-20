import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "../api";
import QualitiesList from "./qualitiesList";
import Loading from "./loading";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    });
    const history = useHistory();

    const handleReturn = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>{`Профессия: ${user.profession.name}`}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                <h2>{`Rate: ${user.rate}`}</h2>
                <button onClick={handleReturn}>Все пользователи</button>
            </div>
        );
    } else {
        return <Loading />;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
