/**
 * Created by user on 11/10/17.
 */
const express = require('express');
const app = express();
const hasOwnProperty = require('./routes/HasOwnProperty');

app.get('/hasownproperty', hasOwnProperty.checkIfObjectHasProperty)
app.listen(2999);