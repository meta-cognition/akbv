// Shouldn't need to change these

//The following detects the most common mobile devices from the UserAgent string.
//Note that I specifically don't identify iPad as a mobile device.
var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  

var w3c = (document.getElementById) ? true: false;
var ns4 = (document.layers) ? true: false;
var ie5 = (w3c && document.all && !window.opera) ? true: false;
var ie6 = /MSIE 6/i.test(navigator.userAgent);
var ie7 = (typeof document.body.style.maxHeight != "undefined" && document.all);
var strictMode = ((document.documentElement.clientWidth || document.documentElement.clientHeight) && (ie6 || ie7) && !window.opera) ? true: false;
var ns6 = (w3c && !document.all) ? true: false;
var aw_d = document;
currIDb = null;
xoff = 0;
yoff = 0;
oldac = null;
zdx = 5000;
mx = 0;
my = 0;
var cidlist = new Array();
var originalOverflow;

var windowWidth = ns6 ? window.innerWidth: document.body.clientWidth;
var windowHeight = ns6 ? window.innerHeight: document.body.clientHeight;
if (windowWidth == 0 || strictMode) windowWidth = document.documentElement.clientWidth;
if (windowHeight == 0 || strictMode) windowHeight = document.documentElement.clientHeight;

var slideXFinal = Math.round((windowWidth / 2) - (popWidth / 2));
slideXFinal = (slideXFinal < 0) ? 0: slideXFinal;
var slideYFinal = Math.round((windowHeight / 2) - (popHeight / 2));
slideYFinal = (slideYFinal < 0) ? 0: slideYFinal;
var yOffset;

//******* START OF EXPOSED FUNCTIONS. THESE CAN BE USED IN HYPERLINKS. *******\\
function hidebox(id) {
    if (w3c) {
        aw_d.getElementById(id + '_b').style.display = 'none';
        aw_d.getElementById(id + '_s').style.display = 'none';
        hidebackdrop();
        if (document.addEventListener) {
            document.removeEventListener('scroll', fixPopUpScrolling, true);
        } else {
            document.onscroll = null;
        }
    }
}

function showbox(id) {
    if (w3c) {
        var bx = aw_d.getElementById(id + '_b');
        var sh = aw_d.getElementById(id + '_s');
        bx.style.display = 'block';
        sh.style.display = 'block';
        showbackdrop();
        sh.style.zIndex = ++zdx;
        bx.style.zIndex = ++zdx;
        if (ns6) {
            bx.style.MozOpacity = 1;
            sh.style.MozOpacity = .5;
        } else {
            bx.style.filter = "alpha(opacity=100)";
            sh.style.filter = "alpha(opacity=50)";
        }
        changez(bx);
    }
}

function hidebackdrop() {
    document.getElementById('lightbox_backdrop').style.display = 'none';
    if (ie6) {
        selects = document.getElementsByTagName('select');
        for (var i = selects.length - 1; i >= 0; --i) {
            selects[i].style.visibility = '';
        }
    }
    if ((ie6) || (ie7)) {
        embeds = document.getElementsByTagName('embed');
        for (var i = embeds.length - 1; i >= 0; --i) {
            embeds[i].style.visibility = '';
        }
    }
    if ((ie6) || (ie7)) {
        if (undefined == originalOverflow) originalOverflow = document.body.style.overflow ? document.body.style.overflow: document.documentElement.style.overflow;
        document.documentElement.style.overflow = originalOverflow;
        document.body.style.overflow = originalOverflow;
    } else {
        if (undefined == originalOverflow) originalOverflow = document.body.style.overflow;
        document.body.style.overflow = originalOverflow;
    }
}

function showbackdrop() {
    if (ie6) {
        selects = document.getElementsByTagName('select');
        for (var i = selects.length - 1; i >= 0; --i) {
            selects[i].style.visibility = 'hidden';
        }
    }
    document.getElementById('lightbox_backdrop').style.display = 'block';
    if ((ie6) || (ie7)) {
        if (undefined == originalOverflow) originalOverflow = document.body.style.overflow ? document.body.style.overflow: document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    } else {
        if (undefined == originalOverflow) originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    }
}

function movePopup(ids, x, y) {
    if (w3c) {
        var idb = document.getElementById(ids + '_b');
        var ids = document.getElementById(ids + '_s');
        idb.style.left = x + 'px';
        ids.style.left = x + 8 + 'px';
        idb.style.top = y + 'px';
        ids.style.top = y + 8 + 'px';
    }
}

//******* END OF EXPOSED FUNCTIONS *******\\

function showAllScrollbars() {
    if (document.all) {
        var id;
        for (i = 0; i < cidlist.length; i++) {
            id = cidlist[i];
            if (!document.getElementById(id + '_b').isExt) document.getElementById(id + '_c').style.overflow = "auto";
        }
    }
}

