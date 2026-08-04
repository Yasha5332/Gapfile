'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LogLine {
  ts: string;
  tag: 'INFO' | 'APIFY' | 'NLP' | 'WARN' | 'SUCCESS';
  text: string;
}

const WORKFLOWS = {
  shopee: {
    url: 'https://shopee.vn/product/9941/glow-serum-30ml',
    logs: [
      { ts: '10:42:01', tag: 'INFO'    as const, text: 'Zalo Webhook received from @GapFileBot' },
      { ts: '10:42:01', tag: 'APIFY'   as const, text: 'Connecting 4 residential proxies via Apify Playwright Actor...' },
      { ts: '10:42:02', tag: 'APIFY'   as const, text: 'Fetched 1,842 raw reviews in 1.4s (Shopee VN format)' },
      { ts: '10:42:03', tag: 'NLP'     as const, text: 'Slang tokenizer: "giao lề mề", "nhắn tin không trả lời"' },
      { ts: '10:42:03', tag: 'WARN'    as const, text: 'Weakness #1: Shipping Delays (61 mentions / 32% pain share)' },
      { ts: '10:42:04', tag: 'SUCCESS' as const, text: 'Zalo bot response + ad copy hook dispatched ✓' },
    ],
    response: {
      title: 'Glow Serum 30ml (Shopee VN)',
      topPain: 'Shipping Delays · 61 mentions',
      adHook: '⚡ Frustrated waiting 7 days for serum? We dispatch within 24 hours guaranteed!',
      positivePct: '68%',
    },
  },
  tiktok: {
    url: 'https://vt.tiktok.com/ZSN-runner-sneakers',
    logs: [
      { ts: '10:42:10', tag: 'INFO'    as const, text: 'Zalo Webhook received from @GapFileBot' },
      { ts: '10:42:11', tag: 'APIFY'   as const, text: 'TikTok Shop Playwright Actor bypasses captcha...' },
      { ts: '10:42:12', tag: 'APIFY'   as const, text: 'Ingested 2,210 livestream comments & review badges' },
      { ts: '10:42:13', tag: 'NLP'     as const, text: 'Teencode NLP: "form nhỏ", "đi chật", "đổi size không được"' },
      { ts: '10:42:14', tag: 'WARN'    as const, text: 'Weakness #1: Sizing Runs Small (88 mentions / 42% pain share)' },
      { ts: '10:42:15', tag: 'SUCCESS' as const, text: 'Zalo alert + livestream size guide script dispatched ✓' },
    ],
    response: {
      title: 'Urban Runner Sneaker (TikTok Shop VN)',
      topPain: 'Sizing Runs Small · 88 mentions',
      adHook: '📏 Never guess your size — detailed cm measurement chart in our store!',
      positivePct: '58%',
    },
  },
  amazon: {
    url: 'https://amazon.com/dp/B08X-clear-case',
    logs: [
      { ts: '10:42:20', tag: 'INFO'    as const, text: 'Zalo Webhook received from @GapFileBot' },
      { ts: '10:42:21', tag: 'APIFY'   as const, text: 'Amazon US proxy fleet initialized (963 verified reviews)' },
      { ts: '10:42:22', tag: 'NLP'     as const, text: 'Vector clustering on color deception & phone fit complaints' },
      { ts: '10:42:23', tag: 'WARN'    as const, text: 'Weakness #1: Color Mismatch vs Listing (47 mentions)' },
      { ts: '10:42:24', tag: 'SUCCESS' as const, text: 'Amazon A+ bullet copy & unboxing video angle generated ✓' },
    ],
    response: {
      title: 'Clear Phonecase Set (Amazon US)',
      topPain: 'Color Mismatch vs Photos · 47 mentions',
      adHook: '📸 True natural light photography — zero yellowing tint, 100% accurate color!',
      positivePct: '71%',
    },
  },
} as const;

type Scenario = keyof typeof WORKFLOWS;

