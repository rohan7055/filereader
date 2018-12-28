const jq = require('node-jq')
const fs = require('fs');

const filter = '.'
const jsonPath = './test.json'
const options = {
  output:"json"
}

var jsonPathArray=[];
for(i=0;i<10;i++){
  jsonPathArray.push('./test'+i+'.json')
}
console.log(jsonPathArray)

jq.run(filter, jsonPathArray, options)
  .then((data) => {
    console.log("Before",data.length)
  //  let jsondata = JSON.stringify(data);
fs.writeFileSync('final.json', data);




    /*
      {
        "name": "heartgold-soulsilver",
        "power": "10"
      },
      {
        "name": "platinum",
        "power": "50"
      },
      {
        "name": "diamond-pearl",
        "power": "99"
      }
    */
  })
  .catch((err) => {
    console.error(err)
    // Something went wrong...
  })
