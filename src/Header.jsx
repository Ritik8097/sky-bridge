import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Subsection Component
const Subsection = ({ title, content, link }) => {
  return (
    <Link to={link}>
      <div className="p-4 hover:bg-gray-100 cursor-pointer">
        <h3 className="text-lg font-semibold">{title}</h3>
        {content && <p>{content}</p>}
      </div>
    </Link>
  );
};

// Subsections for 'Who We Are' and 'What We Do'
const SubsectionsSection1 = () => (
  <div className="mt-2 space-y-2 bg-white  text-blue-900">
    <Subsection title="About Us" link="/about" />
    <Subsection title="Purpose and Values" link="/purpose-value" />
    <Subsection title="Leadership" link="/leadership" />
  </div>
);

const SubsectionsSection2 = () => (
  <div className="mt-2 space-y-2 bg-white  text-blue-900">
    <Subsection title="Investment Banking Solutions" link="/investment-banking-solution" />
    <Subsection title="Private Equity" link="/private-equity" />
    <Subsection title="Loan Syndication" link="/loan-syndication" />
  </div>
);

// Header Component
const Header = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const sections = ['Who We Are', 'What We Do', 'How We Do', 'Why Choose Us', 'Our Commitment'];

  return (
    <header className="relative">
      <div className="flex items-center justify-between p-4 bg-white  text-blue-900 md:pl-[120px] md:pr-[120px]">
        <div className="text-xl font-bold">Logo</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="flex flex-col items-center justify-center p-2">
            <img class="h-7" src="data:image/png;base64,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" alt="menu"/>
          </button>
        </div>
        <nav className="hidden lg:flex space-x-6 relative md:gap-[12px]">
          {sections.map((section, index) => {
            if (section === 'How We Do' || section === 'Why Choose Us' || section === 'Our Commitment') {
              const links = {
                'How We Do': '/how-we-do',
                'Why Choose Us': '/why-choose-us',
                'Our Commitment': '/our-commitment',
              };

              return (
                <div key={index} className="relative group">
                  <Link to={links[section]} className="text-lg font-semibold focus:outline-none">
                    {section}
                  </Link>
                </div>
              );
            }

            const SubsectionsComponent = [SubsectionsSection1, SubsectionsSection2][index];

            return (
              <div key={index} className="relative group">
                <button onClick={() => toggleSection(section)} className="text-lg font-semibold focus:outline-none">
                  {section}
                </button>
                <div
                  className={`absolute z-50 left-0 top-full bg-white  text-blue-900 w-48 ${
                    openSection === section ? 'block' : 'hidden'
                  } group-hover:block`}
                >
                  <SubsectionsComponent />
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-[9999999] top-0 right-0 w-64 h-full bg-white  text-blue-900 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform lg:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="text-blue-900 text-2xl">
            &times;
          </button>
        </div>
        <nav className="mt-4">
          {sections.map((section, index) => {
            if (section === 'How We Do' || section === 'Why Choose Us' || section === 'Our Commitment') {
              const links = {
                'How We Do': '/how-we-do',
                'Why Choose Us': '/why-choose-us',
                'Our Commitment': '/our-commitment',
              };

              return (
                <div key={index} className="p-4">
                  <Link to={links[section]} className="text-lg font-semibold w-full text-left focus:outline-none">
                    {section}
                  </Link>
                </div>
              );
            }

            const SubsectionsComponent = [SubsectionsSection1, SubsectionsSection2][index];

            return (
              <>
              <div key={index} className="p-4">
                <button onClick={() => toggleSection(section)} className="flex items-center text-lg font-semibold w-full text-left focus:outline-none">
                  {section}
                  <svg id="svg2" class="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {openSection === section && <SubsectionsComponent />}
              </div>

              </>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
