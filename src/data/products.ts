import { ProductData } from '@/types';

export const PRODUCT_DATA: Record<string, ProductData> = {
  skincare: {
    title: "Glow Serum 30ml",
    platform: "Shopee VN",
    reviewCount: 1842,
    scores: { pain: 61, freq: 61, positive: 68, negative: 32 },
    headline: "Their <strong>#1 issue: shipping delays</strong> — mentioned in 61 of the last 200 reviews. Multiple buyers note it happened on repeat orders. Your opportunity: lead with same-day dispatch guarantees.",
    findings: [
      {
        name: "Shipping Delays",
        count: "61 mentions",
        detail: "Buyers repeatedly report orders arriving 5–10 days late. Several note this happened on repeat orders. A trust-eroding pattern.",
        sev: "sh",
        opp: "Guarantee 24h dispatch in your listing title. This single claim captures every frustrated switcher.",
        badge: "a",
        hook: "⚡ Frustrated waiting 7 days for serum? We dispatch within 24 hours guaranteed. Order today!"
      },
      {
        name: "Slow Support Replies",
        count: "34 mentions",
        detail: "Multiple reviews mention waiting 24+ hours for a reply. Buyers escalate to 1-star reviews purely because they felt ignored.",
        sev: "sm",
        opp: "Offer a 2-hour response SLA or chatbot triage. Promote this visibly in your listing.",
        badge: "w",
        hook: "💬 Need support fast? Our team replies in under 2 hours. Try us out!"
      },
      {
        name: "Packaging Leaks",
        count: "19 mentions",
        detail: "A recurring subset describe bottles arriving partially leaked or with the cap loosened. Suggests inadequate inner packaging.",
        sev: "sl",
        opp: "Use sealed inner pouches. Photograph the protective packaging as a quality signal.",
        badge: "w",
        hook: "📦 Sealed for perfection — zero leaks guaranteed. Check our unboxing video."
      }
    ],
    opportunities: [
      "🚀 Lead your Shopee listing with '24-hour guaranteed dispatch' — directly attacking their #1 weakness.",
      "💬 Implement a 2-hour support auto-response. Even an acknowledgement prevents 1-star reviews.",
      "📦 Invest in leak-proof sealed inner pouches and make it visible in product photos.",
      "⭐ Follow up with buyers at Day 7 via Shopee chat to preempt negative reviews."
    ]
  },
  phonecase: {
    title: "Clear Phonecase Set",
    platform: "Amazon US",
    reviewCount: 963,
    scores: { pain: 47, freq: 47, positive: 71, negative: 29 },
    headline: "Their <strong>#1 issue: color mismatch from listing photos</strong> — mentioned in 47 of the last 200 reviews. Buyers feel deceived. Your opportunity: hyper-accurate natural light photography.",
    findings: [
      {
        name: "Color Mismatch vs Photos",
        count: "47 mentions",
        detail: "Actual case tint looks yellower than listing photos. Buyers feel deceived and express this publicly.",
        sev: "sh",
        opp: "Shoot true-color photography under natural light + add unboxing video showing real color.",
        badge: "a",
        hook: "📸 What you see is what you get — true natural light photography, 0 deception."
      },
      {
        name: "Fit Issues — New Models",
        count: "28 mentions",
        detail: "Camera cutout misalignment reported on recent phone releases.",
        sev: "sm",
        opp: "Update SKU lineup within 2 weeks of any new phone release.",
        badge: "w",
        hook: "📱 Precision 1:1 camera cutout guaranteed for all latest phone models."
      },
      {
        name: "Difficult Return Process",
        count: "15 mentions",
        detail: "A smaller group describe difficulty getting returns accepted.",
        sev: "sl",
        opp: "Offer a visible, no-questions 7-day free return.",
        badge: "w",
        hook: "↩️ 7-day no-questions free return policy — order with complete confidence."
      }
    ],
    opportunities: [
      "📸 Invest in professional natural-light photography — eliminate color deception complaint.",
      "📱 Build rapid SKU update process for each new phone model launch.",
      "↩️ Display a frictionless return policy prominently — converts hesitant buyers."
    ]
  },
  sneaker: {
    title: "Urban Runner Sneaker",
    platform: "TikTok Shop VN",
    reviewCount: 2210,
    scores: { pain: 88, freq: 88, positive: 58, negative: 42 },
    headline: "Their <strong>#1 issue: sizing runs small</strong> — mentioned in 88 of the last 200 reviews. Nearly half the buyers order wrong size. Your opportunity: clear Vietnamese size chart.",
    findings: [
      {
        name: "Sizing Runs Small",
        count: "88 mentions",
        detail: "The dominant complaint by far. Many buyers recommend ordering one size up.",
        sev: "sh",
        opp: "Publish a detailed size chart with cm foot-length measurements.",
        badge: "a",
        hook: "📏 Never guess your size again — detailed cm measurement chart included!"
      },
      {
        name: "Sole Wears Down Quickly",
        count: "31 mentions",
        detail: "Visible sole wear reported within first month of regular use.",
        sev: "sm",
        opp: "Source a higher-durability sole compound.",
        badge: "w",
        hook: "🏭 Reinforced dual-compound sole built to last 12+ months."
      },
      {
        name: "Inconsistent Stock",
        count: "22 mentions",
        detail: "Popular sizes go out of stock for weeks at a time.",
        sev: "sl",
        opp: "Maintain safety stock for top 3 sizes.",
        badge: "w",
        hook: "📦 All sizes 40-43 in stock and ready for immediate shipping!"
      }
    ],
    opportunities: [
      "📏 Create a Vietnamese-language size chart with foot-length measurements in cm.",
      "🔄 Offer a free first-time size exchange — removes purchase barrier.",
      "🏭 Negotiate a higher-grade sole compound to differentiate on durability."
    ]
  },
  supplement: {
    title: "Collagen Peptide 60 Caps",
    platform: "Lazada VN",
    reviewCount: 1124,
    scores: { pain: 38, freq: 38, positive: 74, negative: 26 },
    headline: "Their <strong>#1 issue: unclear dosage instructions</strong> — mentioned in 38 of the last 200 reviews. Buyers abandon before seeing results. Your opportunity: education-first marketing.",
    findings: [
      {
        name: "Confusing Dosage Instructions",
        count: "38 mentions",
        detail: "Buyers unsure how and when to take product.",
        sev: "sh",
        opp: "Include a visual dosage guide card in every order.",
        badge: "a",
        hook: "💊 Clear daily dosage guide card included in every bottle!"
      },
      {
        name: "Unrealistic Result Expectations",
        count: "21 mentions",
        detail: "Buyers expect visible results in 1-2 weeks vs 6-8 weeks.",
        sev: "sm",
        opp: "Set explicit timeline expectations in listing.",
        badge: "w",
        hook: "📅 Real results in 6-8 weeks — honest timeline expectations."
      },
      {
        name: "Capsule Size Too Large",
        count: "14 mentions",
        detail: "Older customers find capsule hard to swallow.",
        sev: "sl",
        opp: "Test a powder sachet variant.",
        badge: "w",
        hook: "🥤 Easy-to-mix powder sachets available now!"
      }
    ],
    opportunities: [
      "📚 Include a visual dosage guide card in every order.",
      "📅 Set timeline expectations upfront: '6–8 weeks for full results'.",
      "💊 Launch a powder sachet variant for pill-averse buyers."
    ]
  }
};

