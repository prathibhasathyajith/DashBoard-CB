$(document).ready(function () {
    $(".cbd-Notifi-status").css("min-height",window.innerHeight-55+"px");
    var h = $(".cbd-Notifi-status").outerHeight(true);
    $(".cbd-main-content").css("height",h + "px");
    $(window).resize(function(){
        $(".cbd-Notifi-status").css("min-height",window.innerHeight-55+"px");
        $(".cbd-main-content").css("height",$(".cbd-Notifi-status").outerHeight(true)+ "px");
    });
});
