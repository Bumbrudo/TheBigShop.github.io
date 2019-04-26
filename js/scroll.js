document.body.onclick = function(event){
	event = event || window.event;
		console.log(event);
		//var classElem = event.target.classList;
		//console.log(event.target.classList.contains('goods-min');
		if (event.target.classList.contains('goods-list__link')) {
			//remove .active class in goods-img-min divs
			var allDivs = document.querySelectorAll('.goods-list div');
			for ( var i = 0; i < allDivs.length; i++ ) {
			allDivs[i].classList.remove('active');
			}
			
			document.getElementById('md-scroll-max').src = event.target.src;
			event.target.parentElement.classList.add('active');
		}
	
		

}