const { MongoClient } = require('mongodb');

// Configuration d'accès à la base de données mongo
const uri = 'mongodb://localhost:27017/?maxPoolSize=20&w=majority';

const client = new MongoClient(uri);
async function run () {
  try {
    // Connexion au serveur Mongo
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to Mongo server');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

module.exports = run;
