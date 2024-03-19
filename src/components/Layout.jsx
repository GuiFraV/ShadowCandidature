import React from 'react';
import App from '../App';
import Footer from './Footer';

const Layout = () => {
  return (
     <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center">
        <App />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
