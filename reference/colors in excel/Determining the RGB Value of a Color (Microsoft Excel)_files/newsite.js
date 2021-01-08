/*
    Javascript functions for pages on the new tips.net sites
    Written by Alan Sikes
    7/17/2016
*/

var objForm;
var figDisplayed = false;
var	reEmail = /^[\w!#$%&'*+-\/=?^_`{|}~][\w.!#$%&'*+-\/=?^_`{|}~]*@\w+([.-]\w+)*\.\w{2,8}$/;
var reSqlSelect = /(select[\w\W]*from[\w\W]+[a-z|A-Z|0-9])|(select[\w\W]+from)|(union[\w\W]+select)/i;
var reSqlInsert = /(insert\s+into[\w\W]+values)|(bulk\s+insert)/i;
var reSqlConvert = /convert[\w\W]+([\w\W]*from)/i;
var reSqlAlter = /(alter|create|drop)\s+(column|database|procedure|table)/i;
var reSqlCreate = /create\s+(column|database|procedure|table)/i;
var reSqlDrop = /drop\s+(column|database|procedure|table)/i;
var reSqlDelete = /delete\s+from/i;
var reSqlUpdate = /update[\w\W]+set[\w\W]+\=/i;

/**** Search Box Functions ****/

// view/hide search box on small displays
function viewSearch() {
    var navBar = document.getElementById('bs-navbar-collapse');
    if (navBar.className == 'collapse navbar-collapse') {
    	navBar.className = 'navbar-collapse';
    }
    else {
    	navBar.className = 'collapse navbar-collapse';
    }
}

// check search value for SQL insertion
function chkSearch() {
	// check search string for SQL Injection strings
	arrText = document.getElementsByName('q');
	for (var i = 0; i < arrText.length; i++) {
		strText = arrText[i].value;
		if (strText != '') {
			strText = sqlCheck(strText);
			arrText[i].value = strText;
			return true;
		}
	}
	return true;
}

/**** Form Submittal Functions ****/

// onsubmit function to submit the comment form using ajax
function commentFormSubmit(junkId) {
	var errorMsg = '';
	var figCount = 0;
	var figArray, i, fig;
	var figRegex = new RegExp(document.getElementById('fig_regex').value, 'gi');
    var figMax = document.getElementById('fig_max').value;
	// clear error messages
	document.getElementById('comment-error').innerHTML = '<div class="spinner"></div>';
	// make sure figure input blocks are not showing unless we need them
	for (i = 1; i <= figMax; i++) {
		fig = 'comment_fig' + i;
		document.getElementById(fig).style.display = 'none';
	}
	// count the number of figures
    figArray = document.getElementById('comment_body').value.match(figRegex);
   	if (figArray == null) {
		figDisplayed = false;
   		figCount = 0;
   	}
	else {
    	figCount = figArray.length;
    	if (figCount > figMax) figCount = figMax;
    }
    // display only the appropriate figure input blocks
	for (i = 1; i <= figCount; i++) {
		fig = 'comment_fig' + i;
		document.getElementById(fig).style.display = 'block';
	}

	// see if the user is asking for a review of a comment marked as spam
    if (junkId != 0) {
    	jx.load('https://services.tips.net/newsiteAjax.html?type=com&junk_id='+junkId,function(data){ajaxParseResponse(data);},'json','post');
    	return false;
	}

	// if submitting form, check for any missing required fields & display error messages
	if ((figCount == 0) || (figDisplayed)) {
		errorMsg = checkComment(figCount);
		// only submit form if there are no errors
		if (errorMsg == '') {
				// submit as a normal form submittal
				return true;
		}
		else {
			document.getElementById('comment-error').innerHTML =
				"<p style=\"color: red;\">Thanks for trying to add a comment to this Tips.Net article. " +
				"The following errors occurred:<br />" + errorMsg + "<br />Please try again.</p>";
		}

		// initial display of figure input blocks
		figDisplayed = false;
	}
	else {
		// display figure input blocks
		figDisplayed = true;
		document.getElementById('comment-error').innerHTML = '';
	}

	// don't submit form normally
	return false;
}

// check for errors in Comment entry form
function checkComment(figCount) {
	var errorMsg = '';
	var strEmail, strText;

	// verify required fields are filled in
	if (document.getElementById('comment_name').value == '') {
		errorMsg += '&nbsp;&nbsp;You didn\'t enter your name<br />';
	}
	strEmail = document.getElementById('comment_email').value;
	if ((strEmail != '') && (strEmail.match(reEmail) == null)) {
		errorMsg += '&nbsp;&nbsp;You didn\'t enter a valid email address<br />';
	}
	if ((document.getElementById('comment_body').value == '') &&
		(document.getElementById('email_me').checked == false) &&
		(document.getElementById('email_site').checked == false)) {
		errorMsg += '&nbsp;&nbsp;You didn\'t enter any comment<br />';
	}
	if ((strEmail == '') && ((document.getElementById('email_me').checked == true) || (document.getElementById('email_site').checked == true))) {
		errorMsg += '&nbsp;&nbsp;You didn\'t enter an email address to receive notifications<br />';
	}
	if (document.getElementById('captcha').value == '') {
		errorMsg += '&nbsp;&nbsp;The security question must be answered<br />';
	}
	if (figCount > 0) {
		for (i = 1; i <= figCount; i++) {
			var figFile = 'fig_file' + i;
			if (document.getElementById(figFile).value == false) {
				errorMsg += '&nbsp;&nbsp;A source is required for Figure ' + i + ".<br />\n";
			}
		}
	}
	// check comment text for SQL Injection strings
	strText = document.getElementById('comment_body').value;
	strText = sqlCheck(strText);
	document.getElementById('disc_body').value = strText;

	// do the same SQL Injection checks on the user name, but just reject a name that matches any of these strings
	strText = document.getElementById('comment_name').value;

	if ((strText.match(reSqlSelect) != null) || (strText.match(reSqlInsert) != null) || (strText.match(reSqlConvert) != null)) {
		// found a SQL insertion string in the user name
		errorMsg += '&nbsp;&nbsp;Your name is not valid.<br />';
	}

	return errorMsg;
}

// move/upgrade newsletter subscription functions
function moveSubscription() {
	site = document.getElementById('unit').value;
	user = document.getElementById('email').value;
	jx.load('https://services.tips.net/newsiteAjax.html?type=move&unit='+site+'&email='+user, function(data){ajaxParseResponse(data);}, 'json', 'post');
	return false;
}


/**** Ajax Functions ****/

// parse successful Ajax response and set variables
function ajaxParseResponse(arrData) {
	// request was successful and got a json response
	// possible response fields:
	//		c - article comments
	//		cc - article comments link line
	//		a - headline banner ad
	//		b - site index page banner tips list
	//		e - comment submittal error response
	//		s - subscription response
	//
    if (arrData != null) {
        if (arrData['a'] != null) {
        	// headline banner ad
        	document.getElementById('top-leader').outerHTML = arrData['a'];
        }
        if (arrData['b'] != null) {
        	// site index page banner tips list
        	document.getElementById('home-banner').outerHTML = arrData['b'];
        }
        if (arrData['c'] != null) {
        	// article comments
        	document.getElementById('submitted-comments').outerHTML = arrData['c'];
        }
        if (arrData['cc'] != null) {
        	// bottom article comment link
        	document.getElementById('comment-link').innerHTML = arrData['cc'];
        }
        if (arrData['cc2'] != null) {
        	// top article comment link
        	document.getElementById('comment-link2').innerHTML = arrData['cc2'];
        }
        if (arrData['cap'] != null) {
        	// article captcha question
        	document.getElementById('comment-captcha').innerHTML = arrData['cap'];
        }
        if (arrData['nl'] != null) {
        	// move newsletter subscription
        	document.getElementById('subscribe-move').innerHTML = arrData['nl'];
        }
        if (arrData['t'] != null) {
        	// site 0 testimonial
        	document.getElementById('testimonial').innerHTML = arrData['t'];
        }
        if (arrData['err'] != null) {
        	// error at comment submittal
        	objErr = document.getElementById('comment-error');
        	if (objErr != null) objErr.innerHTML = arrData['err'];
        }
    }
}

/****  check comment text for SQL Injection strings  ****/
	// The Apache server does checks for SQL Injection on all incoming parameters and generates a 500 response
	// if a string is detected.  To prevent this happening, the following code checks for these strings and, if one is
	// detected, replaces a character in all occurrances of one of the words ('select', 'insert' or 'convert') with
	// its HTML character entity equivalent.  The comment looks the same to the reader, but passes through the filter
	// without a problem.
	//
	// If the replacement was done right in the textarea element and then another user error was detected, the user
	// would see the changed comment, causing confusion.  Instead, the textarea value is not returned to the server,
	// but instead the converted text is copied into a hidden element that is returned to the server as the comment body.
function sqlCheck(strText) {
	if (strText.match(reSqlSelect) != null) {
		// found a SQL insertion string with "select"
		// replace the "s" in each "select" with HTML coding
		strText = strText.replace(/s([eE][lL][eE][cC][tT])/g, '&#115;$1').replace(/S([eE][lL][eE][cC][tT])/g, '&#83;$1');
	}
	if (strText.match(reSqlInsert) != null) {
		// found a SQL insertion string with "insert"
		// replace the "i" in each "insert" with HTML coding
		strText = strText.replace(/i([nN][sS][eE][rR][tT])/g, '&#105;$1').replace(/I([nN][sS][eE][rR][tT])/g, '&#73;$1');
	}
	if (strText.match(reSqlConvert) != null) {
		// found a SQL insertion string with "convert"
		// replace the "c" in each "convert" with HTML coding
		strText = strText.replace(/c([oO][nN][vV][eE][rR][tT])/g, '&#99;$1').replace(/C([oO][nN][vV][eE][rR][tT])/g, '&#67;$1');
	}
	if (strText.match(reSqlAlter) != null) {
		// found a SQL insertion string with "alter"
		// replace the "a" in each "alter" with HTML coding
		strText = strText.replace(/a([lL[tT][eE]][rR])/g, '&#97;$1').replace(/A([lL[tT][eE]][rR])/g, '&#65;$1');
	}
	if (strText.match(reSqlCreate) != null) {
		// found a SQL insertion string with "create"
		// replace the "c" in each "create" with HTML coding
		strText = strText.replace(/c([rR][eE][aA][tT][eE])/g, '&#99;$1').replace(/C([rR][eE][aA][tT][eE])/g, '&#67;$1');
	}
	if (strText.match(reSqlDrop) != null) {
		// found a SQL insertion string with "drop"
		// replace the "d" in each "drop" with HTML coding
		strText = strText.replace(/d([rR][oO][pP])/g, '&#100;$1').replace(/D([rR][oO][pP])/g, '&#68;$1');
	}
	if (strText.match(reSqlDelete) != null) {
		// found a SQL insertion string with "delete"
		// replace the "d" in each "delete" with HTML coding
		strText = strText.replace(/d([eE][lL][eE][tT][eE])/g, '&#100;$1').replace(/D([eE][lL][eE][tT][eE])/g, '&#68;$1');
	}
	if (strText.match(reSqlUpdate) != null) {
		// found a SQL insertion string with "update"
		// replace the "u" in each "update" with HTML coding
		strText = strText.replace(/u([pP][dD][aA][tT][eE])/g, '&#117;$1').replace(/U([pP][dD][aA][tT][eE])/g, '&#85;$1');
	}

	return strText;
}

/****  Site on-load function ****/
function onLoad() {
	var data;

	// type, num and site variables are preset as part of the header
	objScroll = document.getElementById('ticker');
	if (objScroll != null) {
		// site with article scroll box
		startSlider();
	}
}

// window onLoad handler
document.addEventListener("DOMContentLoaded", function(event) {onLoad();});

/****  jxs AJAX library V3.01.A - http://www.openjs.com/scripts/jx/ ****/
jx={getHTTPObject:function(){var A=false;if(typeof ActiveXObject!="undefined"){try{A=new ActiveXObject("Msxml2.XMLHTTP")}catch(C){try{A=new ActiveXObject("Microsoft.XMLHTTP")}catch(B){A=false}}}else{if(window.XMLHttpRequest){try{A=new XMLHttpRequest()}catch(C){A=false}}}return A},load:function(url,callback,format,method,opt){var http=this.init();if(!http||!url){return }if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!method){method="GET"}if(!format){format="text"}if(!opt){opt={}}format=format.toLowerCase();method=method.toUpperCase();var now="uid="+new Date().getTime();url+=(url.indexOf("?")+1)?"&":"?";url+=now;var parameters=null;if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,url,true);if(method=="POST"){http.setRequestHeader("Content-type","application/x-www-form-urlencoded");http.setRequestHeader("Content-length",parameters.length);http.setRequestHeader("Connection","close")}var ths=this;if(opt.handler){http.onreadystatechange=function(){opt.handler(http)}}else{http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}else{if(format.charAt(0)=="x"){result=http.responseXML}}if(callback){callback(result)}}else{if(opt.loadingIndicator){document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)}if(opt.loading){document.getElementById(opt.loading).style.display="none"}if(opt.onError){opt.onError(http.status)}}}}}http.send(parameters)},bind:function(A){var C={"url":"","onSuccess":false,"onError":false,"format":"text","method":"GET","update":"","loading":"","loadingIndicator":""};for(var B in C){if(A[B]){C[B]=A[B]}}if(!C.url){return }var D=false;if(C.loadingIndicator){D=document.createElement("div");D.setAttribute("style","position:absolute;top:0px;left:0px;");D.setAttribute("class","loading-indicator");D.innerHTML=C.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(D);this.opt.loadingIndicator=D}if(C.loading){document.getElementById(C.loading).style.display="block"}this.load(C.url,function(E){if(C.onSuccess){C.onSuccess(E)}if(C.update){document.getElementById(C.update).innerHTML=E}if(D){document.getElementsByTagName("body")[0].removeChild(D)}if(C.loading){document.getElementById(C.loading).style.display="none"}},C.format,C.method,C)},init:function(){return this.getHTTPObject()}}

