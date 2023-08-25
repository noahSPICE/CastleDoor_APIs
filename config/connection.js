const { connect, connection } = require("mongoose");

process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/friendsAndThoughtsDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
module.exports = connection;
