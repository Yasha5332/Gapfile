'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface BotMsg {
  role: 'user' | 'bot';
  text: string;
  isReport?: boolean;
  isHook?: boolean;
}

const PRESET_CONVOS: Record<string, { url: string; msgs: BotMsg[] }> = {
  skincare: {
    url: 'shopee.vn/product/glow-serum-30ml',
    msgs: [
      { role: 'user', text: '🔗 shopee.vn/product/glow-serum-30ml' },
      { role: 'bot', text: '⚡ Running Apify scraper... 1,842 reviews fetched.\nSlang NLP tokenizing: "giao lề mề", "rep chậm"...', isReport: false },
      {
        role: 'bot',
        text: `📊 WEAKNESS REPORT — Glow Serum 30ml (Shopee VN)
🔴 #1 Shipping Delays — 61 mentions (32% pain share)
🟡 #2 Slow Support Replies — 34 mentions (18%)
🟢 #3 Packaging Leaks — 19 mentions (10%)
✅ Positive Ratio: 68%`,
        isReport: true,
      },
      { role: 'bot', text: '📢 High-Converting Ad Hook:\n"Frustrated waiting 7 days for serum? We dispatch within 24 hours guaranteed!"', isHook: true },
    ],
  },
  sneaker: {
    url: 'tiktokshop.vn/urban-runner-sneaker',
    msgs: [
      { role: 'user', text: '🔗 tiktokshop.vn/urban-runner-sneaker' },
      { role: 'bot', text: '⚡ TikTok Shop Actor initialized... 2,210 reviews & comments ingested.\nTeencode NLP: "form nhỏ", "đi chật"...', isReport: false },
      {
        role: 'bot',
        text: `📊 WEAKNESS REPORT — Urban Runner Sneaker (TikTok Shop VN)
🔴 #1 Sizing Runs Small — 88 mentions (42% pain share)
🟡 #2 Sole Wears Quickly — 31 mentions (15%)
🟢 #3 Inconsistent Stock — 22 mentions (10%)
✅ Positive Ratio: 58%`,
        isReport: true,
      },
      { role: 'bot', text: '📢 High-Converting Ad Hook:\n"Never guess your size — detailed cm foot measurement chart in every listing!"', isHook: true },
    ],
  },
  phonecase: {
    url: 'amazon.com/dp/B09X12345-clear-case',
    msgs: [
      { role: 'user', text: '🔗 amazon.com/dp/B09X12345-clear-case' },
      { role: 'bot', text: '⚡ Amazon US proxy fleet connected... 963 verified reviews scanned.\nVector clustering on color deception & fit...', isReport: false },
      {
        role: 'bot',
        text: `📊 WEAKNESS REPORT — Clear Phonecase Set (Amazon US)
🔴 #1 Color Mismatch vs Photos — 47 mentions (29% pain share)
🟡 #2 Fit Issues New Models — 28 mentions (17%)
🟢 #3 Difficult Return Process — 15 mentions (9%)
✅ Positive Ratio: 71%`,
        isReport: true,
      },
      { role: 'bot', text: '📢 High-Converting Ad Hook:\n"True natural light photography — what you see is what you get, zero yellowing tint!"', isHook: true },
    ],
  },
};

