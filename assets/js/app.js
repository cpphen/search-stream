// ========== guidebox api =========

var idList = [];
var movieData = [];

$('#submit-btn').on('click', function(){
	var guideBoxApiKey = 'rKqEl4tThhp94JtuWhfE3ECq1EsgQQIR';
	var movieSearch = $('#user-search').val().trim();
	var movieQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/search/movie/title/" + movieSearch + "/fuzzy";
	
	$.ajax({url: movieQuery, method: 'GET'}).done(function(data){
		console.log(movieQuery);
		var resultLength = data.results.length;
		// debugger;
		for(var i = 0; i < resultLength; i++) {
			var id = data.results[i].id;
			idList.push(id);
		} 

		movieIDSearch();
		console.log('ran first ajax');
	});

	console.log('captured click');

});


function movieIDSearch(){
	for(var i = 0; i < idList.length; i++){	
			var guideBoxApiKey =  'rKqEl4tThhp94JtuWhfE3ECq1EsgQQIR';
			// get movie id
			var movieId = idList[i];
			
			// construct api request
			var movieIdQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/movie/" + movieId;
			
			// search movie id using fully constructed movieIdQuery  
			movieIdAjax(movieIdQuery);
	}
}

function movieIdAjax(movieIdQuery) {
	$.ajax({url: movieIdQuery, method: 'GET'}).done(function(data){
		// store movie data
		var id = data.id;
		var title = data.title;
		var releaseYear = data.release_year;
		var description = data.overview;
		var imageLink = data.poster_240x342;
		var streamingSources = data.subscription_web_sources;

		var movieObj = {
			id: id,
			title: title,
			releaseYear: releaseYear,
			description: description,
			imageLink: imageLink,
			streamingSources: streamingSources
		}

		movieData.push(movieObj);

		console.log('ran first ajax');
	});	
}

