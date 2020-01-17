var curr = "#sp20-content";
var select="#sp20"

function test(input){
    $(select).css('color','white')
    $(curr).hide();
    console.log(curr);
    curr = input;
    $(curr).slideDown();
}
$(document).ready(function() {
    // all custom jQuery will go here
    $("#sp20").css('color','black')
    $.get("https://amanshah2711.github.io/cs61a/discussion/fa19/fa19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/csm/fa19/csm-fa19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/discussion/su19/su19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/discussion/sp20/sp20.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/csm/sp20/csm-sp20.html", '', function (data) { $("#main").append(data); });

    $("#sp20").click(function() {
        test("#sp20-content");
        $("#sp20").css('color','black')
        select="#sp20"
    })
    $("#csm-sp20").click(function() {
        test("#csm-sp20-content");
        $("#csm-sp20").css('color','black')
        select="#csm-sp20"
    })
    $("#fa19").click(function(){
        test("#fa19-content");
        $("#fa19").css('color','black')
        select="#fa19"
    })
    $("#csm-fa19").click(function() {
        test("#csm-fa19-content");
        $("#csm-fa19").css('color','black')
        select="#csm-fa19"
    })
    $("#su19").click(function(){
        test("#su19-content");
        $("#su19").css('color','black')
        select="#su19"
    })
});
