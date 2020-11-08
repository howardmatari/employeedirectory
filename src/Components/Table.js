import React from 'react';

function Table({ users }) {
    return (
        <table>
        <thead>
        <td>Image</td>
        <td> Name</td>
        <td>Email</td> 
        <td>Phone</td>
        </thead>
        {users.map(({ name, login, picture, email, phone }) => {
            return (
                <tr key={phone}>
                <td><img src={picture.medium}
                        alt={"employee picture"}/></td>
                <td>{name.title} {name.first} {name.last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                
                </tr>
            )
        })}
        </table>
    )
}

export default Table;