/* ================ result component ==============

	<div class="row result">
		<!-- movie image -->
		<div class="col-lg-3 movie-poster">
			<img src="http://static.rogerebert.com/uploads/movie/movie_poster/nightcrawler-2014/large_ciARJx8fJqum8uh6gLePaNoyYNY.jpg" alt="">
		</div>
		<!-- movie description & ratings -->
		<div class="col-lg-6 movie-description">
			<h2>Description	</h2>
			<p>When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.</p>
			<h2>Ratings</h2>			
			<ul class="reviews">
				<li>Metacritic</li>
				<li>Rotten Tomatoes</li>
			</ul>
		</div>
		<!-- streaming links -->
		<div class="col-lg-3 streaming-links">
			<h2>Streaming On</h2>
			<!-- displays available streaming sources, or none if there aren't any available -->
			<ul>
				<li>Netflix</li>
				<li>HBO GO</li>
				<li>Amazon Prime</li>
			</ul>
		</div>
	</div>

================================================= */ 

$('#submit-btn').on('click', function(){
	reset();
	getMovieData();
});

$(document).ajaxStop(function() {
	getResults();
});

function reset(){
	// empty id list
	idList = [];
	// empty movieData obj
	movieData = [];
	// clear results display
	$('#results').empty();
}

function getResults() {	
	// select results section to append everything to
	var results = $('#results');
	console.log("in get results function: " + movieData);
	for(var i = 0; i < movieData.length; i++) {
		
		// // construct a div with class = 'row result'
		var resultDiv = $('<div>').addClass('row result');

		// // construct image div with col-lg-3 and movie-poster class
		var imageDiv = $('<div>').addClass('col-lg-3 movie-poster');
		// // construct image element
		var image = $('<img>').attr('src',movieData[i].imageLink);
		// // append image elem to div
		imageDiv.append(image);

		// // construct movie description and rating div
		var descDiv = $('<div>').addClass('col-lg-6 movie-description');
		var descriptionHeading = $('<h2>').text('Description');
		var description = $('<p>').text(movieData[i].description);
		// // append heading and description
		descDiv.append(descriptionHeading);
		descDiv.append(description);

		// // reviews
		var reviewHeading = $('<h2>').text('Ratings');
		var reviewUl = $('<ul>').addClass('reviews');
		var reviewLi = $('<li>');
		// // append review heading to description and ratings div
		descDiv.append(reviewHeading);
		// // append ratings that exist

		// // streaming links div
		var streamingDiv = $('<div>').addClass('col-lg-3 streaming-links');
		var streamingHeading = $('<h2>').text('Streaming On');
		var streamingUl = $('<ul>');
		var streamingLi = $('<li>');
		// // append to streamingDiv
		streamingDiv.append(streamingHeading);
		// // append streaming sources that exist

		// // append all constructed columns to row div
		resultDiv.append(imageDiv);
		resultDiv.append(descDiv);
		resultDiv.append(streamingDiv);

		// // append completed result component to results display section
		results.append(resultDiv);
	}
}
