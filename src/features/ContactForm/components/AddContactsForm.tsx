import { useState } from "react";

export default function AddContactsForm() {
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

  function handleSubmit() {
    // e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
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
