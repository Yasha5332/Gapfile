'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AnalyzerTab } from '@/components/AnalyzerTab';
import { MatrixTab } from '@/components/MatrixTab';
import { SlangCloudTab } from '@/components/SlangCloudTab';
import { ArchitectureTab } from '@/components/ArchitectureTab';
import { BusinessModelTab } from '@/components/BusinessModelTab';
import { PRDTab } from '@/components/PRDTab';

type TabKey = 'analyzer' | 'matrix' | 'slang' | 'architecture' | 'business' | 'prd';

export default function PrototypePage() {
  const { lang, tp } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('analyzer');

  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="wrap">
        {/* HERO PROTOTYPE HEADER */}
        <div style={{ textAlign: 'center', padding: '40px 0 28px' }}>
          <div className="hero-eye mono">
            <span className="status-dot"></span>
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
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--stamp)' }} className="mono">100,000+</div>
              <div style={{ fontSize: '11px', color: 'var(--olive)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{tp.st1}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--stamp)' }} className="mono">~30s</div>
              <div style={{ fontSize: '11px', color: 'var(--olive)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{tp.st2}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--stamp)' }} className="mono">99.4%</div>
              <div style={{ fontSize: '11px', color: 'var(--olive)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{tp.st3}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--stamp)' }} className="mono">17/20</div>
              <div style={{ fontSize: '11px', color: 'var(--olive)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{tp.st4}</div>
            </div>
          </div>
        </div>

        {/* TAB BUTTONS BAR */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px', borderBottom: '1.5px solid var(--line-strong)', paddingBottom: '12px' }}>
          <button
            className={`btn-s mono ${activeTab === 'analyzer' ? 'active' : ''}`}
            onClick={() => setActiveTab('analyzer')}
            style={{
              background: activeTab === 'analyzer' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'analyzer' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'analyzer' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.a}
          </button>

          <button
            className={`btn-s mono ${activeTab === 'matrix' ? 'active' : ''}`}
            onClick={() => setActiveTab('matrix')}
            style={{
              background: activeTab === 'matrix' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'matrix' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'matrix' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.m}
          </button>

          <button
            className={`btn-s mono ${activeTab === 'slang' ? 'active' : ''}`}
            onClick={() => setActiveTab('slang')}
            style={{
              background: activeTab === 'slang' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'slang' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'slang' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.s}
          </button>

          <button
            className={`btn-s mono ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
            style={{
              background: activeTab === 'architecture' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'architecture' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'architecture' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.r}
          </button>

          <button
            className={`btn-s mono ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
            style={{
              background: activeTab === 'business' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'business' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'business' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.b}
          </button>

          <button
            className={`btn-s mono ${activeTab === 'prd' ? 'active' : ''}`}
            onClick={() => setActiveTab('prd')}
            style={{
              background: activeTab === 'prd' ? 'var(--stamp)' : 'var(--paper-card)',
              color: activeTab === 'prd' ? 'var(--paper)' : 'var(--ink)',
              borderColor: activeTab === 'prd' ? 'var(--stamp)' : 'var(--line-strong)'
            }}
          >
            {tp.p}
          </button>
        </div>

        {/* ACTIVE TAB CONTENT */}
        <div style={{ marginBottom: '60px' }}>
          {activeTab === 'analyzer' && <AnalyzerTab />}
          {activeTab === 'matrix' && <MatrixTab />}
          {activeTab === 'slang' && <SlangCloudTab />}
          {activeTab === 'architecture' && <ArchitectureTab />}
          {activeTab === 'business' && <BusinessModelTab />}
          {activeTab === 'prd' && <PRDTab />}
        </div>
      </div>
    </div>
  );
}
