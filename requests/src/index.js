require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

// let db = mongoose.connection;

// db.on('error', () => {
//   console.log(`---Mongoose failed to connect to url ${process.env.DB_URL}`);
// });

// db.once('open', () => {
//   console.log('+++Mongoose connected');
// })

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Go to http://localhost:${port}/graphql to run queries!`);
});