import React from 'react';

import { Box, CompanyName, Item, List, Subtitle, Text, Value } from './Requisites.styled';
import { data } from './mock';

export const Requisites = () => {
	return (
		<div>
			<Subtitle>Наши реквизиты</Subtitle>
			<CompanyName>{data.companyName}</CompanyName>
			<List>
				<Item>
					<Box>
						<Text>ИНН / КПП</Text>
						<Value>
							{data.inn} / {data.kpp}
						</Value>
					</Box>
					<Box>
						<Text>Юридический адрес</Text>
						<Value>{data.registeredOffice}</Value>
					</Box>
				</Item>
				<Item>
					<Box>
						<Text>Банк</Text>
						<Value>{data.bank}</Value>
					</Box>
					<Box>
						<Text>Расчетный счет</Text>
						<Value>{data.paymentAccount}</Value>
					</Box>
					<Box>
						<Text>Корр. счет</Text>
						<Value>{data.correspondentAccount}</Value>
					</Box>
					<Box>
						<Text>БИК</Text>
						<Value>{data.bik}</Value>
					</Box>
					<Box>
						<Text>ОКВЭД</Text>
						<Value>{data.okved}</Value>
					</Box>
					<Box>
						<Text>ОГРН</Text>
						<Value>{data.ogrn}</Value>
					</Box>
				</Item>
			</List>
		</div>
	);
};
