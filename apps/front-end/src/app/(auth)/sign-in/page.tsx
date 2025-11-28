'use client';

import { graphQLClient } from '@shared/components/lib/graphql-client';
import { useQuery } from '@tanstack/react-query';

import { gql } from '@/gql';

interface User {
  id: string;
  username: string;
  email: string;
}

// 1. Define Query (Types are auto-generated!)
const allUsersQuery = gql(`
  query AllUsers {
    users {
      id
      username
      email
    }
  }
`);

export default function UserList() {
  // 2. Use React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'], // Unique key for caching
    queryFn: async () => graphQLClient.request(allUsersQuery),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Users</h2>
      <ul>
        {data?.users.map((user: User) => (
          <li key={user.id} className="border-b p-2">
            {user.username}{' '}
            <span className="text-gray-500">({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
