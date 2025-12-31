'use server';

import humps from 'humps';

import { TReview } from '@components/main/reviews/types';

import { getDbConnection } from '../../../lib/db';

export async function getReviews() {
	const db = await getDbConnection();
	const [rows] = await db.query('SELECT * FROM reviews ORDER BY review_date DESC;'); // От более новых отзывов к более старым
	await db.end();
	return humps.camelizeKeys(rows) as TReview[];
}
