var curr = "#sp20-content";

function test(input){
    $(curr).hide();
    console.log(curr)
    curr = input;
    $(curr).slideDown();
}
$(document).ready(function() {
    // all custom jQuery will go here
    $.each([
        'fa19.html',
        'csm-fa19.html',
        'su19.html',
        'csm-sp20.html',
        'sp20.html'
    ], function(i,a){
        $("#main").load(a);
    });
    $("#fa19-content").hide();
    $("#csm-fa19-content").hide();
    $("#csm-sp20-content").hide();
    $("#su19-content").hide();
    $("#sp20").click(function() {
        test("#sp20-content");
    })
    $("#csm-sp20").click(function() {
        test("#csm-sp20-content")
    })
    $("#fa19").click(function(){
        test("#fa19-content");
    })
    $("#csm-fa19").click(function() {
        test("#csm-fa19-content")
    })
    $("#su19").click(function(){
        test("#su19-content");
    })
});
