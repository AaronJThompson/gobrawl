const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattleLog {
    battleTime: String!
    event: Event!
    battle: Battle!
  }
`