'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sektioner matchar dina Section-komponenter i page.tsx
  const sections = [
    { id: 'welcome', label: 'Välkommen' },
    { id: 'schedule', label: 'Schema' },
    { id: 'location', label: 'Plats' },
    { id: 'rsvp', label: 'OSA' },
    { id: 'gallery', label: 'Galleri' },
  ];

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center p-4 bg-primary-50 shadow-md">
        <h1 className="text-primary-700 font-bold text-xl">Vårt bröllop</h1>

        <button
          className="p-2 rounded bg-primary-100 hover:bg-primary-200 md:p-3"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="text-primary-700" /> : <Menu className="text-primary-700" />}
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 h-full bg-primary-100 shadow-lg z-20 transform transition-transform duration-300
          w-full md:w-1/6
          md:right-0 md:left-auto
          pt-20
        `}
        style={{
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <ul className="flex flex-col gap-4 p-6 text-primary-700">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                className="hover:text-primary-500 text-left w-full"
                onClick={() => handleLinkClick(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Huvudinnehåll - används för att push:a innehållet åt sidan på desktop */}
      <div
        className="transition-all duration-300 pt-16"
        style={{ marginRight: open && isDesktop ? '16.6667%' : '0' }}
      ></div>
    </>
  );
}
