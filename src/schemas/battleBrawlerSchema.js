const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattleBrawler {
    id: ID!
    name: String!
    power: Int!
    trophies: Int
  }
`