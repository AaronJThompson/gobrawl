const playerSchema = require('./playerSchema');
const battlelogSchema = require('./battlelogSchema');
const battlePlayerSchema = require('./battlePlayerSchema');
const brawlerSchema = require('./brawlerSchema');
const eventSchema = require('./eventSchema');
const battleSchema = require('./battleSchema');

const { gql } = require('apollo-server-express');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  playerSchema,
  battlelogSchema,
  battlePlayerSchema,
  brawlerSchema,
  eventSchema,
  battleSchema
];