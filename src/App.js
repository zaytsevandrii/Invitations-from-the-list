import React, { useEffect, useState } from "react";
import "../src/index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sendInvitation, setSendInvitation] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .finally(() => setIsLoading(false));
  }, []);

  const searchPeople = (e) => {
    setSearch(() => e.target.value);
  };

  const checkInvitation = (id) => {
    if (invites.includes(id)) {
      setInvites(invites.filter((_id) => _id !== id));
    } else {
      setInvites([...invites, id]);
    }
  };

  const changeSetInvitation = () => {
    setSendInvitation(true);
  };

const count=invites.length

  return (
    <div className="App">
      {!sendInvitation ? (
        <Users
          changeSetInvitation={changeSetInvitation}
          invites={invites}
          users={users}
          checkInvitation={checkInvitation}
          isLoading={isLoading}
          search={search}
          searchPeople={searchPeople}
        />
      ) : (
        <Success count={count}/>
      )}
    </div>
  );
}

export default App;
