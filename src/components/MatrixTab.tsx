'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MATRIX_DATA } from '@/data/matrix';

export const MatrixTab: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="panel">
      <div className="ph">
        <div className="p-icon c">⚔️</div>
        <div>
          <div className="pt">{lang === 'en' ? 'Competitor Review Intelligence Benchmark Matrix' : 'Ma Trận So Sánh Giải Pháp Phân Tích Đánh Giá'}</div>
          <div className="pm mono">GapFile vs Manual Reading vs Basic Scrapers vs Generic Sentiment</div>
        </div>
      </div>

      <div className="comp-table-wrap">
        <table className="comp-table">
          <thead>
            <tr>
              <th>{lang === 'en' ? 'CAPABILITY / FEATURE' : 'TÍNH NĂNG / KHẢ NĂNG'}</th>
              <th className="highlight">⚡ GapFile AI v2.4</th>
              <th>📖 Manual Reading</th>
              <th>🕷️ Basic Scrapers</th>
              <th>📊 Generic Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {MATRIX_DATA.map((row, idx) => (
              <tr key={idx}>
                <td className="feature-title">{row.feature}</td>
                <td style={{ background: 'var(--stamp-light)', fontWeight: 600, color: 'var(--stamp)' }}>
                  {row.gapfile}
                </td>
                <td>{row.manual}</td>
                <td>{row.basicScraper}</td>
                <td>{row.genericSentiment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
