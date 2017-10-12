/**
 * Created by user on 12/10/17.
 */
const _ = require('lodash');
class Lodash {

  checkLodashDifferenceBy(req, res) {
    const firstArray = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3},
      {x: 4, y: 4}, {x: 5, y: 5}];
    const comparisonArray = [{x: 1, y: 1}, {x: 2, y: 3}];
    console.log(`Inside function checkLodashDifferenceBy`);
    const result = _.differenceBy(firstArray, comparisonArray, (object) => {
      return object.x + object.y;
    })

    console.log(`Our modified array:  ${JSON.stringify(result)}`);
  }
}

module.exports = new Lodash();
