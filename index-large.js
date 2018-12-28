const jq = require('node-jq')
const fs = require('fs');

const filter = '.'
const jsonPath = './final.json'
const options = {
  output:"--raw-output"
}

var jsonPathArray=[];
for(i=0;i<10;i++){
  jsonPathArray.push('./test'+i+'.json')
}
console.log(jsonPathArray)

jq.run(filter, jsonPath, options)
  .then((data) => {
    console.log("Before",data.length)
    //console.log("Data",data)

  //  let jsondata = JSON.stringify(data);
    //console.log("Before",jsondata)


//fs.writeFileSync('final.json', jsondata);




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
