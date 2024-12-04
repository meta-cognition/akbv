jQuery(document).on('ready',function() {
	
"use strict";
	
jQuery("#admania-top").hide();


jQuery(window).scroll(function (ev){
	
	ev.preventDefault();
	
	var admania_sctp = jQuery(window).scrollTop();
	
	if(admania_sctp >= 250) {
		jQuery('#admania-header-sticky').addClass('admania-show-header-sticky');
	}
	else {
		jQuery('#admania-header-sticky').removeClass('admania-show-header-sticky');
	}
	
});


jQuery('#admania_lyt1hdlfad_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1adcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler1() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlfad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlfad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlfad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1adviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler1); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler1); 
   }
   }
});
       


jQuery('#admania_lyt1hdlfrotad_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1rotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler2() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlfrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlfrotad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlfrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1rotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler2); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler2); 
   }
   }
});	   
	

jQuery('#admania_lyt1hdlfrotglead_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1gleadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler3() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlfrotglead_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlfrotglead_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlfrotglead_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1gleadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler3); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler3); 
   }
   }
});	 

	
jQuery('#admania_lyt1hdlflnkad_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1lnkadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler4() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlflnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlflnkad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlflnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1lnkadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler4); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler4); 
   }
   }
});	 


jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1lnkrotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler5() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlfrotlnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1lnkrotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler5); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler5); 
   }
   }
});	 


jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').on('click',function() {
    jQuery('.admania_lt1hd1lnkrotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler6() {
	var admania_adhgtck = jQuery("#admania_lyt1hdlfrotlnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdlfrotlnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lt1hd1lnkrotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler6); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler6); 
   }
   }
});	 


jQuery('#admania_lyt1hdrgad_clvwstatics').on('click',function(){
    jQuery('.admania_rg1hd1adcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler7() {
	var admania_adhgtck = jQuery("#admania_lyt1hdrgad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdrgad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdrgad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_rg1hd1adviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler7); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler7); 
   }
   }
});	


jQuery('#admania_lyt1hdrgrotad_clvwstatics').on('click',function() {
    jQuery('.admania_rg1hd1rotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler8() {
	var admania_adhgtck = jQuery("#admania_lyt1hdrgrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdrgrotad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdrgrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_rg1hd1rotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler8); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler8); 
   }
   }
});


jQuery('#admania_lyt1hdrgglead_clvwstatics').on('click',function() {
    jQuery('.admania_rg1hd1gleadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler9() {
	var admania_adhgtck = jQuery("#admania_lyt1hdrgglead_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdrgglead_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdrgglead_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_rg1hd1gleadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler9); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler9); 
   }
   }
});


jQuery('#admania_lyt1hdrglnkad_clvwstatics').on('click',function() {
    jQuery('.admania_rg1hd1lnkadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler10() {
	var admania_adhgtck = jQuery("#admania_lyt1hdrglnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdrglnkad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdrglnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_rg1hd1lnkadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler10); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler10); 
   }
   }
});


