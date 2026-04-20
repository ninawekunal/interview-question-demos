import { useUsers } from "./hooks/useUsers.js";
import UserTable from "./components/UsersTable.js";
import AddContactsForm from "./components/AddContactsForm.js";
import { type User } from "./types.js";
import { useEffect, useState } from "react";
import dummyUsers from "./data/dummyUsers.js";

export default function Contacts() {
  const { data, error, isLoading } = useUsers();

  const users: User[] = error ? dummyUsers : (data ?? dummyUsers);

  const [displayedUsers, setDisplayedUsers] = useState<User[]>(
    users.slice(0, 5),
  );

  useEffect(() => {
    setDisplayedUsers(users.slice(0, 5));
  }, [users]);

  if (isLoading) return <div>Loading Data...</div>;

  function addContactToUsers(user: User) {
    setDisplayedUsers((prev) => [user, ...prev]);
  }

  return (
    <div className="main-content">
      <AddContactsForm addContactToUsers={addContactToUsers} />
      {error && !isLoading && <div>Error fetching users</div>}
      {users && <UserTable users={displayedUsers} />}
    </div>
  );
}
