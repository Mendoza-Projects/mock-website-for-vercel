'use client'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;