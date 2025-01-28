'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config'; // Import Firebase auth instance
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import needed functions

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">321 Mafia Beats</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <span className="hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/beats" legacyBehavior>
                <span className="hover:text-gray-300">Beats</span>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
                <span className="hover:text-gray-300">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {user && (
        <div className="mt-2">
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
