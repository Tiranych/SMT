export enum TechniqueTypes {
	autocrane = 'Автокран',
	excavator = 'Экскаватор-погрузчик',
	manipulator = 'Манипулятор',
}

export type TechniqueDataParam = {
	id: number;
	image: string;
	type: TechniqueTypes;
	name: string;
	price: string;
};

export type TechniqueDataParams = TechniqueDataParam[];
