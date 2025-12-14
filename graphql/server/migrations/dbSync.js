import sequelize from "../config/database.js";
import db from "../models/index.js";
import seedUsers from "../models/seeds/user.seed.js";

const { User } = db;
try {
  await sequelize.authenticate();
  console.log("✅ Database connected");

  await sequelize.sync({
    alter: true,
  });
  await seedUsers(User);
  console.log("✅ Users table created / altered successfully");
  process.exit(0);
} catch (error) {
  console.error("❌ DB Sync Error:", error);
  process.exit(1);
}
