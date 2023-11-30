// pages/index.tsx
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to User List Viewer</h1>
      
      <Link className="text-blue-500 underline" href="/users">
        View User List
      </Link>
    </div>
  );
};

export default HomePage;
