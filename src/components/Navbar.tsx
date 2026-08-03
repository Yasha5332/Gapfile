'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileActive, setMobileActive] = useState(false);
  const pathname = usePathname();

  const isPrototype = pathname === '/prototype';

  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="logo">
          <span className="logo-mark"></span>
          <span>GapFile</span>
          <span className="logo-badge mono">v2.4 NLP</span>
        </Link>

        <ul className={mobileActive ? 'mobile-nav-active' : ''}>
          {!isPrototype ? (
            <>
              <li><a href="#features" onClick={() => setMobileActive(false)}>{t.navFeatures}</a></li>
              <li><a href="#engine" onClick={() => setMobileActive(false)}>{t.navEngine}</a></li>
              <li><a href="#comparison" onClick={() => setMobileActive(false)}>{t.navComp}</a></li>
              <li><a href="#cases" onClick={() => setMobileActive(false)}>{t.navCases}</a></li>
              <li><a href="#roadmap" onClick={() => setMobileActive(false)}>{t.navRoadmap}</a></li>
              <li><a href="#services" onClick={() => setMobileActive(false)}>{t.navPricing}</a></li>
              <li>
                <Link href="/prototype" className="nav-proto-link" onClick={() => setMobileActive(false)}>
                  {t.navProto}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/" onClick={() => setMobileActive(false)}>
                  {lang === 'en' ? '← Back to Home' : '← Trang chủ'}
                </Link>
              </li>
              <li>
                <span className="logo-badge mono" style={{ background: 'var(--stamp-light)', color: 'var(--stamp)' }}>
                  INTERACTIVE PROTOTYPE MODE
                </span>
              </li>
            </>
          )}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="lang-btn" onClick={toggleLanguage}>
            <span>{t.flag}</span> <span>{t.label}</span>
          </button>
          {!isPrototype && (
            <Link href="/prototype" className="btn btn-primary nav-btn-hide-mobile">
              {t.navBtnProto}
            </Link>
          )}
          <button
            className="nav-toggle"
            onClick={() => setMobileActive(!mobileActive)}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};
