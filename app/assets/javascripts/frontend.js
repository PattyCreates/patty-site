$(document).ready(function(){
  $('#accordion .panel-heading').on('click', function(){
  	$('html,body').animate({scrollTop: $(this).offset().top}, 800);
  }); 
});  