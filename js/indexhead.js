$.getJSON("json/commonhead.json",function(data){

        menuData = data.menu;
        var menuHtml = $.templates("#menuTmpl").render(menuData);
        $(".commonhead").append(menuHtml);

        headData = data.head;
        var headHtml = $.templates("#headTmpl").render(headData);
        $(".commonhead").append(headHtml);

        showMenu();
        hideMenu();
       /* addMenuLink();*/

});

function showMenu(){
    $('#showMenu').click(function() {
        $(".menu").show();
        $('.massagesHide').show();
        $("body").css("overflow-y","hidden");
    });
}

function hideMenu(){
    $('#hideMenu').click(function() {
        $(".menu").hide();
        $('.massagesHide').hide();
        $("body").css("overflow-y","scroll");
    });
}

/*function addMenuLink(){
    $(".menu-bar a:eq(0)").attr("href","../index.html");
    $(".menu-bar a:eq(1)").attr("href","booking.html");
    $(".menu-bar a:eq(2)").attr("href","therapists.html");
    $(".menu-bar a:eq(3)").attr("href","styles.html");
    $(".menu-bar a:eq(4)").attr("href","price.html");
    $(".menu-bar a:eq(5)").attr("href","faq.html");
    $(".menu-bar a:eq(6)").attr("href","contact.html");
    $(".menu-bar a:eq(7)").attr("href","signin.html");
}*/