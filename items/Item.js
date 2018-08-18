const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      index: true,
    }
  }
);

ItemSchema.methods.toJSON = function itemToJSON() { 
  return {
    _id: this._id,
    name: this.name,
    rating: this.rating,
  }; 
}

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
