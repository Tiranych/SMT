import { Vollkorn } from 'next/font/google';
import Script from 'next/script';

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
			<body className={vollkorn.className}>
				{children}
				<Script
					id='yandex-metrika'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `(function (m, e, t, r, i, k, a) {
									m[i] =
									m[i] ||
										function () {
											(m[i].a = m[i].a || []).push(arguments);
										};
									m[i].l = 1 * new Date();
									for (var j = 0; j < document.scripts.length; j++) {
										if (document.scripts[j].src === r) {
											return;
										}
									}
									(k = e.createElement(t)),
										(a = e.getElementsByTagName(t)[0]),
										(k.async = 1),
										(k.src = r),
										a.parentNode.insertBefore(k, a);
								})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
	
								ym(98795913, 'init', {
									clickmap: true,
									trackLinks: true,
									accurateTrackBounce: true,
									webvisor: true,
									ecommerce: 'dataLayer',
								});`,
					}}
				/>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/97153389'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>
			</body>
		</html>
	);
}
