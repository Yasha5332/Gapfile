export type Language = 'en' | 'vi';

export interface Finding {
  name: string;
  count: string;
  detail: string;
  sev: 'sh' | 'sm' | 'sl'; // severe high, medium, low
  opp: string;
  badge: 'a' | 'w'; // action / warning
  hook?: string;
}

export interface ScoreData {
  pain: number;
  freq: number;
  positive: number;
  negative: number;
}

export interface ProductData {
  title: string;
  platform: string;
  reviewCount: number;
  scores: ScoreData;
  headline: string;
  findings: Finding[];
  opportunities: string[];
}

export interface SlangTerm {
  term: string;
  origin: string;
  meaning: string;
  translated: string;
  category: 'shipping' | 'quality' | 'service' | 'price';
  sentiment: 'negative' | 'frustrated' | 'neutral';
}

export interface ComparisonRow {
  feature: string;
  gapfile: string | boolean;
  manual: string | boolean;
  basicScraper: string | boolean;
  genericSentiment: string | boolean;
}

export interface CaseStudy {
  badge: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

export interface PricingPlan {
  who: string;
  name: string;
  price: string;
  period: string;
  featured?: boolean;
  featuredBadge?: string;
  features: string[];
  ctaBtn: string;
}

export interface FAQItem {
  q: string;
  a: string;
}
