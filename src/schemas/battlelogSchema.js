const { gql } = require('apollo-server-express');

module.exports = gql`
  type BattleLog {
    battleTime: Int!
    event: Event!
    battle: Battle!
  }
`