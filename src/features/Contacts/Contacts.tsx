import { useUsers } from "./hooks/useUsers";
import UserTable from "./components/UsersTable";
import AddContactsForm from "./components/AddContactsForm";
import { User } from "./types";
import { useEffect, useState } from "react";
import dummyUsers from "./data/dummyUsers";

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
