const { gql } = require('apollo-server-express');

module.exports = gql`
  type Brawler {
    id: Int
    name: String
    power: Int
    trophies: Int
    rank: Int
    highestTrophies: Int
  }
`