jQuery('#admania_lyt1hdrglnkrotad_clvwstatics').on('click',function() {
    jQuery('.admania_rg1hd1lnkrotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler11() {
	var admania_adhgtck = jQuery("#admania_lyt1hdrglnkrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_lyt1hdrglnkrotad_clvwstatics').offset().top,
       hH = jQuery('#admania_lyt1hdrglnkrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_rg1hd1lnkrotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler11); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler11); 
   }
   }
});


jQuery('#admania_afhdlfhtlad_statics').on('click',function() {
    jQuery('.admania_ly1afhdlfclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler12() {
	var admania_adhgtck = jQuery("#admania_afhdlfhtlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdlfhtlad_statics').offset().top,
       hH = jQuery('#admania_afhdlfhtlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdlfvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler12); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler12); 
   }
   }
});


jQuery('#admania_afhdlfhtlrotad_statics').on('click',function() {
    jQuery('.admania_ly1afhdlfrotclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler13() {
	var admania_adhgtck = jQuery("#admania_afhdlfhtlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdlfhtlrotad_statics').offset().top,
       hH = jQuery('#admania_afhdlfhtlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdlfrotvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler13); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler13); 
   }
   }
});


jQuery('#admania_afhdlfglead_statics').on('click',function() {
    jQuery('.admania_ly1afhdlfgleclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler14() {
	var admania_adhgtck = jQuery("#admania_afhdlfglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdlfglead_statics').offset().top,
       hH = jQuery('#admania_afhdlfglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdlfglevwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler14); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler14); 
   }
   }
});


jQuery('#admania_afhdlflnkad_statics').on('click',function() {
    jQuery('.admania_ly1afhdlflnkclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler15() {
	var admania_adhgtck = jQuery("#admania_afhdlflnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdlflnkad_statics').offset().top,
       hH = jQuery('#admania_afhdlflnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdlflnkvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler15); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler15); 
   }
   }
});


jQuery('#admania_afhdlflnkrotad_statics').on('click',function() {
    jQuery('.admania_ly1afhdlflnkrotclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler16() {
	var admania_adhgtck = jQuery("#admania_afhdlflnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdlflnkrotad_statics').offset().top,
       hH = jQuery('#admania_afhdlflnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdlflnkrotvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler16); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler16); 
   }
   }
});

jQuery('.admania-header-eleven-social-icon').on('click', function(e){
	e.preventDefault();
	jQuery('.admania-header-social').slideToggle();
});

jQuery('.admania-header-eleven-social-icon').on('click', function(){
	jQuery('.admania-header-eleven-bottom').toggleClass('admania-header-eleven-bottom-show-social-media');
});

jQuery('#admania_afhdrghtlad_statics').on('click',function() {
    jQuery('.admania_ly1afhdrgclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler17() {
	var admania_adhgtck = jQuery("#admania_afhdrghtlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdrghtlad_statics').offset().top,
       hH = jQuery('#admania_afhdrghtlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdrgvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler17); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler17); 
   }
   }
});


jQuery('#admania_afhdrghtlrotad_statics').on('click',function() {
    jQuery('.admania_ly1afhdrgrotclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler18() {
	var admania_adhgtck = jQuery("#admania_afhdrghtlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdrghtlrotad_statics').offset().top,
       hH = jQuery('#admania_afhdrghtlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdrgrotvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler18); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler18); 
   }
   }
});


jQuery('#admania_afhdrgglead_statics').on('click',function() {
    jQuery('.admania_ly1afhdrggleclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler19() {
	var admania_adhgtck = jQuery("#admania_afhdrgglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdrgglead_statics').offset().top,
       hH = jQuery('#admania_afhdrgglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdrgglevwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler19); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler19); 
   }
   }
});


jQuery('#admania_afhdrglnkad_statics').on('click',function() {
    jQuery('.admania_ly1afhdrglnkclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler20() {
	var admania_adhgtck = jQuery("#admania_afhdrglnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdrglnkad_statics').offset().top,
       hH = jQuery('#admania_afhdrglnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdrglnkvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler20); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler20); 
   }
   }
});


jQuery('#admania_afhdrglnkrotad_statics').on('click',function() {
    jQuery('.admania_ly1afhdrglnkrotclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler21() {
	var admania_adhgtck = jQuery("#admania_afhdrglnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania_afhdrglnkrotad_statics').offset().top,
       hH = jQuery('#admania_afhdrglnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afhdrglnkrotvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler21); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler21); 
   }
   }
});


jQuery('#admania-ly1afsldtad-statics').on('click',function() {
    jQuery('.admania_ly1afsldadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler22() {
	var admania_adhgtck = jQuery("#admania-ly1afsldtad-statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania-ly1afsldtad-statics').offset().top,
       hH = jQuery('#admania-ly1afsldtad-statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afsldadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler22); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler22); 
   }
   }
});
	
jQuery('#admania-ly1afsldtrotad-statics').on('click',function() {
    jQuery('.admania_ly1afsldrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler23() {
	var admania_adhgtck = jQuery("#admania-ly1afsldtrotad-statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania-ly1afsldtrotad-statics').offset().top,
       hH = jQuery('#admania-ly1afsldtrotad-statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afsldrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler23); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler23); 
   }
   }
});


jQuery('#admania-ly1afsldglead-statics').on('click',function() {
    jQuery('.admania_ly1afsldgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler24() {
	var admania_adhgtck = jQuery("#admania-ly1afsldglead-statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania-ly1afsldglead-statics').offset().top,
       hH = jQuery('#admania-ly1afsldglead-statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afsldgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler24); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler24); 
   }
   }
});

jQuery('#admania-front-lay1afsldlnkad-statics').on('click',function() {
    jQuery('.admania_ly1afsldlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler25() {
	var admania_adhgtck = jQuery("#admania-front-lay1afsldlnkad-statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('#admania-front-lay1afsldlnkad-statics').offset().top,
       hH = jQuery('#admania-front-lay1afsldlnkad-statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afsldlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler25); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler25); 
   }
   }
});


jQuery('.admania-front-lay1afsldlnkrotad-statics').on('click',function() {
    jQuery('.admania_ly1afsldlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler26() {
	var admania_adhgtck = jQuery(".admania-front-lay1afsldlnkrotad-statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania-front-lay1afsldlnkrotad-statics').offset().top,
       hH = jQuery('.admania-front-lay1afsldlnkrotad-statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afsldlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler26); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler26); 
   }
   }
});


jQuery('.admania_front_lay1afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly1afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler27() {
	var admania_adhgtck = jQuery(".admania_front_lay1afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_lay1afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler27); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler27); 
   }
   }
});

jQuery('.admania_front_lay1afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly1afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler28() {
	var admania_adhgtck = jQuery(".admania_front_lay1afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler28); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler28); 
   }
   }
});

jQuery('.admania_front_lay1afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly1afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler29() {
	var admania_adhgtck = jQuery(".admania_front_lay1afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_lay1afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler29); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler29); 
   }
   }
});


jQuery('.admania_front_lay1afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly1afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler30() {
	var admania_adhgtck = jQuery(".admania_front_lay1afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay1afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler30); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler30); 
   }
   }
});

jQuery('.admania_front_lay1afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly1afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler31() {
	var admania_adhgtck = jQuery(".admania_front_lay1afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler31); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler31); 
   }
   }
});


jQuery('.admania_front_lay1sblfad_statics').on('click',function() {
    jQuery('.admania_ly1sblfadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler32() {
	var admania_adhgtck = jQuery(".admania_front_lay1sblfad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sblfad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sblfad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sblfadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler32); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler32); 
   }
   }
});


jQuery('.admania_front_lay1sblfrotad_statics').on('click',function() {
    jQuery('.admania_ly1sblfrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler33() {
	var admania_adhgtck = jQuery(".admania_front_lay1sblfrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sblfrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sblfrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sblfrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler33); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler33); 
   }
   }
});

jQuery('.admania_front_lay1sblfglead_statics').on('click',function() {
    jQuery('.admania_ly1sblfgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler34() {
	var admania_adhgtck = jQuery(".admania_front_lay1sblfglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sblfglead_statics').offset().top,
       hH = jQuery('.admania_front_lay1sblfglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sblfgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler34); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler34); 
   }
   }
});

jQuery('.admania_front_lay1sblflnkad_statics').on('click',function() {
    jQuery('.admania_ly1sblflnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler35() {
	var admania_adhgtck = jQuery(".admania_front_lay1sblflnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sblflnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sblflnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sblflnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler35); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler35); 
   }
   }
});


jQuery('.admania_front_lay1sblflnkrotad_statics').on('click',function() {
    jQuery('.admania_ly1sblflnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler36() {
	var admania_adhgtck = jQuery(".admania_front_lay1sblflnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sblflnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sblflnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sblflnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler36); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler36); 
   }
   }
});

jQuery('.admania_front_lay1sbrghlad_statics').on('click',function() {
    jQuery('.admania_ly1sbrghladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler37() {
	var admania_adhgtck = jQuery(".admania_front_lay1sbrghlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sbrghlad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sbrghlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sbrghladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler37); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler37); 
   }
   }
});


jQuery('.admania_front_lay1sbrghlrotad_statics').on('click',function() {
    jQuery('.admania_ly1sbrghlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler38() {
	var admania_adhgtck = jQuery(".admania_front_lay1sbrghlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sbrghlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sbrghlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sbrghlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler38); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler38); 
   }
   }
});


jQuery('.admania_front_lay1sbrgglead_statics').on('click',function() {
    jQuery('.admania_ly1sbrggleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler39() {
	var admania_adhgtck = jQuery(".admania_front_lay1sbrgglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sbrgglead_statics').offset().top,
       hH = jQuery('.admania_front_lay1sbrgglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sbrggleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler39); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler39); 
   }
   }
});


jQuery('.admania_front_lay1sbrglnkad_statics').on('click',function() {
    jQuery('.admania_ly1sbrglnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler40() {
	var admania_adhgtck = jQuery(".admania_front_lay1sbrglnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sbrglnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sbrglnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sbrglnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler40); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler40); 
   }
   }
});


jQuery('.admania_front_lay1sbrglnkrotad_statics').on('click',function() {
    jQuery('.admania_ly1sbrglnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler41() {
	var admania_adhgtck = jQuery(".admania_front_lay1sbrglnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay1sbrglnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay1sbrglnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly1sbrglnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler41); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler41); 
   }
   }
});


jQuery('.admania_lyt2tphad_statics').on('click',function() {
    jQuery('.admania_ly2tphdadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler42() {
	var admania_adhgtck = jQuery(".admania_lyt2tphad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2tphad_statics').offset().top,
       hH = jQuery('.admania_lyt2tphad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2tphdadadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler42); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler42); 
   }
   }
});


jQuery('.admania_lyt2tphrotad_statics').on('click',function() {
    jQuery('.admania_ly2tphdrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler43() {
	var admania_adhgtck = jQuery(".admania_lyt2tphrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2tphrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2tphrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2tphdrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler43); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler43); 
   }
   }
});


jQuery('.admania_lyt2tphglead_statics').on('click',function() {
    jQuery('.admania_ly2tphdgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler44() {
	var admania_adhgtck = jQuery(".admania_lyt2tphglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2tphglead_statics').offset().top,
       hH = jQuery('.admania_lyt2tphglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2tphdgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler44); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler44); 
   }
   }
});


jQuery('.admania_lyt2tphlnkad_statics').on('click',function() {
    jQuery('.admania_ly2tphdlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler45() {
	var admania_adhgtck = jQuery(".admania_lyt2tphlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2tphlnkad_statics').offset().top,
       hH = jQuery('.admania_lyt2tphlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2tphdlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler45); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler45); 
   }
   }
});


jQuery('.admania_lyt2tphlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly2tphdlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler46() {
	var admania_adhgtck = jQuery(".admania_lyt2tphlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2tphlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2tphlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2tphdlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler46); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler46); 
   }
   }
});


jQuery('.admania_lyt2afhdhlad_statics').on('click',function() {
    jQuery('.admania_ly2afhdhladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler47() {
	var admania_adhgtck = jQuery(".admania_lyt2afhdhlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afhdhlad_statics').offset().top,
       hH = jQuery('.admania_lyt2afhdhlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afhdhladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler47); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler47); 
   }
   }
});

jQuery('.admania_lyt2afhdhlrotad_statics').on('click',function() {
    jQuery('.admania_ly2afhdhlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler48() {
	var admania_adhgtck = jQuery(".admania_lyt2afhdhlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afhdhlrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2afhdhlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afhdhlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler48); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler48); 
   }
   }
});

jQuery('.admania_lyt2afhdglead_statics').on('click',function() {
    jQuery('.admania_ly2afhdgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler49() {
	var admania_adhgtck = jQuery(".admania_lyt2afhdglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afhdglead_statics').offset().top,
       hH = jQuery('.admania_lyt2afhdglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afhdgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler49); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler49); 
   }
   }
});


jQuery('.admania_lyt2afhdlnkad_statics').on('click',function() {
    jQuery('.admania_ly2afhdlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler50() {
	var admania_adhgtck = jQuery(".admania_lyt2afhdlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afhdlnkad_statics').offset().top,
       hH = jQuery('.admania_lyt2afhdlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afhdlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler50); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler50); 
   }
   }
});

jQuery('.admania_lyt2afhdlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly2afhdlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler51() {
	var admania_adhgtck = jQuery(".admania_lyt2afhdlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afhdlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2afhdlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afhdlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler51); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler51); 
   }
   }
});

jQuery('.admania_lyt2afsldhlad_statics').on('click',function() {
    jQuery('.admania_ly2afsldhladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler52() {
	var admania_adhgtck = jQuery(".admania_lyt2afsldhlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afsldhlad_statics').offset().top,
       hH = jQuery('.admania_lyt2afsldhlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afsldhladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler52); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler52); 
   }
   }
});


jQuery('.admania_lyt2afsldhlrotad_statics').on('click',function() {
    jQuery('.admania_ly2afsldhlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler53() {
	var admania_adhgtck = jQuery(".admania_lyt2afsldhlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afsldhlrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2afsldhlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afsldhlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler53); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler53); 
   }
   }
});


jQuery('.admania_lyt2afsldglead_statics').on('click',function() {
    jQuery('.admania_ly2afsldgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler54() {
	var admania_adhgtck = jQuery(".admania_lyt2afsldglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afsldglead_statics').offset().top,
       hH = jQuery('.admania_lyt2afsldglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afsldgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler54); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler54); 
   }
   }
});


jQuery('.admania_lyt2afsldlnkad_statics').on('click',function() {
    jQuery('.admania_ly2afsldlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler55() {
	var admania_adhgtck = jQuery(".admania_lyt2afsldlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afsldlnkad_statics').offset().top,
       hH = jQuery('.admania_lyt2afsldlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afsldlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler55); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler55); 
   }
   }
});

jQuery('.admania_lyt2afsldlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly2afsldlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler56() {
	var admania_adhgtck = jQuery(".admania_lyt2afsldlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2afsldlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2afsldlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2afsldlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler56); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler56); 
   }
   }
});

jQuery('.admania_lyt2lstptad_statics').on('click',function() {
    jQuery('.admania_ly2lstptadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler57() {
	var admania_adhgtck = jQuery(".admania_lyt2lstptad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2lstptad_statics').offset().top,
       hH = jQuery('.admania_lyt2lstptad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2lstptadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler57); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler57); 
   }
   }
});

jQuery('.admania_lyt2lstptrotad_statics').on('click',function() {
    jQuery('.admania_ly2lstptrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler58() {
	var admania_adhgtck = jQuery(".admania_lyt2lstptrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2lstptrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2lstptrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2lstptrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler58); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler58); 
   }
   }
});

jQuery('.admania_lyt2lstptglead_statics').on('click',function() {
    jQuery('.admania_ly2lstptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler59() {
	var admania_adhgtck = jQuery(".admania_lyt2lstptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2lstptglead_statics').offset().top,
       hH = jQuery('.admania_lyt2lstptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2lstptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler59); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler59); 
   }
   }
});

jQuery('.admania_lyt2lstptlnkad_statics').on('click',function() {
    jQuery('.admania_ly2lstptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler60() {
	var admania_adhgtck = jQuery(".admania_lyt2lstptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2lstptlnkad_statics').offset().top,
       hH = jQuery('.admania_lyt2lstptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2lstptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler60); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler60); 
   }
   }
});


jQuery('.admania_lyt2lstptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly2lstptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler61() {
	var admania_adhgtck = jQuery(".admania_lyt2lstptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2lstptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2lstptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2lstptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler61); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler61); 
   }
   }
});

jQuery('.admania_lyt2bfftrhlad_statics').on('click',function() {
    jQuery('.admania_ly2bfftrhladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler62() {
	var admania_adhgtck = jQuery(".admania_lyt2bfftrhlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2bfftrhlad_statics').offset().top,
       hH = jQuery('.admania_lyt2bfftrhlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2bfftrhladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler62); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler62); 
   }
   }
});

jQuery('.admania_lyt2bfftrhlrotad_statics').on('click',function() {
    jQuery('.admania_ly2bfftrhlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler63() {
	var admania_adhgtck = jQuery(".admania_lyt2bfftrhlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2bfftrhlrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2bfftrhlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2bfftrhlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler63); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler63); 
   }
   }
});

jQuery('.admania_lyt2bfftrglead_statics').on('click',function() {
    jQuery('.admania_ly2bfftrgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler64() {
	var admania_adhgtck = jQuery(".admania_lyt2bfftrglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2bfftrglead_statics').offset().top,
       hH = jQuery('.admania_lyt2bfftrglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2bfftrgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler64); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler64); 
   }
   }
});
	
jQuery('.admania_lyt2bfftrlnkad_statics').on('click',function() {
    jQuery('.admania_ly2bfftrlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler65() {
	var admania_adhgtck = jQuery(".admania_lyt2bfftrlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2bfftrlnkad_statics').offset().top,
       hH = jQuery('.admania_lyt2bfftrlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2bfftrlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler65); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler65); 
   }
   }
});	


jQuery('.admania_lyt2bfftrlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly2bfftrlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler66() {
	var admania_adhgtck = jQuery(".admania_lyt2bfftrlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt2bfftrlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lyt2bfftrlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly2bfftrlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler66); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler66); 
   }
   }
});	


jQuery('.admania_lytbfftrhlad_statics').on('click',function() {
    jQuery('.admania_lybfftradclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler67() {
	var admania_adhgtck = jQuery(".admania_lytbfftrhlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lytbfftrhlad_statics').offset().top,
       hH = jQuery('.admania_lytbfftrhlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lybfftradvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler67); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler67); 
   }
   }
});	


jQuery('.admania_lytbfftrhlrotad_statics').on('click',function() {
    jQuery('.admania_lybfftrrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler68() {
	var admania_adhgtck = jQuery(".admania_lytbfftrhlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lytbfftrhlrotad_statics').offset().top,
       hH = jQuery('.admania_lytbfftrhlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lybfftrrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler68); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler68); 
   }
   }
});	


jQuery('.admania_lytbfftrglead_statics').on('click',function() {
    jQuery('.admania_lybfftrgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler69() {
	var admania_adhgtck = jQuery(".admania_lytbfftrglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lytbfftrglead_statics').offset().top,
       hH = jQuery('.admania_lytbfftrglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lybfftrgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler69); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler69); 
   }
   }
});	

jQuery('.admania_lytbfftrlnkad_statics').on('click',function() {
    jQuery('.admania_lybfftrlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler70() {
	var admania_adhgtck = jQuery(".admania_lytbfftrlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lytbfftrlnkad_statics').offset().top,
       hH = jQuery('.admania_lytbfftrlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lybfftrlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler70); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler70); 
   }
   }
});	
	
	
jQuery('.admania_lytbfftrlnkrotad_statics').on('click',function() {
    jQuery('.admania_lybfftrlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler71() {
	var admania_adhgtck = jQuery(".admania_lytbfftrlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lytbfftrlnkrotad_statics').offset().top,
       hH = jQuery('.admania_lytbfftrlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lybfftrlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler71); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler71); 
   }
   }
});		


jQuery('.admania_sghsyad_statics').on('click',function() {
    jQuery('.admania_sghsyadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler72() {
	var admania_adhgtck = jQuery(".admania_sghsyad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sghsyad_statics').offset().top,
       hH = jQuery('.admania_sghsyad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sghsyadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler72); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler72); 
   }
   }
});	


jQuery('.admania_sghsyrotad_statics').on('click',function() {
    jQuery('.admania_sghsyrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler73() {
	var admania_adhgtck = jQuery(".admania_sghsyrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sghsyrotad_statics').offset().top,
       hH = jQuery('.admania_sghsyrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sghsyrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler73); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler73); 
   }
   }
});	



jQuery('.admania_sghsyglead_statics').on('click',function() {
    jQuery('.admania_sghsygleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler74() {
	var admania_adhgtck = jQuery(".admania_sghsyglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sghsyglead_statics').offset().top,
       hH = jQuery('.admania_sghsyglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sghsygleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler74); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler74); 
   }
   }
});	

jQuery('.admania_sghsylnkad_statics').on('click',function() {
    jQuery('.admania_sghsylnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler75() {
	var admania_adhgtck = jQuery(".admania_sghsylnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sghsylnkad_statics').offset().top,
       hH = jQuery('.admania_sghsylnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sghsylnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler75); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler75); 
   }
   }
});	


jQuery('.admania_sghsylnkrotad_statics').on('click',function() {
    jQuery('.admania_sghsylnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler76() {
	var admania_adhgtck = jQuery(".admania_sghsylnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sghsylnkrotad_statics').offset().top,
       hH = jQuery('.admania_sghsylnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sghsylnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler76); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler76); 
   }
   }
});	


jQuery('.admania_sgbfpctad_statics').on('click',function() {
    jQuery('.admania_sgbfpctadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler77() {
	var admania_adhgtck = jQuery(".admania_sgbfpctad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgbfpctad_statics').offset().top,
       hH = jQuery('.admania_sgbfpctad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgbfpctadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler77); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler77); 
   }
   }
});	
	
	
jQuery('.admania_sgbfpctrotad_statics').on('click',function() {
    jQuery('.admania_sgbfpctrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler78() {
	var admania_adhgtck = jQuery(".admania_sgbfpctrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgbfpctrotad_statics').offset().top,
       hH = jQuery('.admania_sgbfpctrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgbfpctrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler78); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler78); 
   }
   }
});	


	
jQuery('.admania_sgbfpctglead_statics').on('click',function() {
    jQuery('.admania_sgbfpctgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler79() {
	var admania_adhgtck = jQuery(".admania_sgbfpctglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgbfpctglead_statics').offset().top,
       hH = jQuery('.admania_sgbfpctglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgbfpctgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler79); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler79); 
   }
   }
});	


	
jQuery('.admania_sgbfpctlnkad_statics').on('click',function() {
    jQuery('.admania_sgbfpctlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler80() {
	var admania_adhgtck = jQuery(".admania_sgbfpctlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgbfpctlnkad_statics').offset().top,
       hH = jQuery('.admania_sgbfpctlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgbfpctlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler80); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler80); 
   }
   }
});	
	
	
jQuery('.admania_sgbfpctlnkrotad_statics').on('click',function() {
    jQuery('.admania_sgbfpctlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler81() {
	var admania_adhgtck = jQuery(".admania_sgbfpctlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgbfpctlnkrotad_statics').offset().top,
       hH = jQuery('.admania_sgbfpctlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgbfpctlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler81); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler81); 
   }
   }
});		
	
	
jQuery('.admania_sgpttphlad_statics').on('click',function() {
    jQuery('.admania_sgpttphladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler82() {
	var admania_adhgtck = jQuery(".admania_sgpttphlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgpttphlad_statics').offset().top,
       hH = jQuery('.admania_sgpttphlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgpttphladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler82); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler82); 
   }
   }
});		

jQuery('.admania_sgpttphlrotad_statics').on('click',function() {
    jQuery('.admania_sgpttphlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler83() {
	var admania_adhgtck = jQuery(".admania_sgpttphlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgpttphlrotad_statics').offset().top,
       hH = jQuery('.admania_sgpttphlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgpttphlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler83); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler83); 
   }
   }
});	


jQuery('.admania_sgpttpglead_statics').on('click',function() {
    jQuery('.admania_sgpttpgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler84() {
	var admania_adhgtck = jQuery(".admania_sgpttpglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgpttpglead_statics').offset().top,
       hH = jQuery('.admania_sgpttpglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgpttpgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler84); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler84); 
   }
   }
});	


jQuery('.admania_sgpttplnkad_statics').on('click',function() {
    jQuery('.admania_sgpttplnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler85() {
	var admania_adhgtck = jQuery(".admania_sgpttplnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgpttplnkad_statics').offset().top,
       hH = jQuery('.admania_sgpttplnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgpttplnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler85); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler85); 
   }
   }
});	

jQuery('.admania_sgpttplnkrotad_statics').on('click',function() {
    jQuery('.admania_sgpttplnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler86() {
	var admania_adhgtck = jQuery(".admania_sgpttplnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgpttplnkrotad_statics').offset().top,
       hH = jQuery('.admania_sgpttplnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgpttplnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler86); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler86); 
   }
   }
});	


jQuery('.admania_sgptnthparaad_statics').on('click',function() {
    jQuery('.admania_sgptnthparaadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler87() {
	var admania_adhgtck = jQuery(".admania_sgptnthparaad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptnthparaad_statics').offset().top,
       hH = jQuery('.admania_sgptnthparaad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptnthparaadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler87); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler87); 
   }
   }
});	
	
	
jQuery('.admania_sgptnthpararotad_statics').on('click',function() {
    jQuery('.admania_sgptnthpararotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler88() {
	var admania_adhgtck = jQuery(".admania_sgptnthpararotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptnthpararotad_statics').offset().top,
       hH = jQuery('.admania_sgptnthpararotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptnthpararotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler88); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler88); 
   }
   }
});		
	
	
	
jQuery('.admania_sgptnthparaglead_statics').on('click',function() {
    jQuery('.admania_sgptnthparagleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler89() {
	var admania_adhgtck = jQuery(".admania_sgptnthparaglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptnthparaglead_statics').offset().top,
       hH = jQuery('.admania_sgptnthparaglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptnthparagleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler89); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler89); 
   }
   }
});	

jQuery('.admania_sgptnthparalnkad_statics').on('click',function() {
    jQuery('.admania_sgptnthparalnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler90() {
	var admania_adhgtck = jQuery(".admania_sgptnthparalnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptnthparalnkad_statics').offset().top,
       hH = jQuery('.admania_sgptnthparalnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptnthparalnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler90); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler90); 
   }
   }
});			
		
jQuery('.admania_sgptnthparalnkrotad_statics').on('click',function() {
    jQuery('.admania_sgptnthparalnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler91() {
	var admania_adhgtck = jQuery(".admania_sgptnthparalnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptnthparalnkrotad_statics').offset().top,
       hH = jQuery('.admania_sgptnthparalnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptnthparalnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler91); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler91); 
   }
   }
});		


jQuery('.admania_sgptbtad_statics').on('click',function() {
    jQuery('.admania_sgptbtadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler92() {
	var admania_adhgtck = jQuery(".admania_sgptbtad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptbtad_statics').offset().top,
       hH = jQuery('.admania_sgptbtad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptbtadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler92); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler92); 
   }
   }
});		
	
	
jQuery('.admania_sgptbtrotad_statics').on('click',function() {
    jQuery('.admania_sgptbtrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler93() {
	var admania_adhgtck = jQuery(".admania_sgptbtrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptbtrotad_statics').offset().top,
       hH = jQuery('.admania_sgptbtrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptbtrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler93); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler93); 
   }
   }
});		


jQuery('.admania_sgptbtglead_statics').on('click',function() {
    jQuery('.admania_sgptbtgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler94() {
	var admania_adhgtck = jQuery(".admania_sgptbtglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptbtglead_statics').offset().top,
       hH = jQuery('.admania_sgptbtglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptbtgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler94); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler94); 
   }
   }
});	


jQuery('.admania_sgptbtlnkad_statics').on('click',function() {
    jQuery('.admania_sgptbtlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler95() {
	var admania_adhgtck = jQuery(".admania_sgptbtlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptbtlnkad_statics').offset().top,
       hH = jQuery('.admania_sgptbtlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptbtlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler95); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler95); 
   }
   }
});	




jQuery('.admania_sgptbtlnkrotad_statics').on('click',function() {
    jQuery('.admania_sgptbtlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler96() {
	var admania_adhgtck = jQuery(".admania_sgptbtlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgptbtlnkrotad_statics').offset().top,
       hH = jQuery('.admania_sgptbtlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgptbtlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler96); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler96); 
   }
   }
});	

jQuery('.admania_sgafopbxad1_statics').on('click',function() {
    jQuery('.admania_sgafopbxad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler97() {
	var admania_adhgtck = jQuery(".admania_sgafopbxad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxad1_statics').offset().top,
       hH = jQuery('.admania_sgafopbxad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler97); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler97); 
   }
   }
});	


jQuery('.admania_sgafopbxrotad1_statics').on('click',function() {
    jQuery('.admania_sgafopbxrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler99() {
	var admania_adhgtck = jQuery(".admania_sgafopbxrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxrotad1_statics').offset().top,
       hH = jQuery('.admania_sgafopbxrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler99); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler99); 
   }
   }
});	


jQuery('.admania_sgafopbxad2_statics').on('click',function() {
    jQuery('.admania_sgafopbxad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler98() {
	var admania_adhgtck = jQuery(".admania_sgafopbxad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxad2_statics').offset().top,
       hH = jQuery('.admania_sgafopbxad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler98); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler98); 
   }
   }
});	


jQuery('.admania_sgafopbxrotad2_statics').on('click',function() {
    jQuery('.admania_sgafopbxrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler99() {
	var admania_adhgtck = jQuery(".admania_sgafopbxrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxrotad2_statics').offset().top,
       hH = jQuery('.admania_sgafopbxrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler99); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler99); 
   }
   }
});	


jQuery('.admania_sgafopbxglead1_statics').on('click',function() {
    jQuery('.admania_sgafopbxglead1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler103() {
	var admania_adhgtck = jQuery(".admania_sgafopbxglead1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxglead1_statics').offset().top,
       hH = jQuery('.admania_sgafopbxglead1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxglead1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler103); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler103); 
   }
   }
});	


jQuery('.admania_sgafopbxglead2_statics').on('click',function() {
    jQuery('.admania_sgafopbxglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler106() {
	var admania_adhgtck = jQuery(".admania_sgafopbxglead2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxglead2_statics').offset().top,
       hH = jQuery('.admania_sgafopbxglead2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler106); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler106); 
   }
   }
});	


jQuery('.admania_sgafopbxlnkad1_statics').on('click',function() {
    jQuery('.admania_sgafopbxlnkad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler100() {
	var admania_adhgtck = jQuery(".admania_sgafopbxlnkad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxlnkad1_statics').offset().top,
       hH = jQuery('.admania_sgafopbxlnkad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxlnkad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler100); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler100); 
   }
   }
});	


jQuery('.admania_sgafopbxlnkad2_statics').on('click',function() {
    jQuery('.admania_sgafopbxlnkad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler110() {
	var admania_adhgtck = jQuery(".admania_sgafopbxlnkad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxlnkad2_statics').offset().top,
       hH = jQuery('.admania_sgafopbxlnkad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler110); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler110); 
   }
   }
});	

jQuery('.admania_sgafopbxlnkrotad1_statics').on('click',function() {
    jQuery('.admania_sgafopbxlnkrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler101() {
	var admania_adhgtck = jQuery(".admania_sgafopbxlnkrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxlnkrotad1_statics').offset().top,
       hH = jQuery('.admania_sgafopbxlnkrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxlnkrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler101); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler101); 
   }
   }
});		

jQuery('.admania_sgafopbxlnkrotad2_statics').on('click',function() {
    jQuery('.admania_sgafopbxlnkrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler110() {
	var admania_adhgtck = jQuery(".admania_sgafopbxlnkrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_sgafopbxlnkrotad2_statics').offset().top,
       hH = jQuery('.admania_sgafopbxlnkrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_sgafopbxalnkrotd2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler110); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler110); 
   }
   }
});		

jQuery('.admania_lyt7hdrgad_clvwstatics').on('click',function(){
    jQuery('.admania_lay7rg1hd1adcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler111() {
	var admania_adhgtck = jQuery(".admania_lyt7hdrgad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt7hdrgad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt7hdrgad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay7rg1hd1adviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler111); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler111); 
   }
   }
});	


jQuery('.admania_lyt7hdrgrotad_clvwstatics').on('click',function() {
    jQuery('.admania_lay7rg1hd1rotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler112() {
	var admania_adhgtck = jQuery(".admania_lyt7hdrgrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt7hdrgrotad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt7hdrgrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay7rg1hd1rotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler112); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler112); 
   }
   }
});


jQuery('.admania_lyt7hdrgglead_clvwstatics').on('click',function() {
    jQuery('.admania_lay7rg1hd1gleadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler113() {
	var admania_adhgtck = jQuery(".admania_lyt7hdrgglead_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt7hdrgglead_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt7hdrgglead_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay7rg1hd1gleadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler113); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler113); 
   }
   }
});


jQuery('.admania_lyt7hdrglnkad_clvwstatics').on('click',function() {
    jQuery('.admania_lay7rg1hd1lnkadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler114() {
	var admania_adhgtck = jQuery(".admania_lyt7hdrglnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt7hdrglnkad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt7hdrglnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay7rg1hd1lnkadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler114); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler114); 
   }
   }
});


jQuery('.admania_lyt7hdrglnkrotad_clvwstatics').on('click',function() {
    jQuery('.admania_lay7rg1hd1lnkrotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler115() {
	var admania_adhgtck = jQuery(".admania_lyt7hdrglnkrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt7hdrglnkrotad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt7hdrglnkrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay7rg1hd1lnkrotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler115); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler115); 
   }
   }
});

jQuery('.admania_front_lay7afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler116() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler116); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler116); 
   }
   }
});

jQuery('.admania_front_lay7afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler117() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler117); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler117); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler118() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler118); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler118); 
   }
   }
});


jQuery('.admania_front_lay7afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler119() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler119); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler119); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler120() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler120); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler120); 
   }
   }
});

jQuery('.admania_front_lay7afgrdpthlad1_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler121() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlad1_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler121); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler121); 
   }
   }
});

jQuery('.admania_front_lay7afgrdpthlrotad1_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler122() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler122); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler122); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptglead1_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptglead1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler123() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptglead1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptglead1_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptglead1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptglead1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler123); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler123); 
   }
   }
});


jQuery('.admania_front_lay7afgrdptlnkad1_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler124() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkad1_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler124); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler124); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptlnkrotad1_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler125() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler125); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler125); 
   }
   }
});

	jQuery('.admania_front_lay7afgrdpthlad2_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler126() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlad2_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler126); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler126); 
   }
   }
});

jQuery('.admania_front_lay7afgrdpthlrotad2_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler127() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdpthlrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdpthlrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdpthlrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler127); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler127); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptglead2_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler128() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptglead2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptglead2_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptglead2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler128); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler128); 
   }
   }
});


jQuery('.admania_front_lay7afgrdptlnkad2_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler129() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkad2_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler129); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler129); 
   }
   }
});

jQuery('.admania_front_lay7afgrdptlnkrotad2_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler130() {
	var admania_adhgtck = jQuery(".admania_front_lay7afgrdptlnkrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay7afgrdptlnkrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay7afgrdptlnkrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler130); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler130); 
   }
   }
});

jQuery('.admania_front_postlay5afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler131() {
	var admania_adhgtck = jQuery(".admania_front_postlay5afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_postlay5afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_postlay5afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler131); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler131); 
   }
   }
});

jQuery('.admania_front_postlay5afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler132() {
	var admania_adhgtck = jQuery(".admania_front_postlay5afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_postlay5afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_postlay5afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler132); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler132); 
   }
   }
});

jQuery('.admania_front_postlay5afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler133() {
	var admania_adhgtck = jQuery(".admania_front_postlay5afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_postlay5afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_postlay5afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler133); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler133); 
   }
   }
});


jQuery('.admania_front_postlay5afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler134() {
	var admania_adhgtck = jQuery(".admania_front_postlay5afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_postlay5afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_postlay5afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler134); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler134); 
   }
   }
});

jQuery('.admania_front_postlay5afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly7afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler135() {
	var admania_adhgtck = jQuery(".admania_front_postlay5afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_postlay5afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_postlay5afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly7afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler135); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler135); 
   }
   }
});


jQuery('.admania_lyt8hdrgad_clvwstatics').on('click',function(){
    jQuery('.admania_lay8rg1hd1adcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler136() {
	var admania_adhgtck = jQuery(".admania_lyt8hdrgad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt8hdrgad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt8hdrgad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay8rg1hd1adviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler136); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler136); 
   }
   }
});	


jQuery('.admania_lyt8hdrgrotad_clvwstatics').on('click',function() {
    jQuery('.admania_lay8rg1hd1rotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler137() {
	var admania_adhgtck = jQuery(".admania_lyt8hdrgrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt8hdrgrotad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt8hdrgrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay8rg1hd1rotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler137); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler137); 
   }
   }
});


jQuery('.admania_lyt8hdrgglead_clvwstatics').on('click',function() {
    jQuery('.admania_lay8rg1hd1gleadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler138() {
	var admania_adhgtck = jQuery(".admania_lyt8hdrgglead_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt8hdrgglead_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt8hdrgglead_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay8rg1hd1gleadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler138); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler138); 
   }
   }
});


jQuery('.admania_lyt8hdrglnkad_clvwstatics').on('click',function() {
    jQuery('.admania_lay8rg1hd1lnkadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler139() {
	var admania_adhgtck = jQuery(".admania_lyt8hdrglnkad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt8hdrglnkad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt8hdrglnkad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay8rg1hd1lnkadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler139); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler139); 
   }
   }
});


jQuery('.admania_lyt8hdrglnkrotad_clvwstatics').on('click',function() {
    jQuery('.admania_lay8rg1hd1lnkrotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler140() {
	var admania_adhgtck = jQuery(".admania_lyt8hdrglnkrotad_clvwstatics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_lyt8hdrglnkrotad_clvwstatics').offset().top,
       hH = jQuery('.admania_lyt8hdrglnkrotad_clvwstatics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_lay8rg1hd1lnkrotadviewnum').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler140); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler140); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler141() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler141); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler141); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler142() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler142); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler142); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler143() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler143); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler143); 
   }
   }
});


jQuery('.admania_front_lay8afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler144() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler144); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler144); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler145() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler145); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler145); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlad1_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler146() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlad1_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler146); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler146); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlrotad1_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler147() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler147); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler147); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptglead1_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptglead1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler148() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptglead1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptglead1_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptglead1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptglead1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler148); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler148); 
   }
   }
});


jQuery('.admania_front_lay8afgrdptlnkad1_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler149() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkad1_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler149); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler149); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptlnkrotad1_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler150() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler150); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler150); 
   }
   }
});

	jQuery('.admania_front_lay8afgrdpthlad2_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler151() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlad2_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler151); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler151); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlrotad2_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler152() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler152); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler152); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptglead2_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler153() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptglead2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptglead2_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptglead2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler153); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler153); 
   }
   }
});