function ns6bugfix() {
    if (navigator.userAgent.indexOf("Netscape/6") > 0) setTimeout('self.resizeBy(0,1); self.resizeBy(0,-1);', 100);
}

function trackmouse(evt) {
    mx = (ie5) ? event.clientX + aw_d.body.scrollLeft: evt.pageX;
    my = (ie5) ? event.clientY + aw_d.body.scrollTop: evt.pageY;
    if (!ns6) movepopup();
    if (currIDb != null) return false;
}

function movepopup() {
    if ((currIDb != null) && w3c) movePopup(currIDb.cid, mx + xoff, my + yoff);
    return false;
}

function changez(v) {
    var th = (v != null) ? v: this;
    if (ns6) aw_d.getElementById(th.cid + "_c").style.overflow = 'auto';
    oldac = th;
    aw_d.getElementById(th.cid + "_s").style.zIndex = ++zdx;
    th.style.zIndex = ++zdx;
    aw_d.getElementById(th.cid + "_rs").style.zIndex = ++zdx;
}

function subBox(x, y, w, h, bgc, id) {
    var v = aw_d.createElement('div');
    v.setAttribute('id', id);
    v.style.position = 'absolute';
    v.style.left = x + 'px';
    v.style.top = y + 'px';
    v.style.width = w + 'px';
    v.style.height = h + 'px';
    if (bgc != '') v.style.backgroundColor = bgc;
    v.style.visibility = 'visible';
    v.style.padding = '0px';
    return v;
}

function bgBox(bgc, id) {
    var v = aw_d.createElement('div');
    v.setAttribute('id', id);
    v.style.position = 'absolute';
    v.style.top = '-100000px';
    v.style.left = '0px';
    v.style.width = '100%';
    v.style.height = '200000px';
    if (bgc != '') v.style.backgroundColor = bgc;
    v.style.visibility = 'visible';
    v.style.opacity = '.75';
    v.style.padding = '0px';
    return v;
}

function get_cookie(Name) {
    var search = Name + "=";
    var returnvalue = "";
    if (aw_d.cookie.length > 0) {
        offset = aw_d.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = aw_d.cookie.indexOf(";", offset);
            if (end == -1) end = aw_d.cookie.length;
            returnvalue = unescape(aw_d.cookie.substring(offset, end));
        }
    }
    return returnvalue;
}

function esc_listener(e) {
    var evtobj = window.event ? event: e;
    var keycode = evtobj.keyCode;
    if (keycode == 27) {
        hidebox(cidlist[0]);
    }
}

