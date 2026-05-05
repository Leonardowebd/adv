/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Areas from './pages/Areas';
import Escritorio from './pages/Escritorio';
import Contato from './pages/Contato';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-secondary/30 selection:text-surface">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform md:bottom-10 md:right-10"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.609 2.037.931 3.116.931h.001c3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766-.001 0-.001 0-.002 0zm3.369 8.303c-.122.343-.711.625-.973.667-.236.038-.547.063-1.488-.328-1.127-.468-1.853-1.611-1.91-1.687-.056-.075-.461-.611-.461-1.166 0-.555.29-.828.394-.938.104-.11.228-.138.305-.138.077 0 .154.001.221.004.072.003.169-.027.265.203.1.241.343.834.374.897.031.063.051.135.01.217-.041.083-.061.135-.122.21-.061.075-.129.166-.186.221-.063.063-.128.132-.055.258.073.125.324.536.697.868.481.429.884.562 1.011.625.127.062.203.051.278-.035.076-.087.324-.379.411-.508.087-.129.174-.108.293-.063.12.045.759.359.89.424.131.066.218.098.249.151.031.053.031.309-.111.651z"/>
          <path d="M12.004 2.012c-5.505 0-9.989 4.484-9.989 9.989 0 1.761.462 3.474 1.336 4.988l-1.421 5.295 5.419-1.421c1.45.783 3.081 1.126 4.655 1.127h.001c5.505 0 9.989-4.484 9.989-9.989 0-5.505-4.484-9.989-9.99-9.989zM12.031 18.068h-.001c-1.579 0-3.125-.425-4.471-1.229l-.321-.19-3.32.871.886-3.235-.209-.333c-.882-1.403-1.347-3.04-1.346-4.719.002-4.945 4.025-8.966 8.971-8.966 2.401 0 4.658.935 6.355 2.632 1.698 1.698 2.632 3.955 2.632 6.355-.002 4.945-4.025 8.966-8.971 8.966z"/>
        </svg>
      </a>
    </div>
  );
}
