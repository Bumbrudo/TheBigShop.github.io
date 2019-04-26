$(document).ready(function() {

	$('.gallery-img__item').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
		
	});

});

$('#open-popup').magnificPopup({
    items: [
      {
        src: 'img/scarf_1.jpg'
        /*title: 'Peter & Paul fortress in SPB'*/
      },
      {
        src: 'img/scarf_2.jpg'
        // this overrides default type
      },
      {
        src: 'img/scarf_3.jpg' // Dynamically created element
       
      },
      {
        src: 'img/scarf_3.jpg' // HTML string
      
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});


$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});