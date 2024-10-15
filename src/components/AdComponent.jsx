import React, { useEffect, useState } from 'react';

const AdComponent = ({ adSlot }) => {
  const [adStatus, setAdStatus] = useState('Loading ad...');

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setAdStatus('Ad loaded successfully');
    } catch (e) {
      console.error('Error loading AdSense ad:', e);
      setAdStatus('Error loading ad');
    }
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-8125084036940742"
           data-ad-slot={adSlot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <p className="text-sm text-gray-500 mt-2">{adStatus}</p>
    </div>
  );
};

export default AdComponent;