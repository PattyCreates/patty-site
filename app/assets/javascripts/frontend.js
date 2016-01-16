$(window).load(function() {
  
  var VERTICAL_PADDING = 30;
  var headerWrapHeight = $("#header-wrap").outerHeight();
  var panelDefaultHeight = $(".panel-default-1").height() + 38;
  var heightForPanel1 = $(".panel-default-1").offset().top;
  var heightForPanel2 = ($(".panel-default-1").offset().top + panelDefaultHeight);
  var heightForPanel3 = ($(".panel-default-2").offset().top + panelDefaultHeight);
  var heightForPanel4 = ($(".panel-default-3").offset().top + panelDefaultHeight);
  var heightForPanel5 = ($(".panel-default-4").offset().top + panelDefaultHeight);
  var heightForPanel6 = ($(".panel-default-5").offset().top + panelDefaultHeight);
  var heightForPanel7 = ($(".panel-default-6").offset().top + panelDefaultHeight);

  $(".accordion-1").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel1),
    }, 350);
  });

  $(".accordion-2").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel2),
    }, 350);
  });

  $(".accordion-3").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel3),
    }, 350);
  });

  $(".accordion-4").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel4),
    }, 350);
  });

  $(".accordion-5").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel5),
    }, 350);
  });

  $(".accordion-6").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel6),
    }, 350);
  });

  $(".accordion-7").click(function() {
    $('html, body').animate({
      scrollTop: (heightForPanel7),
    }, 350);
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