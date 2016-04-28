jQuery(function($) {
  $(document).ready(function() {
    /* loader icon */
    $('.dm-loader-bg').fadeOut(0);
    $('.dm-internal-link').click(function(e) {
      if (e.metaKey || e.ctrlKey) return;
      $('.dm-loader-bg').fadeIn(0);
    });
  });

  $(window).load(function() {
    /* lab equal heights */
    $('.course-active .course-wrapper').matchHeight();
    $('ul#course-categories li').matchHeight();
    $('.deals-row .course-outerwrap').matchHeight();
  });

  /* tabs */
  var tabsFn = (function() {
    function init() {
      setHeight();
    }

    function setHeight() {
      var $tabPane = $('.tab-pane'),
      tabsHeight = $('.nav-tabs').innerHeight();
      $tabPane.css('min-height', tabsHeight);
    }

    $(init);
  })();

  $('.nav-tabs a').click(function() {
    var label = $(this).html();
    $('h3.tab-name').html(label);
  });

	/* homepage circles */
	var isBound = false;
    var $window = $(window);
    var isShown = false;

    function updateCircles() {
        var windowsize = $window.width();
        if (windowsize < 640) {
        	bindCircles();
        } else {
        	$('#sections-wrapper .circles .circle').css('background', '#323232').css('border', '5px solid white');
        }
    }

    function bindCircles() {
    	if (!isBound) {
	    	isBound = true;
		    $('#sections-wrapper .circles .circle').click(function() {
		    	if (!isShown) {
		    		$( "#selected-wrapper" ).animate({
					    fontSize: "16px",
					    padding: "15px 0px 45px 0px;",
					    height: "auto"
					  }, 1000, function() {
					  	$('#selected-wrapper').css('height','auto');
					  });
		    	}
		    	$('#sections-wrapper .circles .circle').each(function() {
		    		$(this).css('background', '#323232').css('border', '5px solid white').css('box-shadow', '0px');
		    	});
		    	$(this).css('background', 'red').css('border', '5px solid #323232');
		    	$('#selected-wrapper p').html($(this).attr('title'));
		    	$('#selected-wrapper a').attr('href', $(this).attr('url'));
		    });
	    }
    }

    updateCircles();
    $(window).resize(updateCircles);

    var windowsize = $window.width();
    if (windowsize < 640) {
    	bindCircles();
    }

    $('#sections-wrapper .circles .circle').click(function() {
    	window.location = $(this).attr('url');
    });

   /* search placeholder text */
   $('#firsttime-wrapper .searchform #s').attr('placeholder', 'What are you looking for?');

   /* login placeholder text */
   $('#user_login').attr('placeholder', 'Email Address');
   $('#user_pass').attr('placeholder', 'Password');

   /* comment placeholder text */
  $('#comments textarea').attr('placeholder', 'Comments...');
  $('#respond input#author').attr('placeholder', 'Name*');
  $('#respond input#email').attr('placeholder', 'Email*');
  $('#respond input#url').attr('placeholder', 'Website');

   /* toggle header */
   $('#collapse-header').click(function() {
   		$(this).toggleClass('collapsed');
   		$('#blog-header-title').slideToggle();
   		$('#forum-header-title').slideToggle();
   });

   /* toggle header labs */
   $('div.labs-page #collapse-header').click(function() {
   		$(this).toggleClass('collapsed');
   		$('#labs-welcome').slideToggle();
   });

   /* toggle mobile menu */
   $('a.mobilemenu').click(function() {
  		$('#mobilemenu').slideToggle();
   });


	/* sticky ad */
	if ($('.bottom_ad').length) {
		var floatingAd = false;
		var adposition = $('.bottom_ad_content').offset().top,
			adWidget = $('.bottom_ad .bottom_ad_content'),
			footer = $('#forum-stats-wrapper').offset().top;
		adposition = $('#sidebar_feed').offset().top + $('#sidebar_feed').height();
		$(window).scroll(function(){
			console.log("ad: " + adposition);
			console.log("top: " + $(document).scrollTop());
			console.log("footer: " + footer);
			if ($(document).scrollTop() > adposition-268) {
				if ($(document).scrollTop() > footer-600) {
					$(adWidget).css('position', 'fixed').css('bottom', '300px');
					$(adWidget).css('position', 'fixed').css('top', 'auto');
				} else {
					$(adWidget).css('position', 'fixed').css('bottom', 'auto');
					$(adWidget).css('position', 'fixed').css('top', '67px');
				}
				floatingAd = true;
			} else {
				if (floatingAd == true) {
					$(adWidget).css('position', 'relative').css('top', '0px');
				}
			}
	   });
    }

	$.fn.absolutePosition = function() {
	    var $el;
	    return this.each(function() {
	    	$el = $(this);
	    	var newDiv = $("<div />", {
	    		"class": "innerWrapper",
	    		"css"  : {
	    			"height"  : $el.height(),
	    			"width"   : "100%",
	    			"position": "relative"
	    		}
	    	});
	    	$el.wrapInner(newDiv);
	    });
	};

});
