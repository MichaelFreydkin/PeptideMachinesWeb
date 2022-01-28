$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 2500
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});