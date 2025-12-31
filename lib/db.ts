'use server';

import mysql from 'mysql2/promise';

const access: mysql.PoolOptions = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
	dateStrings: true,
};

export async function getDbConnection() {
	// создаем подключение
	const connection = await mysql.createConnection(access);
	return connection;
}
