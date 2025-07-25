// 📁 pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // ✅ Protect route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        toast.error("You must be logged in!");
        router.push('/admin/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out!");
      router.push('/admin/login');
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    }
  };

  if (!user) return null; // ⏳ loading state

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">👋 Welcome, Admin!</h1>
        <p className="mb-6">You're logged in as <strong>{user.email}</strong></p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
