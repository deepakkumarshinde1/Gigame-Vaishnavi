// db/pool.js
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // tune this for your app
  queueLimit: 0,
  // optional:
  // connectTimeout: 10000,
});

console.log(process.env.DB_HOST);
export default pool.promise(); // export the promise wrapper
