const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoUri = process.env.mongo_url || process.env.MONGO_URL || process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MongoDB connection string missing! Set mongo_url environment variable.");
  process.exit(1); // Exit application if no connection string provided
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Mongo DB Connection Successful');
})
.catch((err) => {
  console.error('Mongo DB Connection Failed:', err);
  process.exit(1); // Exit on failed connection
});

const connection = mongoose.connection;

module.exports = connection;
