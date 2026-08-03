'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SLANG_DATA } from '@/data/slang';

export const SlangCloudTab: React.FC = () => {
  const { lang } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filtered = filterCategory === 'all'
    ? SLANG_DATA
    : SLANG_DATA.filter(item => item.category === filterCategory);

  return (
    <div className="panel">
      <div className="ph">
        <div className="p-icon v">🗣️</div>
        <div>
          <div className="pt">{lang === 'en' ? 'Localized Slang & Teencode Dictionary Engine' : 'Từ Điển AI Xử Lý Teencode & Tiếng Lóng Local'}</div>
          <div className="pm mono">Vietnamese · Bahasa · Singlish · Thai E-Commerce Slang</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button
          className={`btn-s mono ${filterCategory === 'all' ? 'active' : ''}`}
          onClick={() => setFilterCategory('all')}
          style={{ background: filterCategory === 'all' ? 'var(--ink)' : 'transparent', color: filterCategory === 'all' ? 'var(--paper)' : 'var(--ink)' }}
        >
          All Terms ({SLANG_DATA.length})
        </button>
        <button
          className="btn-s mono"
          onClick={() => setFilterCategory('shipping')}
          style={{ background: filterCategory === 'shipping' ? 'var(--ink)' : 'transparent', color: filterCategory === 'shipping' ? 'var(--paper)' : 'var(--ink)' }}
        >
          🚚 Shipping & Logistics
        </button>
        <button
          className="btn-s mono"
          onClick={() => setFilterCategory('quality')}
          style={{ background: filterCategory === 'quality' ? 'var(--ink)' : 'transparent', color: filterCategory === 'quality' ? 'var(--paper)' : 'var(--ink)' }}
        >
          🔍 Product Quality
        </button>
        <button
          className="btn-s mono"
          onClick={() => setFilterCategory('service')}
          style={{ background: filterCategory === 'service' ? 'var(--ink)' : 'transparent', color: filterCategory === 'service' ? 'var(--paper)' : 'var(--ink)' }}
        >
          💬 CSKH / Support
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
        {filtered.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line-strong)',
              borderRadius: '3px',
              padding: '16px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="mono" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--stamp)' }}>
                "{item.term}"
              </span>
              <span className="badge b-c mono" style={{ fontSize: '10px' }}>{item.origin}</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--ink-soft)', marginBottom: '8px' }}>
              <strong>Meaning:</strong> {item.meaning}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--olive)', background: 'var(--paper-raised)', padding: '6px 10px', borderRadius: '2px' }} className="mono">
              🎯 AI Standardized Token: "{item.translated}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
