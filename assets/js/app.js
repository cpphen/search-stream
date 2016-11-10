// ========== guidebox api =========


$('#submit-btn').on('click', function(){
	var guideBoxApiKey = 'TeAuj5W9pJ2iy8G4xcz30fhV0yqSqz';
	var movieSearch = $('#user-search').val().trim();
	var movieQuery = "https://api-public.guidebox.com/v1.43/US/" + guideBoxApiKey + "/search/movie/title/" + movieSearch + "/fuzzy";
	console.log(movieSearch);
	$(document).ready(function(){
		$.ajax({url: movieQuery, method: 'GET'}).done(function(data){
			console.log(data);
		});
	});
});
