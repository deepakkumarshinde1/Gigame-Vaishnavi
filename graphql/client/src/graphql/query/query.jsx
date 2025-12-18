import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      message
      success
      value {
        email
        id
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query Users($id: ID!) {
    user(id: $id) {
      message
      success
      value {
        username
        password
        id
        email
      }
    }
  }
`;
