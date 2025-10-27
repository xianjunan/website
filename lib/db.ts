import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://lojunopchi:2JpxOFu22uc5FyxZJW5g@leaderboarddb.c5uogu668ck7.us-east-2.rds.amazonaws.com:5432/postgres',
  ssl: { rejectUnauthorized: false }
});

export default pool;
