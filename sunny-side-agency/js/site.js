$('document').ready(function() {

    $("#mobile-burger").on('click tap', function() {
        var navItems = $('#nav-items')
        if (navItems.hasClass("shown")) {
            navItems.removeClass("shown");
        } else {
            navItems.addClass("shown");
        }
    });
});