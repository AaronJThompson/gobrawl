const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattlePlayer {
    tag: String!
    name: String
    brawler: BattleBrawler
  }
`