const mongoose = require('mongoose');

module.exports = function() {
  console.log(`Connecting to database url: ${process.env.MONGO_URL} ...`);

  mongoose.connect(process.env.MONGO_URL);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;

  dbConnection.on('error', err => console.error('MongoDB connection error.', err));
  dbConnection.once('open', () => console.log('Connected to MongoDB database: ' + dbConnection.db.databaseName));
};