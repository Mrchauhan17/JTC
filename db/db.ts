import { Pool } from 'pg';
// import dotenv from 'dotenv';


// dotenv.config();

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
});

export default pool;