jQuery('.admania_front_lay8afgrdptlnkad2_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler154() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkad2_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler154); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler154); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptlnkrotad2_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler155() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler155); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler155); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlad3_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler156() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlad3_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler156); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler156); 
   }
   }
});

jQuery('.admania_front_lay8afgrdpthlrotad3_statics').on('click',function() {
    jQuery('.admania_ly8afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler157() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdpthlrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdpthlrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdpthlrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler157); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler157); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptglead3_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler158() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptglead3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptglead3_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptglead3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler158); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler158); 
   }
   }
});


jQuery('.admania_front_lay8afgrdptlnkad3_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler159() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkad3_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler159); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler159); 
   }
   }
});

jQuery('.admania_front_lay8afgrdptlnkrotad3_statics').on('click',function() {
    jQuery('.admania_ly8afgrdptlnkrotad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler160() {
	var admania_adhgtck = jQuery(".admania_front_lay8afgrdptlnkrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay8afgrdptlnkrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay8afgrdptlnkrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly8afgrdptlnkrotad3vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler160); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler160); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler161() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler161); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler161); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler162() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler162); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler162); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler163() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler163); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler163); 
   }
   }
});


jQuery('.admania_front_lay9afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler164() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler164); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler164); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler165() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler165); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler165); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlad1_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler166() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlad1_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler166); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler166); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlrotad1_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler167() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler167); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler167); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptglead1_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptglead1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler168() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptglead1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptglead1_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptglead1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptglead1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler168); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler168); 
   }
   }
});


jQuery('.admania_front_lay9afgrdptlnkad1_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler169() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkad1_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler169); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler169); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptlnkrotad1_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler170() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler170); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler170); 
   }
   }
});

	jQuery('.admania_front_lay9afgrdpthlad2_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler171() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlad2_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler171); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler171); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlrotad2_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler172() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler172); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler172); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptglead2_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler173() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptglead2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptglead2_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptglead2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler173); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler173); 
   }
   }
});


jQuery('.admania_front_lay9afgrdptlnkad2_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler174() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkad2_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler174); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler174); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptlnkrotad2_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler175() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler175); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler175); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlad3_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler176() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlad3_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler176); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler176); 
   }
   }
});

jQuery('.admania_front_lay9afgrdpthlrotad3_statics').on('click',function() {
    jQuery('.admania_ly9afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler177() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdpthlrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdpthlrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdpthlrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler177); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler177); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptglead3_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler178() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptglead3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptglead3_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptglead3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler178); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler178); 
   }
   }
});


jQuery('.admania_front_lay9afgrdptlnkad3_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler179() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkad3_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler179); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler179); 
   }
   }
});

jQuery('.admania_front_lay9afgrdptlnkrotad3_statics').on('click',function() {
    jQuery('.admania_ly9afgrdptlnkrotad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler180() {
	var admania_adhgtck = jQuery(".admania_front_lay9afgrdptlnkrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay9afgrdptlnkrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay9afgrdptlnkrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly9afgrdptlnkrotad3vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler180); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler180); 
   }
   }
});


jQuery('.admania_front_lay10afgrdpthlad_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthladclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler181() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlad_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthladvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler181); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler181); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlrotad_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler182() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler182); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler182); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptglead_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptgleadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler183() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptglead_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptglead_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptglead_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptgleadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler183); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler183); 
   }
   }
});


jQuery('.admania_front_lay10afgrdptlnkad_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler184() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkad_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler184); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler184); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptlnkrotad_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkrotadclknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler185() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkrotad_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkrotad_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkrotad_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkrotadvwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler185); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler185); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlad1_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler186() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlad1_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler186); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler186); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlrotad1_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler187() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler187); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler187); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptglead1_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptglead1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler188() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptglead1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptglead1_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptglead1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptglead1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler188); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler188); 
   }
   }
});


jQuery('.admania_front_lay10afgrdptlnkad1_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler189() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkad1_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler189); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler189); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptlnkrotad1_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkrotad1clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler190() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkrotad1_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkrotad1_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkrotad1_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkrotad1vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler190); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler190); 
   }
   }
});

	jQuery('.admania_front_lay10afgrdpthlad2_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler191() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlad2_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler191); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler191); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlrotad2_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler192() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler192); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler192); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptglead2_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler193() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptglead2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptglead2_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptglead2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler193); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler193); 
   }
   }
});


jQuery('.admania_front_lay10afgrdptlnkad2_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler194() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkad2_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler194); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler194); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptlnkrotad2_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler195() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkrotad2_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkrotad2_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkrotad2_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler195); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler195); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlad3_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler196() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlad3_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler196); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler196); 
   }
   }
});

jQuery('.admania_front_lay10afgrdpthlrotad3_statics').on('click',function() {
    jQuery('.admania_ly10afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler197() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdpthlrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdpthlrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdpthlrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler197); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler197); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptglead3_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler198() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptglead3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptglead3_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptglead3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler198); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler198); 
   }
   }
});


jQuery('.admania_front_lay10afgrdptlnkad3_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler199() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkad3_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler199); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler199); 
   }
   }
});

jQuery('.admania_front_lay10afgrdptlnkrotad3_statics').on('click',function() {
    jQuery('.admania_ly10afgrdptlnkrotad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler200() {
	var admania_adhgtck = jQuery(".admania_front_lay10afgrdptlnkrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay10afgrdptlnkrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay10afgrdptlnkrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly10afgrdptlnkrotad3vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler200); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler200); 
   }
   }
});


jQuery('.admania_front_lay11afgrdpthlad3_statics').on('click',function() {
    jQuery('.admania_ly11afgrdpthlad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler201() {
	var admania_adhgtck = jQuery(".admania_front_lay11afgrdpthlad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay11afgrdpthlad3_statics').offset().top,
       hH = jQuery('.admania_front_lay11afgrdpthlad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly11afgrdpthlad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler201); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler201); 
   }
   }
});

jQuery('.admania_front_lay11afgrdpthlrotad3_statics').on('click',function() {
    jQuery('.admania_ly11afgrdpthlrotad2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler202() {
	var admania_adhgtck = jQuery(".admania_front_lay11afgrdpthlrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay11afgrdpthlrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay11afgrdpthlrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly11afgrdpthlrotad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler202); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler202); 
   }
   }
});

jQuery('.admania_front_lay11afgrdptglead3_statics').on('click',function() {
    jQuery('.admania_ly11afgrdptglead2clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler203() {
	var admania_adhgtck = jQuery(".admania_front_lay11afgrdptglead3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay11afgrdptglead3_statics').offset().top,
       hH = jQuery('.admania_front_lay11afgrdptglead3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly11afgrdptglead2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler203); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler203); 
   }
   }
});


jQuery('.admania_front_lay11afgrdptlnkad3_statics').on('click',function() {
    jQuery('.admania_ly11afgrdptlnkad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});


jQuery(window).on('scroll',function scrollHandler204() {
	var admania_adhgtck = jQuery(".admania_front_lay11afgrdptlnkad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay11afgrdptlnkad3_statics').offset().top,
       hH = jQuery('.admania_front_lay11afgrdptlnkad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly11afgrdptlnkad2vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler204); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler204); 
   }
   }
});

jQuery('.admania_front_lay11afgrdptlnkrotad3_statics').on('click',function() {
    jQuery('.admania_ly11afgrdptlnkrotad3clknm').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(window).on('scroll',function scrollHandler205() {
	var admania_adhgtck = jQuery(".admania_front_lay11afgrdptlnkrotad3_statics").length;
	if ( admania_adhgtck > 0) {	
    var hT = jQuery('.admania_front_lay11afgrdptlnkrotad3_statics').offset().top,
       hH = jQuery('.admania_front_lay11afgrdptlnkrotad3_statics').outerHeight(),
       wH = jQuery(window).height(),
       wS = jQuery(this).scrollTop();    
	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){  
    jQuery('.admania_ly11afgrdptlnkrotad3vwnm').html(function(i, val) { return val*1+1; });
	jQuery(window).off("scroll",scrollHandler205); 	
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
	return false;
   }
   else {
	  jQuery(window).off("scroll",scrollHandler205); 
   }
   }
});

if ( 'undefined' === typeof jetpackCarouselStrings ) {

jQuery('.gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'admaniagly-with-zoom admaniagly-img-mobile',
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
          
});
jQuery( '.gallery a img' ).each(function() {
        var gyimgrpsrc = jQuery( this ).attr('src');
        var gyimgrptit = jQuery( this ).parent().parent().next().text();        		
		jQuery( this ).parent().attr('href',gyimgrpsrc);		

});
}

jQuery(function() {
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 600) {
                jQuery('#admania-top').fadeIn();
            } else {
                jQuery('#admania-top').fadeOut();
            }
        });
        jQuery('#admania-top a').on('click', function() {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
	
	jQuery(".admania-ten-category10-slider").owlCarousel({		
    items : 1,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	
	jQuery(".admania-seven-slider").owlCarousel({		
    items : 1,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	
	jQuery(".admania-header-ten-top1-right").owlCarousel({	
    animateIn: 'fadeIn', // add this	 	
    items : 1,
	loop:true,
    nav:true,	
    autoplay:true,    
    autoplayHoverPause:true, 	
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	jQuery(".admania-eighth-slider").owlCarousel({		
    items : 1,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	
	jQuery(".admania-ten-category8-ftr-mid").owlCarousel({		
    items : 1,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
    
    jQuery(".admania-scroll-news").owlCarousel({	  
    animateIn: 'fadeIn', // add this	   	
	items : 1,
	loop:true,
	autoplay:true,   
    autoplayHoverPause:true, 
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:1
        },
        1199:{
            items:1
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	jQuery(".admania-ninth-slider").owlCarousel({		
    items : 3,	
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		1000:{
            items:2
        },
        1199:{
            items:3
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	
	jQuery(".admania-seven-slider2-new").owlCarousel({		
    items : 2,
	margin:40,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		768:{
            items:1
        },
		1023:{
            items:2
        },
        1199:{
            items:2
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
	jQuery(".admania-widget-builder-trendy-main").owlCarousel({		
    items : 3,
	margin:30,
	loop:true,
     nav:true,		  
	  responsive:{
        0:{
            items:1
        },        
		768:{
            items:2
        },
		1023:{
            items:3
        },
        1199:{
            items:3
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
jQuery(".admania-mgmowl").owlCarousel({		
    items : 4,
	loop:true,
     nav:true,	
	  margin:30,
	  responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		800:{
            items:1
        },
		900:{
            items:1
        },
		1000:{
            items:1
        },		
        1199:{
            items:4
        }
    },
	 	 
	navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
	  	
    }); 
	
var sttotal_height = jQuery('.admania-sitemaincontent,.admania-contentarea').outerHeight();
var sttotal_heightrd = (sttotal_height - 1000);
jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > sttotal_heightrd) {
            jQuery('#admania_sdfcsad').addClass('admaniashwad-visible');
        } else {
            jQuery('#admania_sdfcsad').removeClass('admaniashwad-visible');
        }
});

jQuery("#admania_owldemo1").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            950: {
                items: 1
            },
            1199: {
                items: 1
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
jQuery("#admania_owldemo2").owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 2
            },
            950: {
                items: 4
            },
            1199: {
                items: 4
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
	jQuery(".admania-owldemo15").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        nav: true,
		margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            950: {
                items: 2
            },
            1199: {
                items: 2
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
jQuery("#admania_owldemo3").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            950: {
                items: 1
            },
            1199: {
                items: 1
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
	jQuery(".admania-layt12-slider-main-owl").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,	
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			1022: {
                items: 1
            },
            1023: {
                items: 1
            },
            1199: {
                items: 1
            }
        },
        navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
});
jQuery('.admania-header2-social-icon').on('click', function(et){
	et.preventDefault();
	jQuery('.admania-header2-top').toggleClass('admania-header2-social-show');
});
	jQuery("#admania_boxedowldemo").owlCarousel({
        items: 3,
        autoplay: true,
		margin:30,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
				margin:0,
            },
            400: {
                items: 1,
				margin:0,
            },
            600: {
                items: 2,
				margin:0,
            },
            950: {
                items: 3
            },
            1199: {
                items: 3
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
	
jQuery('.admania-la5searchicon').on("click", function() {
            jQuery(".admania-la5searchicon .fa-search").toggleClass("fa-times");
            jQuery('.admania-lay5headersearchouter').toggle();
            jQuery('.admania-lay5headersearchouter input[type=search]').focus();
        });
jQuery('.admania-la8searchicon').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-la8searchicon .fa-search").toggleClass("fa-times");
    jQuery('.admania-lay8headersearchouter').toggle();
    jQuery('.admania-lay8headersearchouter input[type=search]').focus();
});
jQuery('.admania-header8-sclsearch').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-header8-sclsearch .fa-share-alt").toggleClass("fa-times");
    jQuery(".admania-header8-scl-outter").slideToggle("fast");	 
});
jQuery('.admania-la9searchicon').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-la9searchicon .fa-search").toggleClass("fa-times");
    jQuery('.admania_lay9headersearchouter').toggle();
    jQuery('.admania_lay9headersearchouter input[type=search]').focus();
});
jQuery('.admania-header9-sclsearch').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-header9-sclsearch .fa-share-alt").toggleClass("fa-times");
    jQuery(".admania-header9-scl-outter").slideToggle("fast");	 
});
jQuery('.admania-header10-sclsearch').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-header10-sclsearch .fa-share-alt").toggleClass("fa-times");
    jQuery(".admania-header10-scl-outter").slideToggle("fast");	 
});
jQuery('.admania-header-eleven-search-icon,.admania-header2-search-icon,.admania-tab-search-icon,.admania-header-search-close').on("click", function(e) {
	e.preventDefault();    
    jQuery("body").toggleClass("admania-tab-search-active");	 
});
jQuery('.admania-la10searchicon').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-la10searchicon .fa-search").toggleClass("fa-times");
    jQuery('.admania-lay10headersearchouter').toggle();
    jQuery('.admania-lay10headersearchouter input[type=search]').focus();
});
jQuery('.admania-header-sticky-search').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-header-sticky-search .fa-search").toggleClass("fa-times");
    jQuery('.admania-header-sticky-searchouter').toggle();
    jQuery('.admania-header-sticky').toggleClass('admania-header-sticky-show-search');	
});
jQuery('.admania-lyt4-header-right').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-lyt4-header-right .fa-search").toggleClass("fa-times");
    jQuery('.admania-lay4headerright').toggle();    
});
jQuery('.admania-lyt4-header-left').on("click", function(e) {
	e.preventDefault();
    jQuery(".admania-lyt4-header-left .fa-share-alt").toggleClass("fa-times");
    jQuery('.admania-lay4headerleft').toggle();    
});
jQuery("#admania_owldemo5").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        margin:20,
        nav: true,
        responsive: {
            0: {
                items: 1,
				margin:0,
            },
            400: {
                items: 1,
				margin:0,
            },
            600: {
                items: 1,
				 margin:0,
            },
            950: {
                items: 2
            },
            1199: {
                items: 2
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
jQuery("#admania_owldemo6").owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
		margin:20,
        nav: true,
        responsive: {
            0: {
                items: 1,
				margin:0,
            },
            400: {
                items: 1,
				margin:0,
            },
            600: {
                items: 2
            },
            950: {
                items: 4
            },
            1199: {
                items: 4
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
jQuery('.admania-ftrbtmwdgt').on('click', function(evnt) {
        evnt.preventDefault();
        jQuery('body').toggleClass('admania-rmvstckyad');
        return false;
    });
	
		
jQuery('.admania-adeditablead1 ,.admania-frtlvedtclsbtn').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania-shwoptionsad1');
        return false;
    });
	
   localStorage.refresh=localStorage.refresh!=null ? localStorage.refresh : 0;
   localStorage.setItem("refresh", parseInt(localStorage.refresh)+1);
 
   var admaniacounter = localStorage.refresh;
   
       
   for(var i=0; i < admaniacounter;i++) {
	   
		    
	   if((i % 2) == 0){
		  jQuery('.admania-lyt3rothad2').hide();
		  jQuery('.admania-lyt3rothad1').show(); 
		 
	   }
	   else { 
		  
		  jQuery('.admania-lyt3rothad2').show();
		  jQuery('.admania-lyt3rothad1').hide(); 
		   
	   }
	   
	   
   }
	
	

jQuery(window).on("scroll", function (e) { 
var scroll = jQuery(window).scrollTop();
if (scroll >= 150) {
	jQuery('body').addClass('admania_showheaderskyad');
	}
else {
	jQuery('body').removeClass('admania_showheaderskyad');
	}
});

jQuery(".admania_sstkyadclose").on("click", function(event) {
        event.preventDefault();
        jQuery('body').addClass("admania_hideheaderskyad");
		
});

	
jQuery('.owl-next').on('mouseover', function(){
  jQuery(this).parent().addClass('admania_nxtishover');
}).on('mouseout', function(){
  jQuery(this).parent().removeClass('admania_nxtishover');
});

jQuery('#admania_lyt1hdrgrotad_clvwstatics').on('click',function() {
    jQuery('.admania_rg1hd1rotadcontnum').html(function(i, val) { return val*1+1; });
	jQuery('.admania_lvedtsubmtbtn').trigger('click');
});

jQuery(".admania-mb-pm-menu-style,.admania-mb-pm-menu-close").on("click", function(evt) {
        evt.preventDefault();
        jQuery('html').toggleClass('admania-mb-pm-pushout-active');
});

jQuery(".admania-mb-scd-menu-style,.admania-mb-sd-menu-close").on("click", function(e) {
        e.preventDefault();
        jQuery('html').toggleClass('admania-mb-sd-pushout-active');
});

jQuery(".admania-lvedttblst a").on("click", function(event) {
        event.preventDefault();
        jQuery(this).addClass("admanialvedt_current");
        jQuery(this).siblings().removeClass("admanialvedt_current");
        var admania_lvedttab = jQuery(this).attr("href");
        jQuery(".admanialvedttb_tabmain").not(admania_lvedttab).css("display", "none");
        jQuery(admania_lvedttab).fadeIn();
});

var admania_imglnk = jQuery('.admania_lvedtimglnk1').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk1').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk2').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk2').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk3').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk3').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk4').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk4').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk5').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk5').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk6').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk6').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk7').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk7').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk8').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk8').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk9').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk9').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk10').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk10').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk11').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk11').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk12').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk12').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk13').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk13').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk14').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk14').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk15').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk15').hide();
    }
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk16').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk17').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk17').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk18').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk18').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk19').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk19').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk20').val();
if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk20').hide();
    }
