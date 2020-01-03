const { getBattlelog, getPlayer } = require('../data-sources/brawlstars');

module.exports = {
  Query: {
    async player(parent, { tag }, context, info) {
      const player = await getPlayer(tag);
      return player;
    }
  },
  Player: {
    async battlelog(player, { tag }) {
      const battlelog = await getBattlelog(tag || player.tag);
      return battlelog;
    }
  }
}