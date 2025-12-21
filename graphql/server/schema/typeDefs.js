let typeDefs = `
    type User {
        id:ID!,
        username:String,
        email:String,
        password:String,
        user_profile:String
    }
    input CreateUser {
        username:String!,
        email:String!,
        password:String!,
        user_profile:String
    }

    type UserResponse {
        success: Boolean!
        message: String!
        value: [User]
    }

    type Query {
        users: UserResponse!,
        user(id: ID!): UserResponse!
    }

    type Mutation {
        createUser(user:CreateUser!): UserResponse!
    }
`;
export default typeDefs;
