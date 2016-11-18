$('#submit-btn').on('click', function(){
	reset();
	getMovieData();
	// display loading animated gif
	$('#loading').removeClass('hide');
	return false
});

$(document).ajaxStop(function() {
	getResults();
	// remove loading animate gif
	$('#loading').addClass('hide');
	// display the results section
	$('#results').removeClass('hide');
	// scroll to results section
	scrollToResults();
});

$(document).on('click', '#results-filter', function() {
	// toggles the hide class
	$('.not-streaming').toggleClass('hide');

	// if data filtered attr is false
	if($('#results-filter').attr('data-filtered') === 'false'){
		// change data filtered attr to true and change btn text to show all results
		$('#results-filter').attr('data-filtered','true').text('Show All Results');	
	} else {
		// change data filtered attr to false and change btn text to offer filtered option
		$('#results-filter').attr('data-filtered', 'false').text('Show Currently Streaming Only');
	}
});

function scrollToResults(){
    $('html, body').animate({
        scrollTop: $("#results").offset().top
    }, 1000);
}

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

	// button to toggle between all and only streaming results
	var filterBtn = $('<button>').text('Show Currently Streaming Only').attr('id', "results-filter").attr('data-filtered','false');
	results.append(filterBtn);

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
		var notStreamingHeading = $('<h2>').text('Not Currently Streaming');
		var streamingUl = $('<ul>');
		var noStreams = $('<div>');

		// loop through streaming sources and create li
		if(movieData[i].streamingSources.length === 0) {
			var notStreaming = $('<p>').text('Not Currently Streaming');
			noStreams.append(notStreaming);
			resultDiv.addClass('not-streaming');
			
			
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

		
		// if there are no streaming sources, display no streaming message
		if(movieData[i].streamingSources.length === 0) {
			// append streaming heading to descDiv
			descDiv.append(streamingHeading);
			descDiv.append(noStreams);
		} else { 			
			var streamingCheck = '<i class="fa fa-check-square-o streaming-check" aria-hidden="true"></i>';
			descDiv.append(streamingCheck);
			descDiv.append(streamingHeading);
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
		var metascoreLi = $('<li>');
		var imdbRatingLi = $('<li>');
		// append review heading to description and ratings div
		descDiv.append(reviewHeading);
		// append metascore to Ul
		metascoreLi.text('Metascore: ' + movieData[i].metascore)
		reviewUl.append(metascoreLi);
		// append imdb rating to Ul
		imdbRatingLi.text('IMDB Rating: ' + movieData[i].imdbScore);
		reviewUl.append(imdbRatingLi);
		// append completed reviewUl below ratings heading
		descDiv.append(reviewUl)



		// append all constructed columns to row div
		resultDiv.append(imageDiv);
		resultDiv.append(descDiv);
		

		// append completed result component to results display section
		results.append(resultDiv);
	}
}

$(document).ready(function() {
	sortFirebase();
	flickityFunc();
});