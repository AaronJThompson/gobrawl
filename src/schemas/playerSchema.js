const { gql } = require('apollo-server-express');

module.exports = gql`
  type Player {
    tag: String!
    name: String!
    trophies: Int
    battlelog: [BattleLog]
  }

  extend type Query {
    player(tag: String!): Player
  }
`