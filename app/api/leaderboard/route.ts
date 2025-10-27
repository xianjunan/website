import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Filter } from 'bad-words';

const filter = new Filter();

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT name, created_at FROM leaderboard ORDER BY created_at DESC LIMIT 10'
    );
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch leaderboard',
      details: error.message,
      hasEnv: !!process.env.DATABASE_URL
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    
    if (filter.isProfane(name)) {
      return NextResponse.json({ error: 'Inappropriate name detected' }, { status: 400 });
    }
    
    const forwarded = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const ip = forwarded.split(',')[0].trim();
    
    const countResult = await pool.query(
      'SELECT COUNT(*) FROM leaderboard WHERE ip_address = $1',
      [ip]
    );
    
    if (parseInt(countResult.rows[0].count) >= 2) {
      return NextResponse.json({ error: 'Maximum submissions reached (2 per IP)', ip }, { status: 429 });
    }
    
    await pool.query(
      'INSERT INTO leaderboard (name, ip_address) VALUES ($1, $2)',
      [name, ip]
    );
    return NextResponse.json({ success: true, ip });
  } catch (error: any) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to add entry', details: error.message }, { status: 500 });
  }
}