var admania_imglnk = jQuery('.admania_lvedtimglnk21').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk21').hide();
    }
    var admania_imglnk = jQuery('.admania_lvedtimglnk22').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk22').hide();
    }
    var admania_imglnk = jQuery('.admania_lvedtimglnk23').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk23').hide();
    }
    var admania_imglnk = jQuery('.admania_lvedtimglnk24').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk24').hide();
    }
    var admania_imglnk = jQuery('.admania_lvedtimglnk25').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk25').hide();
    }
    var admania_imglnk = jQuery('.admania_lvedtimglnk26').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk26').hide();
    }
	var admania_imglnk = jQuery('.admania_lvedtimg_url60').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk60').hide();
    }
	var admania_imglnk = jQuery('.admania_lvedtimg_url60').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk60').hide();
    }
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url60').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk66').hide();
    }
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url61').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk60').hide();
    } 
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url62').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk61').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_lvedtimg_url62').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk62').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url62').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk62').hide();
    } 
	
	
	var admania_imglnk = jQuery('.admania_lvedtimg_url66').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk66').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url66').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk66').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_lvedtimg_url68').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk68').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url68').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk68').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_lvedtimg_url69').val();
    if (admania_imglnk == false) {
        jQuery('.admania_lvedtimglnk69').hide();
    } 
	
	var admania_imglnk = jQuery('.admania_rotlvedtimg_url69').val();
    if (admania_imglnk == false) {
        jQuery('.admania_rotlvedtimglnk69').hide();
    } 
	 
    jQuery('.admania_adimg_lvetmdupld1').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw1').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url1').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
    jQuery('.admania_adimg_lvetmdupld2').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw2').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url2').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld3').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw3').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url3').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld4').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw4').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url4').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld5').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw5').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url5').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld6').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw6').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url6').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld7').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw7').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url7').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupld73').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw73').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url73 ').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_rotlvedtimg_url73').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw73').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url73').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld8').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw8').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url8').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld9').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw9').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url9').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld10').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw10').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url10').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld11').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw11').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url11').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld12').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw12').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url12').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld13').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw13').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url13').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld14').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw14').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url14').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld15').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw15').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url15').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld16').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw16').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url16').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld17').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw17').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url17').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld18').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw18').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url18').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld19').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw19').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url19').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld20').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw20').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url20').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld21').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw21').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url21').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld22').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw22').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url22').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld23').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw23').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url23').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld24').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw24').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url24').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld25').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw25').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url25').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld26').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw26').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url26').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld27').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw27').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url27').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupld28').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw28').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url28').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn29').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw29').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url29').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn30').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw30').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url30').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn31').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw31').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url31').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn32').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw32').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url32').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn33').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw33').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url33').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn34').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw34').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url34').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
    jQuery('.admania_adimg_lvetmdupldbtn35').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw35').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url35').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn36').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw36').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url36').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn37').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw37').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url37').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn38').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw38').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url38').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn39').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw39').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url39').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn40').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw40').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url40').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn41').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw41').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url41').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn42').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw42').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url42').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn43').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw43').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url43').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn44').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw44').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url44').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupldbtn45').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw45').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url45').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
		jQuery('.admania_adimg_lvetmdupldbtn46').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw46').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url46').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
	jQuery('.admania_adimg_lvetmdupldbtn47').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw47').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url47').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
	jQuery('.admania_adimg_lvetmdupldbtn48').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw48').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url48').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn49').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw49').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url49').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn50').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw50').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url50').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn51').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw51').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url51').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn52').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw52').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url52').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn53').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw53').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url53').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn54').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw54').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url54').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn57').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw57').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url57').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld57').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw57').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url57').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn1').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw1').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url1').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn2').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw2').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url2').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	 
	jQuery('.admania_adimg_lvetmdupld66').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw66').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url66').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld68').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw68').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimglnk66').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg1_lvetmdupld68').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw68').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url68').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_rotadimg1_lvetmdupld68').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw68').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url68').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_adimg_lvetmdupld69').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw69').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url69').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_rotadimg_lvetmdupld69').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw69').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url69').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
	jQuery('.admania_adimg_lvetmdupldbtn70').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw70').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url70').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_rotadimg_lvetmdupld70').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw70').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url70').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn71').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw71').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url71').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_rotadimg1_lvetmdupld71').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw71').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url71').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
