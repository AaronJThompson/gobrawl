const { gql } = require('apollo-server-express');

module.exports = gql`
  type Event {
    id: ID!
    mode: String!
    map: String!
  }
`