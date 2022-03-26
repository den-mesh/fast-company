import {useState} from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const quantityOfUsers = users.length;

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(td => td._id !== userId));
    }

    const renderPhrase = (number) => {
        let phrase = '';
        const n = number % 10;

        if (number === 0) {
            return phrase = 'Никто с тобой не тусанёт';
        }

        if (n === 1 || (number >= 11 && number <= 20)) {
            return phrase = 'человек с тобой сегодня тусанёт';
        }

        if (n >= 5 && n <= 9) {
            return phrase = 'человек с тобой сегодня тусанёт';
        }

        if (n >= 2 && n <= 4) {
            return phrase = 'человека тусанут с тобой сегодня';
        }

        return phrase = 'человек с тобой сегодня тусанёт';
    }

    const getMessageClasses = () => {
        let classes = 'badge m-2 ';

        classes += quantityOfUsers === 0
            ? 'bg-danger'
            : 'bg-primary';

        return classes;
    }

    const getTheadTableClasses = () => {
        let classes = '';

        classes += quantityOfUsers === 0
            ? 'd-none'
            : ''

        return classes;
    }

    return (
        <>
            <h2>
                  <span className={getMessageClasses()}>
                  {quantityOfUsers === 0
                      ? ''
                      : quantityOfUsers} {renderPhrase(quantityOfUsers)}
                  </span>
            </h2>

            <table className="table table-hover">
                <thead className={getTheadTableClasses()}>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"/>
                </tr>
                </thead>

                <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map((quality =>
                                    <span key={quality._id}
                                          className={'m-2 badge bg-' + quality.color}
                                    >
                                        {quality.name}</span>))}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td>
                                    <button className='btn btn-danger'
                                            onClick={() => handleDelete(user._id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}


export default Users;
