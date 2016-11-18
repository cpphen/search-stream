  $('.carousel').flickity({
      setGallerySize: false,
      accessibility: true,
      contain: true,
      imagesLoaded: true,
      freeScroll: true,
      wrapAround: true,
      autoPlay: 2000,
    });
function flickityFunc(){
  
     // $('#top-results').empty();
    // var flick = $('<div class = "main-carousel" data-flickity style = "border: solid; border-color: black; border-width: 10px; background-color: #333333; padding: 20px; height: 480px ">');
    console.log(topTenImages);
    console.log(topTenImages.length);
    
    for (var x = 0; x < topTenTitles.length; x++)
    {
    	var cellDiv = $('<div class = "carousel-cell" style = "height: 470px  ; width: 500px">');
      $('.carousel').append(cellDiv);
     //  console.log(topTenImages[x]);
      var cellImage = $('<img class = "carousel-image" style = "padding: 10px; height: 100%; width: 100%" src =' + topTenImages[x]+ '>');
    	cellDiv.append(cellImage);
      // $('.carousel').append(cellDiv);
    }

    // $('#top-results').empty();
    // $('#top-results').append(flick);

}
