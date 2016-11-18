// ========== guidebox api =========

var guideBoxApiKey = 'rKqEl4tThhp94JtuWhfE3ECq1EsgQQIR';
var idList = [];
var movieData = [];

function getMovieData(){	
	// grab user input and store as a var ref
	var movieSearch = $('#user-search').val().trim();
	// construct query to search guidebox
	var movieQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/search/movie/title/" + movieSearch + "/fuzzy";
	
	$.ajax({url: movieQuery, method: 'GET'}).done(function(data){
		// log the query url for reference
		console.log(movieQuery);
		
		// get result length to use as a stopping point in condition of for loop
		var resultLength = data.results.length;

		// loop through results to get back the movie id
		for(var i = 0; i < resultLength; i++) {
			var id = data.results[i].id;
			// add the id to the idList array
			idList.push(id);
		} 

		// function is a separate api call for each movie to get more specific movie data
		movieIDSearch();
	});

	// clear movie search input
	$('#user-search').val(''); 

}

function movieIDSearch(){
	for(var i = 0; i < idList.length; i++){	
			// get movie id
			var movieId = idList[i];
			
			// construct api request
			var movieIdQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/movie/" + movieId;
			
			// search movie id using fully constructed movieIdQuery  
			movieIdAjax(movieIdQuery);
	}
}

// ================ working function without ratings data =========================
// function movieIdAjax(movieIdQuery) {
// 	$.ajax({url: movieIdQuery, method: 'GET'}).done(function(data){
// 		// store movie data
// 		var id = data.id;
// 		var title = data.title;
// 		var releaseYear = data.release_year;
// 		var description = data.overview;
// 		var imageLink = data.poster_240x342;
// 		var streamingSources = data.subscription_web_sources;
// 		var imdbId = data.imdb;

// 		// construct obj with the var references
// 		var movieObj = {
// 			id: id,
// 			title: title,
// 			releaseYear: releaseYear,
// 			description: description,
// 			imageLink: imageLink,
// 			streamingSources: streamingSources,
// 			imdbId: imdbId
// 			// metacriticRating: metacriticRating,
// 			// imdbRating: imdbRating
// 		}

// 		// add obj to the movieData array
// 		movieData.push(movieObj);

// 	});	
// }

// ================ test function with ratings data =========================
function movieIdAjax(movieIdQuery) {
	var movieObj = {};

	$.ajax({url: movieIdQuery, method: 'GET'}).done(function(data){
		// store movie data
		var id = data.id;
		var title = data.title;
		var releaseYear = data.release_year;
		var description = data.overview;
		var imageLink = data.poster_240x342;
		var streamingSources = data.subscription_web_sources;
		var imdbId = data.imdb;

		// store as properties in obj
		movieObj.id = id;
		movieObj.title = title;
		movieObj.releaseYear = releaseYear;
		movieObj.description = description;
		movieObj.imageLink = imageLink;
		movieObj.streamingSources = streamingSources;
		movieObj.imdbId = imdbId;
		
		// once the first ajax call is complete, run the second API call to OMDB 
	}).then(function(){
		// construct omdb api call
		var OMDBUrl = "http://www.omdbapi.com/?i=" + movieObj.imdbId + "&plot=short&r=json";
		// ajax call to omdb
		$.ajax({url: OMDBUrl, method: 'GET'}).done(function(response){		 
			// add ratings data to the movieObj
			 movieObj.metascore = response.Metascore;
			 movieObj.imdbScore = response.imdbScore;
			
		});
	}).then(function(){
		// add obj to the movieData array
		movieData.push(movieObj);
	});		
}