jQuery('.admania_adimg_lvetmdupldbtn72').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw72').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url72').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });	
	
	jQuery('.admania_rotadimg_lvetmdupld72').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw72').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url72').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	 
	
	jQuery('.admania_rotadimg_lvetmdupldbtn2').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw2').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url2').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupld62').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw62').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url62').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn63').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw63').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url63').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld22').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw22').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url22').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld27').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw27').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url27').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });

	
	 jQuery('.admania_rotadimg_lvetmdupld32').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw32').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url32').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	 jQuery('.admania_rotadimg_lvetmdupld39').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw39').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url39').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn37').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw37').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url37').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn36').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw36').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url36').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld38').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw38').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url38').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld39').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw39').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url39').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld40').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw40').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url40').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld41').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw41').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url41').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld10').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw10').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url10').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld11').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw11').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url11').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	 jQuery('.admania_rotadimg_lvetmdupld6').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw6').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url6').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
		 jQuery('.admania_rotadimg_lvetmdupldbtn3').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw3').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url3').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
		 jQuery('.admania_rotadimg_lvetmdupldbtn4').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw4').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url4').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	 jQuery('.admania_rotadimg_lvetmdupldbtn5').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw5').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url5').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
		 jQuery('.admania_rotadimg_lvetmdupldbtn7').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw7').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url7').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
		 jQuery('.admania_rotadimg_lvetmdupldbtn8').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw8').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url8').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
	jQuery('.admania_rotadimg_lvetmdupldbtn23').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw23').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url23').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
		jQuery('.admania_rotadimg_lvetmdupldbtn24').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw24').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url24').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
		jQuery('.admania_rotadimg_lvetmdupldbtn25').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw25').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url25').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn26').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw26').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url26').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
	jQuery('.admania_rotadimg_lvetmdupldbtn28').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw28').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url28').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn29').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw29').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url29').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
		jQuery('.admania_rotadimg_lvetmdupldbtn30').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw30').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url30').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	
		jQuery('.admania_rotadimg_lvetmdupldbtn33').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw33').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url33').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
		jQuery('.admania_rotadimg_lvetmdupldbtn34').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw34').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url34').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupldbtn65').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw65').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url65').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupld64').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw64').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url64').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn66').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw65').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url64').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	jQuery('.admania_adimg_lvetmdupld67').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw64').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url64').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupld67').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw64').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url64').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn67').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw68').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url61').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	 
	
	jQuery('.admania_rotadimg_lvetmdupld67').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw66').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url67').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_adimg_lvetmdupld68').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_lvedtimgshw66').attr('src', attachment.url);
            jQuery('.admania_lvedtimg_url61').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_rotadimg_lvetmdupldbtn68').on("click", function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        wp.media.editor.send.attachment = function(props, attachment) {
            var jQueryadmania_logoimg = jQuery('.admania_rotlvedtimgshw68').attr('src', attachment.url);
            jQuery('.admania_rotlvedtimg_url66').val(attachment.url);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    });
	
	jQuery('.admania_lvetresitem1').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem');
        return false;
    });
    jQuery('.admania_lvetresitem2').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem1');
        return false;
    });
    jQuery('.admania_lvetresitem3').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem2');
        return false;
    });
    jQuery('.admania_lvetresitem4').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem3');
        return false;
    });
    jQuery('.admania_lvetresitem5').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem4');
        return false;
    });
    jQuery('.admania_lvetresitem6').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem5');
        return false;
    });
    jQuery('.admania-lvetresitem7').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem6');
        return false;
    });
    jQuery('.admania_lvetresitem8').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem7');
        return false;
    });
    jQuery('.admania_lvetresitem9').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem8');
        return false;
    });
    jQuery('.admania_lvetresitem10').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem9');
        return false;
    });
    jQuery('.admania_lvetresitem11').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem10');
        return false;
    });
    jQuery('.admania_lvetresitem12').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem11');
        return false;
    });
    jQuery('.admania_lvetresitem13').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem12');
        return false;
    });
    jQuery('.admania_lvetresitem14').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem13');
        return false;
    });
    jQuery('.admania_lvetresitem15').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem14');
        return false;
    });
    jQuery('.admania_lvetresitem16').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem15');
        return false;
    });
    jQuery('.admania_lvetresitem17').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem16');
        return false;
    });
    jQuery('.admania_lvetresitem18').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem17');
        return false;
    });
    jQuery('.admania_lvetresitem19').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem18');
        return false;
    });
    jQuery('.admania_lvetresitem20').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem19');
        return false;
    });
    jQuery('.admania_lvetresitem21').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem20');
        return false;
    });
    jQuery('.admania_lvetresitem22').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem21');
        return false;
    });
    jQuery('.admania_lvetresitem23').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem22');
        return false;
    });
    jQuery('.admania_lvetresitem24').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem23');
        return false;
    });
    jQuery('.admania_lvetresitem25').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem24');
        return false;
    });
    jQuery('.admania_lvetresitem26').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem25');
        return false;
    });
    jQuery('.admania_lvetresitem27').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem26');
        return false;
    });
    jQuery('.admania_lvetresitem28').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem27');
        return false;
    });
    jQuery('.admania_lvetresitem29').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem28');
        return false;
    });
    jQuery('.admania_lvetresitem30').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem29');
        return false;
    });
    jQuery('.admania_lvetresitem31').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem30');
        return false;
    });
    jQuery('.admania_lvetresitem32').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem31');
        return false;
    });
    jQuery('.admania_lvetresitem33').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem32');
        return false;
    });
    jQuery('.admania_lvetresitem34').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem33');
        return false;
    });
    jQuery('.admania_lvetresitem35').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem34');
        return false;
    });
	jQuery('.admania_lvetresitem36').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem35');
        return false;
    });
	jQuery('.admania_lvetresitem37').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem36');
        return false;
    });
	jQuery('.admania_lvetresitem38').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem37');
        return false;
    });
	jQuery('.admania_lvetresitem39').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem38');
        return false;
    });
	jQuery('.admania_lvetresitem40').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem39');
        return false;
    });
	jQuery('.admania_lvetresitem41').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem40');
        return false;
    });
	jQuery('.admania_lvetresitem42').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem41');
        return false;
    });
	jQuery('.admania_lvetresitem43').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem42');
        return false;
    });
	jQuery('.admania_lvetresitem44').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem43');
        return false;
    });
	jQuery('.admania_lvetresitem45').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem44');
        return false;
    });
	jQuery('.admania_lvetresitem46').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem45');
        return false;
    });
	jQuery('.admania_lvetresitem47').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem46');
        return false;
    });
	jQuery('.admania_lvetresitem48').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem47');
        return false;
    });
	jQuery('.admania_lvetresitem49').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem48');
        return false;
    });
	
	jQuery('.admania_lvetresitem50').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem49');
        return false;
    });
	
	jQuery('.admania_lvetresitem51').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem50');
        return false;
    });
	
	jQuery('.admania_lvetresitem52').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem51');
        return false;
    });
	
	
	jQuery('.admania_lvetresitem53').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem52');
        return false;
    });
	
	jQuery('.admania_lvetresitem54').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem53');
        return false;
    });
	
	jQuery('.admania_lvetresitem55').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem54');
        return false;
    });
	
	jQuery('.admania_lvetresitem56').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem55');
        return false;
    });
	
	jQuery('.admania_lvetresitem57').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem56');
        return false;
    });
	
	jQuery('.admania_lvetresitem58').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem57');
        return false;
    });
	
	jQuery('.admania_lvetresitem59').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem58');
        return false;
    });
	
	jQuery('.admania_lvetresitem60').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem59');
        return false;
    });
	
	jQuery('.admania_lvetresitem61').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem60');
        return false;
    });
	
	jQuery('.admania_lvetresitem62').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem61');
        return false;
    });
	
	jQuery('.admania_lvetresitem63').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem62');
        return false;
    });
	
	jQuery('.admania_lvetresitem64').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem63');
        return false;
    });
	
	jQuery('.admania_lvetresitem65').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem64');
        return false;
    });
	
	jQuery('.admania_lvetresitem66').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem65');
        return false;
    });
	
	jQuery('.admania_lvetresitem67').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem66');
        return false;
    });
	
	jQuery('.admania_lvetresitem68').on('click', function(event) {
        event.preventDefault();
        jQuery('body').toggleClass('admania_lvedtrespectitem67');
        return false;
    });
	
	
	
	jQuery('.admania-frtlvedtclsbtn').on('click', function(event) {
        event.preventDefault();
        location.reload();
        return false;
    });
	
		
	
	jQuery('.admania_lvedtsubmtpbtn').on('click', function() { 
    
	jQuery('#admania-flvedsavealert').addClass('admania-flvedsaveload');
	
    });	
	
		
	var admania_lthd1adcnt = jQuery( ".admania_front_lay1lfhdad1" ).find( "textarea" );
			
	if(admania_lthd1adcnt.hasClass('admania_lt1hd1adcontval')) {
		jQuery( ".admania_lt1hd1adcontval" ).text('0');	
	}
	
	var admania_lthd1rotadcnt = jQuery( ".admania_front_lay1lfhdrotad1" ).find( "textarea" );
			
	if(admania_lthd1rotadcnt.hasClass('admania_lt1hd1rotadcontval')) {
		jQuery( ".admania_lt1hd1rotadcontval" ).text('0');	       		
	}
	
	var admania_lthd1gleadcnt = jQuery( ".admania_front_lay1lfhdglead1" ).find( "textarea" );
			
	if(admania_lthd1gleadcnt.hasClass('admania_lt1hd1gleadcontval')) {
		jQuery( ".admania_lt1hd1gleadcontval" ).text('0');	        		
	}
		
	var admania_lthd1lnkadcnt = jQuery( ".admania_front_lay1lfhdlinkad1" ).find( "textarea" );
			
	if(admania_lthd1gleadcnt.hasClass('admania_lt1hd1lnkadcontval')) {
		jQuery( ".admania_lt1hd1lnkadcontval" ).text('0');	        		
	}
	
	var admania_lthd1lnkrotadcnt = jQuery( ".admania_front_lay1lfhdrotlinkad1" ).find( "textarea" );
			
	if(admania_lthd1lnkrotadcnt.hasClass('admania_lt1hd1lnkrotadcontval')) {
		jQuery( ".admania_lt1hd1lnkrotadcontval" ).text('0');	        		
	}
	
	
	var admania_rghd1lnkadcnt = jQuery( ".admania_front_lay1rghdad1" ).find( "textarea" );
			
	if(admania_rghd1lnkadcnt.hasClass('admania_rg1hd1adcontval')) {
		jQuery( ".admania_rg1hd1adcontval" ).text('0');	        		
	}
	
	
	var admania_rghd1rotadcnt = jQuery( ".admania_front_lay1rghdrotad1" ).find( "textarea" );
			
	if(admania_rghd1rotadcnt.hasClass('admania_rg1hd1rotadcontval')) {
		jQuery( ".admania_rg1hd1rotadcontval" ).text('0');	        		
	}
	
	
	var admania_rghd1gleadcnt = jQuery( ".admania_front_lay1rghdglead1" ).find( "textarea" );
			
	if(admania_rghd1rotadcnt.hasClass('admania_rg1hd1gleadcontval')) {
		jQuery( ".admania_rg1hd1gleadcontval" ).text('0');	        		
	}
	
	var admania_rghd1lnkadcnt = jQuery( ".admania_front_lay1rghdlnkad1" ).find( "textarea" );
			
	if(admania_rghd1lnkadcnt.hasClass('admania_rg1hd1lnkadcontval')) {
		jQuery( ".admania_rg1hd1lnkadcontval" ).text('0');	        		
	}
	
	var admania_rghd1lnkrotadcnt = jQuery( ".admania_front_lay1rghdlnkrotad1" ).find( "textarea" );
			
	if(admania_rghd1lnkrotadcnt.hasClass('admania_rg1hd1lnkrotadcontval')) {
		jQuery( ".admania_rg1hd1lnkrotadcontval" ).text('0');	        		
	}
	
	var admania_ly1afhdlfadcnt = jQuery( ".admania_front_lay1afhdlfhlad" ).find( "textarea" );
			
	if(admania_ly1afhdlfadcnt.hasClass('admania_layt1afhdlfadval')) {
		jQuery( ".admania_layt1afhdlfadval" ).text('0');	        		
	}
	
	var admania_ly1afhdlfrotadcnt = jQuery( ".admania_front_lay1afhdlfhlrotad" ).find( "textarea" );
			
	if(admania_ly1afhdlfrotadcnt.hasClass('admania_layt1afhdlfrotadval')) {
		jQuery( ".admania_layt1afhdlfrotadval" ).text('0');	        		
	}
	
	var admania_ly1afhdlfgleadcnt = jQuery( ".admania_front_lay1afhdlfhlglead" ).find( "textarea" );
			
	if(admania_ly1afhdlfgleadcnt.hasClass('admania_layt1afhdlfgleadval')) {
		jQuery( ".admania_layt1afhdlfgleadval" ).text('0');	        		
	}
	
	var admania_ly1afhdlflnkadcnt = jQuery( ".admania_front_lay1afhdlfhllnkad" ).find( "textarea" );
			
	if(admania_ly1afhdlflnkadcnt.hasClass('admania_layt1afhdlflnkadval')) {
		jQuery( ".admania_layt1afhdlflnkadval" ).text('0');	        		
	}
	
	var admania_ly1afhdlflnkrotadcnt = jQuery( ".admania_front_lay1afhdlfhlrotlnkad" ).find( "textarea" );
			
	if(admania_ly1afhdlflnkrotadcnt.hasClass('admania_layt1afhdlflnkrotadval')) {
		jQuery( ".admania_layt1afhdlflnkrotadval" ).text('0');	        		
	}
	
	
	var admania_ly1afhdrgadcnt = jQuery( ".admania_front_lay1afhdrghlad" ).find( "textarea" );
			
	if(admania_ly1afhdrgadcnt.hasClass('admania_layt1afhdrgadval')) {
		jQuery( ".admania_layt1afhdrgadval" ).text('0');	        		
	}
	
	var admania_ly1afhdrgrotadcnt = jQuery( ".admania_front_lay1afhdrghlrotad" ).find( "textarea" );
			
	if(admania_ly1afhdrgrotadcnt.hasClass('admania_layt1afhdrgrotadval')) {
		jQuery( ".admania_layt1afhdrgrotadval" ).text('0');	        		
	}
	
	var admania_ly1afhdrggleadcnt = jQuery( ".admania_front_lay1afhdrgglead" ).find( "textarea" );
			
	if(admania_ly1afhdrggleadcnt.hasClass('admania_layt1afhdrggleadval')) {
		jQuery( ".admania_layt1afhdrggleadval" ).text('0');	        		
	}
	
	var admania_ly1afhdrglnkadcnt = jQuery( ".admania_front_lay1afhdrglnkad" ).find( "textarea" );
			
	if(admania_ly1afhdrglnkadcnt.hasClass('admania_layt1afhdrglnkadval')) {
		jQuery( ".admania_layt1afhdrglnkadval" ).text('0');	        		
	}
			
    var admania_ly1afhdrglnkrotadcnt = jQuery( ".admania_front_lay1afhdrglnkrotad" ).find( "textarea" );
			
	if(admania_ly1afhdrglnkrotadcnt.hasClass('admania_layt1afhdrglnkrotadval')) {
		jQuery( ".admania_layt1afhdrglnkrotadval" ).text('0');	        		
	}
	
	var admania_ly1afsldadcnt = jQuery( ".admania_front_lay1afsldad" ).find( "textarea" );
			
	if(admania_ly1afsldadcnt.hasClass('admania_layt1afsldadval')) {
		jQuery( ".admania_layt1afsldadval" ).text('0');	        		
	}
	
	var admania_ly1afsldrotadcnt = jQuery( ".admania_front_lay1afsldrotad" ).find( "textarea" );
			
	if(admania_ly1afsldrotadcnt.hasClass('admania_layt1afsldrotadval')) {
		jQuery( ".admania_layt1afsldrotadval" ).text('0');	        		
	}
	
	var admania_ly1afsldgleadcnt = jQuery( ".admania_front_lay1afsldglead" ).find( "textarea" );
			
	if(admania_ly1afsldgleadcnt.hasClass('admania_layt1afsldgleadval')) {
		jQuery( ".admania_layt1afsldgleadval" ).text('0');	        		
	}
	
	var admania_ly1afsldlnkadcnt = jQuery( ".admania_front_lay1afsldlnkad" ).find( "textarea" );
			
	if(admania_ly1afsldlnkadcnt.hasClass('admania_layt1afsldlnkadval')) {
		jQuery( ".admania_layt1afsldlnkadval" ).text('0');	        		
	}
	
	var admania_ly1afsldlnkrotadcnt = jQuery( ".admania_front_lay1afsldlnkrotad" ).find( "textarea" );
			
	if(admania_ly1afsldlnkrotadcnt.hasClass('admania_layt1afsldlnkrotadval')) {
		jQuery( ".admania_layt1afsldlnkrotadval" ).text('0');	        		
	}
	
	
	var admania_ly1afgrdpthlcnt = jQuery( ".admania_front_lay1afgrdpthlad" ).find( "textarea" );
			
	if(admania_ly1afgrdpthlcnt.hasClass('admania_layt1afgrdpthladval')) {
		jQuery( ".admania_layt1afgrdpthladval" ).text('0');	        		
	}
	
	var admania_ly1afgrdpthlrotcnt = jQuery( ".admania_front_lay1afgrdpthlrotad" ).find( "textarea" );
			
	if(admania_ly1afgrdpthlrotcnt.hasClass('admania_layt1afgrdpthlrotadval')) {
		jQuery( ".admania_layt1afgrdpthlrotadval" ).text('0');	        		
	}
	
	var admania_ly1afgrdptglecnt = jQuery( ".admania_front_lay1afgrdptglead" ).find( "textarea" );
			
	if(admania_ly1afgrdptglecnt.hasClass('admania_layt1afgrdptgleadval')) {
		jQuery( ".admania_layt1afgrdptgleadval" ).text('0');	        		
	}
	
	var admania_ly1afgrdptlnkcnt = jQuery( ".admania_front_lay1afgrdptlnkad" ).find( "textarea" );
			
	if(admania_ly1afgrdptlnkcnt.hasClass('admania_layt1afgrdptlnkadval')) {
		jQuery( ".admania_layt1afgrdptlnkadval" ).text('0');	        		
	}
	
	var admania_ly1afgrdptlnkrotcnt = jQuery( ".admania_front_lay1afgrdptlnkrotad" ).find( "textarea" );
			
	if(admania_ly1afgrdptlnkrotcnt.hasClass('admania_layt1afgrdptlnkrotadval')) {
		jQuery( ".admania_layt1afgrdptlnkrotadval" ).text('0');	        		
	}
	
	var admania_ly1sblfadcnt = jQuery( ".admania_front_lay1sblfad" ).find( "textarea" );
			
	if(admania_ly1sblfadcnt.hasClass('admania_layt1sblfadval')) {
		jQuery( ".admania_layt1sblfadval" ).text('0');	        		
	}
	
	var admania_ly1sblfrotadcnt = jQuery( ".admania_front_lay1sblfrotad" ).find( "textarea" );
			
	if(admania_ly1sblfrotadcnt.hasClass('admania_layt1sblfrotadval')) {
		jQuery( ".admania_layt1sblfrotadval" ).text('0');	        		
	}
	
	var admania_ly1sblfgleadcnt = jQuery( ".admania_front_lay1sblfglead" ).find( "textarea" );
			
	if(admania_ly1sblfgleadcnt.hasClass('admania_layt1sblfgleadval')) {
		jQuery( ".admania_layt1sblfgleadval" ).text('0');	        		
	}
	
	var admania_ly1sblflnkadcnt = jQuery( ".admania_front_lay1sblflnkad" ).find( "textarea" );
			
	if(admania_ly1sblflnkadcnt.hasClass('admania_layt1sblflnkadval')) {
		jQuery( ".admania_layt1sblflnkadval" ).text('0');	        		
	}
	
	var admania_ly1sblflnkrotadcnt = jQuery( ".admania_front_lay1sblflnkrotad" ).find( "textarea" );
			
	if(admania_ly1sblflnkrotadcnt.hasClass('admania_layt1sblflnkrotadval')) {
		jQuery( ".admania_layt1sblflnkrotadval" ).text('0');	        		
	}
	
	
	var admania_ly1sbrghladcnt = jQuery( ".admania_front_lay1sbrghlad" ).find( "textarea" );
			
	if(admania_ly1sbrghladcnt.hasClass('admania_layt1sbrghladval')) {
		jQuery( ".admania_layt1sbrghladval" ).text('0');	        		
	}
	
	var admania_ly1sbrghlrotadcnt = jQuery( ".admania_front_lay1sbrghlrotad" ).find( "textarea" );
			
	if(admania_ly1sbrghlrotadcnt.hasClass('admania_layt1sbrghlrotadval')) {
		jQuery( ".admania_layt1sbrghlrotadval" ).text('0');	        		
	}
    		
    var admania_ly1sbrggleadcnt = jQuery( ".admania_front_lay1sbrgglead" ).find( "textarea" );
			
	if(admania_ly1sbrggleadcnt.hasClass('admania_layt1sbrggleadval')) {
		jQuery( ".admania_layt1sbrggleadval" ).text('0');	        		
	}
	
	var admania_ly1sbrglnkadcnt = jQuery( ".admania_front_lay1sbrglnkad" ).find( "textarea" );
			
	if(admania_ly1sbrglnkadcnt.hasClass('admania_layt1sbrglnkadval')) {
		jQuery( ".admania_layt1sbrglnkadval" ).text('0');	        		
	}
	
	
	var admania_ly1sbrglnkrotadcnt = jQuery( ".admania_front_lay1sbrglnkrotad" ).find( "textarea" );
			
	if(admania_ly1sbrglnkrotadcnt.hasClass('admania_layt1sbrglnkrotadval')) {
		jQuery( ".admania_layt1sbrglnkrotadval" ).text('0');	        		
	}
	
	
	var admania_ly2tphdadcnt = jQuery( ".admania_front_lay2tphdad" ).find( "textarea" );
			
	if(admania_ly2tphdadcnt.hasClass('admania_layt2tphdadval')) {
		jQuery( ".admania_layt2tphdadval" ).text('0');	        		
	}
	
	var admania_ly2tphdrotadcnt = jQuery( ".admania_front_lay2tphdrotad" ).find( "textarea" );
			
	if(admania_ly2tphdrotadcnt.hasClass('admania_layt2tphdrotadval')) {
		jQuery( ".admania_layt2tphdrotadval" ).text('0');	        		
	}
	
	var admania_ly2tphdgleadcnt = jQuery( ".admania_front_lay2tphdglead" ).find( "textarea" );
			
	if(admania_ly2tphdgleadcnt.hasClass('admania_layt2tphdgleadval')) {
		jQuery( ".admania_layt2tphdgleadval" ).text('0');	        		
	}
	
	var admania_ly2tphdlnkadcnt = jQuery( ".admania_front_lay2tphdlnkad" ).find( "textarea" );
			
	if(admania_ly2tphdlnkadcnt.hasClass('admania_layt2tphdlnkadval')) {
		jQuery( ".admania_layt2tphdlnkadval" ).text('0');	        		
	}
	
	var admania_ly2tphdlnkrotadcnt = jQuery( ".admania_front_lay2tphdlnkrotad" ).find( "textarea" );
			
	if(admania_ly2tphdlnkrotadcnt.hasClass('admania_layt2tphdlnkrotadval')) {
		jQuery( ".admania_layt2tphdlnkrotadval" ).text('0');	        		
	}
	
	var admania_ly2afhdhladcnt = jQuery( ".admania_front_lay2afhdhlad" ).find( "textarea" );
			
	if(admania_ly2afhdhladcnt.hasClass('admania_layt2afhdhladval')) {
		jQuery( ".admania_layt2afhdhladval" ).text('0');	        		
	}
	
	var admania_ly2afhdhlrotadcnt = jQuery( ".admania_front_lay2afhdhlrotad" ).find( "textarea" );
			
	if(admania_ly2afhdhlrotadcnt.hasClass('admania_layt2afhdhlrotadval')) {
		jQuery( ".admania_layt2afhdhlrotadval" ).text('0');	        		
	}
	
	var admania_ly2afhdgleadcnt = jQuery( ".admania_front_lay2afhdglead" ).find( "textarea" );
			
	if(admania_ly2afhdgleadcnt.hasClass('admania_layt2afhdgleadval')) {
		jQuery( ".admania_layt2afhdgleadval" ).text('0');	        		
	}
	
	var admania_ly2afhdlnkadcnt = jQuery( ".admania_front_lay2afhdlnkad" ).find( "textarea" );
			
	if(admania_ly2afhdlnkadcnt.hasClass('admania_layt2afhdlnkadval')) {
		jQuery( ".admania_layt2afhdlnkadval" ).text('0');	        		
	}
	
	
	var admania_ly2afhdlnkrotadcnt = jQuery( ".admania_front_lay2afhdlnkrotad" ).find( "textarea" );
			
	if(admania_ly2afhdlnkrotadcnt.hasClass('admania_layt2afhdlnkrotadval')) {
		jQuery( ".admania_layt2afhdlnkrotadval" ).text('0');	        		
	}
	
	var admania_ly2afsldhladcnt = jQuery( ".admania_front_lay2afsldhlad" ).find( "textarea" );
			
	if(admania_ly2afsldhladcnt.hasClass('admania_lay2afsldhladval')) {
		jQuery( ".admania_lay2afsldhladval" ).text('0');	        		
	}
	
	var admania_ly2afsldhlrotadcnt = jQuery( ".admania_front_lay2afsldhlrotad" ).find( "textarea" );
			
	if(admania_ly2afsldhlrotadcnt.hasClass('admania_lay2afsldhlrotadval')) {
		jQuery( ".admania_lay2afsldhlrotadval" ).text('0');	        		
	}
	
	var admania_ly2afsldgleadcnt = jQuery( ".admania_front_lay2afsldglead" ).find( "textarea" );
			
	if(admania_ly2afsldgleadcnt.hasClass('admania_lay2afsldgleadval')) {
		jQuery( ".admania_lay2afsldgleadval" ).text('0');	        		
	}
	
	
	var admania_ly2afsldlnkadcnt = jQuery( ".admania_front_lay2afsldlnkad" ).find( "textarea" );
			
	if(admania_ly2afsldlnkadcnt.hasClass('admania_lay2afsldlnkadval')) {
		jQuery( ".admania_lay2afsldlnkadval" ).text('0');	        		
	}
	
	var admania_ly2afsldlnkrotadcnt = jQuery( ".admania_front_lay2afsldlnkrotad" ).find( "textarea" );
			
	if(admania_ly2afsldlnkrotadcnt.hasClass('admania_lay2afsldlnkrotadval')) {
		jQuery( ".admania_lay2afsldlnkrotadval" ).text('0');	        		
	}
	
	var admania_ly2lstptadcnt = jQuery( ".admania_front_lay2lstptad" ).find( "textarea" );
			
	if(admania_ly2lstptadcnt.hasClass('admania_lay2lstptadval')) {
		jQuery( ".admania_lay2lstptadval" ).text('0');	        		
	}
	
	
	var admania_ly2lstptrotadcnt = jQuery( ".admania_front_lay2lstptrotad" ).find( "textarea" );
			
	if(admania_ly2lstptrotadcnt.hasClass('admania_lay2lstptrotadval')) {
		jQuery( ".admania_lay2lstptrotadval" ).text('0');	        		
	}
	
	var admania_ly2lstptgleadcnt = jQuery( ".admania_front_lay2lstptglead" ).find( "textarea" );
			
	if(admania_ly2lstptgleadcnt.hasClass('admania_lay2lstptgleadval')) {
		jQuery( ".admania_lay2lstptgleadval" ).text('0');	        		
	}
	
	var admania_ly2lstptlnkadcnt = jQuery( ".admania_front_lay2lstptlnkad" ).find( "textarea" );
			
	if(admania_ly2lstptlnkadcnt.hasClass('admania_lay2lstptlnkadval')) {
		jQuery( ".admania_lay2lstptlnkadval" ).text('0');	        		
	}
	
	
	var admania_ly2lstptlnkrotadcnt = jQuery( ".admania_front_lay2lstptlnkrotad" ).find( "textarea" );
			
	if(admania_ly2lstptlnkrotadcnt.hasClass('admania_lay2lstptlnkrotadval')) {
		jQuery( ".admania_lay2lstptlnkrotadval" ).text('0');	        		
	}
	
	var admania_ly2bfftrhladcnt = jQuery( ".admania_front_lay2bfftrhlad" ).find( "textarea" );
			
	if(admania_ly2bfftrhladcnt.hasClass('admania_lay2bfftrhladval')) {
		jQuery( ".admania_lay2bfftrhladval" ).text('0');	        		
	}
	
	var admania_ly2bfftrhlrotadcnt = jQuery( ".admania_front_lay2bfftrhlrotad" ).find( "textarea" );
			
	if(admania_ly2bfftrhlrotadcnt.hasClass('admania_lay2bfftrhlrotadval')) {
		jQuery( ".admania_lay2bfftrhlrotadval" ).text('0');	        		
	}
	
	var admania_ly2bfftrgleadcnt = jQuery( ".admania_front_lay2bfftrglead" ).find( "textarea" );
			
	if(admania_ly2bfftrgleadcnt.hasClass('admania_lay2bfftrgleadval')) {
		jQuery( ".admania_lay2bfftrgleadval" ).text('0');	        		
	}
	
	
	var admania_ly2bfftrlnkadcnt = jQuery( ".admania_front_lay2bfftrlnkad" ).find( "textarea" );
			
	if(admania_ly2bfftrlnkadcnt.hasClass('admania_lay2bfftrlnkadval')) {
		jQuery( ".admania_lay2bfftrlnkadval" ).text('0');	        		
	}
	
	var admania_ly2bfftrlnkrotadcnt = jQuery( ".admania_front_lay2bfftrlnkrotad" ).find( "textarea" );
			
	if(admania_ly2bfftrlnkrotadcnt.hasClass('admania_lay2bfftrlnkrotadval')) {
		jQuery( ".admania_lay2bfftrlnkrotadval" ).text('0');	        		
	}
	
	var admania_lybfftradcnt = jQuery( ".admania_front_lybfftrad" ).find( "textarea" );
			
	if(admania_lybfftradcnt.hasClass('admania_laybfftradval')) {
		jQuery( ".admania_laybfftradval" ).text('0');	        		
	}
	
	var admania_lybfftrrotadcnt = jQuery( ".admania_front_lybfftrrotad" ).find( "textarea" );
			
	if(admania_lybfftrrotadcnt.hasClass('admania_laybfftrrotadval')) {
		jQuery( ".admania_laybfftrrotadval" ).text('0');	        		
	}
	
	var admania_lybfftrgleadcnt = jQuery( ".admania_front_lybfftrglead" ).find( "textarea" );
			
	if(admania_lybfftrgleadcnt.hasClass('admania_laybfftrgleadval')) {
		jQuery( ".admania_laybfftrgleadval" ).text('0');	        		
	}
	
	
	var admania_lybfftrlnkadcnt = jQuery( ".admania_front_lybfftrlnkad" ).find( "textarea" );
			
	if(admania_lybfftrlnkadcnt.hasClass('admania_laybfftrlnkadval')) {
		jQuery( ".admania_laybfftrlnkadval" ).text('0');	        		
	}
	
	var admania_lybfftrlnkrotadcnt = jQuery( ".admania_front_lybfftrlnkrotad" ).find( "textarea" );
			
	if(admania_lybfftrlnkrotadcnt.hasClass('admania_laybfftrlnkrotadval')) {
		jQuery( ".admania_laybfftrlnkrotadval" ).text('0');	        		
	}
	
	var admania_sghsyadcnt = jQuery( ".admania_front_sghsyad" ).find( "textarea" );
			
	if(admania_sghsyadcnt.hasClass('admania_sghsyadval')) {
		jQuery( ".admania_sghsyadval" ).text('0');	        		
	}
	
	var admania_sghsyrotadcnt = jQuery( ".admania_front_sghsyrotad" ).find( "textarea" );
			
	if(admania_sghsyrotadcnt.hasClass('admania_sghsyrotadval')) {
		jQuery( ".admania_sghsyrotadval" ).text('0');	        		
	}
	
	var admania_sghsygleadcnt = jQuery( ".admania_front_sghsyglead" ).find( "textarea" );
			
	if(admania_sghsygleadcnt.hasClass('admania_sghsygleadval')) {
		jQuery( ".admania_sghsygleadval" ).text('0');	        		
	}
	
	var admania_sghsylnkadcnt = jQuery( ".admania_front_sghsylnkad" ).find( "textarea" );
			
	if(admania_sghsylnkadcnt.hasClass('admania_sghsylnkadval')) {
		jQuery( ".admania_sghsylnkadval" ).text('0');	        		
	}
	
	var admania_sghsylnkrotadcnt = jQuery( ".admania_front_sghsylnkrotad" ).find( "textarea" );
			
	if(admania_sghsylnkrotadcnt.hasClass('admania_sghsylnkrotadval')) {
		jQuery( ".admania_sghsylnkrotadval" ).text('0');	        		
	}
	
	var admania_sgbfpctadcnt = jQuery( ".admania_front_sgbfpctad" ).find( "textarea" );
			
	if(admania_sgbfpctadcnt.hasClass('admania_sgbfpctadval')) {
		jQuery( ".admania_sgbfpctadval" ).text('0');	        		
	}
	
	var admania_sgbfpctrotadcnt = jQuery( ".admania_front_sgbfpctrotad" ).find( "textarea" );
			
	if(admania_sgbfpctrotadcnt.hasClass('admania_sgbfpctrotadval')) {
		jQuery( ".admania_sgbfpctrotadval" ).text('0');	        		
	}
	
	var admania_sgbfpctgleadcnt = jQuery( ".admania_front_sgbfpctglead" ).find( "textarea" );
			
	if(admania_sgbfpctgleadcnt.hasClass('admania_sgbfpctgleadval')) {
		jQuery( ".admania_sgbfpctgleadval" ).text('0');	        		
	}
	
	var admania_sgbfpctlnkadcnt = jQuery( ".admania_front_sgbfpctlnkad" ).find( "textarea" );
			
	if(admania_sgbfpctlnkadcnt.hasClass('admania_sgbfpctlnkadval')) {
		jQuery( ".admania_sgbfpctlnkadval" ).text('0');	        		
	}
	
	var admania_sgbfpctlnkrotadcnt = jQuery( ".admania_front_sgbfpctlnkrotad" ).find( "textarea" );
			
	if(admania_sgbfpctlnkrotadcnt.hasClass('admania_sgbfpctlnkrotadval')) {
		jQuery( ".admania_sgbfpctlnkrotadval" ).text('0');	        		
	}
	
	
	var admania_sgpttphladcnt = jQuery( ".admania_front_sgpttphlad" ).find( "textarea" );
			
	if(admania_sgpttphladcnt.hasClass('admania_sgpttphladval')) {
		jQuery( ".admania_sgpttphladval" ).text('0');	        		
	}
	
	
	var admania_sgpttphlrotadcnt = jQuery( ".admania_front_sgpttphlrotad" ).find( "textarea" );
			
	if(admania_sgpttphlrotadcnt.hasClass('admania_sgpttphlrotadval')) {
		jQuery( ".admania_sgpttphlrotadval" ).text('0');	        		
	}
	
	var admania_sgpttpgleadcnt = jQuery( ".admania_front_sgpttpglead" ).find( "textarea" );
			
	if(admania_sgpttpgleadcnt.hasClass('admania_sgpttpgleadval')) {
		jQuery( ".admania_sgpttpgleadval" ).text('0');	        		
	}
	
	var admania_sgpttplnkadcnt = jQuery( ".admania_front_sgpttplnkad" ).find( "textarea" );
			
	if(admania_sgpttplnkadcnt.hasClass('admania_sgpttplnkadval')) {
		jQuery( ".admania_sgpttplnkadval" ).text('0');	        		
	}
	
	var admania_sgpttplnkrotadcnt = jQuery( ".admania_front_sgpttplnkrotad" ).find( "textarea" );
			
	if(admania_sgpttplnkrotadcnt.hasClass('admania_sgpttplnkrotadval')) {
		jQuery( ".admania_front_sgpttplnkrotad" ).text('0');	        		
	}
	
	var admania_sgptnthparaadcnt = jQuery( ".admania_front_sgptnthparaad" ).find( "textarea" );
			
	if(admania_sgptnthparaadcnt.hasClass('admania_sgptnthparaadval')) {
		jQuery( ".admania_sgptnthparaadval" ).text('0');	        		
	}
	
	
	var admania_sgptnthpararotadcnt = jQuery( ".admania_front_sgptnthpararotad" ).find( "textarea" );
			
	if(admania_sgptnthpararotadcnt.hasClass('admania_sgptnthpararotadval')) {
		jQuery( ".admania_sgptnthpararotadval" ).text('0');	        		
	}
	
	var admania_sgptnthparagleadcnt = jQuery( ".admania_front_sgptnthparaglead" ).find( "textarea" );
			
	if(admania_sgptnthparagleadcnt.hasClass('admania_sgptnthparagleadval')) {
		jQuery( ".admania_sgptnthparagleadval" ).text('0');	        		
	}
	
	var admania_sgptnthparalnkadcnt = jQuery( ".admania_front_sgptnthparalnkad" ).find( "textarea" );
			
	if(admania_sgptnthparalnkadcnt.hasClass('admania_sgptnthparalnkadval')) {
		jQuery( ".admania_sgptnthparalnkadval" ).text('0');	        		
	}
	
	var admania_sgptnthparalnkrotadcnt = jQuery( ".admania_front_sgptnthparalnkrotad" ).find( "textarea" );
			
	if(admania_sgptnthparalnkrotadcnt.hasClass('admania_sgptnthparalnkrotadval')) {
		jQuery( ".admania_sgptnthparalnkrotadval" ).text('0');	        		
	}
	
	var admania_sgptbtadcnt = jQuery( ".admania_front_sgptbtad" ).find( "textarea" );
			
	if(admania_sgptbtadcnt.hasClass('admania_sgptbtadval')) {
		jQuery( ".admania_sgptbtadval" ).text('0');	        		
	}
	
	var admania_sgptbtrotadcnt = jQuery( ".admania_front_sgptbtrotad" ).find( "textarea" );
			
	if(admania_sgptbtrotadcnt.hasClass('admania_sgptbtrotadval')) {
		jQuery( ".admania_sgptbtrotadval" ).text('0');	        		
	}
	
	var admania_sgptbtgleadcnt = jQuery( ".admania_front_sgptbtglead" ).find( "textarea" );
			
	if(admania_sgptbtgleadcnt.hasClass('admania_sgptbtgleadval')) {
		jQuery( ".admania_sgptbtgleadval" ).text('0');	        		
	}
	
	var admania_sgptbtlnkadcnt = jQuery( ".admania_front_sgptbtlnkad" ).find( "textarea" );
			
	if(admania_sgptbtlnkadcnt.hasClass('admania_sgptbtlnkadval')) {
		jQuery( ".admania_sgptbtlnkadval" ).text('0');	        		
	}
	
	var admania_sgptbtlnkrotadcnt = jQuery( ".admania_front_sgptbtlnkrotad" ).find( "textarea" );
			
	if(admania_sgptbtlnkrotadcnt.hasClass('admania_sgptbtlnkrotadval')) {
		jQuery( ".admania_sgptbtlnkrotadval" ).text('0');	        		
	}
	
	
	var admania_sgafopbxad1cnt = jQuery( ".admania_front_sgafopbxad1" ).find( "textarea" );
			
	if(admania_sgafopbxad1cnt.hasClass('admania_sgafopbxad1val')) {
		jQuery( ".admania_sgafopbxad1val" ).text('0');	        		
	}
	
	var admania_sgafopbxad2cnt = jQuery( ".admania_front_sgafopbxad2" ).find( "textarea" );
			
	if(admania_sgafopbxad2cnt.hasClass('admania_sgafopbxad2val')) {
		jQuery( ".admania_sgafopbxad2val" ).text('0');	        		
	}
	
	var admania_sgafopbxrotad2cnt = jQuery( ".admania_front_sgafopbxrotad2" ).find( "textarea" );
			
	if(admania_sgafopbxrotad2cnt.hasClass('admania_sgafopbxrotad2val')) {
		jQuery( ".admania_sgafopbxrotad2val" ).text('0');	        		
	}
	
	var admania_sgafopbxrotad1cnt = jQuery( ".admania_front_sgafopbxrotad1" ).find( "textarea" );
			
	if(admania_sgafopbxrotad1cnt.hasClass('admania_sgafopbxrotad1val')) {
		jQuery( ".admania_sgafopbxrotad1val" ).text('0');	        		
	}
	
	var admania_sgafopbxglead1cnt = jQuery( ".admania_front_sgafopbxglead1" ).find( "textarea" );
			
	if(admania_sgafopbxglead1cnt.hasClass('admania_sgafopbxglead1val')) {
		jQuery( ".admania_sgafopbxglead1val" ).text('0');	        		
	}
	
	var admania_sgafopbxglead2cnt = jQuery( ".admania_front_sgafopbxglead2" ).find( "textarea" );
			
	if(admania_sgafopbxglead2cnt.hasClass('admania_sgafopbxglead2val')) {
		jQuery( ".admania_sgafopbxglead2val" ).text('0');	        		
	}
	
	var admania_sgafopbxlnkad1cnt = jQuery( ".admania_front_sgafopbxlnkad1" ).find( "textarea" );
			
	if(admania_sgafopbxlnkad1cnt.hasClass('admania_sgafopbxlnkad1val')) {
		jQuery( ".admania_sgafopbxlnkad1val" ).text('0');	        		
	}
	
	var admania_sgafopbxlnkad2cnt = jQuery( ".admania_front_sgafopbxlnkad2" ).find( "textarea" );
			
	if(admania_sgafopbxlnkad2cnt.hasClass('admania_sgafopbxlnkad2val')) {
		jQuery( ".admania_sgafopbxlnkad2val" ).text('0');	        		
	}
	
	var admania_sgafopbxlnkrotad1cnt = jQuery( ".admania_front_sgafopbxlnkrotad1" ).find( "textarea" );
			
	if(admania_sgafopbxlnkrotad1cnt.hasClass('admania_sgafopbxlnkrotad1val')) {
		jQuery( ".admania_sgafopbxlnkrotad1val" ).text('0');	        		
	}
	
	var admania_sgafopbxlnkrotad2cnt = jQuery( ".admania_front_sgafopbxlnkrotad2" ).find( "textarea" );
			
	if(admania_sgafopbxlnkrotad2cnt.hasClass('admania_sgafopbxlnkrotad2val')) {
		jQuery( ".admania_sgafopbxlnkrotad2val" ).text('0');	        		
	}
	
	var admania_lay7rghd1lnkadcnt = jQuery( ".admania_front_lay7rghdad1" ).find( "textarea" );
			
	if(admania_lay7rghd1lnkadcnt.hasClass('admania_lay7rg1hd1adcontval')) {
		jQuery( ".admania_lay7rg1hd1adcontval" ).text('0');	        		
	}
	
	
	var admania_lay7rghd1rotadcnt = jQuery( ".admania_front_lay7rghdrotad1" ).find( "textarea" );
			
	if(admania_lay7rghd1rotadcnt.hasClass('admania_lay7rg1hd1rotadcontval')) {
		jQuery( ".admania_lay7rg1hd1rotadcontval" ).text('0');	        		
	}
	
	
	var admania_lay7rghd1gleadcnt = jQuery( ".admania_front_lay7rghdglead1" ).find( "textarea" );
			
	if(admania_lay7rghd1rotadcnt.hasClass('admania_lay7rg1hd1gleadcontval')) {
		jQuery( ".admania_lay7rg1hd1gleadcontval" ).text('0');	        		
	}
	
	var admania_lay7rghd1lnkadcnt = jQuery( ".admania_front_lay7rghdlnkad1" ).find( "textarea" );
			
	if(admania_rghd1lnkadcnt.hasClass('admania_rg1hd1lnkadcontval')) {
		jQuery( ".admania_lay7rg1hd1lnkadcontval" ).text('0');	        		
	}
	
	var admania_lay7rghd1lnkrotadcnt = jQuery( ".admania_front_lay7rghdlnkrotad1" ).find( "textarea" );
			
	if(admania_lay7rghd1lnkrotadcnt.hasClass('admania_lay7rg1hd1lnkrotadcontval')) {
		jQuery( ".admania_lay7rg1hd1lnkrotadcontval" ).text('0');	        		
	}
		
			
    var admania_fendsvtm;
	
	jQuery('form#admania-frontlvedtr-saveoptions').submit(function() {
		  
			  var data = jQuery(this).serialize();
			 
			  jQuery.post(admaniastchk.admania_fedajaxurl, data, function(response) {
             			 			 
			  if(response == 1) {
				  
			  jQuery('#admania-flvedsavealert').removeClass('admania-flvedsaveload');
				   
			  jQuery('#admania-flvedsavealert').addClass('admania-flvedsavedone');
			  
			  admania_fendsvtm = setTimeout(admania_fendlvedt_fademessage, 1000);
 
			  }
			  else if( response == 2 ){
			  
			  location.reload();
			  
			  }
			  
			  else {
				   return false;
			  }
			  
			  });
			  return false;
		  });
		
		  function admania_fendlvedt_fademessage() {
				  
			  				  
			   jQuery('#admania-flvedsavealert').fadeOut(function() {

				jQuery('#admania-flvedsavealert').removeClass('admania-flvedsavedone');
				
				jQuery('#admania-flvedsavealert').removeClass('admania-flvedsaveload');

			  });
			  
			  clearTimeout(admania_fendsvtm);
			  
		  }
		
		
	
		
});



