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

  //Appcelerator
  $('#collapseTwo.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $.waypoints('refresh');    
    $('img.appceleratorA').waypoint(function() {
      $('img.appceleratorA').addClass('animated fadeInDown');
    }, { offset: '75%' });
    $('img.appceleratorB').waypoint(function() {
      $('img.appceleratorB').addClass('animated fadeInUp');
    }, { offset: '75%' });
    $('img.appceleratorC').waypoint(function() {
      $('img.appceleratorC').addClass('animated fadeInUp');
    }, { offset: '75%' });
    $('img.appceleratorD').waypoint(function() {
      $('img.appceleratorD').addClass('animated fadeInRight');
    }, { offset: '75%' });
  });

  //Singly
  $('#collapseThree.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $.waypoints('refresh'); 
    $('img.singlyA').waypoint(function() {
      $('img.singlyA').addClass('animated fadeInLeft');
    }, { offset: '75%' });
    $('img.singlyB').waypoint(function() {
      $('img.singlyB').addClass('animated fadeInDown');
    }, { offset: '75%' });
    $('img.singlyC').waypoint(function() {
      $('img.singlyC').addClass('animated fadeInRight');
    }, { offset: '75%' });
  });
  
  //Taiwan
  $('#collapseFour.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $.waypoints('refresh');
    $('img.taiwanA').waypoint(function() {
      $('img.taiwanA').addClass('animated fadeInLeft');
    }, { offset: '75%' });
    $('img.taiwanB').waypoint(function() {
      $('img.taiwanB').addClass('animated fadeInLeft');
    }, { offset: '75%' });
    $('img.taiwanC').waypoint(function() {
      $('img.taiwanC').addClass('animated fadeInRight');
    }, { offset: '75%' });
    $('img.taiwanD').waypoint(function() {
      $('img.taiwanD').addClass('animated fadeInUp');
    }, { offset: '75%' });

  });

  //SF Pet Project
  $('#collapseFive.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $.waypoints('refresh');
    $('img.sfPetProjectA').waypoint(function() {
      $('img.sfPetProjectA').addClass('animated fadeInLeft');
    }, { offset: '75%' });
    $('img.sfPetProjectB').waypoint(function() {
      $('img.sfPetProjectB').addClass('animated fadeInDown');
    }, { offset: '75%' });
  });

  //Maker
  $('#collapseSeven.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $.waypoints('refresh');  
    $('img.makerA').waypoint(function() {
      $('img.makerA').addClass('animated fadeInDown');
    }, { offset: '75%' });
    $('img.makerB').waypoint(function() {
      $('img.makerB').addClass('animated fadeInUp');
    }, { offset: '75%' });
    $('img.makerC').waypoint(function() {
      $('img.makerC').addClass('animated fadeInRight');
    }, { offset: '75%' });
    $('img.makerD').waypoint(function() {
      $('img.makerD').addClass('animated fadeInDown');
    }, { offset: '75%' });
  });
});