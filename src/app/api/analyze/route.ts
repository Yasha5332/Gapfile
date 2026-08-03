import { NextResponse } from 'next/server';
import { PRODUCT_DATA, generateCustomReport } from '@/data/products';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { key, url } = body;

    if (key && PRODUCT_DATA[key]) {
      return NextResponse.json({ success: true, data: PRODUCT_DATA[key] });
    }

    if (url) {
      const customReport = generateCustomReport(url);
      return NextResponse.json({ success: true, data: customReport });
    }

    // Default fallback
    return NextResponse.json({ success: true, data: PRODUCT_DATA.skincare });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to analyze product' }, { status: 400 });
  }
}
