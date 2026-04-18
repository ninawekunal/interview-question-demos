import "./styles/index.css";
import { useUsers } from "./hooks/useUsers";
import UserTable from "./components/UsersTable";
import AddContactsForm from "./components/AddContactsForm";

export default function ContactForm() {
  const { users, error, isLoading } = useUsers();

  return (
    <div>
      <AddContactsForm />
      <UserTable users={users} />
    </div>
  );
}
