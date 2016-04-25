(function() {
    //catch any console[*method] that slip through the cracks
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
$(function() {
    // ----------------------------------
    // Background check form interactions
    firstNameVal = '';
    lastNameVal  = '';
    $('#form-check--first_name')
    .focus(function() {
        if ($(this).val() == 'First Name' || $(this).val() == 'e.g. Jonathan') {
            firstNameVal = $(this).val();
            $(this).val('');
        }
        $(this).select();
    })
    .blur(function() {
        if ($(this).val() == '') {
            $(this).val(firstNameVal);
        } else {
            $(this).addClass('data-entered');
        }
    });

    $('#form-check--last_name')
    .focus(function() {
        if ($(this).val() == 'Last Name' || $(this).val() == 'e.g. Smith') {
            lastNameVal = $(this).val();
            $(this).val('');
        }
        $(this).select();
    })
    .blur(function() {
        if ($(this).val() == '') {
            $(this).val(lastNameVal);
        } else {
            $(this).addClass('data-entered');
        }
    });
    // Background check form interactions
    // ----------------------------------

    // ----------------------------------
    // Replace the drop down on IE7 only
    if ($.browser.msie && parseInt($.browser.version, 10) == 7) {
        $('#form-check--state').ICM_select();
    }
    // Replace the drop down on IE7 only
    // ----------------------------------

    // ----------------------------------
    // Enable all modal links

    $('a.sample-report').click(function() {
        var target = $(this).attr('href');
        $(document).ICM_modal({
            'height' : 600,
            'inline' : false,
            'type'   : 'iframe',
            'url'    : target,
            'width'  : 800
        });
        return false;
    });

    // Enable all modal links
    // ----------------------------------

    // ----------------------------------
    // Raptorization
    $('#form-check').submit(function() {
        if ($('#form-check--first_name').val().toLowerCase() == 'veloci' && $('#form-check--last_name').val().toLowerCase() == 'raptor') {
            $('#form-check').raptorize();
            return false;
        }
    });
    // Raptorization
    // ----------------------------------

    $('#form-check--first_name').addClass('validate').data('validation', [
        { rule: 'required', message: '' }
    ]);

    $('#form-check--last_name').addClass('validate').data('validation', [
        { rule: 'required', message: '' }
    ]);

    $('#form-check').ICM_validate({
        validationEvent : 'blur,submit'
    });

});

// ----------------------------------
// Login Box

function toggleLogin() {
    // Open the login box
    if ($('.login #form-login').is(':visible')) {

        // Close the login form
        $('.login #form-login').slideUp(500, function() {
            $('.login').width(80);
        });

        // Remove the dimmer
        $('#dimmer').fadeOut(250, function() {
            $(this).remove();
        });

        // Unbind the escape key event
        $(document).unbind('keyup');

    } else {

        // Create the dimmer
        $dimmer = $('<div id="dimmer"></div>');
        // Prepend it to the wrapper
        $dimmer.appendTo($('#primary-nav'))
        // Fade it in
        .fadeIn(250)
        // Attach a click handler to it
        .click(toggleLogin);

        // Bind a close event to the esc key
        $(document).bind('keyup', function(e) {
            if (e.keyCode == 27) toggleLogin();
        });

        // Open the login form
        $('.login').width(300);
        $('.login #form-login').slideDown(500);

    }

    return false;
}

// Login Box
// ----------------------------------