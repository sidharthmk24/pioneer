'use client';

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../app/utils/Firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  const saveUserToFirestore = async (uid: string) => {
    await setDoc(doc(db, 'users', uid), {
      name: formData.name,
      email: formData.email,
      createdAt: new Date().toISOString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        setSuccess('Login successful!');
        router.push('/dashboard');
      } else {
        // Register
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        await updateProfile(userCredential.user, {
          displayName: formData.name,
        });

        await saveUserToFirestore(userCredential.user.uid);
        setSuccess('Registration successful!');
        setIsLogin(true); // Switch to login mode
      }

      setFormData({ name: '', email: '', password: '' });
    } catch (err: any) {
      console.error('Auth Error:', err);
      if (err.message.includes('auth/user-not-found')) {
        setError('User not found.');
      } else if (err.message.includes('auth/wrong-password')) {
        setError('Incorrect password.');
      } else if (err.message.includes('auth/email-already-in-use')) {
        setError('Email already in use.');
      } else if (err.message.includes('auth/weak-password')) {
        setError('Password too weak (minimum 6 characters).');
      } else if (err.message.includes('auth/invalid-email')) {
        setError('Invalid email address.');
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="h-auto min-h-[26rem] w-[22rem] z-10 bg-gradient-to-b from-black via-[#191918] via-[#320A0A] to-black rounded-xl p-8 w-full max-w-sm shadow-lg backdrop-blur-sm">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
         LOGIN
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center mb-2">{success}</p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#320A0A] via-red-900 to-[#320A0A] text-white py-2 rounded hover:opacity-90 transition-all disabled:opacity-50"
          >
           Login
          </button>
        </form>

        
      </div>
    </div>
  );
}
