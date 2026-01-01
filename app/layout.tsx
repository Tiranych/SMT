import { Vollkorn } from 'next/font/google';

const vollkorn = Vollkorn({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
	title: 'Аренда спецтехники в Москве и Московской области',
	description:
		'Аренда спецтехники в Москве и Московской области от компании СТРОЙМЕГАТРАНС. Собственный автопарк техники для любых работ: автокраны, экскаваторы и манипуляторы. 20 лет на рынке!',
	keywords:
		'спецтехника, аренда, погрузчик, экскаватор, манипулятор, аренда спецтехники в москве, автокран, новогиреево, реутов, восточный округ, вао',
	icons: {
		icon: '/assets/icons/favicon-white.svg',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body className={vollkorn.className}>{children}</body>
		</html>
	);
}
