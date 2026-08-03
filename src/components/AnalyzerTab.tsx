'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCT_DATA, generateCustomReport } from '@/data/products';
import { ProductData } from '@/types';

export const AnalyzerTab: React.FC = () => {
  const { lang, tp } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<string>('skincare');
  const [customUrl, setCustomUrl] = useState<string>('');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [pipelineStep, setPipelineStep] = useState<number>(-1);
  const [durations, setDurations] = useState<string[]>(['—', '—', '—', '—']);
  const [report, setReport] = useState<ProductData | null>(PRODUCT_DATA.skincare);
  const [showReport, setShowReport] = useState<boolean>(true);
  const [openHooks, setOpenHooks] = useState<Record<string, boolean>>({});

  const toggleHook = (id: string) => {
    setOpenHooks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRunAnalysis = () => {
    if (analyzing) return;
    setAnalyzing(true);
    setShowReport(false);
    setPipelineStep(0);
    setDurations(['—', '—', '—', '—']);

    const stepDurations = [800, 700, 550, 450];

    const runPipeline = (stepIndex: number) => {
      if (stepIndex < stepDurations.length) {
        setPipelineStep(stepIndex);
        setTimeout(() => {
          setDurations(prev => {
            const copy = [...prev];
            copy[stepIndex] = (stepDurations[stepIndex] / 1000).toFixed(1) + 's';
            return copy;
          });
          runPipeline(stepIndex + 1);
        }, stepDurations[stepIndex]);
      } else {
        setTimeout(() => {
          let data: ProductData;
          if (customUrl.trim().length > 0) {
            data = generateCustomReport(customUrl);
          } else {
            data = PRODUCT_DATA[selectedKey] || PRODUCT_DATA.skincare;
          }
          setReport(data);
          setShowReport(true);
          setAnalyzing(false);
        }, 300);
      }
    };

    runPipeline(0);
  };

  const handleReset = () => {
    setShowReport(false);
    setPipelineStep(-1);
    setCustomUrl('');
  };

  return (
    <div>
      <div className="panel">
        <div className="ph">
          <div className="p-icon c">🔍</div>
          <div>
            <div className="pt">{tp.anTitle}</div>
            <div className="pm mono">Shopee · TikTok Shop · Amazon · Lazada · Apify Connected</div>
          </div>
        </div>

        <div className="input-row">
          <select
            className="url-input mono"
            value={selectedKey}
            onChange={(e) => {
              setSelectedKey(e.target.value);
              setCustomUrl('');
            }}
          >
            <option value="skincare">📦 Preset: Glow Serum 30ml (Shopee VN — 1,842 reviews)</option>
            <option value="phonecase">📱 Preset: Clear Phonecase Set (Amazon US — 963 reviews)</option>
            <option value="sneaker">👟 Preset: Urban Runner Sneaker (TikTok Shop VN — 2,210 reviews)</option>
            <option value="supplement">💊 Preset: Collagen Peptide 60 Caps (Lazada VN — 1,124 reviews)</option>
          </select>

          <input
            type="text"
            className="url-input mono"
            placeholder="or paste custom Shopee/TikTok/Amazon URL..."
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
          />

          <button className="btn-p" onClick={handleRunAnalysis} disabled={analyzing}>
            {analyzing ? (lang === 'en' ? '⏳ Running Scraper & LLM Pipeline...' : '⏳ Đang Chạy Scraper & AI...') : tp.runBtn}
          </button>
        </div>

        <div className="hint mono">{tp.anHint}</div>

        {/* PIPELINE ANIMATION */}
        {analyzing && (
          <div className="pipeline">
            <div className={`ps ${pipelineStep === 0 ? 'active' : pipelineStep > 0 ? 'done' : ''}`}>
              <div className="pd"></div>
              <span>1. Apify JS-rendering actor launched (Apify Proxies)</span>
              <span style={{ marginLeft: 'auto' }} className="mono">{durations[0]}</span>
            </div>

            <div className={`ps ${pipelineStep === 1 ? 'active' : pipelineStep > 1 ? 'done' : ''}`}>
              <div className="pd"></div>
              <span>2. Regional slang & teencode NLP tokenization</span>
              <span style={{ marginLeft: 'auto' }} className="mono">{durations[1]}</span>
            </div>

            <div className={`ps ${pipelineStep === 2 ? 'active' : pipelineStep > 2 ? 'done' : ''}`}>
              <div className="pd"></div>
              <span>3. Pain vector clustering & revenue impact scoring</span>
              <span style={{ marginLeft: 'auto' }} className="mono">{durations[2]}</span>
            </div>

            <div className={`ps ${pipelineStep === 3 ? 'active' : pipelineStep > 3 ? 'done' : ''}`}>
              <div className="pd"></div>
              <span>4. Strategic opportunity & ad angle playbook generated</span>
              <span style={{ marginLeft: 'auto' }} className="mono">{durations[3]}</span>
            </div>
          </div>
        )}
      </div>

      {/* WEAKNESS REPORT DISPLAY */}
      {showReport && report && (
        <div className="panel" style={{ border: '2px solid var(--stamp)' }}>
          <div className="rep-head">
            <div>
              <div className="rt">{lang === 'en' ? 'Weakness Report — ' : 'Báo Cáo Điểm Yếu — '}{report.title}</div>
              <div className="rm mono">{report.reviewCount.toLocaleString()} reviews · {report.platform}</div>
            </div>
            <button className="btn-s mono" onClick={handleReset}>
              {tp.resetBtn}
            </button>
          </div>

          <div className="exec-box">
            <div className="exec-lbl mono">{tp.execLbl}</div>
            <div className="exec-text" dangerouslySetInnerHTML={{ __html: report.headline }} />
          </div>

          <div className="scores-grid">
            <div className="sc pain">
              <div className="n">{report.scores.pain}%</div>
              <div className="l">{lang === 'en' ? 'Top Complaint Pain' : 'Lượt Phàn Nàn Top'}</div>
            </div>
            <div className="sc freq">
              <div className="n">{report.scores.freq}</div>
              <div className="l">{lang === 'en' ? 'Pain Mentions' : 'Lượt Nhắc Pain'}</div>
            </div>
            <div className="sc mkt">
              <div className="n">{report.reviewCount.toLocaleString()}</div>
              <div className="l">{lang === 'en' ? 'Reviews Scanned' : 'Đã Quét'}</div>
            </div>
            <div className="sc pay">
              <div className="n">{report.scores.positive}%</div>
              <div className="l">{lang === 'en' ? 'Positive Ratio' : 'Tỷ Lệ Tích Cực'}</div>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div className="pt" style={{ fontSize: '18px', marginBottom: '4px' }}>{tp.listT}</div>
            <div className="pm mono">{tp.listSub}</div>
          </div>

          <div className="findings-list">
            {report.findings.map((f, idx) => {
              const hookId = `hook-${idx}`;
              return (
                <div key={idx} className={`fc ${f.sev}`}>
                  <div className="fr">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="fb">
                    <div className="ft">{f.name}</div>
                    <div className="fd">{f.detail}</div>
                    <div className="fm">
                      <span className="badge b-c">{f.count}</span>
                      <span className={`badge b-${f.badge}`}>⚡ {f.opp}</span>
                      <button className="ad-hook-btn" onClick={() => toggleHook(hookId)}>
                        {lang === 'en' ? '📢 View Ad Hook' : '📢 Xem Kịch Bản Ads'}
                      </button>
                    </div>
                    {openHooks[hookId] && (
                      <div className="ad-hook-box mono">
                        <strong>{lang === 'en' ? 'Ad Angle / Hook Idea:' : 'Góc Chạy Ads / Gợi Ý Ad Copy:'}</strong> "{f.hook || f.opp}"
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <div className="ct mono">{tp.chart1}</div>
              {report.findings.map((f, idx) => {
                const maxCount = Math.max(...report.findings.map(item => parseInt(item.count)));
                const cnt = parseInt(f.count);
                const pct = Math.round((cnt / maxCount) * 100);
                const colors = ['#A6301F', '#8B6914', '#6B6B45'];
                return (
                  <div key={idx} className="b-row">
                    <div className="b-lbl">{f.name}</div>
                    <div className="b-trk">
                      <div className="b-fill" style={{ width: `${pct}%`, background: colors[idx % colors.length] }}></div>
                    </div>
                    <div className="b-cnt">{cnt} mentions</div>
                  </div>
                );
              })}
            </div>

            <div className="chart-card">
              <div className="ct mono">{tp.chart2}</div>
              <div className="donut-wrap">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="36" fill="transparent" stroke="#2E7D32" strokeWidth="16" />
                  <circle
                    cx="50" cy="50" r="36" fill="transparent" stroke="#A6301F" strokeWidth="16"
                    strokeDasharray="226.2"
                    strokeDashoffset={226.2 * (1 - report.scores.negative / 100)}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="leg mono">
                  <div className="leg-row">
                    <div className="leg-dot" style={{ background: '#2E7D32' }}></div>
                    <span>{report.scores.positive}% {lang === 'en' ? 'Positive' : 'Tích cực'}</span>
                  </div>
                  <div className="leg-row">
                    <div className="leg-dot" style={{ background: '#A6301F' }}></div>
                    <span>{report.scores.negative}% {lang === 'en' ? 'Negative' : 'Tiêu cực'}</span>
                  </div>
                  <div className="leg-row">
                    <div className="leg-dot" style={{ background: '#6B6B45' }}></div>
                    <span>{100 - report.scores.positive - report.scores.negative}% {lang === 'en' ? 'Neutral' : 'Trung tính'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <div className="ct mono">{tp.chart3}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {report.opportunities.map((opp, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--paper-card)',
                    border: '1px solid var(--line-strong)',
                    borderRadius: '3px',
                    padding: '14px 18px',
                    fontSize: '13.5px',
                    color: 'var(--ink-soft)',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start'
                  }}
                >
                  <span className="mono" style={{ fontSize: '12px', color: 'var(--stamp)', fontWeight: 700 }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
