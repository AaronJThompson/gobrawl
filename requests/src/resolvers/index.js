const moment = require('moment');
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
      let battlelog = await getBattlelog(tag || player.tag);
      battlelog = battlelog.map(item => {
        if (item.battleTime) {
          item.battleTime = moment(item.battleTime).unix();
        } else {
          item.battleTime = 0;
        }
        item.id = `${item.battleTime}${item.event.id}`
        if (item.battle.teams) {
          item.id += item.battle.teams[0][0].tag.replace('#', '');
        } else if (item.battle.players) {
          item.id += item.battle.players[0].tag.replace('#', '');
        }
        return item;
      })
      return battlelog;
    }
  }
}