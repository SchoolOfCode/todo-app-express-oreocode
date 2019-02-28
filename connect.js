const mongodb = require("mongodb");

let connect = database => {
  return mongodb.MongoClient.connect(
    "mongodb+srv://appservice:M0ngodB252@cluster0-qdxrt.mongodb.net/Todo"
  ).then(
    //change the connectionstring
    // you don't want your connection string to be public needs to be hidden "process.env.MONGO-uri"
    client => {
      console.log("connected to MongoDB!");
      return client.db(database);
    }
  );
};

module.exports = connect;
