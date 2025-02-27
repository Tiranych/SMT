import React from 'react';

export const YandexMap = () => {
	return (
		<div>
			<iframe
				style={{ padding: '20px 0' }}
				src='https://yandex.ru/map-widget/v1/?um=constructor%3Af81599c7100d1fe1c5d875f65e4b62558a2bce65382b3c3ca25d4e33988db480&amp;source=constructor'
				width='100%'
				height='500'
			></iframe>
		</div>
	);
};
