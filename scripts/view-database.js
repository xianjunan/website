const { Pool } = require('pg');

const pool = new Pool({
  host: 'leaderboarddb.c5uogu668ck7.us-east-2.rds.amazonaws.com',
  user: 'lojunopchi',
  password: '2JpxOFu22uc5FyxZJW5g',
  database: 'postgres',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

async function viewDatabase() {
  try {
    const result = await pool.query('SELECT * FROM leaderboard ORDER BY created_at DESC');
    console.log('\n=== LEADERBOARD DATABASE ===\n');
    console.table(result.rows);
    console.log(`\nTotal entries: ${result.rows.length}\n`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

viewDatabase();
