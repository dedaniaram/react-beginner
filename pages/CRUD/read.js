import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('https://randomuser.me/api/?results=10') // Replace with your random API endpoint
//       .then(response => {
//         setUsers(response.data.results);
//         console.log(response.data)
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mo. Number</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(user => (
          <tr key={phonenumber}>
            <td>{user.profilePicture}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
