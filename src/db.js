import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } from './config.js'

export const pool = createPool({
    host: DB_HOST,//'b9dw0vobstpr7etg0eho-mysql.services.clever-cloud.com',
    user: DB_USER,//'ukxmvqmdazlvc7u5',
    password: DB_PASSWORD,//'hHesTL8t7Kl2zGs7Vz9m',
    port: DB_PORT,//3306,
    database: DB_DATABASE//'b9dw0vobstpr7etg0eho'
})