'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ChatMsg {
  role: 'user' | 'bot';
  text: string;
  type?: 'url' | 'report' | 'hook' | 'text';
  delay: number;
}

const CHAT_SEQUENCES: Record<string, ChatMsg[]> = {
  shopee: [
    { role: 'user', type: 'url',  text: 'shopee.vn/product/glow-serum-30ml', delay: 0 },
    { role: 'bot',  type: 'text', text: '⚡ Phân tích đang chạy... 1,842 đánh giá...', delay: 1200 },
    { role: 'bot',  type: 'report', text: '📊 Glow Serum 30ml (Shopee VN)\n🔴 #1 — Giao hàng chậm (61 lần nhắc)\n🟡 #2 — CSKH rep chậm (34 lần nhắc)\n🟢 #3 — Bao bì bị rò rỉ (19 lần nhắc)', delay: 2800 },
    { role: 'bot',  type: 'hook', text: '📢 Ad hook: "Frustrated waiting 7 days? We dispatch within 24 hours guaranteed!"', delay: 4000 },
  ],
  tiktok: [
    { role: 'user', type: 'url',  text: 'tiktokshop.vn/urban-runner-sneaker', delay: 0 },
    { role: 'bot',  type: 'text', text: '⚡ Analyzing... 2,210 reviews scanned...', delay: 1200 },
    { role: 'bot',  type: 'report', text: '📊 Urban Runner Sneaker (TikTok Shop)\n🔴 #1 — Sizing runs small (88 mentions)\n🟡 #2 — Sole wears quickly (31 mentions)\n🟢 #3 — Out of stock often (22 mentions)', delay: 2800 },
    { role: 'bot',  type: 'hook', text: '📢 Ad hook: "Never guess your size — cm foot chart included in every listing!"', delay: 4000 },
  ],
  amazon: [
    { role: 'user', type: 'url',  text: 'amazon.com/dp/B09X12345-clear-case', delay: 0 },
    { role: 'bot',  type: 'text', text: '⚡ Running analysis... 963 verified reviews...', delay: 1200 },
    { role: 'bot',  type: 'report', text: '📊 Clear Phonecase Set (Amazon US)\n🔴 #1 — Color mismatch vs photos (47 mentions)\n🟡 #2 — Fit issues new models (28 mentions)\n🟢 #3 — Difficult return process (15 mentions)', delay: 2800 },
    { role: 'bot',  type: 'hook', text: '📢 Ad hook: "True natural light photography — 0 deception, 100% accurate color!"', delay: 4000 },
  ],
};

