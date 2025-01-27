// src/app/page.tsx
'use client';

import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';



const Page = () => {
  const[user] = useAuthState(auth);

const router = useRouter()

if (!user){
  router.push('/login')
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
