import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 4;

    useEffect(() => {
        API.professions
            .fetchAll()
            .then((data) =>
                setProfessions(data)
            );
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers =
        selectedProf
            ? users.filter((user) => user.profession.name === selectedProf.name)
            : users;

    const count = filteredUsers.length;

    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf(undefined);
    };

    return (
        <>
            {!professions && (
                <div className="d-flex justify-content-center align-items-center m-5">
                    <strong>Загрузка...</strong>
                    <div className="spinner-border m-3 text-primary" role="status" aria-hidden="true"></div>
                </div>
            )}
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            contentProperty="name"
                            valueProperty="_id"
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                        Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus professions={professions} length={users.length} />

                    {count > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Имя</th>
                                    <th scope="col">Качества</th>
                                    <th scope="col">Профессия</th>
                                    <th scope="col">Встретился, раз</th>
                                    <th scope="col">Оценка</th>
                                    <th scope="col">Избранное</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {usersCrop.map((user) => (
                                    <User {...rest} {...user} key={user._id} />
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            onToggleBookMark={rest.onToggleBookMark}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
