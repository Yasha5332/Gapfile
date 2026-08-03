import { SlangTerm } from '@/types';

export const SLANG_DATA: SlangTerm[] = [
  {
    term: "giao lề mề",
    origin: "Vietnamese",
    meaning: "Very slow delivery / sluggish carrier performance",
    translated: "Sluggish delivery",
    category: "shipping",
    sentiment: "negative"
  },
  {
    term: "màu khác ảnh",
    origin: "Vietnamese",
    meaning: "Product color differs noticeably from official photos",
    translated: "Color mismatch vs photo",
    category: "quality",
    sentiment: "frustrated"
  },
  {
    term: "rep chậm vl / rep như rùa",
    origin: "Vietnamese (Teencode)",
    meaning: "Extremely delayed chat support response",
    translated: "Turtle-slow support reply",
    category: "service",
    sentiment: "negative"
  },
  {
    term: "đóng gói ẩu / móp hộp",
    origin: "Vietnamese",
    meaning: "Careless packaging resulting in dented outer boxes",
    translated: "Sloppy packaging / dented box",
    category: "shipping",
    sentiment: "negative"
  },
  {
    term: "hàng fake / đểu",
    origin: "Vietnamese",
    meaning: "Counterfeit or substandard build quality suspicion",
    translated: "Fake / low quality",
    category: "quality",
    sentiment: "negative"
  },
  {
    term: "chất vải mỏng dính",
    origin: "Vietnamese",
    meaning: "Fabric thickness far lower than advertised picture",
    translated: "Paper-thin fabric",
    category: "quality",
    sentiment: "frustrated"
  },
  {
    term: "kena scam / tak serupa gambar",
    origin: "Bahasa (MY/ID)",
    meaning: "Got scammed / looks nothing like listing photo",
    translated: "Not as advertised",
    category: "quality",
    sentiment: "negative"
  },
  {
    term: "lambat giler",
    origin: "Bahasa (MY)",
    meaning: "Extremely late shipping dispatch",
    translated: "Insanely slow shipping",
    category: "shipping",
    sentiment: "negative"
  },
  {
    term: "so fake sia",
    origin: "Singlish (SG)",
    meaning: "Suspiciously poor quality materials",
    translated: "Substandard quality",
    category: "quality",
    sentiment: "frustrated"
  }
];