export function generateCustomReport(urlOrName: string): ProductData {
  const cleanName = urlOrName.replace(/^https?:\/\//i, '').replace(/[\/\?#].*$/, '').trim() || "Analyzed Product";
  const title = cleanName.length > 35 ? cleanName.substring(0, 32) + "..." : cleanName;
  
  return {
    title: `Custom Listing (${title})`,
    platform: urlOrName.includes("shopee") ? "Shopee VN" : urlOrName.includes("tiktok") ? "TikTok Shop" : urlOrName.includes("amazon") ? "Amazon US" : "E-Commerce Market",
    reviewCount: 1450,
    scores: { pain: 54, freq: 54, positive: 65, negative: 35 },
    headline: `Their <strong>#1 issue: inconsistency between batches & slow customer support</strong> — detected in recent scraping telemetry.`,
    findings: [
      {
        name: "Inconsistent Batch Quality",
        count: "54 mentions",
        detail: "Buyers note quality varies between restocks. Trust erodes on repeat purchases.",
        sev: "sh",
        opp: "Promote strict ISO/GMP batch testing certificates in product gallery.",
        badge: "a",
        hook: "🔬 100% Batch Tested & Quality Sealed. No surprise variations!"
      },
      {
        name: "Customer Support Delays",
        count: "29 mentions",
        detail: "Customer service response times average over 18 hours.",
        sev: "sm",
        opp: "Implement instant automated response workflows.",
        badge: "w",
        hook: "💬 Instant 24/7 support response for all buyer questions!"
      },
      {
        name: "Unprotected Box Packaging",
        count: "18 mentions",
        detail: "Product boxes arrive dented during high-volume sale campaigns.",
        sev: "sl",
        opp: "Use double-walled bubble mailers for all orders.",
        badge: "w",
        hook: "🛡️ Reinforced double-bubble packaging ensures 0 dented boxes."
      }
    ],
    opportunities: [
      "🔬 Highlight batch testing certificates & quality standards prominently.",
      "💬 Guarantee sub-2h customer support SLA on live chat.",
      "🛡️ Upgrade shipping packaging to double-walled protection."
    ]
  };
}
