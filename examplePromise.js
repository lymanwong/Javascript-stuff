var gotStraightAs = true;

// Creating a Promise
var willIGetNewGame = new Promise (
  function(resolve, reject) {
    if (gotStraightAs) {
      var game = {
        brand: '2k Sports',
        title: 'NBA 2k18'
      };
      resolve(game); // fulfilled
    } else {
      var reason = new Error('Uncle is not happy with your grades.');
      reject(reason); // reject
    }
  }
);

// var askUncle = function () {
//   willIGetNewGame
//   .then(showOff) // Chain Promise it here
//   .then(function (fulfilled){
//     console.log(fulfilled);
//     // output: 'Hey bro, I have a new NBA 2k Sports NBA 2k18 game'
//   })
//   .catch(function(error){
//     console.log(error.message);
//     // output: 'Uncle is not happy with your grades'
//   });
// };

// Chaining a Promise
// var showOff = function (game) {
//   return new Promise(
//       function(resolve, reject) {
//         var message = 'Hey bro, I have the new ' + game.brand + ' ' + game.title + ' game.';
//         resolve(message);
//       }
//     );
// };

// Chaining a Promise
var showOff = function (game) {
  var message = 'Hey bro, I have the new ' + game.brand + ' ' + game.title + ' game.';
  return Promise.resolve(message);
};

// askUncle();

// Call a Promise
// var askMom = function () {
//   willIGetNewPhone //consuming promise
//     // resolved
//     .then(function(fulfilled){
//       // yah, you got a new phone
//       console.log(fulfilled);
//       // output: { brand: 'Samsung', color: 'black' }
//     })
//     // rejected
//     .catch(function(error){
//       // oops, mom doesn't buy it
//       console.log(error.message);
//       // output: 'mom is not happy'
//     });
// };

// askMom();

// Chaining a Promise
// var showOff = function (game) {
//   var message = 'Hey bro, I have the new ' + game.brand + ' ' + game.title + ' game.';
//   return Promise.resolve(message);
// };


var askUncle = function () {
  console.log('Before asking Uncle');
  willIGetNewGame
  .then(showOff) // Chain Promise here
  .then(function (fulfilled){
    console.log(fulfilled);
    // output: 'Hey bro, I have the new NBA 2k Sports NBA 2k18 game'
  })
  .catch(function(error){
    console.log(error.message);
    // out: 'Uncle is not happy with your grades'
  });
  console.log('After asking Uncle');
};

askUncle();
