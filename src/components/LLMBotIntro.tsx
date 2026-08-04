'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/* ──────────────────────────────────────────────────────────────
   OpenClaw-style animated LLM Bot Intro
   Features:
   - Animated terminal with streaming LLM output
   - Glowing neon borders + scanline
   - Live "AI Reasoning" token stream panel
   - Floating stat badges with entrance animation
   ────────────────────────────────────────────────────────────── */

interface StreamToken {
  text: string;
  color?: string;
  delay: number;
}

const REASONING_TOKENS: StreamToken[] = [
  { text: '> Initializing GapFile Neural Engine v2.4...', color: '#94A3B8', delay: 0 },
  { text: '> Loading Apify Playwright Actor fleet...', color: '#3B82F6', delay: 380 },
  { text: '> Webhook received: shopee.vn/product/glow-serum', color: '#94A3B8', delay: 760 },
  { text: '> Scraping 1,842 reviews across 12 pages...', color: '#3B82F6', delay: 1140 },
  { text: '> Running Vietnamese slang tokenizer...', color: '#A78BFA', delay: 1520 },
  { text: '  "giao lề mề" → SHIPPING_DELAY:HIGH', color: '#F59E0B', delay: 1900 },
  { text: '  "rep chậm" → CS_RESPONSE:POOR', color: '#F59E0B', delay: 2200 },
  { text: '  "màu khác ảnh" → COLOR_MISMATCH', color: '#F59E0B', delay: 2500 },
  { text: '> Clustering pain vectors (k=8)...', color: '#A78BFA', delay: 2900 },
  { text: '> Revenue impact scoring...', color: '#A78BFA', delay: 3300 },
  { text: '> Generating ad copy playbook...', color: '#10B981', delay: 3700 },
  { text: '✓ REPORT READY · 4.1s total pipeline', color: '#10B981', delay: 4200 },
];

const LLM_OUTPUT_LINES = [
  { label: 'TOP WEAKNESS #1', value: 'Shipping Delays', detail: '61 mentions · 32% pain share', color: '#FF3848' },
  { label: 'TOP WEAKNESS #2', value: 'Color Mismatch', detail: '47 mentions · 24% pain share', color: '#F59E0B' },
  { label: 'TOP WEAKNESS #3', value: 'Slow CS Response', detail: '34 mentions · 18% pain share', color: '#A78BFA' },
  { label: 'AD HOOK GENERATED', value: '"Dispatch in 24h guaranteed"', detail: 'TikTok & Facebook angle', color: '#10B981' },
];

const STAT_BADGES = [
  { icon: '⚡', num: '4.1s', label: 'pipeline', color: '#FF3848' },
  { icon: '🎯', num: '99.4%', label: 'slang acc', color: '#10B981' },
  { icon: '📊', num: '1,842', label: 'reviews', color: '#3B82F6' },
  { icon: '🤖', num: '30s', label: 'to Zalo', color: '#A78BFA' },
];

