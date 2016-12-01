$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#common").load("/menus/common.html");
	$("#docs").load("/menus/docs.html");
	$("#social").load("/menus/social.html");
	$("#need_to_know").load("/menus/need_to_know.html");
	$("#resources").load("/menus/resources.html");
});
