  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABkACxzTv791Z1lJhxiNY8beVafNsdO7A",
    authDomain: "search-stream.firebaseapp.com",
    databaseURL: "https://search-stream.firebaseio.com",
    storageBucket: "search-stream.appspot.com",
    messagingSenderId: "409886446451"
  };
  firebase.initializeApp(config);
// make a reference for the database.
var database = firebase.database();
var movieName;
var imageURL;


// var movies = {
//  lionKing: 1,
//  matrix: 4,
//  borneIdentity: 1,
//  notebook: 10,

	
 
 
// };



// for (var key in movies) {
//  if (movies.hasOwnProperty(key)) {
//    console.log(key + " -> " + movies[key]);
//  }
// }

function grabTitleAndImage() {
	movieName = movieData[0].title;
	imageURL = movieData[0].imageLink;
	pushFirebase();
}

function pushFirebase() {
	// get snapshot of the data.
	database.ref().once("value", function(snapshot) {
		if(snapshot.child('movies/' + movieName).exists()) {
			console.log('Its there!');
			var counter = snapshot.val().movies[movieName].counter;
			counter++;
			database.ref('movies/' +movieName).update({counter: counter});

			
		} else {
			database.ref('movies/' +movieName).update({counter: 1});
		}
		
		}), function (errorObject) {
	console.log('error!!!!' + errorObject.code);
	}
}



$(document).ajaxStop(function() {
	grabTitleAndImage();
})
