// 📁 pages/admin/dashboard.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from '../../firebase/config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // ✅ Check auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/admin/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Logout function
  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };

  // ⏳ Loading state
  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>

      <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
        <p><strong>Email:</strong> {user.email}</p>

        <p>
          <strong>Status:</strong>{" "}
          <span className={user.emailVerified ? "text-green-600" : "text-red-600"}>
            {user.emailVerified ? "Verified ✅" : "Not Verified ❌"}
          </span>
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}


