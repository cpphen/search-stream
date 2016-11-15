var flick = $('<div class = "main-carousel">');

for (var x = 0; x <= 10; x++)
{
	var cellDiv = $('<div class = "carousel-cell">');
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