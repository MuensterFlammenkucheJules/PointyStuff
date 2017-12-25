/* created by Holysavior of ZNR*/

var sym = "#"; // Prefix symbol

var iname = "Pointies"; // Field name

var app = 3; // Amount per post



myusers = new Array(); // myusers[y]=["USER ID", AMOUNT];

myusers[0] = ["5160290", 5000]; // Jules

$(".user_info").each(function() {
  var re = /,/g;
  var icash = $(this).find("dt:contains('Posts:')").next().text();
  icash = icash.replace(re, "");
  $(this).append("<dt class='mid'>" + iname + ": </dt><dd class='thecount'>"+sym+"<span class='mcount'>" + parseInt(icash) * app + "</span></dd>")

  theid = $(this).parent("td.c_user").parent().prev().children(".c_username ").children().attr("href");
  userid = theid.split("/");

  for (y = 0; y < myusers.length; y++) {
    if (userid[4] == myusers[y][0]) {
      var ichange = myusers[y][1];
      var ame = $(this).find("dd.thecount").children().html();
      var newcount = parseInt(ame) + ichange;
      $(this).find("dd.thecount").children().html(newcount);
    }

  }
});