import { env } from '$env/dynamic/private';
import pg from 'pg';

// Create a database connection pool
const pool = new pg.Pool({
    user: env.DATABASE_USER,
    host: env.DATABASE_HOST,
    database: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
    port: 5432
});

// Export the pool object for reuse
export default pool;