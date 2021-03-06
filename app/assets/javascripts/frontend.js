(function($, document, window, viewport){
  $(window).load(function() {
    
    ///Mixpanel
    mixpanel.init("new token", { your: "config" }, "library_name");
    // mixpanel.track_links(".accordion-1", "Clicked Kissmetrics");
    // mixpanel.track_links(".accordion-2", "Clicked Appcelerator");
    // mixpanel.track_links(".accordion-3", "Clicked Singly");
    // mixpanel.track_links(".accordion-4", "Clicked Taiwan");
    // mixpanel.track_links(".accordion-5", "Clicked SF Pet Project");
    // mixpanel.track_links(".accordion-6", "Clicked Art");
    // mixpanel.track_links(".accordion-7", "Clicked Maker");

    //Navigation Scrolls
    $(".work-nav").click(function() {
      $('html, body').animate({
        scrollTop: $("#work").offset().top
      }, 500);
    });

    $(".about-nav").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 800);
    });

    $(".connect-nav").click(function() {
      $('html, body').animate({
        scrollTop: $("#connect").offset().top
      }, 1200);
    });

    //Defining padding on breakpoints
    function scrollTopOfAccordion () {

      if( viewport.is(">=md") ) {
          var verticalPadding = 45;
      }
      if( viewport.is("sm") ) {
          var verticalPadding = 31;
      }
      if( viewport.is("xs") ) {
          var verticalPadding = 27;
      }

      //Accordion section 

      //Accordion Variables
      var panelDefaultHeight = $(".panel-default-1").height() + verticalPadding;
      var heightForPanel1 = ($(".panel-default-1").offset().top - 15);
      var heightForPanel2 = (heightForPanel1 + panelDefaultHeight);
      var heightForPanel3 = (heightForPanel2 + panelDefaultHeight);
      var heightForPanel4 = (heightForPanel3 + panelDefaultHeight);
      var heightForPanel5 = (heightForPanel4 + panelDefaultHeight);
      var heightForPanel6 = (heightForPanel5 + panelDefaultHeight);
      var heightForPanel7 = (heightForPanel6 + panelDefaultHeight);

      //Updated variables on browser resize
      $(window).resize(function() {
        panelDefaultHeight = $(".panel-heading").height() + verticalPadding;
        heightForPanel1 = $(".panel-default-1").offset().top - 15;
        heightForPanel2 = (heightForPanel1 + panelDefaultHeight);
        heightForPanel3 = (heightForPanel2 + panelDefaultHeight);
        heightForPanel4 = (heightForPanel3 + panelDefaultHeight);
        heightForPanel5 = (heightForPanel4 + panelDefaultHeight);
        heightForPanel6 = (heightForPanel5 + panelDefaultHeight);
        heightForPanel7 = (heightForPanel6 + panelDefaultHeight);
      });

      //Accordion Functions
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
    };

    scrollTopOfAccordion();


    //Waypoints and animate.css

    //getTalent
    $('#collapseOne.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
      e.stopPropagation();
      $.waypoints('refresh');    
      $('img.getTalentA').waypoint(function() {
        $('img.getTalentA').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.getTalentB').waypoint(function() {
        $('img.getTalentB').addClass('animated fadeInUp');
      }, { offset: '75%' });
      $('img.getTalentC').waypoint(function() {
        $('img.getTalentC').addClass('animated fadeInRight');
      }, { offset: '75%' });
      $('img.getTalentD').waypoint(function() {
        $('img.getTalentD').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.getTalentE').waypoint(function() {
        $('img.getTalentE').addClass('animated fadeInRight');
      }, { offset: '75%' });
      $('img.getTalentF').waypoint(function() {
        $('img.getTalentF').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.getTalentG').waypoint(function() {
        $('img.getTalentG').addClass('animated fadeInDown');
      }, { offset: '75%' });
      $('img.getTalentH').waypoint(function() {
        $('img.getTalentH').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.getTalentI').waypoint(function() {
        $('img.getTalentI').addClass('animated fadeInRight');
      }, { offset: '75%' });
      $('img.getTalentJ').waypoint(function() {
        $('img.getTalentJ').addClass('animated fadeInUp');
      }, { offset: '75%' });
      $('img.getTalentK').waypoint(function() {
        $('img.getTalentK').addClass('animated fadeInDown');
      }, { offset: '75%' });
      $('img.getTalentL').waypoint(function() {
        $('img.getTalentL').addClass('animated fadeInRight');
      }, { offset: '75%' });
      $('img.getTalentM').waypoint(function() {
        $('img.getTalentM').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.getTalentN').waypoint(function() {
        $('img.getTalentN').addClass('animated fadeInUp');
      }, { offset: '75%' });
      $('img.getTalentO').waypoint(function() {
        $('img.getTalentO').addClass('animated fadeInUp');
      }, { offset: '75%' });
      $('img.getTalentP').waypoint(function() {
        $('img.getTalentP').addClass('animated fadeInDown');
      }, { offset: '75%' });
      $('img.getTalentQ').waypoint(function() {
        $('img.getTalentQ').addClass('animated fadeInRight');
      }, { offset: '75%' });
    });

    //Appcelerator
    $('#collapseThree.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
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
    $('#collapseFour.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
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
    $('#collapseFive.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
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

    // Art
    $('#collapseSix.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
      e.stopPropagation();
      $.waypoints('refresh');
      $('img.sfPetProjectA').waypoint(function() {
        $('img.sfPetProjectA').addClass('animated fadeInLeft');
      }, { offset: '75%' });
      $('img.sfPetProjectB').waypoint(function() {
        $('img.sfPetProjectB').addClass('animated fadeInDown');
      }, { offset: '75%' });
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
})(jQuery, document, window, ResponsiveBootstrapToolkit);