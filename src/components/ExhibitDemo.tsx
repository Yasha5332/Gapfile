'use client';

import React, { useState } from 'react';

export const ExhibitDemo: React.FC = () => {
  const [activeCards, setActiveCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setActiveCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="exhibit" role="group" aria-label="Interactive Live Review Extraction Deck">
      {/* HEADER STORE TELEMETRY */}
      <div className="exhibit-label mono" style={{ borderBottom: '1px solid var(--line-strong)', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="status-dot"></span>
          <span style={{ color: 'var(--ink)', fontWeight: 700 }}>EXHIBIT A — LIVE REVIEW EXTRACTION DECK</span>
        </div>
        <span style={{ color: 'var(--stamp)', fontWeight: 600 }}>HOVER TO REDACT & CLUSTER</span>
      </div>

      {/* STORE & PRODUCT BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--paper-raised)', padding: '10px 14px', borderRadius: '4px', border: '1px solid var(--line)', marginBottom: '16px' }} className="mono">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
          <span>🛍️</span>
          <span style={{ fontWeight: 700, color: 'var(--ink)' }}>Glow Beauty Official Store</span>
          <span className="badge b-c" style={{ fontSize: '10px' }}>VERIFIED SELLER</span>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--olive)' }}>1,842 REVIEWS</span>
      </div>

      {/* REALISTIC REVIEW CARD 1 */}
      <div
        className={`review-card ${activeCards[1] ? 'on' : ''}`}
        onClick={() => toggleCard(1)}
        style={{ padding: '16px', background: 'var(--paper-card)', border: '1px solid var(--line-strong)', borderRadius: '4px', marginBottom: '12px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ color: '#F59E0B' }}>★☆☆☆☆</span>
            <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Elena R.</span>
            <span style={{ fontSize: '10.5px', color: 'var(--green)', background: 'var(--green-light)', padding: '1px 6px', borderRadius: '2px' }} className="mono">✓ Verified Buyer</span>
          </div>
          <span className="mono" style={{ fontSize: '10.5px', color: 'var(--ink-muted)' }}>2 days ago</span>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
          "Serum itself is decent, but shipping took over 8 days to arrive! Support team took 24+ hours to respond to my chat..."
        </div>
        <div className="redact r1"></div>
        <div className="redact r2"></div>
        <div className="stamp-pop">SHIPPING DELAY · 61 MENTIONS</div>
      </div>

      {/* REALISTIC REVIEW CARD 2 */}
      <div
        className={`review-card ${activeCards[2] ? 'on' : ''}`}
        onClick={() => toggleCard(2)}
        style={{ padding: '16px', background: 'var(--paper-card)', border: '1px solid var(--line-strong)', borderRadius: '4px', marginBottom: '12px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ color: '#F59E0B' }}>★★☆☆☆</span>
            <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Marcus T.</span>
            <span style={{ fontSize: '10.5px', color: 'var(--green)', background: 'var(--green-light)', padding: '1px 6px', borderRadius: '2px' }} className="mono">✓ Verified Buyer</span>
          </div>
          <span className="mono" style={{ fontSize: '10.5px', color: 'var(--ink-muted)' }}>4 days ago</span>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
          "The serum color looks way yellower than official listing photos. Feel deceived, and support reps ignored my return request."
        </div>
        <div className="redact r1"></div>
        <div className="stamp-pop">COLOR MISMATCH · 47 MENTIONS</div>
      </div>

      {/* REALISTIC REVIEW CARD 3 */}
      <div
        className={`review-card ${activeCards[3] ? 'on' : ''}`}
        onClick={() => toggleCard(3)}
        style={{ padding: '16px', background: 'var(--paper-card)', border: '1px solid var(--line-strong)', borderRadius: '4px', marginBottom: '12px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ color: '#F59E0B' }}>★☆☆☆☆</span>
            <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Sarah K.</span>
            <span style={{ fontSize: '10.5px', color: 'var(--green)', background: 'var(--green-light)', padding: '1px 6px', borderRadius: '2px' }} className="mono">✓ Verified Buyer</span>
          </div>
          <span className="mono" style={{ fontSize: '10.5px', color: 'var(--ink-muted)' }}>1 week ago</span>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
          "Bottle arrived with cap loosened and half the liquid leaked inside the cardboard packaging..."
        </div>
        <div className="redact r1"></div>
        <div className="redact r2"></div>
        <div className="stamp-pop">PACKAGING LEAK · 34 MENTIONS</div>
      </div>

      {/* TELEMETRY FOOTER HINT */}
      <div className="exhibit-hint mono" style={{ background: 'var(--paper-raised)', padding: '8px 12px', borderRadius: '3px', border: '1px border var(--line)' }}>
        <span>🔍 1,842 Raw Reviews Analyzed</span> &nbsp;·&nbsp; <span>🎯 3 Recurring Weaknesses Isolated</span>
      </div>
    </div>
  );
};
