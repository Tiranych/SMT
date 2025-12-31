'use client';

/* import { useEffect, useState } from 'react';

import { getReviews } from '@api/reviews/route'; */
import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { Comment, Details, Item, List, Rate, SliderWrapper, Star } from './Reviews.css';

/* import { TReview } from './types'; */

const getRateStars = (rate: number) => {
	const res = [];
	for (let i = 0; i < rate; i++) {
		res.push(<span key={i + 1} className={Star} />);
	}
	return res;
};

export const Reviews = ({ title }: SectionComponentProps) => {
	/* 	const [reviews, setReviews] = useState<TReview[]>([]);
	useEffect(() => {
		const getData = async () => {
			const res = await getReviews();
			setReviews(res);
		};

		getData();
	}, []); */
	return (
		<div className={SliderWrapper}>
			<Section id='reviews'>
				<Container>
					<Title title={title} />
					<ul className={List}>
						<li className={Item}>
							<div className={Comment}>
								<p>
									Несколько раз заказывали спецтехнику в этой компании. Работают
									быстро, качественно, с клиентами общаются вежливо. Рекомендую
								</p>
							</div>
							<div>
								<div className={Rate}>{getRateStars(5)}</div>
								<div className={Details}>
									<p>Никита Осадчий</p>
									<p>20.03.2025</p>
								</div>
							</div>
						</li>
						<li className={Item}>
							<div className={Comment}>
								<p>
									Работали с ООО СМТ несколько раз, спецтехника была подана
									оперативно, работа была выполнена качественно, всем рекомендую.
								</p>
							</div>
							<div>
								<div className={Rate}>{getRateStars(5)}</div>
								<div className={Details}>
									<p>Даниил К.</p>
									<p>03.03.2025</p>
								</div>
							</div>
						</li>
					</ul>
				</Container>
			</Section>
		</div>
	);
};
