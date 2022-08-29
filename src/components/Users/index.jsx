import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  checkInvitation,
  invites,
  isLoading,
  users,
  searchPeople,
  search,
  changeSetInvitation
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={search}
          onChange={searchPeople}
          type="text"
          placeholder="Find a user..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {users
            .filter((person) => {
              const fullName = (
                person.first_name + person.last_name
              ).toLowerCase();
              return (
                fullName.includes(search.toLowerCase()) ||
                person.email.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((person) => (
              <User 
                isInvite={invites.includes(person.id)}
                checkInvitation={checkInvitation}
                key={person.id}
                {...person}
              />
            ))}
        </ul>
      )}

      {invites.length>0 &&
        <button onClick={changeSetInvitation} className="send-invite-btn">Send invitation</button>}
    </>
  );
};
