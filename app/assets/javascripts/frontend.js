$(document).ready(function(){
  var VERTICAL_PADDING = 30;
  
  //Accordian
  $('.panel').on('show.bs.collapse', function () {
    var $targetPanel = $(this);
    var $lastPanel = $('.collapse.in').closest('.panel');
    var panelList = $('.panel').toArray();
    var topOffset = $(this).offset().top;

    if (panelList.indexOf($lastPanel[0]) > -1 && panelList.indexOf($lastPanel[0]) < panelList.indexOf($targetPanel[0])) {
      var height = $lastPanel.outerHeight();
      var closedHeight = $targetPanel.outerHeight();
      $('html,body').scrollTop(topOffset - (height - closedHeight) - VERTICAL_PADDING);
      // $('html,body').animate({scrollTop: topOffset - (height - closedHeight) - VERTICAL_PADDING}, 500);
    } else {
      $('html,body').animate({scrollTop: topOffset - VERTICAL_PADDING}, 500);
    }
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