export const RealtimeBotShowcase: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<Scenario>('shopee');
  const [isStreaming, setIsStreaming] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [botMessage, setBotMessage] = useState('');
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const current = WORKFLOWS[activeTab];

  const runSimulation = (scenario: Scenario = activeTab) => {
    // Clear any in-flight timeouts from previous runs
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setIsStreaming(true);
    setLogs([]);
    setBotMessage('');

    const wf = WORKFLOWS[scenario];
    wf.logs.forEach((logLine, idx) => {
      const tid = setTimeout(() => {
        setLogs(prev => [...prev, logLine]);
        if (idx === wf.logs.length - 1) {
          setIsStreaming(false);
          setBotMessage(wf.response.adHook);
        }
      }, (idx + 1) * 380);
      timeoutsRef.current.push(tid);
    });
  };

  useEffect(() => {
    runSimulation(activeTab);
    return () => { timeoutsRef.current.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const tagColor: Record<LogLine['tag'], string> = {
    INFO:    'var(--claw-neon-blue)',
    APIFY:   'var(--claw-neon-green)',
    NLP:     '#A78BFA',
    WARN:    'var(--claw-neon-amber)',
    SUCCESS: 'var(--claw-neon-green)',
  };

  return (
    <div style={{ margin: '36px 0 60px' }}>
      {/* BADGE ROW */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="claw-pulse-badge">
            <span className="status-dot" /> REAL-TIME ZALO & TELEGRAM BOT AGENT
          </span>
          <span className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>
            @GapFileBot · APIFY PROXY FLEET CONNECTED
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          {(['shopee', 'tiktok', 'amazon'] as Scenario[]).map(s => (
            <button
              key={s}
              className="mono"
              onClick={() => setActiveTab(s)}
              style={{
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: 600,
                border: '1.5px solid',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                background:     activeTab === s ? 'var(--stamp)' : 'transparent',
                borderColor:    activeTab === s ? 'var(--stamp)' : 'var(--line-strong)',
                color:          activeTab === s ? '#fff' : 'var(--ink-soft)',
              }}
            >
              {s === 'shopee' ? '🛍️ Shopee VN' : s === 'tiktok' ? '🎵 TikTok Shop' : '📦 Amazon'}
            </button>
          ))}
        </div>
      </div>

      {/* DUAL PANEL */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px' }}>

        {/* LEFT: TERMINAL LOG */}
        <div className="claw-terminal">
          <div className="claw-header">
            <div className="claw-dots">
              <div className="claw-dot red" />
              <div className="claw-dot yellow" />
              <div className="claw-dot green" />
            </div>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--claw-muted)' }}>
              gapfile-neural-agent --live --target={activeTab}
            </span>
            <button
              onClick={() => runSimulation()}
              disabled={isStreaming}
              className="mono"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--claw-border)',
                color: 'var(--claw-text)',
                fontSize: '10px',
                padding: '2px 8px',
                borderRadius: '3px',
                cursor: isStreaming ? 'not-allowed' : 'pointer',
                opacity: isStreaming ? 0.5 : 1,
              }}
            >
              {isStreaming ? 'STREAMING...' : '↺ RE-TRIGGER'}
            </button>
          </div>

          <div className="claw-body" style={{ minHeight: '240px' }}>
            <div style={{ color: 'var(--claw-muted)', fontSize: '11px', marginBottom: '12px' }}>
              {'// LIVE WEBHOOK INPUT: '}{current.url}
            </div>

            {logs.map((log, idx) => (
              <div key={idx} className="claw-log-line">
                <span className="claw-ts">[{log.ts}]</span>
                <span style={{ color: tagColor[log.tag], fontWeight: 700, fontFamily: 'var(--font-mono, monospace)', fontSize: '11px' }}>
                  [{log.tag}]
                </span>
                <span>{log.text}</span>
              </div>
            ))}

            {isStreaming && (
              <div className="claw-log-line" style={{ color: 'var(--claw-neon-amber)' }}>
                <span className="status-dot" style={{ background: 'var(--claw-neon-amber)' }} />
                <span className="mono" style={{ fontSize: '12px' }}>
                  AI Neural Agent processing vector stream
                  <span className="typing-cursor">_</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: ZALO CHAT PANEL */}
        <div style={{
          background: '#075E54',
          border: '1.5px solid #128C7E',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          minHeight: '300px',
        }}>
          {/* ZALO HEADER */}
          <div style={{
            background: '#075E54',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF3848 0%, #FF6B6B 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0,
              boxShadow: '0 2px 8px rgba(255,56,72,0.4)',
            }}>
              🤖
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#fff' }}>GapFile Bot</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                {isStreaming ? (
                  <span style={{ color: '#25D366' }}>● Analyzing...</span>
                ) : (
                  <span style={{ color: '#25D366' }}>● Active · Apify Connected</span>
                )}
              </div>
            </div>
          </div>

          {/* CHAT BODY */}
          <div style={{
            flex: 1,
            padding: '16px 12px',
            background: '#ECE5DD',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            overflowY: 'auto',
          }}>
            {/* User message - sent URL */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{
                background: '#DCF8C6',
                borderRadius: '8px 8px 0 8px',
                padding: '8px 12px',
                maxWidth: '85%',
                fontSize: '12px',
                color: '#111',
                fontFamily: 'monospace',
                boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
              }}>
                🔗 {current.url}
                <div style={{ fontSize: '10px', color: '#888', marginTop: '3px', textAlign: 'right' }}>
                  10:42 ✓✓
                </div>
              </div>
            </div>

            {/* Bot reply */}
            {botMessage ? (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FF3848', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>🤖</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '85%' }}>
                  {/* Report card */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px 8px 8px 0',
                    padding: '10px 14px',
                    fontSize: '12px',
                    color: '#111',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                    borderLeft: '3px solid #FF3848',
                  }}>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#FF3848', fontSize: '11px' }}>
                      ⚡ ANALYSIS COMPLETE · {current.response.title}
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                      <strong>Top Revenue Threat:</strong> {current.response.topPain}
                    </div>
                    <div style={{ background: '#FFF3F3', borderRadius: '4px', padding: '6px 8px', fontSize: '11px', fontFamily: 'monospace', color: '#C0392B' }}>
                      📢 {current.response.adHook}
                    </div>
                    <div style={{ fontSize: '10px', color: '#888', marginTop: '4px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Positive: {current.response.positivePct}</span>
                      <span>10:42 ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : isStreaming ? (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FF3848', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🤖</div>
                <div style={{ background: '#fff', borderRadius: '8px', padding: '10px 14px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span className="typing-dot" style={{ background: '#888' }} />
                  <span className="typing-dot" style={{ background: '#888', animationDelay: '0.2s' }} />
                  <span className="typing-dot" style={{ background: '#888', animationDelay: '0.4s' }} />
                </div>
              </div>
            ) : null}
          </div>

          {/* INPUT BAR */}
          <div style={{
            background: '#F0F0F0',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderTop: '1px solid #ddd',
          }}>
            <div style={{
              flex: 1, background: '#fff', borderRadius: '20px',
              padding: '7px 12px', fontSize: '12px', color: '#888', fontStyle: 'italic',
            }}>
              {lang === 'en' ? 'Paste product URL...' : 'Dán link sản phẩm...'}
            </div>
            <div style={{
              width: '34px', height: '34px', borderRadius: '50%',
              background: '#075E54', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '16px', flexShrink: 0, cursor: 'pointer',
            }}>
              ➤
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
