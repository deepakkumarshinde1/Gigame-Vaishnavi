import pool from "../config/db.js";
function getSqlTimestamp() {
  const now = new Date();

  const pad = (n) => n.toString().padStart(2, "0");

  return (
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  );
}

let resolvers = {
  Query: {
    users: async () => {
      let query = "SELECT * FROM users";
      let [rows] = await pool.execute(query);
      if (rows.length === 0)
        return {
          success: false,
          message: "User not found",
          value: null,
        };

      return {
        success: true,
        message: "User Found",
        value: rows,
      };
    },
    user: async (_, args) => {
      let query = "SELECT * FROM users WHERE id = ?";
      let [rows] = await pool.execute(query, [args.id]);
      if (rows.length === 0)
        return {
          success: false,
          message: "User not found",
          value: null,
        };

      return {
        success: true,
        message: "User Found",
        value: rows,
      };
    },
  },
  Mutation: {
    createUser: async (_, { user }) => {
      let createTimeStamp = getSqlTimestamp();
      let { username, email, password, user_profile } = user;
      let query = `
          INSERT INTO users
            (
            username,
            email,
            password,
            profile_pic,
            createdAt,
            updatedAt)
            VALUES
            (?,?,?,?,?,?)
      `;
      let result = await pool.execute(query, [
        username,
        email,
        password,
        user_profile || "",
        createTimeStamp,
        createTimeStamp,
      ]);
      if (result[0].insertId > 0)
        return {
          success: true,
          message: "This is user data",
        };

      return {
        success: false,
        message: "Unable to create user try again",
      };
    },
  },
};

export default resolvers;
