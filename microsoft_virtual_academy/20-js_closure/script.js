// Initial example
// $(function(){

//   function buildACat(){
//     var catName = "Mr. Tibbles";
//     function catFactory(){
//       //functional scoping: in javascript
//       // of a variable is defined by it's location within
//       // the source code, and nested functions have access
//       // to variables declared in their outer range.

//       alert(catName);
//     }
//     catFactory(); // () means it executes the inner method immediately
//   }

//   $('#buildcat').click(function(){
//     buildACat();
//   });

// });
//======================

//Example using closures
// $(function(){
//   function buildACat() {
//     var catName = "Tuffy";
//     function catFactory(){
//       alert(catName);
//     }
//     // Notice instead of executing it, it just returns
//     // REFERENCE to the method, catFactory!
//     return catFactory;
//   }

// $('#buildcat').click(function(){
//   var myNewCat = buildACat();
//   // buildACat() has executed. It has gone out of scope
//   // now, and all its private functions variables with
//   // it, right? Right?
//   myNewCat(); // <-- not so fast...the catName value
//               // lives
//   });
// });


/*
when calling catFactory, it had knowledge of catName and display Tuffy in an alert box.

myNewCat becomes a closure (line 37).  myNewCat takes a snapshot of the function's outer environment at the time when the cosure has been created.

A closure created (line 37) at the moment when you assign a function reference (var myNewCat = buildACat();) and a snapshot of the function and any data that was avalible to it at the time in (e.g. line 27) memory.

so you get the function's (lines 28-30) implementation plus the environment (e.g Data- local varibles or any input parameters that are in scope- line 27) around it.

Closure is a special kind of object where you're combining a function and the environment in which that function was created.  Binding data to a function and storing it as a variable for use later in your app.

Used in a moduel pattern
//http://jsfiddle.net/vnkuZ/
*/
//================================
// Module pattern - allows you to use private implementation in a public usage

a = (function(){
  var privateFunction = function (){
    alert('hello'); //privately defined
  }
  return {            //public function can access private data
    publicFunction: function () {
      privateFunction();
    }
  }
})();

a.publicFunction();