export const LLMBotIntro: React.FC = () => {
  const { lang } = useLanguage();
  const [visibleTokens, setVisibleTokens] = useState<StreamToken[]>([]);
  const [outputLines, setOutputLines] = useState<typeof LLM_OUTPUT_LINES>([]);
  const [showStats, setShowStats] = useState(false);
  const [running, setRunning] = useState(true);
  const [scanPos, setScanPos] = useState(0);
  const termRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runSequence = () => {
    // Clear previous
    loopRef.current.forEach(clearTimeout);
    loopRef.current = [];
    setVisibleTokens([]);
    setOutputLines([]);
    setShowStats(false);
    setRunning(true);

    REASONING_TOKENS.forEach((tok, idx) => {
      const tid = setTimeout(() => {
        setVisibleTokens(prev => [...prev, tok]);
        if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
      }, tok.delay);
      loopRef.current.push(tid);
    });

    const lastDelay = REASONING_TOKENS[REASONING_TOKENS.length - 1].delay;

    LLM_OUTPUT_LINES.forEach((line, i) => {
      const tid = setTimeout(() => {
        setOutputLines(prev => [...prev, line]);
      }, lastDelay + 400 + i * 320);
      loopRef.current.push(tid);
    });

    const statsTid = setTimeout(() => {
      setShowStats(true);
      setRunning(false);
    }, lastDelay + 400 + LLM_OUTPUT_LINES.length * 320 + 200);
    loopRef.current.push(statsTid);

    // Auto-restart loop
    const restartTid = setTimeout(() => runSequence(), lastDelay + 5000 + LLM_OUTPUT_LINES.length * 320);
    loopRef.current.push(restartTid);
  };

  useEffect(() => {
    runSequence();
    return () => { loopRef.current.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scanline animation
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      setScanPos(((ts - start) * 0.04) % 100);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="llm-intro-section">
      {/* SCANLINE OVERLAY */}
      <div
        className="llm-scanline"
        style={{ top: `${scanPos}%` }}
        aria-hidden="true"
      />

      <div className="wrap">
        {/* SECTION HEADER */}
        <div className="llm-header">
          <div className="llm-eyebrow mono">
            <span className="status-dot" style={{ background: '#10B981' }} />
            {lang === 'en'
              ? 'LLM NEURAL ENGINE · LIVE TELEMETRY STREAM'
              : 'ENGINE AI · LUỒNG DỮ LIỆU THỰC THỜI'}
          </div>
          <h2 className="llm-title">
            {lang === 'en' ? (
              <>Watch GapFile AI <span className="llm-accent">think in real time</span></>
            ) : (
              <>Xem GapFile AI <span className="llm-accent">tư duy theo thời gian thực</span></>
            )}
          </h2>
          <p className="llm-sub">
            {lang === 'en'
              ? 'Every URL you send triggers a live pipeline: Apify proxy scraping → Vietnamese slang NLP → pain vector clustering → ad playbook generation. Watch it run.'
              : 'Mỗi URL bạn gửi khởi động một pipeline thực: Apify proxy scraping → NLP teencode Việt → phân cụm điểm đau → tạo kịch bản ads. Xem nó chạy.'}
          </p>
        </div>

        {/* DUAL PANEL GRID */}
        <div className="llm-grid">
          {/* LEFT — REASONING TERMINAL */}
          <div className="llm-terminal-wrap">
            <div className="llm-terminal-chrome">
              <div className="claw-dots">
                <div className="claw-dot red" />
                <div className="claw-dot yellow" />
                <div className="claw-dot green" />
              </div>
              <span className="mono" style={{ fontSize: '11px', color: '#6B7280' }}>
                gapfile-neural-engine --stream --lang=vi
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {running && (
                  <span
                    className="mono"
                    style={{ fontSize: '10px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span className="status-dot" style={{ background: '#10B981', width: '6px', height: '6px' }} />
                    STREAMING
                  </span>
                )}
                <button
                  onClick={runSequence}
                  className="mono"
                  style={{
                    background: 'rgba(255,56,72,0.12)',
                    border: '1px solid rgba(255,56,72,0.3)',
                    color: '#FF3848',
                    fontSize: '10px',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  ↺ REPLAY
                </button>
              </div>
            </div>

            {/* TERMINAL BODY */}
            <div
              className="llm-terminal-body"
              ref={termRef}
            >
              <div className="mono" style={{ fontSize: '11px', color: '#4B5563', marginBottom: '10px' }}>
                {`// GapFile Neural Pipeline — v2.4 · ${new Date().toLocaleTimeString()}`}
              </div>

              {visibleTokens.map((tok, i) => (
                <div
                  key={i}
                  className="llm-token-line"
                  style={{ color: tok.color || '#9CA3AF', animationDelay: `${i * 0.02}s` }}
                >
                  {tok.text}
                </div>
              ))}

              {running && visibleTokens.length > 0 && (
                <div className="llm-token-line" style={{ color: '#F59E0B' }}>
                  <span className="typing-cursor">_</span>
                </div>
              )}
            </div>

            {/* STAT BADGES */}
            <div className={`llm-badges ${showStats ? 'visible' : ''}`}>
              {STAT_BADGES.map((b, i) => (
                <div
                  key={i}
                  className="llm-badge"
                  style={{
                    borderColor: b.color,
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{b.icon}</span>
                  <div>
                    <div className="mono" style={{ fontSize: '16px', fontWeight: 700, color: b.color, lineHeight: 1 }}>{b.num}</div>
                    <div style={{ fontSize: '10px', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — LLM OUTPUT PANEL */}
          <div className="llm-output-panel">
            <div className="llm-output-header mono">
              <span style={{ color: '#10B981' }}>●</span>
              {lang === 'en' ? ' LLM OUTPUT STREAM — LIVE' : ' LUỒNG OUTPUT AI — THỰC THỜI'}
            </div>

            {/* OUTPUT CARDS */}
            <div className="llm-output-list">
              {outputLines.map((line, i) => (
                <div
                  key={i}
                  className="llm-output-card"
                  style={{ '--card-color': line.color } as React.CSSProperties}
                >
                  <div className="llm-output-label mono">{line.label}</div>
                  <div className="llm-output-value">{line.value}</div>
                  <div className="llm-output-detail mono">{line.detail}</div>
                  <div className="llm-output-bar">
                    <div
                      className="llm-output-fill"
                      style={{ background: line.color, width: `${60 + i * 10}%` }}
                    />
                  </div>
                </div>
              ))}

              {outputLines.length === 0 && (
                <div className="llm-waiting mono" style={{ color: '#374151', fontSize: '13px', padding: '30px 0', textAlign: 'center' }}>
                  {lang === 'en' ? '// Awaiting pipeline completion...' : '// Đang chờ pipeline hoàn tất...'}
                  <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '4px' }}>
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}
            </div>

            {/* ZALO DELIVERY CARD */}
            <div className={`llm-zalo-delivery ${showStats ? 'visible' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF3848, #FF6B6B)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                  boxShadow: '0 0 16px rgba(255,56,72,0.4)',
                }}>🤖</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#F3F4F6', fontSize: '14px' }}>@GapFileBot</div>
                  <div className="mono" style={{ fontSize: '11px', color: '#10B981' }}>● Delivered to Zalo · 30s SLA met</div>
                </div>
              </div>
              <div className="mono" style={{
                background: 'rgba(255,56,72,0.08)',
                border: '1px solid rgba(255,56,72,0.25)',
                borderRadius: '6px',
                padding: '10px 14px',
                fontSize: '12px',
                color: '#FECACA',
                lineHeight: 1.5,
              }}>
                📢 {lang === 'en'
                  ? '"Frustrated waiting 7 days for serum? We dispatch within 24 hours — guaranteed!"'
                  : '"Chán chờ serum 7 ngày? Chúng tôi giao trong 24 giờ — cam kết!"'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                <span className="mono" style={{ fontSize: '10px', color: '#6B7280' }}>10:42 ✓✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA ROW */}
        <div className="llm-cta-row">
          <a href="/prototype" className="btn btn-primary llm-cta-btn">
            ⚡ {lang === 'en' ? 'Run Your Own Analysis →' : 'Chạy Phân Tích Của Bạn →'}
          </a>
          <span className="mono" style={{ fontSize: '12px', color: '#6B7280' }}>
            {lang === 'en' ? '↑ This runs live on every request' : '↑ Chạy thực tế trên mỗi yêu cầu'}
          </span>
        </div>
      </div>
    </section>
  );
};
