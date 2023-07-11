import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10') // Replace with your random API endpoint
      .then(response => {
        setUsers(response.data.results);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user,index) => (
          <tr key={index}>
            <td>{user?.id?.value}</td>
            <td>{user?.name?.first}</td>
            <td>{user?.email}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
