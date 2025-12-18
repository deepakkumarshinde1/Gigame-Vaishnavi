import pool from "../config/db.js";
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
};

export default resolvers;
