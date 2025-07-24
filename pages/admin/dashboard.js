// pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // 🔒 Protect route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/admin/login'); // redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  // 🚪 Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully");
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">👋 Welcome to SafiBuilds Admin Dashboard</h1>
        {user && (
          <p className="text-gray-700 mb-6">
            Logged in as <span className="font-semibold">{user.email}</span>
          </p>
        )}

        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => alert('Add more dashboard features here!')}
          >
            ➕ Add Content
          </button>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

