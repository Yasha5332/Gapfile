'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ExhibitDemo } from '@/components/ExhibitDemo';
import { MATRIX_DATA } from '@/data/matrix';
import { ROADMAP_DATA, PRICING_PLANS, CASE_STUDIES, FAQS } from '@/data/roadmap';

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* HERO SECTION */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="file-no mono">
              <span className="status-dot"></span>
              <span>{t.heroTag}</span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
            <p className="lede" dangerouslySetInnerHTML={{ __html: t.heroLede }} />
            
            <div className="hero-ctas">
              <Link href="/prototype" className="btn btn-primary">
                {t.heroBtnP}
              </Link>
              <a href="#engine" className="btn btn-ghost">
                {t.heroBtnG}
              </a>
            </div>

            <div className="trust-micro mono">
              <div className="trust-micro-item">{t.heroTrust1}</div>
              <div className="trust-micro-item">{t.heroTrust2}</div>
              <div className="trust-micro-item">{t.heroTrust3}</div>
            </div>
          </div>

          <ExhibitDemo />
        </div>
      </header>

      {/* PLATFORM BAR */}
      <div className="platform-bar">
        <div className="wrap platform-wrap">
          <div className="platform-title">{t.platTitle}</div>
          <div className="platform-logos">
            <div className="plat-chip"><span className="icon">🛍️</span> Shopee (VN & SEA)</div>
            <div className="plat-chip"><span className="icon">🎵</span> TikTok Shop</div>
            <div className="plat-chip"><span className="icon">📦</span> Amazon (US/EU/Global)</div>
            <div className="plat-chip"><span className="icon">💙</span> Lazada</div>
            <div className="plat-chip"><span className="icon">🏷️</span> eBay</div>
            <div className="plat-chip"><span className="icon">🕷️</span> Apify Actor Fleet</div>
          </div>
        </div>
      </div>

      {/* METRICS STRIP */}
      <div className="strip">
        <div className="wrap strip-grid">
          <div className="strip-stat">
            <div className="num">{t.m1Num}</div>
            <div className="lbl">{t.m1L}</div>
            <div className="sub">{t.m1S}</div>
          </div>
          <div className="strip-stat">
            <div className="num">{t.m2Num}</div>
            <div className="lbl">{t.m2L}</div>
            <div className="sub">{t.m2S}</div>
          </div>
          <div className="strip-stat">
            <div className="num">{t.m3Num}</div>
            <div className="lbl">{t.m3L}</div>
            <div className="sub">{t.m3S}</div>
          </div>
          <div className="strip-stat">
            <div className="num">{t.m4Num}</div>
            <div className="lbl">{t.m4L}</div>
            <div className="sub">{t.m4S}</div>
          </div>
        </div>
      </div>

      {/* METHODOLOGY ENGINE */}
      <section id="engine">
        <div className="wrap">
          <div className="eyebrow">{t.engEyebrow}</div>
          <h2>{t.engTitle}</h2>
          <p className="section-lede">{t.engLede}</p>

          <div className="engine-grid">
            <div className="engine-card">
              <span className="step-tag">STEP 01 — INTAKE</span>
              <h3>Apify Proxy & Actor Fleet</h3>
              <p>Paste any product URL from Shopee, TikTok Shop, Amazon, Lazada, or eBay. Our custom Playwright Actors handle JS-rendering, CAPTCHAs, and IP rotation automatically.</p>
              <ul className="engine-list">
                <li>Resilient proxy pool prevents IP bans & blocks</li>
                <li>Fetches latest 200–2,000 reviews in seconds</li>
                <li>Zero browser extensions or manual CSV exports needed</li>
              </ul>
            </div>

            <div className="engine-card">
              <span className="step-tag">STEP 02 — PARSING</span>
              <h3>Slang-Aware Localized NLP</h3>
              <p>Southeast Asian and global buyers leave reviews in shorthand, local slang, and emoji signals. Generic tools mark these as "neutral." GapFile decodes true intent.</p>
              <ul className="engine-list">
                <li>Decodes localized expressions (<em>"giao lề mề"</em>, <em>"màu khác ảnh"</em>, <em>"rep chậm"</em>)</li>
                <li>Distinguishes product flaws from carrier shipping issues</li>
                <li>Filters out uninformative 5-star automated reviews</li>
              </ul>
            </div>

            <div className="engine-card">
              <span className="step-tag">STEP 03 — CLUSTERING</span>
              <h3>Revenue Threat & Weakness Map</h3>
              <p>Instead of endless tag clouds, our vector clustering engine ranks complaints by frequency, revenue impact, and customer churn severity.</p>
              <ul className="engine-list">
                <li>Ranks top 3 operational gaps costing your rival sales</li>
                <li>Quantifies mention frequency & percentage pain split</li>
                <li>Highlights recurring patterns vs one-off complaints</li>
              </ul>
            </div>

            <div className="engine-card">
              <span className="step-tag">STEP 04 — PLAYBOOK</span>
              <h3>Actionable Opportunity Playbook</h3>
              <p>You don't need raw data — you need decisions. GapFile generates exact ad copy hooks, listing bullet guarantees, and product differentiation steps.</p>
              <ul className="engine-list">
                <li>Instant Facebook/TikTok ad angle recommendations</li>
                <li>Listing title guarantee copy to steal frustrated buyers</li>
                <li>Exportable client-ready visual exhibits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section id="comparison">
        <div className="wrap">
          <div className="eyebrow">{t.compEyebrow}</div>
          <h2>{t.compTitle}</h2>
          <p className="section-lede">{t.compLede}</p>

          <div className="comp-table-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>CAPABILITY / FEATURE</th>
                  <th className="highlight">⚡ GapFile AI v2.4</th>
                  <th>📖 Manual Reading</th>
                  <th>🕷️ Basic Scrapers</th>
                  <th>📊 Generic Sentiment</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_DATA.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feature-title">{row.feature}</td>
                    <td style={{ background: 'var(--stamp-light)', fontWeight: 600, color: 'var(--stamp)' }}>
                      {row.gapfile}
                    </td>
                    <td>{row.manual}</td>
                    <td>{row.basicScraper}</td>
                    <td>{row.genericSentiment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases">
        <div className="wrap">
          <div className="eyebrow">{t.caseEyebrow}</div>
          <h2>{t.caseTitle}</h2>
          <p className="section-lede">{t.caseLede}</p>

          <div className="cases-grid">
            {CASE_STUDIES.map((c, idx) => (
              <div key={idx} className="case-card">
                <span className="case-badge">{c.badge}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-metric">
                  {c.metric} <span>— {c.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="wrap">
          <div className="eyebrow">{t.rmEyebrow}</div>
          <h2>{t.rmTitle}</h2>
          <p className="section-lede">{t.rmLede}</p>

          <div className="roadmap-cols">
            <div className="rm-col now">
              <div className="rm-head">
                <span className="rm-tag">{ROADMAP_DATA.now.tag}</span>
              </div>
              {ROADMAP_DATA.now.items.map((item, idx) => (
                <div key={idx} className="rm-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rm-col next">
              <div className="rm-head">
                <span className="rm-tag">{ROADMAP_DATA.next.tag}</span>
              </div>
              {ROADMAP_DATA.next.items.map((item, idx) => (
                <div key={idx} className="rm-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rm-col later">
              <div className="rm-head">
                <span className="rm-tag">{ROADMAP_DATA.later.tag}</span>
              </div>
              {ROADMAP_DATA.later.items.map((item, idx) => (
                <div key={idx} className="rm-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="services">
        <div className="wrap">
          <div className="eyebrow">{t.prEyebrow}</div>
          <h2>{t.prTitle}</h2>
          <p className="section-lede">{t.prLede}</p>

          <div className="plans">
            {PRICING_PLANS.map((plan, idx) => (
              <div key={idx} className={`plan ${plan.featured ? 'featured' : ''}`}>
                {plan.featuredBadge && (
                  <div className="featured-badge">{plan.featuredBadge}</div>
                )}
                <div className="who">{plan.who}</div>
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price} <span>{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx}>{feat}</li>
                  ))}
                </ul>
                <Link href="/prototype" className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}>
                  {plan.ctaBtn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="eyebrow">{t.faqEyebrow}</div>
          <h2>{t.faqTitle}</h2>
          <p className="section-lede">{t.faqLede}</p>

          <div className="faq-grid">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="wrap" style={{ padding: '80px 32px' }}>
        <div className="cta-band">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaSub}</p>
          <div className="cta-btns">
            <Link href="/prototype" className="btn btn-primary" style={{ background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--paper)' }}>
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
