/**
 * Created by user on 12/10/17.
 */

class ArraySamples {
  arraySortMethod(req, res) {
    const array = [{name: 'Linda'}, {name: 'Nicole'}, {name: 'Xena'},
      {name: 'Debra'}, {name: 'Cinthiya'}, {name: 'Samantha'}];
    array.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    console.log(`Sorted array is : ${JSON.stringify(array)}`)
    res.end(JSON.stringify(array));
  }
}

module.exports = new ArraySamples();
