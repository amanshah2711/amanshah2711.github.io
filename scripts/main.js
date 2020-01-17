var curr = "#sp20-content";

function test(input){
    $(curr).hide();
    console.log(curr);
    curr = input;
    $(curr).slideDown();
}
$(document).ready(function() {
    // all custom jQuery will go here

    $.get("https://amanshah2711.github.io/cs61a/discussion/fa19/fa19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/csm/fa19/csm-fa19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/discussion/sp19/su19.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/discussion/sp20/sp20.html", '', function (data) { $("#main").append(data); });
    $.get("https://amanshah2711.github.io/cs61a/csm/sp20/csm-sp20.html", '', function (data) { $("#main").append(data); });

    $("#sp20").click(function() {
        test("#sp20-content");
    })
    $("#csm-sp20").click(function() {
        test("#csm-sp20-content");
    })
    $("#fa19").click(function(){
        test("#fa19-content");
    })
    $("#csm-fa19").click(function() {
        test("#csm-fa19-content");
    })
    $("#su19").click(function(){
        test("#su19-content");
    })
});
