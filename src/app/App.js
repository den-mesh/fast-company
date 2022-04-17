import React, { useEffect, useState } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
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
    return (
        <div>
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={Object.values(users)}
            />
        </div>
    );
}

export default App;
