'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ArchitectureTab: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="panel">
      <div className="ph">
        <div className="p-icon c">🏗️</div>
        <div>
          <div className="pt">{lang === 'en' ? 'System Architecture & Telemetry Pipeline' : 'Kiến Trúc Hệ Thống & Đường Ống Telemetry'}</div>
          <div className="pm mono">Apify Proxies + Playwright Actor Fleet + Localized LLM Clustering</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        <div className="engine-card">
          <span className="step-tag">LAYER 01 — SCRAPING FLEET</span>
          <h3>Apify Proxy & Actors</h3>
          <p>Residential IP proxy rotation with automated headful Playwright instance handling JS rendering, CAPTCHAs, and pagination.</p>
          <ul className="engine-list">
            <li>100% Ban-Free execution</li>
            <li>200–2,000 reviews fetched per run</li>
            <li>Shopee, TikTok, Amazon & Lazada actors</li>
          </ul>
        </div>

        <div className="engine-card">
          <span className="step-tag">LAYER 02 — TOKENIZATION</span>
          <h3>Slang & Teencode NLP</h3>
          <p>Custom dictionary embeddings trained on SEA e-commerce review corpora to map regional shorthand to standardized sentiment nodes.</p>
          <ul className="engine-list">
            <li>Vietnamese teencode parser</li>
            <li>Emoji sentiment mapping</li>
            <li>Carrier delay vs product defect separation</li>
          </ul>
        </div>

        <div className="engine-card">
          <span className="step-tag">LAYER 03 — VECTOR CLUSTERING</span>
          <h3>Pain Frequency Engine</h3>
          <p>High-dimensional vector clustering calculates issue recurrence, buyer churn risk, and pain split percentages.</p>
          <ul className="engine-list">
            <li>Frequency spectrum scoring</li>
            <li>Recurring weakness isolation</li>
            <li>Sentiment ratio calculation</li>
          </ul>
        </div>

        <div className="engine-card">
          <span className="step-tag">LAYER 04 — STRATEGY GENERATOR</span>
          <h3>Actionable Ad Playbook</h3>
          <p>Generates ready-to-run marketing hooks, listing guarantees, and product improvements based on isolated gaps.</p>
          <ul className="engine-list">
            <li>Ad hook copy suggestions</li>
            <li>Listing bullet copy</li>
            <li>Client-facing PDF exhibits</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
