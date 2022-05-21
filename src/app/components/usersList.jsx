import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import Loading from "./loading";
import SearchBar from "./searchBar";

const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [searchUser, setSearchUser] = useState("");
    const pageSize = 8;

    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchUser]);

    const handleProfessionSelect = (item) => {
        if (searchUser !== "") setSearchUser("");
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleSearch = (event) => {
        setSelectedProf(undefined);
        setSearchUser(event.target.value);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    if (users) {
        const searchedUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(searchUser.toLowerCase());
        });

        const filteredUsers = searchUser
            ? searchedUsers
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) === JSON.stringify(selectedProf)
                )
                : searchedUsers;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            contentProperty="name"
                            valueProperty="_id"
                            selectedItem={selectedProf}
                        />
                        <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus professions={professions} length={count} />
                    {users.length > 0
                        ? (
                            <SearchBar userName={searchUser} handleChange={handleSearch} />
                        )
                        : null}

                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            selectedSort={sortBy}
                            onSort={handleSort}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            clearFilter={clearFilter}
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <Loading />;
};

UsersList.propTypes = {
    users: PropTypes.array
};

export default UsersList;
