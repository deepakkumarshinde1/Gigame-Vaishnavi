// app.js
import helper from "../config/helper.js"; // uses pool.promise()
const { query, pool } = helper;
export const getUsers = async () => {
  try {
    const users = await query("SELECT * FROM users");
    return Promise.resolve(users);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const saveNewUser = async (data) => {
  try {
    const isInserted = pool.execute(
      `INSERT INTO users ( name, email, passwrod) VALUES (?, ?, ? )`,
      data
    );
    return Promise.resolve(isInserted);
  } catch (error) {
    return Promise.reject(err);
  }
};

export const changeUserPic = async (id, file_name) => {
  try {
    const isUpdated = pool.execute(
      `UPDATE users SET user_profile = ? WHERE id = ?`,
      [file_name, id]
    );
    return Promise.resolve(isUpdated);
  } catch (error) {
    return Promise.reject(err);
  }
};
