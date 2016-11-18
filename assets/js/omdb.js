function getAjaxReview(){ 
   	//loop through movieData array.
    for(var x = 0; x < movieData.length; x++)
    {
    	//plug in string at movieData[index] into queryURL
		var OMDBUrl = "http://www.omdbapi.com/?i=" + movieData[x].imdbId + "&plot=short&r=json";
		//Ajax function had to be inside a separate function. Call get review, pass the queryURL as a parameter, pass the index 
		//counter 'x'
		getReview(OMDBUrl, x);
	}

}
function getReview(OMDBUrl, x){
	//Run ajax function
	$.ajax({url: OMDBUrl, method: 'GET'}).done(function(response) 
	{	
		//Store meta and imdb scores based on the id from moviesData[x], into a variable
		var metascore = response.Metascore;
		var imdbScore = response.imdbRating;
		//Insert the movie scores into the existing objects inside the moviesData[] array.
		movieData[x].metascore = metascore;
		movieData[x].imdbScore = imdbScore;
	});
}