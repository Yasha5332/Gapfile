'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const BusinessModelTab: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="panel">
      <div className="ph">
        <div className="p-icon g">💰</div>
        <div>
          <div className="pt">{lang === 'en' ? 'SaaS Unit Economics & Business Model' : 'Mô Hình Kinh Doanh & Đơn Vị Kinh Tế SaaS'}</div>
          <div className="pm mono">Target LTV:CAC 3:1 · Monthly Recurring Revenue Architecture</div>
        </div>
      </div>

      <div className="strip-grid" style={{ marginBottom: '28px' }}>
        <div className="strip-stat">
          <div className="num">$450</div>
          <div className="lbl">Average Customer LTV</div>
          <div className="sub">Based on 9-month retention on $49/mo average ARPU.</div>
        </div>
        <div className="strip-stat">
          <div className="num">$120</div>
          <div className="lbl">Target CAC</div>
          <div className="sub">Blended acquisition via Shopee community & Meta ads.</div>
        </div>
        <div className="strip-stat">
          <div className="num">3.75 : 1</div>
          <div className="lbl">LTV : CAC Ratio</div>
          <div className="sub">Healthy unit economics for sustainable bootstrapped SaaS.</div>
        </div>
        <div className="strip-stat">
          <div className="num">85%</div>
          <div className="lbl">Gross Margin</div>
          <div className="sub">Low infrastructure cost per run (~$0.04 Apify proxy + LLM token).</div>
        </div>
      </div>

      <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: '24px', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
          {lang === 'en' ? 'Target Market & Expansion Strategy' : 'Thị Trường Mục Tiêu & Lộ Trình Mở Rộng'}
        </h3>
        <p style={{ fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
          GapFile targets over 2.5 million active e-commerce merchants in Vietnam, Indonesia, Thailand, Malaysia, and global sellers on Amazon. By delivering immediate ROI through high-converting ad hooks extracted directly from rival complaints, merchants experience fast time-to-value and low churn.
        </p>
      </div>
    </div>
  );
};