export const ZaloBotTab: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedPreset, setSelectedPreset] = useState<string>('skincare');
  const [customUrl, setCustomUrl] = useState('');
  const [msgs, setMsgs] = useState<BotMsg[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runConversation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setMsgs([]);

    const convo = PRESET_CONVOS[selectedPreset];
    convo.msgs.forEach((msg, idx) => {
      const delay = idx === 0 ? 0 : idx * 1100 + 400;
      setTimeout(() => {
        setMsgs(prev => [...prev, msg]);
        if (idx === convo.msgs.length - 1) setIsRunning(false);
      }, delay);
    });
  };

  useEffect(() => {
    runConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPreset]);

  return (
    <div>
      {/* INTRO CARD */}
      <div className="panel" style={{ marginBottom: '20px' }}>
        <div className="ph">
          <div className="p-icon c">💬</div>
          <div>
            <div className="pt">{lang === 'en' ? 'Zalo Bot Live Simulator' : 'Mô Phỏng Zalo Bot Thực Tế'}</div>
            <div className="pm mono">
              {lang === 'en' ? '@GapFileBot · Apify + Localized LLM Pipeline · 30s Delivery SLA' : '@GapFileBot · Apify + AI Phân Tích Teencode · SLA 30 Giây'}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {[
            { step: '01', icon: '📱', label: lang === 'en' ? 'Send product URL to @GapFileBot on Zalo' : 'Gửi URL cho @GapFileBot trên Zalo' },
            { step: '02', icon: '⚡', label: lang === 'en' ? 'AI scrapes & analyzes 2,000+ reviews in ~30s' : 'AI cào & phân tích 2,000+ đánh giá trong ~30s' },
            { step: '03', icon: '📊', label: lang === 'en' ? 'Receive weakness playbook + ad hooks instantly' : 'Nhận kịch bản điểm yếu + ad hook ngay lập tức' },
          ].map(s => (
            <div key={s.step} style={{ flex: 1, minWidth: '160px', background: 'var(--paper)', border: '1px solid var(--line-strong)', borderRadius: '6px', padding: '14px', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--stamp)', fontWeight: 700, marginBottom: '6px' }}>{s.step}</div>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '12px', color: 'var(--ink-soft)', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* PRESET SELECTOR */}
        <div className="input-row" style={{ marginBottom: '0' }}>
          <select
            className="url-input"
            value={selectedPreset}
            onChange={e => { setSelectedPreset(e.target.value); }}
          >
            <option value="skincare">🧴 Glow Serum 30ml — Shopee VN (1,842 reviews)</option>
            <option value="sneaker">👟 Urban Runner Sneaker — TikTok Shop VN (2,210 reviews)</option>
            <option value="phonecase">📱 Clear Phonecase Set — Amazon US (963 reviews)</option>
          </select>
          <button className="btn-p" onClick={runConversation} disabled={isRunning}>
            {isRunning ? (lang === 'en' ? '⏳ Bot Running...' : '⏳ Bot Đang Chạy...') : (lang === 'en' ? '💬 Simulate Bot' : '💬 Mô Phỏng Bot')}
          </button>
        </div>
      </div>

      {/* ZALO CHAT SIMULATOR */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '20px' }}>
        {/* CHAT WINDOW */}
        <div style={{
          background: '#ECE5DD',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '2px solid #128C7E',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '480px',
        }}>
          {/* HEADER */}
          <div style={{ background: '#075E54', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF3848, #FF6B6B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🤖</div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>GapFile Bot</div>
              <div className="mono" style={{ fontSize: '11px', color: isRunning ? '#25D366' : 'rgba(255,255,255,0.65)' }}>
                {isRunning ? '● Analyzing product reviews...' : '● Active · Apify Proxy Fleet Connected'}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '18px' }}>🔍 📞 ⋮</div>
          </div>

          {/* MESSAGES */}
          <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
            {/* Date stamp */}
            <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', background: 'rgba(255,255,255,0.6)', borderRadius: '10px', padding: '2px 10px', alignSelf: 'center' }}>
              TODAY
            </div>

            {msgs.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: '8px',
                  alignItems: 'flex-end',
                  animation: 'slideUp 0.25s ease-out',
                }}
              >
                {msg.role === 'bot' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FF3848', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>🤖</div>
                )}
                <div style={{
                  background: msg.role === 'user' ? '#DCF8C6' : '#FFFFFF',
                  borderRadius: msg.role === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                  padding: msg.isReport ? '12px 16px' : '10px 14px',
                  maxWidth: '80%',
                  fontSize: '13px',
                  color: '#111',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                  borderLeft: msg.isReport ? '3px solid #FF3848' : msg.isHook ? '3px solid #F59E0B' : 'none',
                  fontFamily: (msg.isReport || msg.isHook) ? 'monospace' : 'inherit',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.55,
                }}>
                  {msg.isReport && (
                    <div style={{ fontSize: '11px', color: '#FF3848', fontWeight: 700, marginBottom: '4px' }}>⚡ ANALYSIS COMPLETE</div>
                  )}
                  {msg.isHook && (
                    <div style={{ fontSize: '11px', color: '#D97706', fontWeight: 700, marginBottom: '4px' }}>📢 AD HOOK READY</div>
                  )}
                  {msg.text}
                  <div style={{ fontSize: '10px', color: '#888', marginTop: '4px', textAlign: 'right' }}>
                    {msg.role === 'user' ? '10:42 ✓✓' : '10:42'}
                  </div>
                </div>
              </div>
            ))}

            {isRunning && msgs.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FF3848', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🤖</div>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '12px 16px', display: 'flex', gap: '5px', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
                  <span className="typing-dot" style={{ background: '#999' }} />
                  <span className="typing-dot" style={{ background: '#999', animationDelay: '0.2s' }} />
                  <span className="typing-dot" style={{ background: '#999', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
          </div>

          {/* INPUT BAR */}
          <div style={{ background: '#F0F0F0', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid #ddd' }}>
            <div style={{ flex: 1, background: '#fff', borderRadius: '20px', padding: '9px 16px', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
              {lang === 'en' ? 'Paste Shopee, TikTok, Amazon URL here...' : 'Dán link Shopee, TikTok Shop, Amazon vào đây...'}
            </div>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>➤</div>
          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* STATUS CARD */}
          <div className="panel" style={{ padding: '20px' }}>
            <div className="bl mono"><div className="dot" />BOT STATUS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              {[
                { label: 'Bot Handle', val: '@GapFileBot', color: 'var(--green)' },
                { label: 'Platforms', val: 'Zalo + Telegram', color: 'var(--ink)' },
                { label: 'Pipeline', val: 'Apify + Claude LLM', color: 'var(--ink)' },
                { label: 'Delivery SLA', val: '~30 seconds', color: 'var(--stamp)' },
                { label: 'Slang Support', val: 'VN, Bahasa, Thai', color: 'var(--amber)' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--line)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--ink-soft)' }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: row.color }} className="mono">{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT BOT RETURNS */}
          <div className="panel" style={{ padding: '20px' }}>
            <div className="bl mono"><div className="dot" />{lang === 'en' ? 'WHAT BOT RETURNS' : 'BOT TRẢ VỀ'}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '🔴 Top 3 ranked competitor weaknesses',
                '📊 Mention frequency & pain share %',
                '💡 Strategic opportunity per weakness',
                '📢 Ready-to-run ad copy hooks',
                '✅ Positive vs negative review ratio',
              ].map((item, i) => (
                <div key={i} style={{ fontSize: '12.5px', color: 'var(--ink-soft)', padding: '6px 0', borderBottom: '1px dashed var(--line)', lineHeight: 1.4 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://zalo.me/GapFileBot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ justifyContent: 'center', fontSize: '14px', padding: '14px' }}
          >
            💬 {lang === 'en' ? 'Connect @GapFileBot on Zalo' : 'Kết nối @GapFileBot trên Zalo'}
          </a>
        </div>
      </div>
    </div>
  );
};
