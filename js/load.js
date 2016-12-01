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

	//the about pages for the common illnesses
	$("#add-about").load("/illnesses/about/add.html");
	$("#adhd-about").load("/illnesses/about/adhd.html");
	$("#anorexia-nervosa-about").load("/illnesses/about/anorexia_nervosa.html");
	$("#anxiety-disorders-about").load("/illnesses/about/anxiety_disorders.html");
	$("#autsim-about").load("/illnesses/about/autsim.html");
	$("#avoidand-personality-about").load("/illnesses/about/avoidand_personality.html");
	$("#bipolar-about").load("/illnesses/about/bipolar.html");
	$("#borderline-personality-about").load("/illnesses/about/borderline_personality.html");
	$("#bulimia-about").load("/illnesses/about/bulimia.html");
	$("#dementia-about").load("/illnesses/about/dementia.html");
	$("#depressive-identity-about").load("/illnesses/about/depressive_identity.html");
	$("#dissociative-identity-about").load("/illnesses/about/dissociative_identity.html");
	$("#misophonia-about").load("/illnesses/about/misophonia.html");
	$("#ocd-about").load("/illnesses/about/ocd.html");
	$("#ptsd-about").load("/illnesses/about/ptsd.html");
	$("#schizophrenia-about").load("/illnesses/about/schizophrenia.html");

	//the symptoms pages for the common illnesses
	$("#add-symptoms").load("/illnesses/symptoms/add.html");
	$("#adhd-symptoms").load("/illnesses/symptoms/adhd.html");
	$("#anorexia-nervosa-symptoms").load("/illnesses/symptoms/anorexia_nervosa.html");
	$("#anxiety-disorders-symptoms").load("/illnesses/symptoms/anxiety_disorders.html");
	$("#autsim-symptoms").load("/illnesses/symptoms/autsim.html");
	$("#avoidand-personality-symptoms").load("/illnesses/symptoms/avoidand_personality.html");
	$("#bipolar-symptoms").load("/illnesses/symptoms/bipolar.html");
	$("#borderline-personality-symptoms").load("/illnesses/symptoms/borderline_personality.html");
	$("#bulimia-symptoms").load("/illnesses/symptoms/bulimia.html");
	$("#dementia-symptoms").load("/illnesses/symptoms/dementia.html");
	$("#depressive-identity-symptoms").load("/illnesses/symptoms/depressive_identity.html");
	$("#dissociative-identity-symptoms").load("/illnesses/symptoms/dissociative_identity.html");
	$("#misophonia-symptoms").load("/illnesses/symptoms/misophonia.html");
	$("#ocd-symptoms").load("/illnesses/symptoms/ocd.html");
	$("#ptsd-symptoms").load("/illnesses/symptoms/ptsd.html");
	$("#schizophrenia-symptoms").load("/illnesses/symptoms/schizophrenia.html");

	//the treatment pages for the common illnesses
	$("#add-treatment").load("/illnesses/treatment/add.html");
	$("#adhd-treatment").load("/illnesses/treatment/adhd.html");
	$("#anorexia-nervosa-treatment").load("/illnesses/treatment/anorexia_nervosa.html");
	$("#anxiety-disorders-treatment").load("/illnesses/treatment/anxiety_disorders.html");
	$("#autsim-treatment").load("/illnesses/treatment/autsim.html");
	$("#avoidand-personality-treatment").load("/illnesses/treatment/avoidand_personality.html");
	$("#bipolar-treatment").load("/illnesses/treatment/bipolar.html");
	$("#borderline-personality-treatment").load("/illnesses/treatment/borderline_personality.html");
	$("#bulimia-treatment").load("/illnesses/treatment/bulimia.html");
	$("#dementia-treatment").load("/illnesses/treatment/dementia.html");
	$("#depressive-identity-treatment").load("/illnesses/treatment/depressive_identity.html");
	$("#dissociative-identity-treatment").load("/illnesses/treatment/dissociative_identity.html");
	$("#misophonia-treatment").load("/illnesses/treatment/misophonia.html");
	$("#ocd-treatment").load("/illnesses/treatment/ocd.html");
	$("#ptsd-treatment").load("/illnesses/treatment/ptsd.html");
	$("#schizophrenia-treatment").load("/illnesses/treatment/schizophrenia.html");
});