export const ZaloBotIntroSection: React.FC = () => {
  const { lang } = useLanguage();
  const [activeScenario, setActiveScenario] = useState<'shopee' | 'tiktok' | 'amazon'>('shopee');
  const [visibleMsgs, setVisibleMsgs] = useState<ChatMsg[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const runConversation = (scenario: 'shopee' | 'tiktok' | 'amazon') => {
    setVisibleMsgs([]);
    setIsTyping(false);
    const seq = CHAT_SEQUENCES[scenario];
    seq.forEach((msg, idx) => {
      const baseDelay = msg.delay;
      if (msg.role === 'bot') {
        setTimeout(() => setIsTyping(true), baseDelay - 400 < 0 ? 0 : baseDelay - 400);
      }
      setTimeout(() => {
        if (msg.role === 'bot') setIsTyping(false);
        setVisibleMsgs(prev => [...prev, msg]);
      }, baseDelay + 600);
    });
  };

  useEffect(() => {
    runConversation(activeScenario);
  }, [activeScenario]);

  // Auto-cycle every 8s
  useEffect(() => {
    const scenarios: Array<'shopee' | 'tiktok' | 'amazon'> = ['shopee', 'tiktok', 'amazon'];
    const timer = setInterval(() => {
      setActiveScenario(prev => {
        const idx = scenarios.indexOf(prev);
        return scenarios[(idx + 1) % scenarios.length];
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const formatBotText = (text: string) =>
    text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>);

  return (
    <section id="zalo-bot" className="zalo-intro-section">
      <div className="wrap">
        {/* HEADER */}
        <div className="zalo-intro-header">
          <div className="eyebrow" style={{ color: 'var(--claw-neon-green)', letterSpacing: '0.18em' }}>
            ZALO BOT · BUILT FOR SEA MERCHANTS
          </div>
          <h2 className="zalo-intro-title">
            {lang === 'en'
              ? <>Send a link. Get your competitor's<br /><em style={{ fontStyle: 'normal', color: 'var(--stamp)' }}>playbook in 30 seconds.</em></>
              : <>Gửi link. Nhận kịch bản<br /><em style={{ fontStyle: 'normal', color: 'var(--stamp)' }}>đánh bại đối thủ trong 30 giây.</em></>
            }
          </h2>
          <p className="zalo-intro-sub">
            {lang === 'en'
              ? 'No dashboard needed. Paste any Shopee, TikTok Shop, Amazon or Lazada product URL directly into @GapFileBot on Zalo — receive a structured weakness playbook and ready-to-use ad hooks right to your phone.'
              : 'Không cần dashboard. Gửi link Shopee, TikTok Shop, Amazon hoặc Lazada cho @GapFileBot trên Zalo — nhận ngay kịch bản marketing và ad copy sẵn sàng chạy trực tiếp về điện thoại.'
            }
          </p>
        </div>

        {/* 3-STEP FLOW */}
        <div className="zalo-flow-steps">
          <div className="zalo-flow-step">
            <div className="zalo-flow-num">01</div>
            <div className="zalo-flow-icon">📱</div>
            <div className="zalo-flow-label">
              {lang === 'en' ? 'Send product URL to @GapFileBot on Zalo' : 'Gửi link sản phẩm cho @GapFileBot trên Zalo'}
            </div>
          </div>
          <div className="zalo-flow-arrow">→</div>
          <div className="zalo-flow-step">
            <div className="zalo-flow-num">02</div>
            <div className="zalo-flow-icon">⚡</div>
            <div className="zalo-flow-label">
              {lang === 'en' ? 'AI analyzes 2,000+ reviews via Apify in ~30s' : 'AI phân tích 2,000+ đánh giá qua Apify trong ~30 giây'}
            </div>
          </div>
          <div className="zalo-flow-arrow">→</div>
          <div className="zalo-flow-step">
            <div className="zalo-flow-num">03</div>
            <div className="zalo-flow-icon">📊</div>
            <div className="zalo-flow-label">
              {lang === 'en' ? 'Receive weakness playbook + ad hooks on your phone' : 'Nhận kịch bản điểm yếu + ad hook ngay trên điện thoại'}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT: PHONE MOCKUP + FEATURES */}
        <div className="zalo-main-grid">
          {/* LEFT: PHONE MOCKUP */}
          <div className="zalo-phone-wrap">
            {/* SCENARIO TABS */}
            <div className="zalo-scenario-tabs">
              {(['shopee', 'tiktok', 'amazon'] as const).map(s => (
                <button
                  key={s}
                  className={`zalo-scenario-btn ${activeScenario === s ? 'active' : ''}`}
                  onClick={() => setActiveScenario(s)}
                >
                  {s === 'shopee' ? '🛍️ Shopee' : s === 'tiktok' ? '🎵 TikTok' : '📦 Amazon'}
                </button>
              ))}
            </div>

            {/* PHONE FRAME */}
            <div className="zalo-phone">
              {/* PHONE STATUS BAR */}
              <div className="zalo-phone-status">
                <span className="mono" style={{ fontSize: '10px', color: '#aaa' }}>9:41</span>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px' }}>📶</span>
                  <span style={{ fontSize: '10px' }}>🔋</span>
                </div>
              </div>

              {/* ZALO CHAT HEADER */}
              <div className="zalo-chat-header">
                <div className="zalo-bot-avatar">🤖</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#fff' }}>GapFile Bot</div>
                  <div style={{ fontSize: '10px', color: '#10B981', fontWeight: 600 }}>● Active</div>
                </div>
              </div>

              {/* CHAT BODY */}
              <div className="zalo-chat-body">
                {visibleMsgs.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`zalo-bubble ${msg.role} ${msg.type || ''}`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {msg.role === 'user' ? (
                      <span className="mono" style={{ fontSize: '11px' }}>🔗 {msg.text}</span>
                    ) : msg.type === 'report' ? (
                      <div className="zalo-report-bubble">
                        {formatBotText(msg.text)}
                      </div>
                    ) : msg.type === 'hook' ? (
                      <div className="zalo-hook-bubble">{msg.text}</div>
                    ) : (
                      <span style={{ fontSize: '12px' }}>{msg.text}</span>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="zalo-bubble bot typing-indicator">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                )}
              </div>

              {/* CHAT INPUT BAR */}
              <div className="zalo-chat-input">
                <span style={{ fontSize: '12px', color: '#888', fontStyle: 'italic' }}>
                  Paste Shopee/TikTok/Amazon URL...
                </span>
                <span className="zalo-send-btn">→</span>
              </div>
            </div>
          </div>

          {/* RIGHT: FEATURE HIGHLIGHTS */}
          <div className="zalo-features">
            <div className="zalo-feature-eyebrow mono">
              {lang === 'en' ? '// WHAT THE BOT SENDS BACK' : '// BOT GỬI VỀ CHO BẠN'}
            </div>

            <div className="zalo-feature-list">
              {[
                {
                  icon: '🎯',
                  title: lang === 'en' ? 'Top 3 Weakness Summary' : 'Tóm Tắt Top 3 Điểm Yếu',
                  desc: lang === 'en'
                    ? 'Ranked by mention frequency, revenue impact, and buyer churn risk — structured and ready to act on.'
                    : 'Xếp hạng theo tần suất nhắc đến, ảnh hưởng doanh thu và rủi ro churn — cấu trúc sẵn để hành động ngay.',
                  color: 'var(--stamp)',
                },
                {
                  icon: '📢',
                  title: lang === 'en' ? 'Ready-to-Run Ad Hooks' : 'Ad Hook Chạy Ngay',
                  desc: lang === 'en'
                    ? 'Exact Facebook, TikTok, and Zalo ad copy targeting your competitor\'s biggest pain points — written by AI.'
                    : 'Ad copy Facebook, TikTok, Zalo chính xác nhắm vào điểm đau lớn nhất của đối thủ — được AI viết sẵn.',
                  color: 'var(--amber)',
                },
                {
                  icon: '⚡',
                  title: lang === 'en' ? '30-Second Delivery SLA' : 'SLA Giao Tin 30 Giây',
                  desc: lang === 'en'
                    ? 'From URL to structured playbook in under 30 seconds via Apify scraping + LLM vector clustering pipeline.'
                    : 'Từ URL đến kịch bản cấu trúc trong dưới 30 giây qua pipeline Apify + LLM vector clustering.',
                  color: 'var(--green)',
                },
                {
                  icon: '🌏',
                  title: lang === 'en' ? 'Vietnamese Teencode NLP' : 'NLP Teencode Việt Nam',
                  desc: lang === 'en'
                    ? 'Understands "giao lề mề", "màu khác ảnh", "rep chậm" — slang that generic English AI tools miss entirely.'
                    : 'Hiểu "giao lề mề", "màu khác ảnh", "rep chậm" — tiếng lóng mà AI tiếng Anh thông thường bỏ qua hoàn toàn.',
                  color: '#3B82F6',
                },
              ].map((feat, idx) => (
                <div key={idx} className="zalo-feature-card" style={{ '--feat-color': feat.color } as React.CSSProperties}>
                  <div className="zalo-feature-icon">{feat.icon}</div>
                  <div>
                    <div className="zalo-feature-title">{feat.title}</div>
                    <div className="zalo-feature-desc">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="zalo-cta-row">
              <button
                className="btn btn-primary"
                style={{ gap: '10px' }}
                onClick={() => window.open('https://zalo.me/GapFileBot', '_blank')}
              >
                <span>💬</span>
                {lang === 'en' ? 'Connect @GapFileBot on Zalo' : 'Kết nối @GapFileBot trên Zalo'}
              </button>
              <a href="/prototype" className="btn btn-ghost mono" style={{ fontSize: '13px' }}>
                {lang === 'en' ? 'or use Web Prototype →' : 'hoặc dùng Web Prototype →'}
              </a>
            </div>

            <div className="zalo-trust-row mono">
              <span>🛡️ {lang === 'en' ? '100% ban-free via Apify proxies' : '100% không lo khóa IP'}</span>
              <span>📱 {lang === 'en' ? 'Zalo & Telegram supported' : 'Hỗ trợ Zalo & Telegram'}</span>
              <span>🔒 {lang === 'en' ? 'Your data is never stored' : 'Dữ liệu không được lưu trữ'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
