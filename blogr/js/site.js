$('document').ready(function()
{
    // Add click and tap handlers for navigation bar menus
    $('.menu-header').on("click tap", function() {
        if($(this).hasClass("shown")) {
            $(this).removeClass("shown");
        }
        else
        {
            $('.menu-header').removeClass("shown");
            $(this).addClass("shown");
        }
    });

    // Add click and tap handlers for mobile burger menu button 
    $('.menu-button').on("click tap", function() {
        if($(this).hasClass("shown")) {

            $(this).removeClass("shown");
            $('.nav-menus').removeClass("shown");

        } else {

            $(this).addClass("shown");
            $('.nav-menus').addClass("shown");
        }
    });
})