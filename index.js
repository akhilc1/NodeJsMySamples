/**
 * Created by user on 11/10/17.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const lodash = require('./routes/Lodash');
const arraySample = require('./routes/ArraySamples');
const mongoDbSamples = require('./routes/MongoDbSamples');
const hasOwnProperty = require('./routes/HasOwnProperty');

app.use(bodyParser.urlencoded({
  extended: true
})).use(bodyParser.json());

app.get('/hasownproperty', hasOwnProperty.checkIfObjectHasProperty);
app.get('/lodashdifferenceby', lodash.checkLodashDifferenceBy);
app.get('/arraysample', arraySample.arraySortMethod);
app.get('/mongodb/createdb', mongoDbSamples.createDatabase);
app.get('/mongodb/createCollection', mongoDbSamples.createCollection);
app.post('/mongodb/insert', mongoDbSamples.insertRecordIntoCustomers);
app.get('/mongodb/customers', mongoDbSamples.fetchCustomers);
app.listen(2999);
