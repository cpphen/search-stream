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
  
    for (var i = 0; i < topTenImages.length; i++){
      // start cell ID at 1
      var cellId = '#flickity-' + (i + 1);
      // create image element and pass in the image at the array index
      var image = $('<img>').attr('src', topTenImages[i]);
      // append image to the flickity carousel cell with the matching id
      $(cellId).append(image);
    }

    // $('.main-carousel').flickity({
    //   setGallerySize: false,
    //   accessibility: true,
    //   contain: true,
    //   imagesLoaded: true,
    //   freeScroll: true,
    //   wrapAround: true,
    //   autoPlay: 2000,
    // });
}
