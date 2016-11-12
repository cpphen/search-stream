// ========== guidebox api =========

var idList = [];
var movieTitles = [];

$('#submit-btn').on('click', function(){
	var guideBoxApiKey = 'rKqEl4tThhp94JtuWhfE3ECq1EsgQQIR';
	var movieSearch = $('#user-search').val().trim();
	var movieQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/search/movie/title/" + movieSearch + "/fuzzy";
	
	$.ajax({url: movieQuery, method: 'GET'}).done(function(data){
		// console.log(data);

		for(var i = 0; i < 10; i++) {
			var id = data.results[i].id;
			idList.push(id);
		} 

		movieIDSearch();
	});

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
		var movieTitle = data.title;
		movieTitles.push(movieTitle);
	});	
}

// console.log(movieTitles);

// for (var i .....) {
//   (function (i) {
//     async(function() {
//       use(i);
//     });
//   })(i);
// }