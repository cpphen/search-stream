// var flickityImages = [
//      "http://www.motherjones.com/files/2806004-jaws.jpg",

//      "http://moviefiles.alphacoders.com/134/poster-134.jpg",

//      "http://www.indiewire.com/wp-content/uploads/2012/06/youve-got-to-be-fucking-kidding-me-5-things-you-might-not-know-about-john-carpenter-the-thing.jpg",
 
//      "http://www.motherjones.com/files/2806004-jaws.jpg",
  
//      "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Tremorsposter.jpg/220px-Tremorsposter.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/e/ed/A_Fistful_of_Dollars_poster.jpg",
  
//      "https://i.jeded.com/i/the-good-the-bad-and-the-ugly-il-buono-il-brutto-il-cattivo.9123.jpg",

//      "http://image2.redbull.com/rbcom/010/2014-11-27/1331692290314_2/0010/1/1500/1000/2/grant-taylor-stalefish-montana-jamie-owens.jpg",
  
//      "http://www.thrashermagazine.com/imagesV2/Magazine/Covers/COVERS_THRASHER/1993/TH9304.jpg",
//      "https://images-na.ssl-images-amazon.com/images/M/MV5BYzI4NDIzMDgtNGNkZi00MTI2LWJhYzgtYzM5NThhMTQ0OGIzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
    
// ]
function flickityFunc(){
  
    var flick = $('<div class = "main-carousel" data-flickity style = "border: solid; border-color: black; border-width: 10px; background-color: #333333; padding: 20px; height: 480px">');
    console.log(topTenImages);
    console.log(topTenImages.length);
    
    for (var x = 0; x < topTenImages.length; x++)
    {
    	var cellDiv = $('<div class = "carousel-cell" style = "height: 470px  ; width: 500px">');
      console.log(topTenImages[x]);
      var cellImage = $('<img class = "carousel-image" style = "padding: 10px; height: 100%; width: 100%" src =' + topTenImages[x]+ '>')
    	cellDiv.append(cellImage);
      flick.append(cellDiv);
    }

    $('#top-results').empty().append(flick);

    $('.main-carousel').flickity({
      setGallerySize: false,
      accessibility: true,
      contain: true,
      imagesLoaded: true,
      freeScroll: true,
      wrapAround: true,
      autoPlay: 2000,
    });
}
