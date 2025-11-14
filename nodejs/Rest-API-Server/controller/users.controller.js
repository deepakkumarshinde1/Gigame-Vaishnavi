import { changeUserPic, getUsers, saveNewUser } from "../model/users.model.js";
import bcrypt from "bcrypt";

export const homePage = (request, response) => {
  response.json({
    state: true,
    message: "Welcome to api v1.0.0",
  });
};

export const getUsersList = async (request, response) => {
  try {
    let users = await getUsers();
    response.json({
      status: true,
      users,
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
    });
  }
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
    return false;
    let lastInsert = await saveNewUser([data.name, data.email, newPass]);
    response.json({
      status: true,
      lastInsert,
    });
  } catch (error) {
    console.log(error);
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

export const updateUserProfilePic = async (request, response) => {
  try {
    let { id } = request.params;
    let file = request.file;
    if (file) {
      let isUpdate = await changeUserPic(id, file.filename);
      response.json({
        status: true,
        isUpdate,
      });
    } else {
      response.json({
        status: false,
        message: "file as not saved",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ status: false });
  }
};
// success , modify, client error , server error