! function(e, t) {
	"use strict";
    t("nav .sub-menu,.widget_nav_menu .sub-menu,.widget_pages .children,.widget_categories .children").before('<button class="admania_submenutoggle" role="button" aria-pressed="false"></button>'), t(".admania-menutoggle, .admania_submenutoggle").on("click", function() {
        var e = t(this);
        e.attr("aria-pressed", function(e, t) {
            return "false" === t ? "true" : "false"
        }), e.toggleClass("admania-mnuactivated"), e.next(".sub-menu,.children").slideToggle("fast")
    })
}(this, jQuery);

		
if(admaniastchk.admania_adblockact != '') {

(function(window) {
	"use strict";
	var AdmaniaAdBlock = function(options) {
		this._options = {
			checkOnLoad:		false,
			resetOnEnd:			false,
			loopCheckTime:		50,
			loopMaxNumber:		5,
			baitClass:			'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
			baitStyle:			'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;',
			debug:				false
		};
		this._var = {
			version:			'3.2.1',
			bait:				null,
			checking:			false,
			loop:				null,
			loopNumber:			0,
			event:				{ detected: [], notDetected: [] }
		};
		if(options !== undefined) {
			this.setOption(options);
		}
		var self = this;
		var eventCallback = function() {
			setTimeout(function() {
				if(self._options.checkOnLoad === true) {
					if(self._options.debug === true) {
						self._log('onload->eventCallback', 'A check loading is launched');
					}
					if(self._var.bait === null) {
						self._creatBait();
					}
					setTimeout(function() {
						self.check();
					}, 1);
				}
			}, 1);
		};
		if(window.addEventListener !== undefined) {
			window.addEventListener('load', eventCallback, false);
		} else {
			window.attachEvent('onload', eventCallback);
		}
	};
	AdmaniaAdBlock.prototype._options = null;
	AdmaniaAdBlock.prototype._var = null;
	AdmaniaAdBlock.prototype._bait = null;
	
	AdmaniaAdBlock.prototype._log = function(method, message) {
		console.log('[AdmaniaAdBlock]['+method+'] '+message);
	};
	
	AdmaniaAdBlock.prototype.setOption = function(options, value) {
		if(value !== undefined) {
			var key = options;
			options = {};
			options[key] = value;
		}
		for(var option in options) {
			this._options[option] = options[option];
			if(this._options.debug === true) {
				this._log('setOption', 'The option "'+option+'" he was assigned to "'+options[option]+'"');
			}
		}
		return this;
	};
	
	AdmaniaAdBlock.prototype._creatBait = function() {
		var bait = document.createElement('div');
			bait.setAttribute('class', this._options.baitClass);
			bait.setAttribute('style', this._options.baitStyle);
		this._var.bait = window.document.body.appendChild(bait);
		
		this._var.bait.offsetParent;
		this._var.bait.offsetHeight;
		this._var.bait.offsetLeft;
		this._var.bait.offsetTop;
		this._var.bait.offsetWidth;
		this._var.bait.clientHeight;
		this._var.bait.clientWidth;
		
		if(this._options.debug === true) {
			this._log('_creatBait', 'Bait has been created');
		}
	};
	AdmaniaAdBlock.prototype._destroyBait = function() {
		window.document.body.removeChild(this._var.bait);
		this._var.bait = null;
		
		if(this._options.debug === true) {
			this._log('_destroyBait', 'Bait has been removed');
		}
	};
	
	AdmaniaAdBlock.prototype.check = function(loop) {
		if(loop === undefined) {
			loop = true;
		}
		
		if(this._options.debug === true) {
			this._log('check', 'An audit was requested '+(loop===true?'with a':'without')+' loop');
		}
		
		if(this._var.checking === true) {
			if(this._options.debug === true) {
				this._log('check', 'A check was canceled because there is already an ongoing');
			}
			return false;
		}
		this._var.checking = true;
		
		if(this._var.bait === null) {
			this._creatBait();
		}
		
		var self = this;
		this._var.loopNumber = 0;
		if(loop === true) {
			this._var.loop = setInterval(function() {
				self._checkBait(loop);
			}, this._options.loopCheckTime);
		}
		setTimeout(function() {
			self._checkBait(loop);
		}, 1);
		if(this._options.debug === true) {
			this._log('check', 'A check is in progress ...');
		}
		
		return true;
	};
	AdmaniaAdBlock.prototype._checkBait = function(loop) {
		var detected = false;
		
		if(this._var.bait === null) {
			this._creatBait();
		}
		
		if(window.document.body.getAttribute('abp') !== null
		|| this._var.bait.offsetParent === null
		|| this._var.bait.offsetHeight == 0
		|| this._var.bait.offsetLeft == 0
		|| this._var.bait.offsetTop == 0
		|| this._var.bait.offsetWidth == 0
		|| this._var.bait.clientHeight == 0
		|| this._var.bait.clientWidth == 0) {
			detected = true;
		}
		if(window.getComputedStyle !== undefined) {
			var baitTemp = window.getComputedStyle(this._var.bait, null);
			if(baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
				detected = true;
			}
		}
		
		if(this._options.debug === true) {
			this._log('_checkBait', 'A check ('+(this._var.loopNumber+1)+'/'+this._options.loopMaxNumber+' ~'+(1+this._var.loopNumber*this._options.loopCheckTime)+'ms) was conducted and detection is '+(detected===true?'positive':'negative'));
		}
		
		if(loop === true) {
			this._var.loopNumber++;
			if(this._var.loopNumber >= this._options.loopMaxNumber) {
				this._stopLoop();
			}
		}
		
		if(detected === true) {
			this._stopLoop();
			this._destroyBait();
			this.emitEvent(true);
			if(loop === true) {
				this._var.checking = false;
			}
		} else if(this._var.loop === null || loop === false) {
			this._destroyBait();
			this.emitEvent(false);
			if(loop === true) {
				this._var.checking = false;
			}
		}
	};
	AdmaniaAdBlock.prototype._stopLoop = function(detected) {
		clearInterval(this._var.loop);
		this._var.loop = null;
		this._var.loopNumber = 0;
		
		if(this._options.debug === true) {
			this._log('_stopLoop', 'A loop has been stopped');
		}
	};
	
	AdmaniaAdBlock.prototype.emitEvent = function(detected) {
		if(this._options.debug === true) {
			this._log('emitEvent', 'An event with a '+(detected===true?'positive':'negative')+' detection was called');
		}
		
		var fns = this._var.event[(detected===true?'detected':'notDetected')];
		for(var i in fns) {
			if(this._options.debug === true) {
				this._log('emitEvent', 'Call function '+(parseInt(i)+1)+'/'+fns.length);
			}
			if(fns.hasOwnProperty(i)) {
				fns[i]();
			}
		}
		if(this._options.resetOnEnd === true) {
			this.clearEvent();
		}
		return this;
	};
	AdmaniaAdBlock.prototype.clearEvent = function() {
		this._var.event.detected = [];
		this._var.event.notDetected = [];
		
		if(this._options.debug === true) {
			this._log('clearEvent', 'The event list has been cleared');
		}
	};
	
	AdmaniaAdBlock.prototype.on = function(detected, fn) {
		this._var.event[(detected===true?'detected':'notDetected')].push(fn);
		if(this._options.debug === true) {
			this._log('on', 'A type of event "'+(detected===true?'detected':'notDetected')+'" was added');
		}
		
		return this;
	};
	AdmaniaAdBlock.prototype.onDetected = function(fn) {
		return this.on(true, fn);
	};
	AdmaniaAdBlock.prototype.onNotDetected = function(fn) {
		return this.on(false, fn);
	};
	
	window.AdmaniaAdBlock = AdmaniaAdBlock;
	
	if(window.admaniaAdBlock === undefined) {
		window.admaniaAdBlock = new AdmaniaAdBlock({
			checkOnLoad: true,
			resetOnEnd: true
		});
	}
})(window);


	
function adBlockDetected() {
	jQuery('#admania_adb_enabled').show('fast');			
}
function adBlockNotDetected() {
	jQuery('#admania_adb_enabled').hide('fast');			
}
if(typeof admaniaAdBlock === 'undefined') {
			adBlockDetected();
} else {
	admaniaAdBlock.setOption({ debug: true });
	admaniaAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
}

}




