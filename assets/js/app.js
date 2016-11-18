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
	// display the results section
	$('#results').removeClass('hide');
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
	
	// show number of results
	var numResults = $('<h2>').text('Movies found: ' + idList.length);
	numResults.attr('id', 'num-results');
	results.append(numResults);

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
		var descDiv = $('<div>').addClass('col-sm-6 col-lg-9 movie-description');
		
		// streaming links section elements
		var streamingHeading = $('<h2>').text('Streaming On');
		var streamingUl = $('<ul>');
		var noStreams = $('<div>');

		// loop through streaming sources and create li
		if(movieData[i].streamingSources.length === 0) {
			var notStreaming = $('<p>').text('Not Currently Streaming');
			// var signupBtn = $('<button>').text("Notify Me When It's Streaming");
			// signupBtn.addClass('signup-btn');
			noStreams.append(notStreaming);
			// noStreams.append(signupBtn);
			
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

		// append streaming heading to descDiv
		descDiv.append(streamingHeading);
		
		// if there are no streaming sources, display no streaming message
		if(movieData[i].streamingSources.length === 0) {
			descDiv.append(noStreams);
		} else { 			
			// display list of streaming sources
			descDiv.append(streamingUl);
		}
		
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

		

		// append all constructed columns to row div
		resultDiv.append(imageDiv);
		resultDiv.append(descDiv);
		

		// append completed result component to results display section
		results.append(resultDiv);
	}
}

$(document).ready(function() {
	sortFirebase();
});