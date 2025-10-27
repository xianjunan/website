const { Pool } = require('pg');

const pool = new Pool({
  host: 'leaderboarddb.c5uogu668ck7.us-east-2.rds.amazonaws.com',
  user: 'lojunopchi',
  password: '2JpxOFu22uc5FyxZJW5g',
  database: 'postgres',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        ip_address VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

createTable();