if (admaniastchk.admania_chkspdpg) {

if (admaniastchk.admania_wpmbck) {	
if ((admaniastchk.admania_chkdisplay)) {
    if (admaniastchk.admania_chksptoptions == 'amsplyt2') {
        ! function(t) {
            "use strict";
            t(function() {
                if (t(".admania_lay3entryleftad").length > 0) {
                    t(".admania-entrycontent").css(t(".admania-entrycontent").outerHeight() < t(".admania-entrycontent").outerHeight() && t(window).width() > 767 ? {
                        height: t(".admania-entrycontent").outerHeight()
                    } : {
                        height: "auto"
                    });
                    var s = {
                        $el: t(".admania_lay3entryleftad"),
                        content_h: t(".admania-entrycontent").outerHeight() > t(".admania-entrycontent").outerHeight(),
                        content_l: t(".admania-entrycontent").offset().left + t(".admania-entrycontent").width(),
                        sticky_threshold: 0,
                        sticky_t: 100,
                        fade_threshold: t(".admania_lay3entryleftad").hasClass("admania_sidebarsticky") ? t(".admania_lay3entryleftad").parent().outerHeight() + t(".admania_lay3entryleftad").parent().offset().top - .5 * t(".admania_lay3entryleftad").height() : t(".admania_lay3entryleftad").offset().top - .5 * t(".admania_lay3entryleftad").height(),
                        sticky_start: t(".admania_lay3entryleftad").offset().top + 36,
                        sticky_stop: t(".admania-entryfooter ").offset().top - t(".admania_lay3entryleftad").height() - 108,
                        sticky_width: t(".admania_lay3entryleftad").parent().width(),
                        recalc: function() {
                            this.content_h = t(".admania-entrycontent").outerHeight(), this.content_l = t(".admania-entrycontent").offset().left - 14, this.fade_threshold = t(".admania_lay3entryleftad").hasClass("admania_sidebarsticky") ? t(".admania_lay3entryleftad").parent().outerHeight() + t(".admania_lay3entryleftad").parent().offset().top - .5 * t(".admania_lay3entryleftad").height() : t(".admania_lay3entryleftad").offset().top - .5 * t(".admania_lay3entryleftad").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania_lay3entryleftad").parent().width(), this.sticky_start = t(".admania_lay3entryleftad").hasClass("admania_sidebarsticky") ? t(".admania_lay3entryleftad").parent().outerHeight() + t(".admania_lay3entryleftad").parent().offset().top - 36 : t(".admania_lay3entryleftad").offset().top - 36, this.sticky_stop = t(".admania-entryfooter ").offset().top - t(".admania_lay3entryleftad").height() - 108
                        },
                        sticky: function() {
                            if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                                if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                    var s = this.sticky_stop - t(document).scrollTop() + 36;
                                    this.$el.css({
                                        top: s + "px",
                                        width: this.sticky_width + "px"
                                    })
                                } else this.$el.css({
                                    top: "36px",
                                    width: this.sticky_width + "px"
                                });
                            else this.$el.css({
                                top: "0px",
                                width: "auto"
                            }), this.$el.removeClass("admania_sidebarsticky")
                        },
                        fade: function() {
                            t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                        },
                        init: function() {
                            var s = this;
                            s.recalc(), t(window).on("scroll", function() {
                                s.recalc(), s.sticky(), s.fade()
                            }), t(window).on("resize", function() {
                                t(".admania-entrycontent").css({
                                    height: "auto"
                                }), t(".admania-entrycontent").css(t(".admania-entrycontent").outerHeight() < t(".admania-entrycontent").outerHeight() && t(window).width() > 767 ? {
                                    height: t(".admania-entrycontent").outerHeight()
                                } : {
                                    height: "auto"
                                }), s.recalc(), s.sticky(), s.fade()
                            })
                        }
                    };
                    s.init()
                
                if (t(".admania-entrycontent").length > 0) {
                    var e = {
                        $el: t(".social-share-top-live"),
                        content_h: t(".admania-entrycontent").outerHeight(),
                        content_l: t(".admania-entrycontent").offset().left - 14,
                        sticky_threshold: 0,
                        sticky_t: 100,
                        sticky_start: t(".admania-entrycontent").offset().top,
                        sticky_stop: t(".admania-entryfooter ").offset().top - t(".admania-entrycontent").outerHeight() - 150,
                        recalc: function() {
                            this.content_h = t(".admania-entrycontent").outerHeight(), this.content_l = t(".admania-entrycontent").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-entrycontent").offset().top, this.sticky_stop = t(".admania-entryfooter ").offset().top - t(".admania-entrycontent").outerHeight() - 150
                        },
                        sticky: function() {
                            if (t(document).scrollTop() > this.sticky_start)
                                if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                    var s = this.sticky_stop - t(document).scrollTop() + 100;
                                    this.$el.css({
                                        top: s + "px",
                                        left: this.content_l + "px"
                                    })
                                } else this.$el.css({
                                    top: "100px",
                                    left: this.content_l + "px"
                                });
                            else this.$el.css({
                                top: "100px",
                                left: "-14px"
                            }), this.$el.removeClass("admania_sidebarsticky")
                        },
                        resize: function() {},
                        init: function() {
                            var s = this;
                            t(window).on("scroll", function() {
                                s.sticky()
                            }), t(window).on("resize", function() {
                                s.recalc(), s.sticky()
                            })
                        }
                    };
                    e.init()
                }
				}
            });
        }(jQuery);
    }
	
	if (admaniastchk.admania_chksptoptions == 'amsplyt5') {
		
        ! function(t) {
            "use strict";
            t(function() {
                if (t(".admania-post-layt5-right-ad").length > 0) {
                    t(".admania-entrycontent").css(t(".admania-entrycontent").outerHeight() < t(".admania-entrycontent").outerHeight() && t(window).width() > 767 ? {
                        height: t(".admania-entrycontent").outerHeight()
                    } : {
                        height: "auto"
                    });
                    var s = {
                        $el: t(".admania-post-layt5-right-ad"),
                        content_h: t(".admania-entrycontent").outerHeight() > t(".admania-entrycontent").outerHeight(),
                        content_l: t(".admania-entrycontent").offset().left + t(".admania-entrycontent").width(),
                        sticky_threshold: 0,
                        sticky_t: 100,
                        fade_threshold: t(".admania-post-layt5-right-ad").hasClass("admania_sidebarsticky") ? t(".admania-post-layt5-right-ad").parent().outerHeight() + t(".admania-post-layt5-right-ad").parent().offset().top - .5 * t(".admania-post-layt5-right-ad").height() : t(".admania-post-layt5-right-ad").offset().top - .5 * t(".admania-post-layt5-right-ad").height(),
                        sticky_start: t(".admania-post-layt5-right-ad").offset().top + 36,
                        sticky_stop: t(".admania-entryfooter").offset().top - t(".admania-post-layt5-right-ad").height() - 108,
                        sticky_width: t(".admania-post-layt5-right-ad").parent().width(),
                        recalc: function() {
                            this.content_h = t(".admania-entrycontent").outerHeight(), this.content_l = t(".admania-entrycontent").offset().left - 14, this.fade_threshold = t(".admania-post-layt5-right-ad").hasClass("admania_sidebarsticky") ? t(".admania-post-layt5-right-ad").parent().outerHeight() + t(".admania-post-layt5-right-ad").parent().offset().top - .5 * t(".admania-post-layt5-right-ad").height() : t(".admania-post-layt5-right-ad").offset().top - .5 * t(".admania-post-layt5-right-ad").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania-post-layt5-right-ad").parent().width(), this.sticky_start = t(".admania-post-layt5-right-ad").hasClass("admania_sidebarsticky") ? t(".admania-post-layt5-right-ad").parent().outerHeight() + t(".admania-post-layt5-right-ad").parent().offset().top - 36 : t(".admania-post-layt5-right-ad").offset().top - 36, this.sticky_stop = t(".admania-entryfooter ").offset().top - t(".admania-post-layt5-right-ad").height() - 108
                        },
                        sticky: function() {
                            if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                                if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                    var s = this.sticky_stop - t(document).scrollTop() + 36;
                                    this.$el.css({
                                        top: s + "px",
                                        width: this.sticky_width + "px"
                                    })
                                } else this.$el.css({
                                    top: "36px",
                                    width: this.sticky_width + "px"
                                });
                            else this.$el.css({
                                top: "0px",
                                width: "auto"
                            }), this.$el.removeClass("admania_sidebarsticky")
                        },
                        fade: function() {
                            t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                        },
                        init: function() {
                            var s = this;
                            s.recalc(), t(window).on("scroll", function() {
                                s.recalc(), s.sticky(), s.fade()
                            }), t(window).on("resize", function() {
                                t(".admania-entrycontent").css({
                                    height: "auto"
                                }), t(".admania-entrycontent").css(t(".admania-entrycontent").outerHeight() < t(".admania-entrycontent").outerHeight() && t(window).width() > 767 ? {
                                    height: t(".admania-entrycontent").outerHeight()
                                } : {
                                    height: "auto"
                                }), s.recalc(), s.sticky(), s.fade()
                            })
                        }
                    };
                    s.init()
                
                if (t(".admania-entrycontent").length > 0) {
                    var e = {
                        $el: t(".social-share-top-live"),
                        content_h: t(".admania-entrycontent").outerHeight(),
                        content_l: t(".admania-entrycontent").offset().left - 14,
                        sticky_threshold: 0,
                        sticky_t: 100,
                        sticky_start: t(".admania-entrycontent").offset().top,
                        sticky_stop: t(".admania-entryfooter").offset().top - t(".admania-entrycontent").outerHeight() - 150,
                        recalc: function() {
                            this.content_h = t(".admania-entrycontent").outerHeight(), this.content_l = t(".admania-entrycontent").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-entrycontent").offset().top, this.sticky_stop = t(".admania-entryfooter ").offset().top - t(".admania-entrycontent").outerHeight() - 150
                        },
                        sticky: function() {
                            if (t(document).scrollTop() > this.sticky_start)
                                if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                    var s = this.sticky_stop - t(document).scrollTop() + 100;
                                    this.$el.css({
                                        top: s + "px",
                                        left: this.content_l + "px"
                                    })
                                } else this.$el.css({
                                    top: "100px",
                                    left: this.content_l + "px"
                                });
                            else this.$el.css({
                                top: "100px",
                                left: "-14px"
                            }), this.$el.removeClass("admania_sidebarsticky")
                        },
                        resize: function() {},
                        init: function() {
                            var s = this;
                            t(window).on("scroll", function() {
                                s.sticky()
                            }), t(window).on("resize", function() {
                                s.recalc(), s.sticky()
                            })
                        }
                    };
                    e.init()
                }
				}
            });
        }(jQuery);
    }
}




