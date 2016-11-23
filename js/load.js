$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#common").load("menus/common.html");
	$("#docs").load("menus/docs.html");
});
