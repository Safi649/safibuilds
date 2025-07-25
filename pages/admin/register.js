// 📁 pages/admin/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/config';
import { toast } from 'react-hot-toast';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Save user to Firestore
      await setDoc(doc(db, 'users', userCred.user.uid), {
        email: userCred.user.email,
        uid: userCred.user.uid,
        createdAt: new Date().toISOString(),
      });

      toast.success("Registered successfully!");
      router.push('/admin/dashboard');
    } catch (error) {
      toast.error("Registration failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🆕 Register</h1>

        <input
          className="w-full p-2 border border-gray-300 rounded mb-3"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border border-gray-300 rounded mb-4"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <a href="/admin/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
