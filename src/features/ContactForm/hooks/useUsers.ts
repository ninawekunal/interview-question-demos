import { useQuery } from "@tanstack/react-query";
import dummyUsers from "../data/dummyUsers";
import { User } from "../types";

export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  } catch (ex) {
    throw ex;
  }
}

export function useUsers() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const users: User[] = error ? dummyUsers : (data ?? []);
  return { users, error, isLoading };
}
