import { useLazyQuery, useQuery } from "@apollo/client/react";
import React, { useEffect, useState } from "react";
import { GET_USER_BY_ID, GET_USERS } from "../graphql/query/query";

function Users() {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null);
  let { loading, error, data } = useQuery(GET_USERS);
  let [getUser, { loading: uLoading, error: uError, data: uData }] =
    useLazyQuery(GET_USER_BY_ID);

  let getUserById = (id) => {
    console.log(id);
    getUser({
      variables: { id },
    });
  };

  useEffect(() => {
    if (data) {
      setUsers(data.users.value);
    }
  }, [data]);

  useEffect(() => {
    if (uData) {
      setUser(uData.user.value[0]);
    }
  }, [uData]);

  return (
    <section>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} onClick={() => getUserById(user.id)}>
              {user.email}
            </li>
          );
        })}
      </ul>
      {user && (
        <center>
          <p>{user.username} </p>
          <p>{user.password} </p>
          <p>{user.email} </p>
        </center>
      )}
    </section>
  );
}

export default Users;
