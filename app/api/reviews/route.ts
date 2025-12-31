'use server';

import { getDbConnection } from '../../../lib/db';

export async function GET() {
	const db = await getDbConnection();
	const [rows] = await db.query('SELECT * FROM reviews ORDER BY review_date DESC;'); // От более новых отзывов к более старым
	await db.end();
	return Response.json(rows);
}
