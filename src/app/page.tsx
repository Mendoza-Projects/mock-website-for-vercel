'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebase/config'; // Import Firebase config
import { getAnalytics, isSupported } from 'firebase/analytics'; // Import Analytics

const Page = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // To ensure it's running only on client-side

  useEffect(() => {
    // This effect runs only on the client side
    setIsClient(true);

    const initializeAnalytics = async () => {
      if (typeof window !== 'undefined') {
        const supported = await isSupported(); // Wait for isSupported to resolve

        if (supported) {
          const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase app
          getAnalytics(firebaseApp); // Initialize Analytics
        }
      }
    };

    initializeAnalytics(); // Call the async function inside useEffect

    if (!user) {
      router.push('/login');
    }
  }, [user, router]); // Only run when `user` or `router` changes

  if (!user) {
    // Optionally, show a loading indicator while redirecting
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Page;
