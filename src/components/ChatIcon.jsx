import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatIcon = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6712a5ea4304e3196ad3e100/1iagdg7cl';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => {
          if (window.Tawk_API) {
            window.Tawk_API.toggle();
          }
        }}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors duration-300"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatIcon;