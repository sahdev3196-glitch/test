import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content text-center">
        <span className="footer-brand">Urban <span>Frill</span></span>
        <p className="footer-sub">Furnishing Studio</p>
        <hr className="footer-divider" />
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Urban Frill. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
