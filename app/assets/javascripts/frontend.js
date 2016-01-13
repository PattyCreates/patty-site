$(document).ready(function(){

//   $(document).on("collapsibleexpand", "[data-role=collapsible]", function () {
//     var position = $(this).offset().top;
//     $.mobile.silentScroll(position);
// });



  var VERTICAL_PADDING = 30;
  var headerWrapHeight = $("#header-wrap").outerHeight();
  var panelDefaultHeight = $(".panel-default-1").height() + 38;
  // var panelDefaultHeightOffset = $(".panel-default-1").offset().top;
  // var heightForPanel2 = panelDefaultHeight + $(".panel-default-1").offset().top;

  var heightForPanel1 = $(".panel-default-1").offset().top;

  var heightForPanel2 = ($(".panel-default-1").offset().top + panelDefaultHeight);

  var heightForPanel3 = ($(".panel-default-2").offset().top + panelDefaultHeight);

  var heightForPanel4 = ($(".panel-default-3").offset().top + panelDefaultHeight);

  var heightForPanel5 = ($(".panel-default-4").offset().top + panelDefaultHeight);

  var heightForPanel6 = ($(".panel-default-5").offset().top + panelDefaultHeight);

  var heightForPanel7 = ($(".panel-default-6").offset().top + panelDefaultHeight);
  // var heightForPanel3 = $(".panel-default-2").offset().top + panelDefaultHeight;

  // var heightForPanel2 = (headerWrapHeight + panelDefaultHeight)
  // var heightForPanel3 = (headerWrapHeight + (panelDefaultHeight * 2 ) )
  // var heightForPanel3 = (headerWrapHeight + (panelDefaultHeight * 2 ) )
  // console.log(headerWrapHeight)
  // console.log(panelDefaultHeightOffset)
  // console.log(headerWrapHeight)
  // console.log(panelDefaultHeight)
  console.log(heightForPanel2)
  console.log(heightForPanel3)
  console.log(heightForPanel4)
  console.log(heightForPanel5)
  console.log(heightForPanel5)
  // console.log(heightForPanel3)
  // var topOffset1 = (headerWrap + panelDefault1)
  // console.log (headerWrap);
  // console.log (panelDefault1);
  // console.log (topOffset1);
  // $('html, body').animate({
  //   scrollTop: topOffset1
  // }, 1000);
  // $(".accordion-1").click(function() {
  //   $('html, body').animate({
  //     scrollTop: $("#work").offset().top
  //   }, 350);
  // });

  // $(".accordion-1").click(function() {
  //   $('html, body').animate({
  //     scrollTop: ('#work').offset().top
  //   }, 350);
  // });

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
  
  // $('#accordion .panel-heading').on('click', function(){
  //    $('html,body').animate({scrollTop: $("#heading-two").offset().top}, 800);
  //  }); 

  //Accordian

  // $(function() {
  //         $("#accordion").accordion({
  //             autoHeight: false,
  //             collapsible: true,
  //             heightStyle: "content",
  //             active: 0,
  //             animate: 300 // collapse will take 300ms
  //         });
  //         $('#accordion h3').bind('click',function(){
  //             var self = this;
  //             setTimeout(function() {
  //                 theOffset = $(self).offset();
  //                 $('body,html').animate({ scrollTop: theOffset.top - 100 });
  //             }, 310); // ensure the collapse animation is done
  //         });
  // });

  // $(".panel-collapse").on("shown.bs.collapse", function () {
  //   var selected = $(this);
  //   var collapseh = $(".collapse.in").height();
  //   $.scrollTo(selected, 500, {
  //       offset: -(collapseh)
  //   });
  // });

  // $('.panel').on('show.bs.collapse', function () {
  //   var $targetPanel = $(this);
  //   var $lastPanel = $('.collapse.in').closest('.panel');
  //   var closingPanelBody = $('.panel-collapse').on('hidden.bs.collapse');
  //   // console.log($(closingPanelBody)[0]); 
  //   var panelList = $('.panel').toArray();
  //   var topOffset = $(this).offset().top;

  //   if (panelList.indexOf($lastPanel[0]) > -1 && panelList.indexOf($lastPanel[0]) < panelList.indexOf($targetPanel[0])) {
  //     var height = $lastPanel.outerHeight();
  //     var closedHeight = $targetPanel.outerHeight();
  //     // $('html,body').animate({scrollTop: closingPanelBody.offset().top}, 100);

  //     // $('html,body').scrollTop: closingPanelBody.offset().top;
  //     $('html,body').animate({scrollTop: $("#work").offset().top}, 350);
  //     // $('html,body').animate({scrollTop: ("#work")}, 100);
  //     $('html,body').delay(350).animate({scrollTop: topOffset - (height - closedHeight) - VERTICAL_PADDING}, 500);
  //   } else {
  //     $('html,body').animate({scrollTop: topOffset - VERTICAL_PADDING}, 500);

  //   }
  // });




  // $('.panel').on('show.bs.collapse', function () {
  //   var $targetPanel = $(this);
  //   var $lastPanel = $('.collapse.in').closest('.panel');
  //   var panelList = $('.panel').toArray();
  //   var topOffset = $(this).offset().top;

  //   if (panelList.indexOf($lastPanel[0]) > -1 && panelList.indexOf($lastPanel[0]) < panelList.indexOf($targetPanel[0])) {
  //     var height = $lastPanel.outerHeight();
  //     var closedHeight = $targetPanel.outerHeight();
  //     // $lastPanel.on('hidden.bs.collapse', function () {
  //     //   // $('html,body').delay(0).animate({scrollTop: topOffset - (height - closedHeight) - VERTICAL_PADDING}, 250);
  //     //   $('html,body').then(350)scrollTop(topOffset - (height - closedHeight) - VERTICAL_PADDING);
  //     // })
  //     // $lastPanel.on('hidden.bs.collapse', function ()).then()scrollTop(topOffset - (height - closedHeight) - VERTICAL_PADDING); 

  //     // $('html,body').scrollTop(topOffset - (height - closedHeight) - VERTICAL_PADDING);
  //     // $('html,body').delay(200).scrollTop(topOffset - (height - closedHeight) - VERTICAL_PADDING);
  //     // $('html,body').delay(100).animate({scrollTop: topOffset - (height - closedHeight) - VERTICAL_PADDING}, 500);
  //     // window.setTimeout( show_popup, 5000 );
  //   } else {
  //     $('html,body').animate({scrollTop: topOffset - VERTICAL_PADDING}, 500);
  //   }
  // });

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