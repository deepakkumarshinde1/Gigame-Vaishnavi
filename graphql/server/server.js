import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";

let server = express();
server.use(cors());
server.use(express.json());
let apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
await apolloServer.start();
server.use("/graphql", expressMiddleware(apolloServer));

server.listen(process.env.PORT, () => {
  console.log("server is running on port ", process.env.PORT);
});
