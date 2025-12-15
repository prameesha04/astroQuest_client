import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Astro_Quest. All rights reserved.
      <div className="mt-2">
        <a href="/privacy" className="mx-2 hover:underline">
          Privacy Policy
        </a>
        |
        <a href="/terms" className="mx-2 hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
