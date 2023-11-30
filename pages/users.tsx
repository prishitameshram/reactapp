// pages/users.tsx
// import '../styles/tailwind.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';
import UserCard from '../components/UserCard';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto my-8 flex flex-col items-center">
  <h1 className="text-2xl font-bold mb-4">User List</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
</div>
  );
};

export default UsersPage;
