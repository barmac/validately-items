const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI;

module.exports = function() {
  console.log(`Connecting to database url: ${mongoUri} ...`);

  mongoose.connect(mongoUri);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;

  dbConnection.on('error', err => console.error('MongoDB connection error.', err));
  dbConnection.once('open', () => console.log('Connected to MongoDB database: ' + dbConnection.db.databaseName));
};