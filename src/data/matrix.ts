import { ComparisonRow } from '@/types';

export const MATRIX_DATA: ComparisonRow[] = [
  {
    feature: "Automated Review Scraping (Shopee, TikTok, Amazon, Lazada)",
    gapfile: "⚡ ~30s automated pipeline",
    manual: "❌ 10-20 hours manual reading",
    basicScraper: "⚠️ Requires manual CSV / IP bans",
    genericSentiment: "⚠️ Enterprise integration required"
  },
  {
    feature: "Localized Slang & Teencode Decoding (VN, Singlish, Bahasa)",
    gapfile: "🎯 99.4% accuracy (Slang NLP)",
    manual: "⚠️ High human bias & fatigue",
    basicScraper: "❌ No NLP capability",
    genericSentiment: "❌ Fails on non-English slang"
  },
  {
    feature: "Revenue Threat & Weakness Ranking",
    gapfile: "✅ Vector frequency & pain scoring",
    manual: "❌ Subjective gut-feel guessing",
    basicScraper: "❌ Raw JSON text dump",
    genericSentiment: "⚠️ Generic positive/negative split"
  },
  {
    feature: "Instant Ad Copy & Listing Hook Generator",
    gapfile: "🚀 Instant ready-to-run hooks",
    manual: "❌ Copywriter required",
    basicScraper: "❌ None",
    genericSentiment: "❌ None"
  },
  {
    feature: "Ban-Free Residential Proxy Network (Apify Fleet)",
    gapfile: "🛡️ Built-in residential IP rotation",
    manual: "N/A",
    basicScraper: "❌ Gets IP blocked immediately",
    genericSentiment: "N/A"
  },
  {
    feature: "Pricing Model for Merchants & Agencies",
    gapfile: "💰 $29–$79 / month flat rate",
    manual: "💸 High labor cost ($500+/mo)",
    basicScraper: "💸 Developer maintenance cost",
    genericSentiment: "💸 Enterprise ($1,000+/mo)"
  }
];
