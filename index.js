/**
 * Created by user on 11/10/17.
 */
const express = require('express');
const app = express();
const lodash = require('./routes/Lodash');
const hasOwnProperty = require('./routes/HasOwnProperty');

app.get('/hasownproperty', hasOwnProperty.checkIfObjectHasProperty);
app.get('/lodashdifferenceby', lodash.checkLodashDifferenceBy);
app.listen(2999);
