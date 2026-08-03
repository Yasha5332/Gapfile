'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const PRDTab: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="panel">
      <div className="ph">
        <div className="p-icon g">📋</div>
        <div>
          <div className="pt">Product Requirements Document (PRD)</div>
          <div className="pm mono">Problem scoring matrix & MVP specification</div>
        </div>
      </div>

      <div style={{ fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
        <div style={{ background: 'var(--stamp-light)', border: '1.5px solid var(--stamp)', padding: '18px 24px', borderRadius: '4px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '20px', color: 'var(--stamp)', fontWeight: 700, marginBottom: '8px' }}>
            Problem Score: 17 / 20 (Proceed with Build)
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink)' }}>
            Strong market pull validated by e-commerce brand owners and agency directors seeking data-driven competitive positioning.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: '16px', borderRadius: '3px' }}>
            <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>• Pain Level: 4 / 5</div>
            <div style={{ fontSize: '13px' }}>Losing sales to competitors directly impacts merchant bottom line and ad ROAS.</div>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: '16px', borderRadius: '3px' }}>
            <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>• Frequency: 4 / 5</div>
            <div style={{ fontSize: '13px' }}>Monitoring rivals requires weekly or monthly recurring checks during campaign launches.</div>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: '16px', borderRadius: '3px' }}>
            <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>• Market Size: 4 / 5</div>
            <div style={{ fontSize: '13px' }}>Millions of active e-commerce merchants across Shopee, TikTok Shop, Lazada & Amazon.</div>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: '16px', borderRadius: '3px' }}>
            <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>• Willingness to Pay: 5 / 5</div>
            <div style={{ fontSize: '13px' }}>Uncovering unfair competitive advantages has immediate ROI via improved conversion rates.</div>
          </div>
        </div>

        <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', padding: '20px', borderRadius: '3px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: 'var(--ink)' }}>
            MVP Core Requirements & Acceptance Criteria
          </h4>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px' }}>
            <li>Accept product URL inputs from Shopee, TikTok Shop, Amazon, Lazada & eBay.</li>
            <li>Run residential proxy extraction via Apify actor integration within ~30s.</li>
            <li>Perform slang & teencode tokenization for Vietnamese, Bahasa, Singlish & English.</li>
            <li>Display structured top 3 weaknesses, pain mention breakdown, and sentiment ring charts.</li>
            <li>Provide one-click "View Ad Hook" ad copy suggestions for each weakness category.</li>
            <li>Enable EN / VN bilingual interface toggling with persistent state.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
