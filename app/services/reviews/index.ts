'use server';

import { GET } from '@api/reviews/route';
import humps from 'humps';

import { TReview } from '@components/main/reviews/types';

export const getReviews = async () => {
	const res = await GET();
	return humps.camelizeKeys(await res.json()) as TReview[];
};
