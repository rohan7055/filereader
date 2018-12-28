var async = require('async');
const jq = require('node-jq')

const filter = '.'
const jsonPath = './final.json'
const options = {
  output:"json"
}

var jsonPathArray=[];
for(i=0;i<10;i++){
  jsonPathArray.push('./test'+i+'.json')
}

var urls = [
  "https://github.com/alexellis/async-example",
  "https://github.com/alexellis/docker-arm",
  "https://github.com/alexellis/ghost-on-docker",
  "https://github.com/alexellis/rpi-display",
  "https://github.com/alexellis/arm-node-bench",
  "https://github.com/alexellis/remote_checkins_ruby"
];

function makeDownloadFunc(url) {
    return function(done) {
      console.log("> Opening HTTP connection to " + url);
      setTimeout(function() {
        console.log("< Downloaded " + url.split(".com")[1]);
        done();
      }, Math.floor((Math.random() * 2000) + 1000))
    };
}

function runjq(path){
  return function(done) {
    //console.log("> Opening IO connection to " + path);
    jq.run(filter, path, options)
      .then((data) => {
        //console.log("path : "+path,data.length)
      })
      .catch((err) => {
        console.error(err)
        // Something went wrong...
      })
  };
}

var work = [];
jsonPathArray.forEach(function(path) {
//  work.push(makeDownloadFunc(url));
  //let filter='.'
  work.push(runjq(path));

});

async.parallel(work, function() {
  console.log("All the IO have been Processed now.")
});
