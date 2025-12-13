let typeDefs = `
    type User {
        id:ID!,
        name:String,
        email:String,
        password:String,
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
`;
export default typeDefs;
