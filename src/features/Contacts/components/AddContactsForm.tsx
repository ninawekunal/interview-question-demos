import { useState } from "react";
import "../styles/index.css";
import type { User } from "../types";

type AddContactsFormProps = {
  addContactToUsers: (user: User) => void;
};

export default function AddContactsForm({
  addContactToUsers,
}: AddContactsFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    addContactToUsers(formState as User);
    setFormState({ name: "", email: "", phone: "" });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Contact to the table below</h2>

      <input
        name="name"
        type="text"
        required
        placeholder="Enter Contact Name"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Enter Contact Email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        type="phone"
        required
        placeholder="Enter Contact Phone"
        value={formState.phone}
        onChange={handleChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}
