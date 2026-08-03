import { PricingPlan, CaseStudy, FAQItem } from '@/types';

export const ROADMAP_DATA = {
  now: {
    tag: "NOW LIVE — Q3 2026",
    items: [
      { title: "Shopee, TikTok, Amazon & Lazada NLP Ingestion", desc: "Automated extraction of raw reviews across major SEA & global marketplaces." },
      { title: "Slang-Aware Sentiment & Weakness Clustering", desc: "Vector neural model specialized in local buyer slang, teencode, and emojis." },
      { title: "Ad Copy & Strategic Hook Generator", desc: "Direct translation of competitor complaints into high-converting advertising copy." }
    ]
  },
  next: {
    tag: "IN DEVELOPMENT — Q4 2026",
    items: [
      { title: "Auto Listing Copy Rewriter", desc: "Generates full SEO listing titles, bullet points, and A+ content optimized to defeat top rival." },
      { title: "Real-Time Competitor Price & Stock Alerts", desc: "Instant Telegram & Zalo alerts when competitors run out of stock or drop prices." },
      { title: "Apify Custom Actor Store Integration", desc: "One-click deployment from Apify Console for enterprise scraping workflows." }
    ]
  },
  later: {
    tag: "FUTURE HORIZON — 2027",
    items: [
      { title: "AI Ad Creative Visual Generator", desc: "Generate visual image ads depicting problem-solution angles extracted from reviews." },
      { title: "Multi-Store Auto-Bidder for Ads", desc: "Automated Shopee/TikTok Ads bidding adjustments based on competitor inventory status." }
    ]
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    who: "SINGLE MERCHANT / BRAND OWNER",
    name: "Growth Merchant",
    price: "$29",
    period: "/ month",
    features: [
      "50 Product Analyses / month",
      "Shopee, TikTok Shop, Amazon & Lazada support",
      "Slang NLP & Teencode Extraction Engine",
      "Top 3 Weakness & Opportunity Playbooks",
      "Instant Ad Hook Copy Generator",
      "CSV & PDF Report Export"
    ],
    ctaBtn: "Start Growth Plan →"
  },
  {
    who: "E-COMMERCE AGENCIES & TOP SELLERS",
    name: "Agency & Fleet",
    price: "$79",
    period: "/ month",
    featured: true,
    featuredBadge: "MOST POPULAR",
    features: [
      "250 Product Analyses / month",
      "Unlimited Competitor Store Tracking",
      "Apify Custom Actor Integration API",
      "White-Label Client PDF Reports",
      "Priority Residential IP Proxy Queue (~15s speed)",
      "Dedicated Account Manager & Strategy Consultation"
    ],
    ctaBtn: "Launch Agency Fleet →"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    badge: "BEAUTY & SKINCARE",
    title: "How a Skincare Brand Stole 34% Market Share on Shopee",
    desc: "By analyzing 2,000+ reviews of the leading serum competitor, they discovered the rival suffered from 61+ mentions of '7-day shipping delays'. They updated their listing title to '24h Guaranteed Dispatch' and launched targeted Facebook ads.",
    metric: "+140%",
    metricLabel: "Monthly Revenue Increase in 60 Days"
  },
  {
    badge: "TECH ACCESSORIES",
    title: "Converting Amazon Returns into a Winning SKU",
    desc: "A phone case seller pinpointed that 47% of rival bad reviews stemmed from yellowing tint and color mismatch. They published natural light photos and guaranteed non-yellowing materials.",
    metric: "4.8 ⭐",
    metricLabel: "Rating Achieved with 0 Color Complaints"
  },
  {
    badge: "FOOTWEAR / FASHION",
    title: "TikTok Shop Live Stream Sizing Fix",
    desc: "A sneaker brand discovered rivals had 88 mentions of sizing running small. They created a foot-length cm size chart and highlighted size guidance in livestream script.",
    metric: "3.2x",
    metricLabel: "Higher Livestream Conversion Rate"
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "Will scraping competitor products get my account or IP banned?",
    a: "No. GapFile routes all scraping telemetry through Apify's enterprise residential proxy network. Scrapers run completely detached from your seller accounts, making extraction 100% anonymous and ban-free."
  },
  {
    q: "How does GapFile handle local Vietnamese and Southeast Asian slang?",
    a: "Standard LLMs fail on regional teencode (e.g. 'giao lề mề', 'rep chậm', 'màu khác ảnh'). Our proprietary NLP pipeline is fine-tuned on e-commerce buyer vocabulary across VN, ID, TH, and SG markets."
  },
  {
    q: "How long does a typical product review analysis take?",
    a: "On average, ingesting 500 to 2,000 reviews, performing vector clustering, and generating the marketing playbook takes approximately 30 seconds."
  },
  {
    q: "Can I connect my own Apify Actor account?",
    a: "Yes! On our Agency plan, you can supply your own Apify API token to run custom extraction actors directly through your existing Apify infrastructure."
  }
];
