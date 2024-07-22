import React, { useState } from "react";
import './User.scss'

const UserForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: Date.now(), name, email };
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
    };

    const handleDeleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <div className="container">
            <h1 className="container__title">Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={handleChangeName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button type="submit">Добавить</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleDeleteUser(user.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;

