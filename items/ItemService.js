const ItemDao = require('./ItemDao');

const itemDao = new ItemDao();

class ItemService {
  /**
   * 
   * @param {ItemDao} itemDao 
   */
  constructor(itemDao) {
    this.dao = itemDao;
  }

  add(name) {
    return this.dao.add(name);
  }

  getAll() {
    return this.dao.getAll();
  }

  updateName(itemId, name) {
    return this.dao.updateName(itemId, name);
  }

  incrementRating(itemId) {
    return this.dao.incrementRating(itemId);
  }
  
  decrementRating(itemId) {
    return this.dao.decrementRating(itemId);
  }

  remove(itemId) {
    return this.dao.remove(itemId);
  }
}

module.exports = new ItemService(itemDao);
