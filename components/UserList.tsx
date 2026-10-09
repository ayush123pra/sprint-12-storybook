import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // AbortController prevents memory leaks and stale updates if the component unmounts
    const controller = new AbortController();

    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/users', { signal: controller.signal });
        
        // Handle HTTP errors (e.g., 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        // Ignore AbortError as it is an intentional cancellation
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch users');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      controller.abort(); // Cleanup function
    };
  }, []);

  if (isLoading) {
    return <div aria-live="polite">Loading...</div>;
  }

  if (error) {
    return <div role="alert" className="text-red-500">{error}</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <section aria-labelledby="user-list-heading">
      <h2 id="user-list-heading" className="text-xl font-bold mb-4">Users</h2>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id} className="text-gray-700">{user.name}</li>
        ))}
      </ul>
    </section>
  );
}