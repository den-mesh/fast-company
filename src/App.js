import React, {useState} from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(td => td._id !== userId));
    }

    return (
        <div>
            <SearchStatus quantityOfUsers={users.length}/>
            <Users users={users}
                   onDelete={handleDelete}
            />
        </div>
    )
}

export default App;
