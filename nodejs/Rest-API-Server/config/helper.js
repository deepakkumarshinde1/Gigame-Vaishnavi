// db/helpers.js
import pool from "./db.js";

async function query(sql, params = []) {
  // pool.execute returns [rows, fields]
  const [rows] = await pool.execute(sql, params);
  return rows;
}
const object = { query, pool };
export default object;
