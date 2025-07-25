// 📁 pages/admin/dashboard.js
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/admin/login");
      } else {
        setUser(firebaseUser);
        const ref = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setUserData(snap.data());
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl space-y-4">
        <h1 className="text-3xl font-bold">👋 Welcome to your Dashboard</h1>
        
        {user && (
          <div className="space-y-2">
            <p><strong>Name:</strong> {userData.name || "N/A"}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
