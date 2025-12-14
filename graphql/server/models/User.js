import { DataTypes } from "sequelize";

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },

      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      profile_pic: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
export default UserModel;
