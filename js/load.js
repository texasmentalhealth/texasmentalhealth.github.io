$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#common").load("menus/common.html");
	$("#docs").load("menus/docs.html");
	$("#social").load("menus/social.html");

	$("#common_2").load("../menus/common.html");
	$("#docs_2").load("../menus/docs.html");
	$("#social_2").load("../menus/social.html");
});
