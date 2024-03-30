import pool from '../../db/db';
import { NextResponse } from 'next/server';

export  async function GET(request: Request) {
    console.log("tinku")
    try {
        const client = await pool.connect();
        console.log("dgvgvgtvgtvg7777777777777")
        const result = await client.query('SELECT * from bot_chat_main');
        const results = { 'results': (result) ? result.rows : null };
        return NextResponse.json(results);
        client.release();
    } catch (err) {
        console.error(err);
        NextResponse.json({ error: 'Internal Server Error' });
    }
}
