const { gql } = require('apollo-server-express');

module.exports = gql`
  type Player {
    tag: String!
    name: String!
    trophies: Int
    nameColor: String
    highestTrophies: Int
    expLevel: Int
    expPoints: Int
    isQualifiedFromChampionshipChallenge: Boolean
    soloVictories: Int
    duoVictories: Int
    bestRoboRumbleTime: Int
    bestTimeAsBigBrawler: Int
    battlelog: [BattleLog]
    brawlers: [Brawler]
  }

  extend type Query {
    player(tag: String!): Player
  }
`