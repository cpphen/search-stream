$(document).ready(function(){
	var imdbID = imdbId;
	// var reviews = [];

		function getAjaxReview(OMDBUrl)
		{
				var OMDBUrl = "http://www.omdbapi.com/?i=" + imdbId + "&plot=short&r=json";

				$.ajax({url: OMDBUrl, method: 'GET'}).done(function(response) 
				{
					var reviewsObject = {
						metascore: response.Metascore,
						imdbScore: response.imdbRating
					}
					return reviewsObject;
					// reviews.push(reviewsObject);
				});
		}
});
