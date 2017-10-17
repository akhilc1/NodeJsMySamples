/**
 * Created by user on 17/10/17.
 */
const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/firstDatabase';
class MongoDbSamples {

  createDatabase(req, res) {
    mongoClient.connect(dbUrl, (err, db) => {
      if (err) throw err;
      console.log('Database created...!!!!');
      res.end(JSON.stringify({
        Status: 200, Message: 'Database created..>!!!'
      }));
      db.close();
    })
  }

  createCollection(req, res) {
    mongoClient.connect(dbUrl, (err, db) => {
      if (err) {
        res.end('Error creating collection...!!!');
      }
      db.createCollection('Customers', (err, response) => {
        if (err) {
          res.end('Error creating collection "Customers" ');
        }
        res.end(JSON.stringify({Status: 200, Message: 'Success collection'}));
      })
    })
  }

  insertRecordIntoCustomers(req, res) {
    mongoClient.connect(dbUrl, (err, db) => {
      if (err) {
        res.end(err);
      } else {
        const customer = req.body
        db.collection('Customers').insertOne(customer,
          (err, success) => {
            if (err) {
              res.end('Error inserting "Customers" ');
            } else {
              res.end(`Success inserting new Cusomer: ${JSON.stringify(req.body)}`)
            }
          })
      }

    })
  }

  fetchCustomers(req, res) {
   mongoClient.connect(dbUrl, (err, db) => {
     if(!err) {
       db.collection('Customers').find().toArray((err, result) => {
         res.end(JSON.stringify(result));
       })
     }
   })
  }
}

module.exports = new MongoDbSamples();