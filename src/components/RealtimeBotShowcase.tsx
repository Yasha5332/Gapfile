'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LogLine {
  ts: string;
  tag: 'INFO' | 'APIFY' | 'NLP' | 'WARN' | 'SUCCESS';
  text: string;
}

export const RealtimeBotShowcase: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'shopee' | 'tiktok' | 'amazon'>('shopee');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [botMessage, setBotMessage] = useState<string>('');

  const sampleWorkflows = {
    shopee: {
      url: 'https://shopee.vn/product/9941/glow-serum-30ml',
      logs: [
        { ts: '10:42:01', tag: 'INFO' as const, text: 'Zalo Webhook event received from @GapFileBot' },
        { ts: '10:42:01', tag: 'APIFY' as const, text: 'Connecting 4 residential proxies via Apify Playwright Actor...' },
        { ts: '10:42:02', tag: 'APIFY' as const, text: 'Fetched 1,842 raw reviews in 1.4s (Shopee VN format)' },
        { ts: '10:42:03', tag: 'NLP' as const, text: 'Running slang tokenizer: "giao lề mề", "nhắn tin không trả lời"' },
        { ts: '10:42:03', tag: 'WARN' as const, text: 'Isolated #1 Weakness: Shipping Delays (61 mentions / 32% pain)' },
        { ts: '10:42:04', tag: 'SUCCESS' as const, text: 'Generated Zalo bot response payload + Ad Copy Hook' }
      ],
      response: {
        title: 'Glow Serum 30ml (Shopee VN)',
        topPain: 'Shipping Delays (61 mentions)',
        adHook: '⚡ Frustrated waiting 7 days for serum? We dispatch within 24 hours guaranteed!',
        positivePct: '68%'
      }
    },
    tiktok: {
      url: 'https://vt.tiktok.com/ZSN...runner-sneakers',
      logs: [
        { ts: '10:42:10', tag: 'INFO' as const, text: 'Zalo Webhook event received from @GapFileBot' },
        { ts: '10:42:11', tag: 'APIFY' as const, text: 'TikTok Shop Playwright Actor bypasses captcha...' },
        { ts: '10:42:12', tag: 'APIFY' as const, text: 'Ingested 2,210 livestream comments & review badges' },
        { ts: '10:42:13', tag: 'NLP' as const, text: 'Teencode NLP isolated dominant size issue: "form nhỏ", "đi chật"' },
        { ts: '10:42:14', tag: 'WARN' as const, text: 'Isolated #1 Weakness: Sizing runs small (88 mentions / 42% pain)' },
        { ts: '10:42:15', tag: 'SUCCESS' as const, text: 'Dispatched Zalo alert & livestream guidance script' }
      ],
      response: {
        title: 'Urban Runner Sneaker (TikTok Shop VN)',
        topPain: 'Sizing Runs Small (88 mentions)',
        adHook: '📏 Never guess your size again — detailed cm measurement chart included in our store!',
        positivePct: '58%'
      }
    },
    amazon: {
      url: 'https://amazon.com/dp/B08X...clear-case',
      logs: [
        { ts: '10:42:20', tag: 'INFO' as const, text: 'Zalo Webhook event received from @GapFileBot' },
        { ts: '10:42:21', tag: 'APIFY' as const, text: 'Amazon US proxy fleet initialized (963 verified reviews)' },
        { ts: '10:42:22', tag: 'NLP' as const, text: 'NLP vector clustering on color deception & phone fit' },
        { ts: '10:42:23', tag: 'WARN' as const, text: 'Isolated #1 Weakness: Color Mismatch vs Listing (47 mentions)' },
        { ts: '10:42:24', tag: 'SUCCESS' as const, text: 'Generated Amazon A+ bullet copy & unboxing video angle' }
      ],
      response: {
        title: 'Clear Phonecase Set (Amazon US)',
        topPain: 'Color Mismatch vs Photos (47 mentions)',
        adHook: '📸 True natural light photography — zero yellowing tint, 100% accurate color!',
        positivePct: '71%'
      }
    }
  };

  const current = sampleWorkflows[activeTab];

  const runSimulation = () => {
    setIsStreaming(true);
    setLogs([]);
    setBotMessage('');

    current.logs.forEach((logLine, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, logLine]);
        if (idx === current.logs.length - 1) {
          setIsStreaming(false);
          setBotMessage(current.response.adHook);
        }
      }, (idx + 1) * 350);
    });
  };

  useEffect(() => {
    runSimulation();
  }, [activeTab]);

  return (
    <div style={{ margin: '36px 0 60px' }}>
      {/* BOT TELEMETRY HEADER BADGE */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="claw-pulse-badge">
            <span className="status-dot"></span> REAL-TIME ZALO & TELEGRAM BOT AGENT
          </span>
          <span className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>
            @GapFileBot · APIFY PROXY FLEET CONNECTED
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className={`btn-s mono ${activeTab === 'shopee' ? 'active' : ''}`}
            onClick={() => setActiveTab('shopee')}
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              background: activeTab === 'shopee' ? 'var(--stamp)' : 'transparent',
              color: activeTab === 'shopee' ? 'var(--paper)' : 'var(--ink)'
            }}
          >
            🛍️ Shopee VN Bot
          </button>
          <button
            className={`btn-s mono ${activeTab === 'tiktok' ? 'active' : ''}`}
            onClick={() => setActiveTab('tiktok')}
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              background: activeTab === 'tiktok' ? 'var(--stamp)' : 'transparent',
              color: activeTab === 'tiktok' ? 'var(--paper)' : 'var(--ink)'
            }}
          >
            🎵 TikTok Shop Bot
          </button>
          <button
            className={`btn-s mono ${activeTab === 'amazon' ? 'active' : ''}`}
            onClick={() => setActiveTab('amazon')}
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              background: activeTab === 'amazon' ? 'var(--stamp)' : 'transparent',
              color: activeTab === 'amazon' ? 'var(--paper)' : 'var(--ink)'
            }}
          >
            📦 Amazon Bot
          </button>
        </div>
      </div>

      {/* DUAL TERMINAL + ZALO CHAT SIMULATION GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px' }}>
        {/* LEFT: OPENCLAW AI TERMINAL LOG STREAM */}
        <div className="claw-terminal">
          <div className="claw-header">
            <div className="claw-dots">
              <div className="claw-dot red"></div>
              <div className="claw-dot yellow"></div>
              <div className="claw-dot green"></div>
            </div>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--claw-muted)' }}>
              gapfile-neural-agent --live --target={activeTab}
            </span>
            <button
              onClick={runSimulation}
              disabled={isStreaming}
              className="mono"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--claw-border)',
                color: 'var(--claw-text)',
                fontSize: '10px',
                padding: '2px 8px',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              {isStreaming ? 'STREAMING...' : '↺ RE-TRIGGER'}
            </button>
          </div>

          <div className="claw-body" style={{ minHeight: '260px' }}>
            <div style={{ color: 'var(--claw-muted)', fontSize: '11px', marginBottom: '12px' }}>
              // LIVE WEBHOOK INPUT: {current.url}
            </div>

            {logs.map((log, idx) => (
              <div key={idx} className="claw-log-line">
                <span className="claw-ts">[{log.ts}]</span>
                <span className={`claw-tag ${log.tag === 'WARN' ? 'warn' : log.tag === 'APIFY' ? 'info' : ''}`}>
                  [{log.tag}]
                </span>
                <span>{log.text}</span>
              </div>
            ))}

            {isStreaming && (
              <div className="claw-log-line" style={{ color: 'var(--claw-neon-amber)' }}>
                <span className="status-dot"></span> <span>AI Neural Agent processing vector stream...</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: ZALO MOBILE CHAT INTERFACE SIMULATION */}
        <div
          style={{
            background: 'var(--paper-card)',
            border: '1.5px solid var(--ink)',
            borderRadius: '6px',
            padding: '20px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '12px', borderBottom: '1px solid var(--line-strong)', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--stamp)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px' }}>
                🤖
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>GapFile Zalo Assistant</div>
                <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 600 }} className="mono">● Active Bot Payload Delivery</div>
              </div>
            </div>

            <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', borderRadius: '4px', padding: '14px', fontSize: '13px' }}>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--stamp)', fontWeight: 700, marginBottom: '6px' }}>
                ⚡ ANALYSIS COMPLETE · {current.response.title}
              </div>
              <div style={{ marginBottom: '8px', color: 'var(--ink-soft)' }}>
                <strong>Top Revenue Threat:</strong> {current.response.topPain}
              </div>
              <div style={{ background: 'var(--stamp-light)', borderLeft: '3px solid var(--stamp)', padding: '10px', borderRadius: '2px', color: 'var(--stamp-dark)', fontSize: '12.5px' }} className="mono">
                📢 <strong>High-Converting Ad Hook:</strong><br />
                "{current.response.adHook}"
              </div>
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--olive)' }}>
              Positive Ratio: <strong>{current.response.positivePct}</strong>
            </span>
            <span className="badge b-a mono" style={{ fontSize: '10.5px' }}>
              ⚡ 30s Delivery SLA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
