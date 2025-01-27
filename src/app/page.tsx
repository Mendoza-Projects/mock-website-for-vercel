'use client';

import React, { useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]); // Only run the effect when `user` or `router` changes

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
