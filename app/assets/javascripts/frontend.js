$(document).ready(function(){
	//Accordian

  $('#accordion .panel-heading').on('click', function(){
  	$('html,body').animate({scrollTop: $(this).offset().top}, 800);
  }); 

  //Waypoints and animate.css 
 	//Taiwan
  // $('.ani-taiwan-1').waypoint(function() {
  //     $('.ani-taiwan-1').addClass('animated fadeInDown');
  // }, { offset: '0' });
	if ($("#collapseFour").hasClass("in")) {
		$('#taiwanA').waypoint(function() {
	    $('#taiwanA').addClass('animated fadeInLeftBig');
	  }, { offset: '0' });
  } else $('#taiwanA').waypoint(function() {
	    $('#taiwanA').removeClass('animated fadeInLeftBig');
	  }, { offset: '0' });


  $('#wine').waypoint(function() {
      $('#wine').addClass('animated fadeInLeftBig');
  }, { offset: '0' });
  // $('.ani-taiwan-3').waypoint(function() {
  //     $('.ani-taiwan-3').addClass('animated fadeInUp');
  // }, { offset: '0' });
  // $('.ani-taiwan-4').waypoint(function() {
  //     $('.ani-taiwan-4').addClass('animated fadeInRight');
  // }, { offset: '0' });
});  