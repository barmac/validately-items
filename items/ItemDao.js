const Item = require('./Item');

const updateOptions = { new: true };

class ItemDao {
  add(name) {
    return new Item({ name }).save();
  }

  getAll() {
    return Item.find({})
      .sort('-rating');
  }

  updateName(itemId, name) {
    return Item.findOneAndUpdate({ _id: itemId }, { name }, updateOptions);
  }

  incrementRating(itemId) {
    return Item.findOneAndUpdate({ _id: itemId }, { $inc: { rating: 1 } }, updateOptions);
  }

  decrementRating(itemId) {
    return Item.findOneAndUpdate({ _id: itemId }, { $inc: { rating: -1 } }, updateOptions);
  }

  remove(itemId) {
    return Item.findByIdAndRemove(itemId);
  }
}

module.exports = ItemDao;
