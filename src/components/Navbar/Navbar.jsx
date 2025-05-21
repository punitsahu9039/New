import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { HiOutlineMenu } from 'react-icons/hi';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
  {
    title: 'Loan Services',
    url: '#',
    submenu: [
      { title: 'Home Loan', url: '/services/home-loan' },
      { title: 'Property Loan', url: '/services/property-loan' },
      { title: 'Balance Transfer', url: '/services/balance-transfer' },
      { title: 'Business Loan', url: '/services/business-loan' }
    ]
  },
  {
    title: 'Loan Calculators',
    url: '#',
    submenu: [
      { title: 'EMI Calculator', url: '/calculators/emi' },
      { title: 'Eligibility Calculator', url: '/calculators/eligibility' },
      { title: 'Foreclose Calculator', url: '/calculators/foreclose' },
      { title: 'Bal-Transfer Calculator', url: '/calculators/balance-transfer' },
      { title: 'Pre-Pay Calculator', url: '/calculators/pre-payment' }
    ]
  },
  { title: 'Offers & Cashback', url: '/offers' },
  { title: 'Contact', url: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setMobileActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleDropdown = (index) => {
    setMobileActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleNavigation = (url) => {
    navigate(url);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div
          className="container mx-auto px-4 flex justify-between items-center"
          style={{
            minHeight: isScrolled ? 64 : 80,
            transition: 'min-height 0.3s'
          }}
        >
          <Logo />
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center" ref={menuRef}>
            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isOpen = activeDropdown === index;
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => (hasSubmenu ? setActiveDropdown(isOpen ? null : index) : handleNavigation(item.url))}
                    className="text-gray-700 font-medium hover:text-blue-600 transition flex items-center gap-1"
                  >
                    {item.title}
                    {hasSubmenu && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {hasSubmenu && isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-30 animate-fade-in">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => handleNavigation(subItem.url)}
                          className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gradient-to-br from-[#FFD700] to-[#FFA500] hover:text-white hover:shadow-lg hover:translate-y-[1px] hover:scale-[1.02] transition duration-200 ease-in-out"
                        >
                          {subItem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button
  className="gradient-primary ml-2"
  size="sm"
  onClick={() => handleNavigation('/apply')}
>
  Apply Now
</Button>

          </div>
          {/* Hamburger */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30"></div>
          <div
            ref={menuRef}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-t border-t border-gray-200 animate-slide-up"
          >
            <div className="flex justify-end px-4 pt-2">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-red-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-wrap justify-start gap-2 px-3 pb-4">
              {menuItems.map((item, index) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isOpen = mobileActiveDropdown === index;
                return (
                  <div key={index} className="relative">
                    <button
                      onClick={() => (hasSubmenu ? toggleDropdown(index) : handleNavigation(item.url))}
                      className="px-3 py-2 text-sm text-gray-700 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center gap-1"
                    >
                      {item.title}
                      {hasSubmenu && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>
                    {hasSubmenu && isOpen && (
                      // **Changed from mt-2 (below) to bottom-full mb-2 (above) for submenu to open UP**
                      <div className="absolute left-0 bottom-full mb-2 w-48 bg-white shadow-md rounded-lg z-50 animate-fade-in">
                        {item.submenu.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => handleNavigation(subItem.url)}
                            className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gradient-to-br from-[#FFD700] to-[#FFA500] hover:text-white hover:shadow-lg hover:translate-y-[1px] hover:scale-[1.02] transition duration-200 ease-in-out"
                          >
                            {subItem.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;