if ((admaniastchk.admania_chksptoptions == 'amsplyt1') || (admaniastchk.admania_chksptoptions == 'amsplyt2') || (admaniastchk.admania_chksptoptions == 'amsplyt3') || (admaniastchk.admania_chksptoptions == 'amsplyt4') || (admaniastchk.admania_chkblogoptions == 'amblyt2') || (admaniastchk.admania_chkblogoptions == 'amblyt6') || (admaniastchk.admania_chkblogoptions == 'amblyt5') || (admaniastchk.admania_chkblogoptions == 'amblyt1') || (admaniastchk.admania_chkblogoptions == 'amblyt4') || (admaniastchk.admania_chkblogoptions == 'amblyt3') || (admaniastchk.admania_chkblogoptions == 'amblyt11') || (admaniastchk.admania_chkblogoptions == 'amblyt12')) {
    
	
	
	! function(t) {
        "use strict";
		
        
		t(function() {
			
		var admania_contenthgt = t(".admania-contentarea").outerHeight();
		var admania_sdbrhgt = t(".admania-primarycontentarea").outerHeight();
		if((admania_contenthgt >= admania_sdbrhgt)) {	
            if (t(".admania-primarycontentarea .widget_admania_sticky_widgets").length > 0) {
                t(".admania-sitemaincontent").css(t(".admania-sitemaincontent").outerHeight() < t(".admania-sitemaincontent").outerHeight() && t(window).width() > 767 ? {
                    height: t(".admania-sitemaincontent").outerHeight()
                } : {
                    height: "auto"
                });
                var s = {
                    $el: t(".admania-primarycontentarea .widget_admania_sticky_widgets"),
                    content_h: t(".admania-sitemaincontent").outerHeight() > t(".admania-sitemaincontent").outerHeight(),
                    content_l: t(".admania-sitemaincontent").offset().left + t(".admania-sitemaincontent").width(),
                    sticky_threshold: 0,
                    sticky_t: 100,
                    fade_threshold: t(".admania-primarycontentarea .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-primarycontentarea .widget_admania_sticky_widgets").height() : t(".admania-primarycontentarea .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-primarycontentarea .widget_admania_sticky_widgets").height(),
                    sticky_start: t(".admania-primarycontentarea .widget_admania_sticky_widgets").offset().top + 36,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-primarycontentarea .widget_admania_sticky_widgets").height() - 108,
                    sticky_width: t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().width(),
                    recalc: function() {
                        this.content_h = t(".admania-sitemaincontent").outerHeight(), this.content_l = t(".admania-sitemaincontent").offset().left - 14, this.fade_threshold = t(".admania-primarycontentarea .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-primarycontentarea .widget_admania_sticky_widgets").height() : t(".admania-primarycontentarea .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-primarycontentarea .widget_admania_sticky_widgets").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().width(), this.sticky_start = t(".admania-primarycontentarea .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-primarycontentarea .widget_admania_sticky_widgets").parent().offset().top - 36 : t(".admania-primarycontentarea .widget_admania_sticky_widgets").offset().top - 36, this.sticky_stop = t(".admania-contentareafooter").offset().top - t(".admania-primarycontentarea .widget_admania_sticky_widgets").height() - 108
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 36;
                                this.$el.css({
                                    top: s + "px",
                                    width: this.sticky_width + "px"
                                })
                            } else this.$el.css({
                                top: "36px",
                                width: this.sticky_width + "px"
                            });
                        else this.$el.css({
                            top: "0px",
                            width: "auto"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    fade: function() {
                        t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                    },
                    init: function() {
                        var s = this;
                        s.recalc(), t(window).on("scroll", function() {
                            s.recalc(), s.sticky(), s.fade()
                        }), t(window).on("resize", function() {
                            t(".admania-sitemaincontent").css({
                                height: "auto"
                            }), t(".admania-sitemaincontent").css(t(".admania-sitemaincontent").outerHeight() < t(".admania-sitemaincontent").outerHeight() && t(window).width() > 767 ? {
                                height: t(".admania-sitemaincontent").outerHeight()
                            } : {
                                height: "auto"
                            }), s.recalc(), s.sticky(), s.fade()
                        })
                    }
                };
                s.init()
            }
            if ( t(".admania-contentareafooter").length > 0) {
                var e = {
                    $el: t(".social-share-top-live"),
                    content_h: t(".admania-sitemaincontent").outerHeight(),
                    content_l: t(".admania-sitemaincontent").offset().left - 14,
                    sticky_threshold: 0,
                    sticky_t: 100,
                    sticky_start: t(".admania-sitemaincontent").offset().top,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-sitemaincontent").outerHeight() - 150,
                    recalc: function() {
                        this.content_h = t(".admania-sitemaincontent").outerHeight(), this.content_l = t(".admania-sitemaincontent").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-sitemaincontent").offset().top, this.sticky_stop = t(".admania-contentareafooter").offset().top - t(".admania-sitemaincontent").outerHeight() - 150
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 100;
                                this.$el.css({
                                    top: s + "px",
                                    left: this.content_l + "px"
                                })
                            } else this.$el.css({
                                top: "100px",
                                left: this.content_l + "px"
                            });
                        else this.$el.css({
                            top: "100px",
                            left: "-14px"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    resize: function() {},
                    init: function() {
                        var s = this;
                        t(window).on("scroll", function() {
                            s.sticky()
                        }), t(window).on("resize", function() {
                            s.recalc(), s.sticky()
                        })
                    }
                };
                e.init()
            }
        
		}
		
		});
    }(jQuery);
}
if ((admaniastchk.admania_chkblogoptions == 'amblyt1') || (admaniastchk.admania_chksptoptions == 'amsplyt1') || (admaniastchk.admania_chkblogoptions == 'amblyt4')) {
    ! function(t) {
        "use strict";
        t(function() {
				
        var admania_contenthgt1 = t(".admania-contentareainner").outerHeight();
		var admania_sdbrhgt1 = t(".admania-secondarycontentarea").outerHeight();
		if((admania_contenthgt1 >= admania_sdbrhgt1)) {	
				
            if (t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").length > 0) {
                t(".admania-contentarea").css(t(".admania-contentarea").outerHeight() < t(".admania-contentarea").outerHeight() && t(window).width() > 767 ? {
                    height: t(".admania-contentarea").outerHeight()
                } : {
                    height: "auto"
                });
                var s = {
                    $el: t(".admania-secondarycontentarea  .widget_admania_sticky_widgets"),
                    content_h: t(".admania-contentarea").outerHeight() > t(".admania-contentarea").outerHeight(),
                    content_l: t(".admania-contentarea").offset().left + t(".admania-contentarea").width(),
                    sticky_threshold: 0,
                    sticky_t: 100,
                    fade_threshold: t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height() : t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height(),
                    sticky_start: t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").offset().top + 36,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height() - 108,
                    sticky_width: t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().width(),
                    recalc: function() {
                        this.content_h = t(".admania-contentarea").outerHeight(), this.content_l = t(".admania-contentarea").offset().left - 14, this.fade_threshold = t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height() : t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().width(), this.sticky_start = t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").parent().offset().top - 36 : t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").offset().top - 36, this.sticky_stop = t(".admania-contentareafooter").offset().top - t(".admania-secondarycontentarea  .widget_admania_sticky_widgets").height() - 108
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 36;
                                this.$el.css({
                                    top: s + "px",
                                    width: this.sticky_width + "px"
                                })
                            } else this.$el.css({
                                top: "36px",
                                width: this.sticky_width + "px"
                            });
                        else this.$el.css({
                            top: "0px",
                            width: "auto"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    fade: function() {
                        t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                    },
                    init: function() {
                        var s = this;
                        s.recalc(), t(window).on("scroll", function() {
                            s.recalc(), s.sticky(), s.fade()
                        }), t(window).on("resize", function() {
                            t(".admania-contentarea").css({
                                height: "auto"
                            }), t(".admania-contentarea").css(t(".admania-contentarea").outerHeight() < t(".admania-contentarea").outerHeight() && t(window).width() > 767 ? {
                                height: t(".admania-contentarea").outerHeight()
                            } : {
                                height: "auto"
                            }), s.recalc(), s.sticky(), s.fade()
                        })
                    }
                };
                s.init()
            }
            
			if (t(".admania-contentarea").length > 0) {
							
				if (t(".admania-contentareafooter").length > 1) {				
				
				var e = {
                    $el: t(".social-share-top-live"),
                    content_h: t(".admania-contentarea").outerHeight(),
                    content_l: t(".admania-contentarea").offset().left - 14,
                    sticky_threshold: 0,
                    sticky_t: 100,
                    sticky_start: t(".admania-contentarea").offset().top,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-contentarea").outerHeight() - 150,
                    recalc: function() {
                        this.content_h = t(".admania-contentarea").outerHeight(), this.content_l = t(".admania-contentarea").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-contentarea").offset().top, this.sticky_stop = t(".admania-contentareafooter ").offset().top - t(".admania-contentarea").outerHeight() - 150
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 100;
                                this.$el.css({
                                    top: s + "px",
                                    left: this.content_l + "px"
                                })
                            } else this.$el.css({
                                top: "100px",
                                left: this.content_l + "px"
                            });
                        else this.$el.css({
                            top: "100px",
                            left: "-14px"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    resize: function() {},
                    init: function() {
                        var s = this;
                        t(window).on("scroll", function() {
                            s.sticky()
                        }), t(window).on("resize", function() {
                            s.recalc(), s.sticky()
                        })
                    }
                };
                e.init()
				
				}
            }
       
	   }
		});
    }(jQuery);
}
if ((admaniastchk.admania_chkblogoptions == 'amblyt4')) {
    ! function(t) {
        "use strict";
        t(function() {
      		   
		   if (t(".admania-layout4postleft .widget_admania_sticky_widgets").length > 0) {
                t(".admania-contentarea").css(t(".admania-contentarea").outerHeight() < t(".admania-contentarea").outerHeight() && t(window).width() > 767 ? {
                    height: t(".admania-contentarea").outerHeight()
                } : {
                    height: "auto"
                });
                var s = {
                    $el: t(".admania-layout4postleft  .widget_admania_sticky_widgets"),
                    content_h: t(".admania-contentarea").outerHeight() > t(".admania-contentarea").outerHeight(),
                    content_l: t(".admania-contentarea").offset().left + t(".admania-contentarea").width(),
                    sticky_threshold: 0,
                    sticky_t: 100,
                    fade_threshold: t(".admania-layout4postleft  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-layout4postleft  .widget_admania_sticky_widgets").height() : t(".admania-layout4postleft  .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-layout4postleft  .widget_admania_sticky_widgets").height(),
                    sticky_start: t(".admania-layout4postleft  .widget_admania_sticky_widgets").offset().top + 36,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-layout4postleft  .widget_admania_sticky_widgets").height() - 108,
                    sticky_width: t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().width(),
                    recalc: function() {
                        this.content_h = t(".admania-contentarea").outerHeight(), this.content_l = t(".admania-contentarea").offset().left - 14, this.fade_threshold = t(".admania-layout4postleft  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-layout4postleft  .widget_admania_sticky_widgets").height() : t(".admania-layout4postleft  .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-layout4postleft  .widget_admania_sticky_widgets").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().width(), this.sticky_start = t(".admania-layout4postleft  .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-layout4postleft  .widget_admania_sticky_widgets").parent().offset().top - 36 : t(".admania-layout4postleft  .widget_admania_sticky_widgets").offset().top - 36, this.sticky_stop = t(".admania-contentareafooter").offset().top - t(".admania-layout4postleft  .widget_admania_sticky_widgets").height() - 108
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 36;
                                this.$el.css({
                                    top: s + "px",
                                    width: this.sticky_width + "px"
                                })
                            } else this.$el.css({
                                top: "36px",
                                width: this.sticky_width + "px"
                            });
                        else this.$el.css({
                            top: "0px",
                            width: "auto"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    fade: function() {
                        t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                    },
                    init: function() {
                        var s = this;
                        s.recalc(), t(window).on("scroll", function() {
                            s.recalc(), s.sticky(), s.fade()
                        }), t(window).on("resize", function() {
                            t(".admania-contentarea").css({
                                height: "auto"
                            }), t(".admania-contentarea").css(t(".admania-contentarea").outerHeight() < t(".admania-contentarea").outerHeight() && t(window).width() > 767 ? {
                                height: t(".admania-contentarea").outerHeight()
                            } : {
                                height: "auto"
                            }), s.recalc(), s.sticky(), s.fade()
                        })
                    }
                };
                s.init()
            }
            if (t(".admania-contentarea").length > 0) {
                
			if (t(".admania-contentareafooter").length > 1) {		
				
				var e = {
                    $el: t(".social-share-top-live"),
                    content_h: t(".admania-contentarea").outerHeight(),
                    content_l: t(".admania-contentarea").offset().left - 14,
                    sticky_threshold: 0,
                    sticky_t: 100,
                    sticky_start: t(".admania-contentarea").offset().top,
                    sticky_stop: t(".admania-contentareafooter").offset().top - t(".admania-contentarea").outerHeight() - 150,
                    recalc: function() {
                        this.content_h = t(".admania-contentarea").outerHeight(), this.content_l = t(".admania-contentarea").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-contentarea").offset().top, this.sticky_stop = t(".admania-contentareafooter ").offset().top - t(".admania-contentarea").outerHeight() - 150
                    },
                    sticky: function() {
                        if (t(document).scrollTop() > this.sticky_start)
                            if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                                var s = this.sticky_stop - t(document).scrollTop() + 100;
                                this.$el.css({
                                    top: s + "px",
                                    left: this.content_l + "px"
                                })
                            } else this.$el.css({
                                top: "100px",
                                left: this.content_l + "px"
                            });
                        else this.$el.css({
                            top: "100px",
                            left: "-14px"
                        }), this.$el.removeClass("admania_sidebarsticky")
                    },
                    resize: function() {},
                    init: function() {
                        var s = this;
                        t(window).on("scroll", function() {
                            s.sticky()
                        }), t(window).on("resize", function() {
                            s.recalc(), s.sticky()
                        })
                    }
                };
                e.init()
            }
			
			}
		
	   });
    }(jQuery);
}! function(t) {
    "use strict";
    t(function() {
        
		if (t(".admania-altsecondarysidebar  .widget_admania_sticky_widgets").length > 0) {
            t(".admania-layout4postright").css(t(".admania-layout4postright").outerHeight() < t(".admania-layout4postright").outerHeight() && t(window).width() > 767 ? {
                height: t(".admania-layout4postright").outerHeight()
            } : {
                height: "auto"
            });
            var s = {
                $el: t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets"),
                content_h: t(".admania-layout4postright").outerHeight() > t(".admania-layout4postright").outerHeight(),
                content_l: t(".admania-layout4postright").offset().left + t(".admania-layout4postright").width(),
                sticky_threshold: 0,
                sticky_t: 100,
                fade_threshold: t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height() : t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height(),
                sticky_start: t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").offset().top + 36,
                sticky_stop: t(".admania-layt4contentareafooter").offset().top - t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height() - 108,
                sticky_width: t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().width(),
                recalc: function() {
                    this.content_h = t(".admania-layout4postright").outerHeight(), this.content_l = t(".admania-layout4postright").offset().left - 14, this.fade_threshold = t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().offset().top - .5 * t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height() : t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").offset().top - .5 * t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height(), this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_width = t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().width(), this.sticky_start = t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").hasClass("admania_sidebarsticky") ? t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().outerHeight() + t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").parent().offset().top - 36 : t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").offset().top - 36, this.sticky_stop = t(".admania-layt4contentareafooter").offset().top - t(".admania-altsecondarysidebar   .widget_admania_sticky_widgets").height() - 108
                },
                sticky: function() {
                    if (t(document).scrollTop() > this.sticky_start && t(window).width() > 768)
                        if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                            var s = this.sticky_stop - t(document).scrollTop() + 36;
                            this.$el.css({
                                top: s + "px",
                                width: this.sticky_width + "px"
                            })
                        } else this.$el.css({
                            top: "36px",
                            width: this.sticky_width + "px"
                        });
                    else this.$el.css({
                        top: "0px",
                        width: "auto"
                    }), this.$el.removeClass("admania_sidebarsticky")
                },
                fade: function() {
                    t(window).width() > 768 ? t(document).scrollTop() > this.fade_threshold ? (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout")) : (this.$el.addClass("stickyfadeout"), this.$el.removeClass("stickyfadein")) : (this.$el.addClass("stickyfadein"), this.$el.removeClass("stickyfadeout"))
                },
                init: function() {
                    var s = this;
                    s.recalc(), t(window).on("scroll", function() {
                        s.recalc(), s.sticky(), s.fade()
                    }), t(window).on("resize", function() {
                        t(".admania-layout4postright").css({
                            height: "auto"
                        }), t(".admania-layout4postright").css(t(".admania-layout4postright").outerHeight() < t(".admania-layout4postright").outerHeight() && t(window).width() > 767 ? {
                            height: t(".admania-layout4postright").outerHeight()
                        } : {
                            height: "auto"
                        }), s.recalc(), s.sticky(), s.fade()
                    })
                }
            };
            s.init()
        }
        if (t(".admania-layout4postright").length > 0) {
            var e = {
                $el: t(".social-share-top-live"),
                content_h: t(".admania-layout4postright").outerHeight(),
                content_l: t(".admania-layout4postright").offset().left - 14,
                sticky_threshold: 0,
                sticky_t: 100,
                sticky_start: t(".admania-layout4postright").offset().top,
                sticky_stop: t(".admania-layt4contentareafooter").offset().top - t(".admania-layout4postright").outerHeight() - 150,
                recalc: function() {
                    this.content_h = t(".admania-layout4postright").outerHeight(), this.content_l = t(".admania-layout4postright").offset().left - 14, this.sticky_threshold = 0, this.sticky_t = 100, this.sticky_start = t(".admania-layout4postright").offset().top, this.sticky_stop = t(".admania-layt4contentareafooter").offset().top - t(".admania-layout4postright").outerHeight() - 150
                },
                sticky: function() {
                    if (t(document).scrollTop() > this.sticky_start)
                        if (this.$el.addClass("admania_sidebarsticky"), t(document).scrollTop() > this.sticky_stop) {
                            var s = this.sticky_stop - t(document).scrollTop() + 100;
                            this.$el.css({
                                top: s + "px",
                                left: this.content_l + "px"
                            })
                        } else this.$el.css({
                            top: "100px",
                            left: this.content_l + "px"
                        });
                    else this.$el.css({
                        top: "100px",
                        left: "-14px"
                    }), this.$el.removeClass("admania_sidebarsticky")
                },
                resize: function() {},
                init: function() {
                    var s = this;
                    t(window).on("scroll", function() {
                        s.sticky()
                    }), t(window).on("resize", function() {
                        s.recalc(), s.sticky()
                    })
                }
            };
            e.init()
        }
    	   
	});
}(jQuery);
}
}

(function($, window, document, undefined) {
	"use strict";
    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };
        $.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));
        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));
        this.setup();
        this.initialize();
    }
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: 'swing',
        info: false,
        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',
        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };
    Owl.Plugins = {};
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };
            !grid && this.$stage.children().css(css);
            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            cache.items = {
                merge: false,
                width: width
            };
            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }
            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';
            repeat /= 2;
            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }
            this._clones = clones;
            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];
            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };
            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }
            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.$element.is(':visible')) {
            this.refresh();
        } else {
            this.invalidate('width');
        }
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave('initializing');
        this.trigger('initialized');
    };
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
            }
        }
        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', {
                property: {
                    name: 'settings',
                    value: settings
                }
            });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', {
                property: {
                    name: 'settings',
                    value: this.settings
                }
            });
        }
    };
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', {
            content: item
        });
        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item)
        }
        this.trigger('prepared', {
            content: event.data
        });
        return event.data;
    };
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) {
                return this[p]
            }, this._invalidated),
            cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
        !this.is('valid') && this.enter('valid');
    };
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this.trigger('refreshed');
    };
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (!this.$element.is(':visible')) {
            return false;
        }
        this.enter('resizing');
        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this.trigger('resized');
    };
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }
        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
                return false
            });
        }
        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };
    Owl.prototype.onDragStart = function(event) {
        var stage = null;
        if (event.which === 3) {
            return;
        }
        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            };
        }
        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }
        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
        this.speed(0);
        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }
            event.preventDefault();
            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is('dragging')) {
            return;
        }
        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        this._drag.stage.current = stage;
        this.animate(stage.x);
    };
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
        $(document).off('.owl.core');
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() {
                    return false;
                });
            }
        }
        if (!this.is('dragging')) {
            return;
        }
        this.leave('dragging');
        this.trigger('dragged');
    };
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function(index, value) {
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;
        this.is('animating') && this.onTransitionEnd();
        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }
        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger('change', {
                property: {
                    name: 'position',
                    value: position
                }
            });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', {
                property: {
                    name: 'position',
                    value: this._current
                }
            });
        }
        return this._current;
    };
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function(v, i) {
            return i
        });
    };
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release(['translate', 'translated']);
    };
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    };
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
            i = -1,
            j;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            while (maximum - i > 1) {
                Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary ? i = j : maximum = j;
            }
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    };
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };
        if (position === undefined) {
            return $.map(this._clones, function(v, i) {
                return map(i)
            });
        }
        return $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null
        });
    };
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    };
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(':visible')) {
            this.update();
        }
    };
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.onTransitionEnd = function(event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.leave('animating');
        this.trigger('translated');
    };
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw 'Can not detect viewport width.';
        }
        return width;
    };
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }
        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);
        this.trigger('add', {
            content: content,
            position: position
        });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate('items');
        this.trigger('added', {
            content: content,
            position: position
        });
    };
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger('remove', {
            content: this._items[position],
            position: position
        });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', {
            content: null,
            position: position
        });
    };
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };
    Owl.prototype.destroy = function() {
        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');
        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        this.$stage.children('.cloned').remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
    };
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            handler = $.camelCase($.grep(['on', name, namespace], function(v) {
                return v
            }).join('-').toLowerCase()),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.register({
                type: Owl.Type.Event,
                name: name
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }
        return event;
    };
    Owl.prototype.enter = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }
            this._states.current[name]++;
        }, this));
    };
    Owl.prototype.leave = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }
            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };
    Owl.prototype.pointer = function(event) {
        var result = {
            x: null,
            y: null
        };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    };
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');
            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);
                $.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function(i, event) {
                    data.register({
                        type: Owl.Type.Event,
                        name: event
                    });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }
            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var AutoRefresh = function(carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }
        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return;
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass('owl-hidden', !this._visible);
        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };
    AutoRefresh.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
   "use strict";   
   var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) {
                            this.load(v)
                        }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    Lazy.Defaults = {
        lazyLoad: false
    };
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function(index, element) {
            var $element = $(element),
                image, url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', {
                element: $element,
                url: url
            }, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url(' + url + ')',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    };
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var AutoHeight = function(carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;
        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({
                        type: 'state',
                        name: 'playing',
                        tags: ['interacting']
                    });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function(target, video) {
        var tnLink, icon, path, dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;
        if (this._playing) {
            return;
        }
        this._core.enter('playing');
        this._core.trigger('play', null, 'video');
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }
        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
        this._playing = item.addClass('owl-video-playing');
    };
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        return element && $(element).parent().hasClass('owl-video-frame');
    };
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
            return;
        }
        if (!$.support.animation || !$.support.transition) {
            return;
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear).css({
                'left': left + 'px'
            }).addClass('animated owl-animated-out').addClass(outgoing);
        }
        if (incoming) {
            next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
        }
    };
    Animate.prototype.clear = function(e) {
        $(e.target).css({
            'left': ''
        }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var Autoplay = function(carousel) {
        this._core = carousel;
        this._timeout = null;
        this._paused = false;
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;
        if (this._core.is('rotating')) {
            return;
        }
        this._core.enter('rotating');
        this._setAutoPlayInterval();
    };
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        this._paused = true;
    };
    Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
   "use strict";
    var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    };
    Navigation.Defaults = {
        nav: false,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };
    Navigation.prototype.initialize = function() {
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function(e) {
            this.prev(settings.navSpeed);
        }, this));
        this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function(e) {
            this.next(settings.navSpeed);
        }, this));
        if (!settings.dotsData) {
            this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
        }
        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    Navigation.prototype.update = function() {
        var i, j, k, lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };
    Navigation.prototype.draw = function() {
        var difference, settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }
        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        };
    };
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };
    Navigation.prototype.getPosition = function(successor) {
        var position, length, settings = this._core.settings;
        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }
        return position;
    };
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    "use strict";
    var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
                    if (!hash) {
                        return;
                    }
                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }
                    window.location.hash = hash;
                }
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return;
            }
            this._core.to(this._core.relative(position), false, true);
        }, this));
    };
    Hash.Defaults = {
        URLhashListener: false
    };
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
	"use strict";
    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform');
            },
            csstransforms3d: function() {
                return !!test('perspective');
            },
            csstransitions: function() {
                return !!test('transition');
            },
            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });
        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }
    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition];
    }
    if (tests.cssanimations()) {
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation];
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }
})(window.Zepto || window.jQuery, window, document);

if ( 'undefined' === typeof jetpackCarouselStrings ) {
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="admaniagly",p="."+o,q="admaniagly-ready",r="admaniagly-removing",s="admaniagly-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="admaniagly-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" admaniagly-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" admaniagly-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" admaniagly-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" admaniagly-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","admaniagly-wrap").removeAttr("style"),b.bgOverlay.attr("class","admaniagly-bg"),b.container.attr("class","admaniagly-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("admaniagly-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".admaniagly-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("admaniagly-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("admaniagly-"+f[g])){d=f[g];break}e.src=e.el.attr("data-admaniagly-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.admaniaglyEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.admaniaglyEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("admaniagly-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("admaniagly-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("admaniagly-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="admaniagly-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({admaniaglyEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="admaniagly-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"admaniagly-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="admaniagly-figure"><div class="admaniagly-maincontent"><div class="admaniagly-topad">'+ admaniastchk.admania_glytphlad +' '+ admaniastchk.admania_glytpglead +' <a href="'+ admaniastchk.admania_glytpimgadlink +'"><img src="'+ admaniastchk.admania_glytpimgad +'" /></a> </div><figure><div class="admaniagly-img"></div><figcaption><div class="admaniagly-bottom-bar"><div class="admaniagly-title"></div><div class="admaniagly-counter"></div></div></figcaption></figure><div class="admaniagly-botad">'+ admaniastchk.admania_glybmhlad +' '+ admaniastchk.admania_glybmglead +' <a href="'+ admaniastchk.admania_glybmimgadlink +'"><img src="'+ admaniastchk.admania_glybmimgad +'" /></a> </div></div><div class="admaniagly-sidebar">'+ admaniastchk.admania_glysbhlad1 +' '+ admaniastchk.admania_glysbglead1 +' <a href="'+ admaniastchk.admania_glysbimgadlink +'"><img src="'+ admaniastchk.admania_glysbimgad1 +'" /></a> </div>',cursor:"admaniagly-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("admaniagly-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".admaniaglyloader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".admaniaglyloader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".admaniagly-img");if(i.length){var j=document.createElement("img");j.className="admaniagly-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.admaniaglyloader",f).on("error.admaniaglyloader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("admaniagly-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("admaniagly-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("admaniagly-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("admaniagly-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="admaniagly-iframe-scaler"><div class="admaniagly-close"></div><iframe class="admaniagly-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="admaniagly-arrow admaniagly-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".admaniagly-gallery";return b.direction=!0,c&&c.enabled?(f+=" admaniagly-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".admaniagly-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="admaniagly-img" />').on("load.admaniaglyloader",function(){d.hasSize=!0}).on("error.admaniaglyloader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
}

!function(v, m) {
	"use strict";
    m(".admania_lveditadroatadactive").before('<button type="button" class="admania_lveditadrttoggle" role="button" aria-pressed="false">'+ admaniastchk.admaniafe_buttontext + '</button>'), m(".admania_lveditadrttoggle").on("click", function() {
        var v = m(this);
        v.attr("aria-pressed", function(v, m) {
            return "false" === m ? "true" : "false"
        }), v.toggleClass("admania_lveditadrttogleactivate"), v.next(".admania_lveditadroatadactive").slideToggle("fast")
    })
}(this, jQuery);


!function() {
	
	"use strict";
	
	if ((admaniastchk.admania_chkdisplay) || (admaniastchk.admania_chk_page_display)) {
    
    var admania_hasclass = jQuery('.admania-layout1contentareainner .admania-entrycontent').find('.alignwide').length;
    var admania_hasclass1 = jQuery('.admania-layout1contentareainner .admania-entrycontent').find('.alignfull').length;
    
    if((admania_hasclass > 0) || (admania_hasclass1 > 0)) {
		jQuery('.admania-layout1contentareainner').addClass('admania-laty1-full-gb');
	}
	
	}
	
}(this, jQuery);

  