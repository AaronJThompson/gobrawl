const { gql } = require('apollo-server-express');

module.exports = gql`
  type Battle {
    mode: String!
    type: String
    result: String
    duration: Int,
    trophyChange: Int
    starPlayer: Player
    teams: [[Player]]
    rank: Int
    players: [Player]
  }
`