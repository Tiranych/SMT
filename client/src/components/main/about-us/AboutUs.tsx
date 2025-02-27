import React from 'react';

import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { Content } from './AboutUs.styled';

export const AboutUs = ({ title }: SectionComponentProps) => {
	return (
		<Section id='about-us'>
			<Container>
				<Title title={title} />
				<Content>
					Мы уже более 20 лет предоставляем в аренду спецтехнику в Москве и городах
					Подмосковья на максимально выгодных условиях. В нашем распоряжении спецтехника в
					отличном состоянии, готовая своевременно выполнить Ваши задачи.
				</Content>
				<Content>
					Аренда спецтехники — востребованная услуга среди компаний в Москве и Московской
					области, которая позволяет решить комплекс задач по механизации
					строительно-монтажных работ, установке, а также транспортировке грузов и
					сложного габаритного оборудования.
				</Content>
				<Content>
					Строительные проекты по возведению жилых домов, прокладке автомобильных
					магистралей и железных дорог, инженерных и тепловых сетей невозможны без
					привлечения спецтехники. Когда покупка оборудования нерентабельна, взять технику
					в аренду можно, обратившись в компанию ООО СТРОЙМЕГАТРАНС.
				</Content>
			</Container>
		</Section>
	);
};
