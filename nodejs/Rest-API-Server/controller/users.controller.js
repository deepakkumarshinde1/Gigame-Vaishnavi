import { users } from "../model/users.model.js";
import bcrypt from "bcrypt";

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

export const addNewUser = async (request, response) => {
  try {
    let data = request.body;
    let newPass = await bcrypt.hash(data.password, 10);
    data.password = newPass;
    response.json({
      status: true,
      data,
    });
  } catch (error) {
    response.status(500).json({ status: false });
  }
};

export const updateUser = async (request, response) => {
  try {
    let data = request.body;
    let id = request.params.id;
    let query = request.query;
    response.json({
      status: true,
      data,
      id,
      query,
    });
  } catch (error) {
    response.status(500).json({ status: false });
  }
};

// success , modify, client error , server error
