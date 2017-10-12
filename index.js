/**
 * Created by user on 11/10/17.
 */
const express = require('express');
const app = express();
const lodash = require('./routes/Lodash');
const arraySample = require('./routes/ArraySamples');
const hasOwnProperty = require('./routes/HasOwnProperty');

app.get('/hasownproperty', hasOwnProperty.checkIfObjectHasProperty);
app.get('/lodashdifferenceby', lodash.checkLodashDifferenceBy);
app.get('/arraysample', arraySample.arraySortMethod);
app.listen(2999);
