import pool from "../config.js";
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
    user: (_, args) => {
      let data = null;
      return {
        success: data ? true : false,
        message: data ? "User Found" : "User not found",
        value: data,
      };
    },
  },
};

export default resolvers;
