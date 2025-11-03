import { users } from "../model/users.model.js";

export const homePage = (request, response) => {
  response.json({
    state: true,
    message: "Welcome to api v1.0.0",
  });
};

export const getUsersList = (request, response) => {
  if (users.length === 0) {
    response.json({
      status: false,
      message: "Users not found",
    });
    return false;
  }
  response.json({
    status: true,
    users,
  });
};
