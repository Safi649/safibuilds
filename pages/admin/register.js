// pages/admin/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 Handle Registration
  const handleRegister = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      router.push('/admin/dashboard'); // ⬅️ redirect after register
    } catch (error) {
      alert("Registration failed: " + error.message); // ❌ alert on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">🆕 Register as Admin</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password (6+ characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/admin/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