function popUp(x, y, w, h, cid, text, bgcolor, textcolor, fontstyleset, title, titlecolor, titletextcolor, bordercolor, scrollcolor, shadowcolor, showonstart, isdrag, isresize, oldOK, isExt, popOnce) {
    if ((ie6 || ie7) && strictMode) {
        yOffset = document.documentElement.scrollTop;
        slideYFinal = yOffset + slideYFinal;
    } else if (ie6 || ie7) {
        yOffset = document.body.scrollTop;
    } else {
        yOffset = window.pageYOffset;
        slideYFinal = yOffset + slideYFinal;
    }
    y = y + yOffset;
    var okPopUp = false;
    var cid = cid;
    if (popOnce) {
        if (get_cookie(cid) == "") {
            okPopUp = true;
            aw_d.cookie = cid + "=yes"
        }
    }
    else okPopUp = true;
    if (okPopUp) {
        if (w3c) {
            cidlist[cidlist.length] = cid;
            w = Math.max(w, 100);
            h = Math.max(h, 80);
            var rdiv = new subBox(w - ((ie5 && !strictMode) ? 12: 8), h - ((ie5 && !strictMode) ? 12: 8), 7, 7, '', cid + '_rs');
            var tw = (ie5 && !strictMode) ? w: w + 4;
            var th = (ie5 && !strictMode) ? h: h + 6;
            var closeLink = document.createElement('span');
            closeLink.id = cid + '_btt';
            closeLink.innerHTML = 'close';
            closeLink.onclick = new Function("hidebox('" + cid + "');");
            closeLink.style.right = '5px';
            closeLink.style.bottom = '2px';
            closeLink.style.color = '#2288CC';
            closeLink.style.position = 'absolute';
            var shadow = new subBox(x + 8, y + 8, tw, th, shadowcolor, cid + '_s');
            if (ie5) shadow.style.filter = "alpha(opacity=50)";
            else shadow.style.MozOpacity = .5;
            shadow.style.zIndex = ++zdx;
            var backdrop = new bgBox(shadowcolor, 'lightbox_backdrop');
            if (ie5) backdrop.style.filter = "alpha(opacity=75)";
            else backdrop.style.MozOpacity = .75;
            backdrop.style.zIndex = ++zdx;
            var outerdiv = new subBox(x, y, w, h, bordercolor, cid + '_b');
            outerdiv.style.display = "block";
            outerdiv.style.borderStyle = "outset";
            outerdiv.style.borderWidth = "2px";
            outerdiv.style.borderColor = bordercolor;
            outerdiv.style.zIndex = ++zdx;
            tw = (ie5 && !strictMode) ? w - 8: w - 5;
            th = (ie5 && !strictMode) ? h + 4: h - 4;
            tw = (ie5 && !strictMode) ? w - 7: w - 13;
            var content = new subBox(2, 2, tw, h - 12, bgcolor, cid + '_c');
            content.style.borderColor = bordercolor;
            content.style.borderWidth = "2px";
            if (isExt) {
                content.innerHTML = '<iframe id="' + cid + '_ifrm" src="' + text + '" width="100%" height="100%"></iframe>';
                content.style.overflow = "hidden";
            } else {
                if (ie5) content.style.scrollbarBaseColor = scrollcolor;
                content.style.borderStyle = "inset";
                content.style.overflow = "auto";
                content.style.padding = "0px 2px 0px 4px";
                content.innerHTML = text;
                content.style.font = fontstyleset;
                content.style.color = textcolor;
                content.style.MozOpacity = 1;
            }
            var extWA = new subBox(2, 24, 0, 0, '', cid + '_extWA');
            extWA.style.display = "none";
            extWA.style.width = '100%';
            extWA.style.height = '100%';
            outerdiv.appendChild(content);
            outerdiv.appendChild(extWA);
            outerdiv.appendChild(rdiv);
            document.body.insertBefore(backdrop, document.body.childNodes[0]);
            aw_d.body.appendChild(outerdiv);
            aw_d.body.appendChild(shadow);
            aw_d.gEl = aw_d.getElementById;
            content.appendChild(closeLink);
            if (!showonstart) hidebox(cid);
            var wB = aw_d.gEl(cid + '_b');
            wB.cid = cid;
            wB.isExt = (isExt) ? true: false;
            var wEXTWA = aw_d.gEl(cid + '_extWA');
            wB.activecolor = titlecolor;
            wB.inactivecolor = scrollcolor;
            oldac = wB;
            wB.onmousedown = function() {
                changez(this)
            }
            if (document.addEventListener) document.addEventListener('keypress', esc_listener, true);
            else document.onkeypress = esc_listener;
        } else {
            if (oldOK) {
                var ctr = new Date();
                ctr = ctr.getTime();
                var t = (isExt) ? text: '';
                var posn = (ns4) ? 'screenX=' + x + ',screenY=' + y: 'left=' + x + ',top=' + y;
                var win = window.open(t, "abc" + ctr, "status=no,menubar=no,width=" + w + ",height=" + h + ",resizable=no,scrollbars=yes," + posn);
                if (!isExt) {
                    t = '<html><head><title>' + title + '</title></head><body bgcolor="' + bgcolor + '"><font style="font:' + fontstyleset + '; color:' + textcolor + '">' + text + '</font></body></html>';
                    win.document.write(t);
                    win.document.close();
                }
            }
        }
        popUpTimeoutTimer = setTimeout(movePopUpTimeout, 1500);
    }
}

function fixPopUpScrolling() {
    window.scrollTo(popUpCurrentLeft, popUpCurrentTop);
}

function movePopUpTimeout() {
    var pop = document.getElementById('pop1_b');
    popUpCurrentLeft = document.body.scrollLeft || window.pageXOffset;
    popUpCurrentTop = document.body.scrollTop || window.pageYOffset;
    var currentBottom = window.innerHeight + popUpCurrentTop;
    var popTop = pop.style.top.replace('px', '');
    var popBottom = (popTop * 1) + (pop.style.height.replace('px', '') * 1);
    if ((popTop < popUpCurrentTop) || (popBottom > currentBottom)) {
        pop.style.top = (popUpCurrentTop + 20) + 'px';
    }
    if (document.addEventListener) {
        document.addEventListener('scroll', fixPopUpScrolling, true);
    } else {
        document.onscroll = fixPopUpScrolling;
    }
}

function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}

function launcher() {
    new popUp(slideXFinal, slideYFinal, popWidth, popHeight, "pop1", myForm, "#ffff99", "black", "10pt sans-serif", myTitle, "#0F72BB", "white", "lightgrey", "#6DBAF3", "black", false, true, false, true, false, false);
    showbox("pop1");
}

// Only do these things if we are not on a mobile system
if (!mobile) {
    if (ns6) setInterval('movepopup()', 40);
    if (w3c) {
        aw_d.onmousemove = trackmouse;
    }

    if(!getCookie(alw_cookie_name)) {
        var mydate = new Date();
        mydate.setTime(mydate.getTime() + 15552000000);
        setCookie(alw_cookie_name, '1', mydate, '/', document.domain, 0);
        setTimeout('launcher();', alw_display_secs * 1000);
    }
}  
