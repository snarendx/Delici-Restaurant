// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        src="/path-to-your-video.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
