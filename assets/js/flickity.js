var flick = $('<div class = "main-carousel" style = "height: 300px">');

for (var x = 0; x <= 10; x++)
{
	var cellDiv = $('<div class = "carousel-cell" style = height: "100%">');
	flick.append(cellDiv);
}
$('#top-results').append(flick);

$('.main-carousel').flickity({
  // options
  // cellAlign: 'left',
  accessibility: true,
  contain: true,
  imagesLoaded: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 2000,

});
