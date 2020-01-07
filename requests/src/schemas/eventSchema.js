const { gql } = require('apollo-server-express');

module.exports = gql`
  type Event {
    id: Int
    mode: String
    map: String
  }
`