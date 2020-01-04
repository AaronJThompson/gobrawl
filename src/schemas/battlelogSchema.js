const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattleLog {
    id: ID!
    battleTime: Int
    event: Event
    battle: Battle
  }
`