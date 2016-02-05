var fs = require('fs');

function getAutobots (filepath, done) {
  fs.readFile(filepath, function (err, autobots){
    if(err) return done(err);

    fs.readFile('autobots.dictionary', function(err, dict){
      if (err) return done(err);

      compareAutobots(autobots, dict);
    })
  })

  function compareAutobots (autobots, dict) {
    dict = dict.toString().split('\n');
    autobots = autobots.toString().split('\n').filter(function(autobot){
      return dict.indexOf(autobot) !== -1;
    })
    done(null, autobots);
  }
}


getAutobots('autobots.txt', function(err, autobots){
  console.log(autobots);
})

//[ 'optimus prime','bumblebee','jazz','ultra magnus','metroplex','omega supreme','grimlock','mirage','' ]
