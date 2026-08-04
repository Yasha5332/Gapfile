'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AnalyzerTab } from '@/components/AnalyzerTab';
import { MatrixTab } from '@/components/MatrixTab';
import { SlangCloudTab } from '@/components/SlangCloudTab';
import { ArchitectureTab } from '@/components/ArchitectureTab';
import { BusinessModelTab } from '@/components/BusinessModelTab';
import { PRDTab } from '@/components/PRDTab';
import { ZaloBotTab } from '@/components/ZaloBotTab';

type TabKey = 'analyzer' | 'zalobot' | 'matrix' | 'slang' | 'architecture' | 'business' | 'prd';

export default function PrototypePage() {
  const { lang, tp } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('analyzer');

  const tabs: Array<{ key: TabKey; label: string; labelVi: string }> = [
    { key: 'analyzer',     label: '🔍 Analyzer',         labelVi: '🔍 Phân tích' },
    { key: 'zalobot',      label: '💬 Zalo Bot',          labelVi: '💬 Zalo Bot' },
    { key: 'matrix',       label: '⚔️ Benchmark Matrix', labelVi: '⚔️ Ma trận So sánh' },
    { key: 'slang',        label: '🗣️ Slang Cloud',       labelVi: '🗣️ Teencode / Slang' },
    { key: 'architecture', label: '🏗️ Architecture',     labelVi: '🏗️ Kiến trúc System' },
    { key: 'business',     label: '💰 Business Model',   labelVi: '💰 Mô hình Kinh doanh' },
    { key: 'prd',          label: '📋 PRD',               labelVi: '📋 Bản PRD' },
  ];

  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="wrap">
        {/* HERO PROTOTYPE HEADER */}
        <div style={{ textAlign: 'center', padding: '40px 0 28px' }}>
          <div className="hero-eye mono">
            <span className="status-dot" />
            <span>{tp.heroEye}</span>
          </div>

          <h1
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}
            dangerouslySetInnerHTML={{ __html: tp.heroTitle }}
          />

          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '620px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            {tp.heroSub}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { num: '100,000+', label: tp.st1 },
              { num: '~30s',     label: tp.st2 },
              { num: '99.4%',    label: tp.st3 },
              { num: '17/20',    label: tp.st4 },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--stamp)' }} className="mono">{stat.num}</div>
                <div style={{ fontSize: '11px', color: 'var(--olive)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TAB BUTTONS BAR */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px', borderBottom: '1.5px solid var(--line-strong)', paddingBottom: '12px' }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.key;
            const isZalo = tab.key === 'zalobot';
            return (
              <button
                key={tab.key}
                className="btn-s mono"
                onClick={() => setActiveTab(tab.key)}
                style={{
                  background: isActive
                    ? isZalo ? '#075E54' : 'var(--stamp)'
                    : 'var(--paper-card)',
                  color: isActive ? '#fff' : 'var(--ink)',
                  borderColor: isActive
                    ? isZalo ? '#128C7E' : 'var(--stamp)'
                    : 'var(--line-strong)',
                  boxShadow: isActive && isZalo ? '0 0 12px rgba(18, 140, 126, 0.4)' : 'none',
                }}
              >
                {lang === 'en' ? tab.label : tab.labelVi}
              </button>
            );
          })}
        </div>

        {/* ACTIVE TAB CONTENT */}
        <div style={{ marginBottom: '60px' }}>
          {activeTab === 'analyzer' && (
            <React.Suspense fallback={<div className="panel mono">Loading Analyzer...</div>}>
              <AnalyzerTab />
            </React.Suspense>
          )}
          {activeTab === 'zalobot'      && <ZaloBotTab />}
          {activeTab === 'matrix'       && <MatrixTab />}
          {activeTab === 'slang'        && <SlangCloudTab />}
          {activeTab === 'architecture' && <ArchitectureTab />}
          {activeTab === 'business'     && <BusinessModelTab />}
          {activeTab === 'prd'          && <PRDTab />}
        </div>
      </div>
    </div>
  );
}
