'use client';

import { useEffect, useState } from 'react';

import { getReviews } from '@services/reviews';

import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { Comment, Details, Item, List, Rate, SliderWrapper, Star } from './Reviews.css';

import { TReview } from './types';

const getRateStars = (rate: number) => {
	const res = [];
	for (let i = 0; i < rate; i++) {
		res.push(<span key={i + 1} className={Star} />);
	}
	return res;
};

export const Reviews = ({ title }: SectionComponentProps) => {
	const [reviews, setReviews] = useState<TReview[]>([]);
	useEffect(() => {
		const getData = async () => {
			const res = await getReviews();
			setReviews(res);
		};

		getData();
	}, []);
	return (
		<div className={SliderWrapper}>
			<Section id='reviews'>
				<Container>
					<Title title={title} />
					<ul className={List}>
						{reviews.map((review) => (
							<li key={review.id} className={Item}>
								<div className={Comment}>
									<p>{review.comment}</p>
								</div>
								<div>
									<div className={Rate}>{getRateStars(Number(review.rate))}</div>
									<div className={Details}>
										<p>{review.name}</p>
										<p>{review.reviewDate}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</Container>
			</Section>
		</div>
	);
};
