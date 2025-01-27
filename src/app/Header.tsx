// src/app/Header.tsx
import React from 'react';
import Link from 'next/link';
import { auth } from '@/app/firebase/config'; // Ensure you're importing your Firebase auth config
import { signOut } from 'firebase/auth'; // Import Firebase's signOut method
import { useRouter } from 'next/navigation'; // Import useRouter to navigate after sign out

const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out user
      router.push('/'); // Redirect to home after sign out
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
            {/* Login Page Link */}
            <li>
              <Link href="/login" legacyBehavior>
                <span className="hover:text-gray-300">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Sign Out Button */}
      <div className="mt-2">
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
