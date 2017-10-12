/**
 * Created by user on 12/10/17.
 */

const objectToCheck = {
  name: 'Akhil',
  age: null,
  address: undefined,
  desig: ''
};
class HasOwnProperty {

  checkIfObjectHasProperty(req, res) {
    let returnObject = {};
    for (const key in objectToCheck) {
      returnObject[key] = objectToCheck.hasOwnProperty(key)
    }
    res.send(JSON.stringify(returnObject));
  }

}

module.exports = new HasOwnProperty();
