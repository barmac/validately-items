const Item = require('./Item');

class ItemDao {
  add(name) {
    return new Item({ name }).save();
  }

  getAll() {
    return Item.find({})
      .sort('-rating');
  }

  updateName(itemId, name) {
    return Item.findOneAndUpdate({ _id: itemId }, { name });
  }

  incrementRating(itemId) {
    return Item.findOneAndUpdate({ _id: itemId }, { $inc: { rating: 1 } });
  }
  
  decrementRating(itemId) {
    return Item.findOneAndUpdate({ _id: itemId }, { $inc: { rating: -1 } });
  }

  remove(itemId) {
    return Item.findByIdAndRemove(itemId);
  }
}

module.exports = ItemDao;
