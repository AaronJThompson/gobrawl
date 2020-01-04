const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattleBrawler {
    id: Int
    name: String
    power: Int
    trophies: Int
  }
`