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
	$("#avoidant-personality-about").load("/illnesses/about/avoidant_personality.html");
	$("#bipolar-about").load("/illnesses/about/bipolar.html");
	$("#borderline-personality-about").load("/illnesses/about/borderline_personality.html");
	$("#bulimia-about").load("/illnesses/about/bulimia.html");
	$("#dementia-about").load("/illnesses/about/dementia.html");
	$("#depressive-disorder-about").load("/illnesses/about/depressive_disorder.html");
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
	$("#avoidant-personality-symptoms").load("/illnesses/symptoms/avoidant_personality.html");
	$("#bipolar-symptoms").load("/illnesses/symptoms/bipolar.html");
	$("#borderline-personality-symptoms").load("/illnesses/symptoms/borderline_personality.html");
	$("#bulimia-symptoms").load("/illnesses/symptoms/bulimia.html");
	$("#dementia-symptoms").load("/illnesses/symptoms/dementia.html");
	$("#depressive-disorder-symptoms").load("/illnesses/symptoms/depressive_disorder.html");
	$("#dissociative-identity-symptoms").load("/illnesses/symptoms/dissociative_identity.html");
	$("#misophonia-symptoms").load("/illnesses/symptoms/misophonia.html");
	$("#ocd-symptoms").load("/illnesses/symptoms/ocd.html");
	$("#ptsd-symptoms").load("/illnesses/symptoms/ptsd.html");
	$("#schizophrenia-symptoms").load("/illnesses/symptoms/schizophrenia.html");

	//the treatments pages for the common illnesses
	$("#add-treatments").load("/illnesses/treatments/add.html");
	$("#adhd-treatments").load("/illnesses/treatments/adhd.html");
	$("#anorexia-nervosa-treatments").load("/illnesses/treatments/anorexia_nervosa.html");
	$("#anxiety-disorders-treatments").load("/illnesses/treatments/anxiety_disorders.html");
	$("#autsim-treatments").load("/illnesses/treatments/autsim.html");
	$("#avoidant-personality-treatments").load("/illnesses/treatments/avoidant_personality.html");
	$("#bipolar-treatments").load("/illnesses/treatments/bipolar.html");
	$("#borderline-personality-treatments").load("/illnesses/treatments/borderline_personality.html");
	$("#bulimia-treatments").load("/illnesses/treatments/bulimia.html");
	$("#dementia-treatments").load("/illnesses/treatments/dementia.html");
	$("#depressive-disorder-treatments").load("/illnesses/treatments/depressive_disorder.html");
	$("#dissociative-identity-treatments").load("/illnesses/treatments/dissociative_identity.html");
	$("#misophonia-treatments").load("/illnesses/treatments/misophonia.html");
	$("#ocd-treatments").load("/illnesses/treatments/ocd.html");
	$("#ptsd-treatments").load("/illnesses/treatments/ptsd.html");
	$("#schizophrenia-treatments").load("/illnesses/treatments/schizophrenia.html");


	//***************************************************************************************************
	//NOT IN EFFECT AT THIS MOMENT
	//the therapies pages for the common illnesses
	$("#add-therapies").load("/illnesses/treatments/therapies/add.html");
	$("#adhd-therapies").load("/illnesses/treatments/therapies/adhd.html");
	$("#anorexia-nervosa-therapies").load("/illnesses/treatments/therapies/anorexia_nervosa.html");
	$("#anxiety-disorders-therapies").load("/illnesses/treatments/therapies/anxiety_disorders.html");
	$("#autsim-therapies").load("/illnesses/treatments/therapies/autsim.html");
	$("#avoidant-personality-therapies").load("/illnesses/treatments/therapies/avoidant_personality.html");
	$("#bipolar-therapies").load("/illnesses/treatments/therapies/bipolar.html");
	$("#borderline-personality-therapies").load("/illnesses/treatments/therapies/borderline_personality.html");
	$("#bulimia-therapies").load("/illnesses/treatments/therapies/bulimia.html");
	$("#dementia-therapies").load("/illnesses/treatments/therapies/dementia.html");
	$("#depressive-disorder-therapies").load("/illnesses/treatments/therapies/depressive_disorder.html");
	$("#dissociative-identity-therapies").load("/illnesses/treatments/therapies/dissociative_identity.html");
	$("#misophonia-therapies").load("/illnesses/treatments/therapies/misophonia.html");
	$("#ocd-therapies").load("/illnesses/treatments/therapies/ocd.html");
	$("#ptsd-therapies").load("/illnesses/treatments/therapies/ptsd.html");
	$("#schizophrenia-therapies").load("/illnesses/treatments/therapies/schizophrenia.html");

	//the medications pages for the common illnesses
	$("#add-medications").load("/illnesses/treatments/medications/add.html");
	$("#adhd-medications").load("/illnesses/treatments/medications/adhd.html");
	$("#anorexia-nervosa-medications").load("/illnesses/treatments/medications/anorexia_nervosa.html");
	$("#anxiety-disorders-medications").load("/illnesses/treatments/medications/anxiety_disorders.html");
	$("#autsim-medications").load("/illnesses/treatments/medications/autsim.html");
	$("#avoidant-personality-medications").load("/illnesses/treatments/medications/avoidant_personality.html");
	$("#bipolar-medications").load("/illnesses/treatments/medications/bipolar.html");
	$("#borderline-personality-medications").load("/illnesses/treatments/medications/borderline_personality.html");
	$("#bulimia-medications").load("/illnesses/treatments/medications/bulimia.html");
	$("#dementia-medications").load("/illnesses/treatments/medications/dementia.html");
	$("#depressive-disorder-medications").load("/illnesses/treatments/medications/depressive_disorder.html");
	$("#dissociative-identity-medications").load("/illnesses/treatments/medications/dissociative_identity.html");
	$("#misophonia-medications").load("/illnesses/treatments/medications/misophonia.html");
	$("#ocd-medications").load("/illnesses/treatments/medications/ocd.html");
	$("#ptsd-medications").load("/illnesses/treatments/medications/ptsd.html");
	$("#schizophrenia-medications").load("/illnesses/treatments/medications/schizophrenia.html");

	//the specialists pages for the common illnesses
	$("#add-specialists").load("/illnesses/treatments/specialists/add.html");
	$("#adhd-specialists").load("/illnesses/treatments/specialists/adhd.html");
	$("#anorexia-nervosa-specialists").load("/illnesses/treatments/specialists/anorexia_nervosa.html");
	$("#anxiety-disorders-specialists").load("/illnesses/treatments/specialists/anxiety_disorders.html");
	$("#autsim-specialists").load("/illnesses/treatments/specialists/autsim.html");
	$("#avoidant-personality-specialists").load("/illnesses/treatments/specialists/avoidant_personality.html");
	$("#bipolar-specialists").load("/illnesses/treatments/specialists/bipolar.html");
	$("#borderline-personality-specialists").load("/illnesses/treatments/specialists/borderline_personality.html");
	$("#bulimia-specialists").load("/illnesses/treatments/specialists/bulimia.html");
	$("#dementia-specialists").load("/illnesses/treatments/specialists/dementia.html");
	$("#depressive-disorder-specialists").load("/illnesses/treatments/specialists/depressive_disorder.html");
	$("#dissociative-identity-specialists").load("/illnesses/treatments/specialists/dissociative_identity.html");
	$("#misophonia-specialists").load("/illnesses/treatments/specialists/misophonia.html");
	$("#ocd-specialists").load("/illnesses/treatments/specialists/ocd.html");
	$("#ptsd-specialists").load("/illnesses/treatments/specialists/ptsd.html");
	$("#schizophrenia-specialists").load("/illnesses/treatments/specialists/schizophrenia.html");
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88404378-1', 'auto');
ga('send', 'pageview');

