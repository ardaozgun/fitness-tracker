import { connectDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      { message: '✅ MongoDB bağlantısı çalışıyor!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Database bağlantısı başarısız' },
      { status: 500 }
    );
  }
}
