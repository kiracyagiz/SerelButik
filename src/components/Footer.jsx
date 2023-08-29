import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" className="text-xl hover:text-blue-500">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" className="text-xl hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" className="text-xl hover:text-blue-500">
          <FaInstagram />
        </a>
      </div>
      <p className="mt-2 text-center">&copy; 2023 Yagiz Kirac. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
