import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EnzonicAI = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="w-full h-[80vh] bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            src="http://37.114.41.233:3000/"
            title="Enzonic AI"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicAI;