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
	// display loading animated gif
	$('#loading').removeClass('hide');
});

$(document).ajaxStop(function() {
	getResults();
	// remove loading animate gif
	$('#loading').addClass('hide');
	// animate height of search section to auto
	$('.container-fluid').css('height','auto');
	// display the results section
	$('.container').removeClass('hide');
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

	for(var i = 0; i < movieData.length; i++) {
		
		// construct a div with class = 'row result'
		var resultDiv = $('<div>').addClass('row result');

		// construct image div with col-lg-3 and movie-poster class
		var imageDiv = $('<div>').addClass('col-sm-6 col-lg-3 movie-poster');
		// construct image element
		var image = $('<img>').attr('src',movieData[i].imageLink);
		// append image elem to div
		imageDiv.append(image);

		// construct movie description and rating div
		var descDiv = $('<div>').addClass('col-sm-6 col-lg-6 movie-description');
		var descriptionHeading = $('<h2>').text('Description');
		var description = $('<p>').text(movieData[i].description);
		// append heading and description
		descDiv.append(descriptionHeading);
		descDiv.append(description);

		// reviews
		var reviewHeading = $('<h2>').text('Ratings');
		var reviewUl = $('<ul>').addClass('reviews');
		var reviewLi = $('<li>');
		// append review heading to description and ratings div
		descDiv.append(reviewHeading);
		// append ratings that exist

		// streaming links div
		var streamingDiv = $('<div>').addClass('col-sm-12 col-lg-3 streaming-links');
		var streamingHeading = $('<h2>').text('Streaming On');
		var streamingUl = $('<ul>');
		var noStreams = $('<div>');

		// loop through streaming sources and create li
		if(movieData[i].streamingSources.length === 0) {
			var notStreaming = $('<p>').text('Not Currently Streaming');
			var signupBtn = $('<button>').text("Notify Me When It's Streaming");
			signupBtn.addClass('signup-btn');
			noStreams.append(notStreaming);
			noStreams.append(signupBtn);
			
		} else {
			for (var x  = 0; x < movieData[i].streamingSources.length; x++){
				var streamingLi = $('<li>');
				// get streaming source display name
				var source = movieData[i].streamingSources[x].display_name;
				// append text to li
				streamingLi.text(source);
				// append li to ul
				streamingUl.append(streamingLi);
			}
		}

		// append to streamingDiv
		streamingDiv.append(streamingHeading);
		
		// append streaming sources that exist, or show not streaming message
		if(movieData[i].streamingSources.length === 0) {
			streamingDiv.append(noStreams);
		} else {			
			streamingDiv.append(streamingUl);
		}

		// append all constructed columns to row div
		resultDiv.append(imageDiv);
		resultDiv.append(descDiv);
		resultDiv.append(streamingDiv);

		// append completed result component to results display section
		results.append(resultDiv);
	}
}

// get length of streaming sources: movieData[0].streamingSources.length
// get streaming sources display name: movieData[0].streamingSources[0].display_name