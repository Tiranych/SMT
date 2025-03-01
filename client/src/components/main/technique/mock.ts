import Autocrane from '@assets/images/technique/autocrane.jpg';
import JCB3CX from '@assets/images/technique/jcb-3-cx.jpg';
import JCB4CX from '@assets/images/technique/jcb-4-cx.jpg';
import ManKamaz from '@assets/images/technique/manipulator-kamaz.jpg';
import ManNissan from '@assets/images/technique/manipulator-nissan.jpg';

import { TechniqueDataParams, TechniqueTypes } from './types';

export const techniqueData: TechniqueDataParams = [
	{
		id: 1,
		image: JCB3CX,
		type: TechniqueTypes.excavator,
		name: 'JCB 3CX',
		price: 'от 18 000 рублей',
	},
	{
		id: 2,
		image: JCB4CX,
		type: TechniqueTypes.excavator,
		name: 'JCB 4CX',
		price: 'от 18 000 рублей',
	},
	{
		id: 3,
		image: Autocrane,
		type: TechniqueTypes.autocrane,
		name: 'Ивановец КС-45717К-1Р',
		price: 'от 18 000 рублей',
	},
	{
		id: 4,
		image: ManKamaz,
		type: TechniqueTypes.manipulator,
		name: 'КАМАЗ КМУ 338706',
		price: 'от 18 000 рублей',
	},
	{
		id: 5,
		image: ManNissan,
		type: TechniqueTypes.manipulator,
		name: 'Nissan Diesel',
		price: 'от 16 000 рублей',
	},
];
