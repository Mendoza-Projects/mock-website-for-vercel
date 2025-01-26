// src/app/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    (<header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">321 Mafia Beats</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="./" legacyBehavior>
                <span className="hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/beats" legacyBehavior>
                <span className="hover:text-gray-300">Beats</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>)
  );
};

export default Header;
