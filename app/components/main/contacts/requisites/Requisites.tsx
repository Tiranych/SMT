import { Box, CompanyName, Item, List, Subtitle, Text, Value } from './Requisites.css';

import { data } from './mock';

export const Requisites = () => {
	return (
		<div>
			<h3 className={Subtitle}>Наши реквизиты</h3>
			<h4 className={CompanyName}>{data.companyName}</h4>
			<ul className={List}>
				<li className={Item}>
					<div className={Box}>
						<span className={Text}>ИНН / КПП</span>
						<span className={Value}>
							{data.inn} / {data.kpp}
						</span>
					</div>
					<div className={Box}>
						<span className={Text}>Юридический адрес</span>
						<span className={Value}>{data.registeredOffice}</span>
					</div>
				</li>
				<li className={Item}>
					<div className={Box}>
						<span className={Text}>Банк</span>
						<span className={Value}>{data.bank}</span>
					</div>
					<div className={Box}>
						<span className={Text}>Расчетный счет</span>
						<span className={Value}>{data.paymentAccount}</span>
					</div>
					<div className={Box}>
						<span className={Text}>Корр. счет</span>
						<span className={Value}>{data.correspondentAccount}</span>
					</div>
					<div className={Box}>
						<span className={Text}>БИК</span>
						<span className={Value}>{data.bik}</span>
					</div>
					<div className={Box}>
						<span className={Text}>ОКВЭД</span>
						<span className={Value}>{data.okved}</span>
					</div>
					<div className={Box}>
						<span className={Text}>ОГРН</span>
						<span className={Value}>{data.ogrn}</span>
					</div>
				</li>
			</ul>
		</div>
	);
};
