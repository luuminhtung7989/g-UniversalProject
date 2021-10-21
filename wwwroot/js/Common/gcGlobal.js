<<<<<<< HEAD
﻿function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomDbl(min, max) {
    return (Math.random() * (max - min + 1) + min);
}
function getKeyByValue(obj, val) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === val) {
            return key;
        }
    }
}

function getValueByKey(obj, keyin) {
    if (obj.hasOwnProperty(keyin)) {
        return obj[keyin];
    }
}

// open new window
var md5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
}
//end MD5

=======
﻿// open new window
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
function ow(link)
{
    var winSize = ",width=" + (screen.availWidth).toString() + ",height=" + (screen.availHeight).toString();

    var ControlBar="fullscreen=no,menubar=no, toolbar=no, scrollbars=yes,top=0,left=0, titlebar=no, resizable=yes,status=no,location=no ";
    window.open(link,'',ControlBar+winSize);
}
function ows(link,width,height)
{
    var winSize = ",width=" + width.toString() + ",height=" + height.toString();

    var ControlBar="fullscreen=no,menubar=no, toolbar=no, scrollbars=yes,top=0,left=0, titlebar=no, resizable=yes,status=no,location=no ";
    window.open(link,'',ControlBar+winSize);
}
<<<<<<< HEAD


=======
function toggleDisplay(blockId, titleId)
{
    
	var block = document.getElementById(blockId);
	var title = document.getElementById(titleId);
	if (block.className.indexOf("qsfNone") == -1)
	{
		block.className = block.className + " qsfNone";
		title.className = "qsfSubtitleCollapsed";
	}
	else
	{
		block.className = block.className.replace(/qsfNone/, "");
		title.className = "qsfSubtitle";
	}
	
	return false;
}
function toggleListLab(blockId, titleId)
{
    
	var block = document.getElementById(blockId);
	var title = document.getElementById(titleId);
	if (block.className.indexOf("qsfNone") == -1)
	{
		block.className = "qsfNone";
		title.className = "qsfSubtitleCollapsed";
	}
	else
	{
		block.className = block.className.replace(/qsfNone/, "");
		title.className = "qsfSubtitle";
	}	
	return false;
	 
}
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
function processCode(str)
{
    for (var i = 0; i < str.length; i++) {
        str = str.replace('%', '');
    }
    if(str==null)
        return '';
    var arrId=str.split('^');
    if(arrId.length <2)
        return '';
    return   arrId[0]; 
}
function labListToShowAll(hiddenContainsListId)
{
    var lstId=document.getElementById(hiddenContainsListId);
    var arrId=lstId.value.split(';');    
    for(i=0;i<arrId.length;i++)
    {
        var divToShow=document.getElementById(arrId[i]);
        divToShow.className="";        
    }  
}
function labListToHidewAll(hiddenContainsListId)
{
    var lstId=document.getElementById(hiddenContainsListId);
    var arrId=lstId.value.split(';');    
    for(i=0;i<arrId.length;i++)
    {
        var divToShow=document.getElementById(arrId[i]);
        divToShow.className="qsfNone";        
    }
   
    
}
<<<<<<< HEAD

=======
function Process(tail) {
}
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea


 var hasChanges, inputs, dropdowns, editedRow;
                                    
function KeyPress(sender, args) {  
     if (args.get_keyCharacter() == sender.get_numberFormat().DecimalSeparator) {
         args.set_cancel(true);  
      }  
}  
function hov(loc,cls) 
{ 
	if(loc.className) 
		loc.className=cls; 
}
function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

 /* -------- Định dạng chuỗi của text   ----------*/
function gcFormat(strId)
{
    var txtbox = document.getElementById(strId);
    var index = getCaretStart(txtbox);
    var lB = txtbox.value.length;
    txtbox.value = gcNum(txtbox.value, ",", ".");
    var lE = txtbox.value.length;
    var newindex = index + (lE-lB);
    if(newindex<0)
        newindex = 0;
    setCaret(txtbox, newindex);
}
function gcFormatStr(str) {
    return gcNum(str, ",", ".");
}

 /* -------- Chuyển định dạng  ----------*/
function gcRev( str, t1)
{
    if (str == null)
        return str;
    if (trim(str).length < 1)
        return str;
    var idx = str.indexOf( t1 );
    while ( idx > -1 ) {
        str = str.replace( t1, "" );
        idx = str.indexOf( t1 );
    }
    return str;
}
//-----------------------------------------------
function ltrim(str) { 
	for(var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++);
	return str.substring(k, str.length);
}
function rtrim(str) {
	for(var j=str.length-1; j>=0 && isWhitespace(str.charAt(j)) ; j--) ;
	return str.substring(0,j+1);
}
function rCutChar(str) {
	for(var j=str.length-1; j>=0 && !isNumber(str.charAt(j)) ; j--) ;
	return str.substring(0,j+1);
}

function trim(str) {
	return ltrim(rtrim(str));
}
function isWhitespace(charToCheck) {
	var whitespaceChars = " \t\n\r\f";
	return (whitespaceChars.indexOf(charToCheck) != -1);
}
function isNumber(charToCheck) {
	var NumberChars = "0123456789.";
	return (NumberChars.indexOf(charToCheck) != -1);
}
//-----------------------------------------------


 /* -------- Chuyển định dạng ngay Viet -> Anh  ----------*/
 function gcDateCUnchange( str )
 {
    return str;
}
function d2e(s) {
    if (s == null )
        return "";
    if (s.length < 4)
        return "";
    var p = s.split(' ');
    var aS = p[0].split('/');
    if (aS.length != 3)
        return "";
    var str = aS[1] + '/' + aS[0] + '/' + aS[2];
    /*testing */
    var month = parseInt(aS[1], 10);
    var day = parseInt(aS[0], 10);
    var year = parseInt(aS[2], 10);
    if (month < 1 || month > 12)        str = "";
    if (day < 1 || day > 31)            str = "";
    if (year < 1900 || year > 2999)     str = "";
    if (str != "")
        if (p.length > 1)
            str = str + ' ' + p[1];
    return str;
}

function gcDateC( str )
{
    if(str==null)
        return str;
    if(str.length<4)
        return "";
    var partition = str.split( ' ' );
    var arrString = partition[0].split( '/' );
    
    if(arrString.length!=3)
        return "";
    var str = arrString[1]+'/'+arrString[0]+'/'+arrString[2];
    /*testing */
    var month = parseInt(arrString[1], 10);
    var day = parseInt(arrString[0], 10);
    var year = parseInt(arrString[2], 10);
    if(month<1 || month>12)
        str = "";
    if(day<1 || day>31)
        str = "";
    if(year<1900 || year>2999)
        str = "";
    if(str!="")
        if(partition.length>1)
            str = str +' '+ partition[1];
    return str;
}

/*    Caret Functions     */

// Get the end position of the caret in the object. Note that the obj needs to be in focus first
function getCaretEnd(obj){
	if(typeof selectionEnd != "undefined"){
		return selectionEnd;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
			var Lp=createTextRange();
		}
		Lp.setEndPoint("EndToEnd",M);
		var rb=Lp.text.length;
		if(rb>value.length){
			return -1;
		}
		return rb;
	}
}
// Get the start position of the caret in the object
function getCaretStart(obj){
	if(typeof selectionStart != "undefined"){
		return selectionStart;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
			var Lp=createTextRange();
		}
		Lp.setEndPoint("EndToStart",M);
		var rb=Lp.text.length;
		if(rb>value.length){
			return -1;
		}
		return rb;
	}
}
// sets the caret position to l in the object
function setCaret(obj,l){
	focus();
	if (setSelectionRange){
		setSelectionRange(l,l);
	}else if(createTextRange){
		m = createTextRange();		
		m.moveStart('character',l);
		m.collapse();
		m.select();
	}
}
// sets the caret selection from s to e in the object
function setSelection(obj,s,e){
	focus();
	if (setSelectionRange){
		setSelectionRange(s,e);
	}else if(createTextRange){
		m = createTextRange();		
		m.moveStart('character',s);
		m.moveEnd('character',e);
		m.select();
	}
}

 
  function focusOn(sender, args)
 {
       var textBox = sender;
       textBox.focus();
 }

Number.prototype.formatMoney = function (decPlaces, thouSeparator, decSeparator) {
<<<<<<< HEAD
    try {


        var n = this,
            decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
            decSeparator = decSeparator === undefined ? "." : decSeparator,
            thouSeparator = thouSeparator === undefined ? "," : thouSeparator,
            sign = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        var tmpVal = sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
        //fix 2021 : remove 0 sau dấu decSeparator
        if (tmpVal.indexOf(decSeparator) >= 0) {
            if (tmpVal.length > 1)
                while (tmpVal.charAt(tmpVal.length - 1) === '0') {
                    tmpVal = tmpVal.substring(0, tmpVal.length - 1);
                    if (tmpVal.charAt(tmpVal.length - 1) !== '0')
                        break;
                }
            if (tmpVal.charAt(tmpVal.length - 1) === decSeparator)
                tmpVal = tmpVal.substring(0, tmpVal.length - 1);
        }
    }
    catch (e) {
        console.log(e + 'convert sai số sang định dạng');
    }
    return tmpVal;
};

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
String.prototype.replaceAll = function (s,d) {
=======
    var n = this,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

 String.prototype.ra = function (s,d) {
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
     var t = this;
     var i = t.indexOf(s);
     while (i > -1) {
         t = t.replace(s, d);
         i = t.indexOf(s);
     }
     return t;
 };
 String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
<<<<<<< HEAD
String.prototype.formatArr = function(_array){
    var formatted = this;
    for (var i = 0; i < _array.length; i++) {       
         var reg = new RegExp("\\{" + i + "\\}", "gi");             
         formatted = formatted.replace(reg, _array[i]);
    }
    return formatted;
}
String.prototype.formatHTML = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{{'+i+'\\}}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
String.prototype.f2 = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\|' + i + '\\|', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
var modalcenter = (function () {
    var 
				method = {},
				$overlay,
				$modal,
				$content,
				$close;

    // Center the modal in the viewport
    method.center = function () {
        var top, left;

        top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
        //top = 0;
        left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

        $modal.css({
            top: top + $(window).scrollTop(),
            left: left + $(window).scrollLeft()
        });
    };

    // Open the modal
    method.open = function (settings) {
        $content.empty().append(settings.content);

        $modal.css({
            width: settings.width || 'auto',
            height: settings.height || 'auto'
        });

        method.center();
        $(window).bind('resize.modal', method.center);
        $modal.show();
        $overlay.show();
    };

    // Close the modal
    method.close = function () {
        $modal.hide();
        $overlay.hide();
        $content.empty();
        $(window).unbind('resize.modal');
    };

    // Generate the HTML and add it to the document
    $overlay = $('<div id="top_overlay"></div>');
    $modal = $('<div id="top_modal"></div>');
    $content = $('<div id="top_content"></div>');
    $close = $('<a id="close" href="#">close</a>');

    $modal.hide();
    $overlay.hide();
    $modal.append($content, $close);

    $(document).ready(function () {
        $('body').append($overlay, $modal);
    });

    $close.click(function (e) {
        e.preventDefault();
        method.close();
    });

    return method;
} ());

var modal = (function () {
    var 
				method = {},
				$overlay,
				$modal,
				$content,
				$close;

    // Center the modal in the viewport
    method.center = function () {
        var top, left;

        top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
        top = 0;
        left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

        $modal.css({
            top: top + $(window).scrollTop(),
            left: left + $(window).scrollLeft()
        });
    };

    // Open the modal
    method.open = function (settings) {
        $content.empty().append(settings.content);

        $modal.css({
            width: settings.width || 'auto',
            height: settings.height || 'auto'
        });

        method.center();
        $(window).bind('resize.modal', method.center);
        $modal.show();
        $overlay.show();
    };

    // Close the modal
    method.close = function () {
        $modal.hide();
        $overlay.hide();
        $content.empty();
        $(window).unbind('resize.modal');
    };

    // Get element content
    method.$content = function () {
        return $content;
    }
    // Generate the HTML and add it to the document
    $overlay = $('<div id="top_overlay"></div>');
    $modal = $('<div id="top_modal"></div>');
    $content = $('<div id="top_content"></div>');
    $close = $('<a id="close" href="#">close</a>');

    $modal.hide();
    $overlay.hide();
    $modal.append($content, $close);

    $(document).ready(function () {
        $('body').append($overlay, $modal);
    });

    $close.click(function (e) {
        e.preventDefault();
        method.close();
    });

    return method;
} ());
function showError(str) {

    var $divall = $("<div></div>");
    var $div = $("<div class='alert alert-danger'>" + str + "</div>");
    var $btnActive = $("<input type='button'  value='Quay về' id='gc_btnActiveForm' onclick='modal.close()' class='btn btn-info btn-sm' />");
    $divall.append($div);
    $divall.append($btnActive);
    modal.open({ content: $divall.html() });
    return;
}
function showErrorCenter(str) {

    var $divall = $("<div></div>");
    var $div = $("<div class='alert alert-danger'>" + str + "</div>");
    var $btnActive = $("<input type='button'  value='Quay về' id='gc_btnActiveForm' onclick='modalcenter.close()' class='btn btn-info btn-sm' />");
    $divall.append($div);
    $divall.append($btnActive);
    modalcenter.open({ content: $divall.html() });
    return;
}
/*------------------------ change format ---------------------------------- */
/* t1=[,] t2=[.] sử dụng theo số tiếng anh gcNum(str,",",".")*/
function gcNum(str, t1, t2) {
    if (str == null)
        return str;
    if (trim(str).length < 1)
        return str;

    var tmpValue = str;
    var arrString = new Array(Math.round(tmpValue.length / 3) + 2);

    tmpValue = tmpValue.replace(t1, "");

    /* -------- Xử lý các dấu chấm   ----------*/
    var idx = tmpValue.indexOf(t1);
    while (idx > -1) {
        tmpValue = tmpValue.replace(t1, "");
        idx = tmpValue.indexOf(t1);
    }
    /*-----------------------------------------*/

    var idxMinus = tmpValue.indexOf("-");
    if (idxMinus == 0)
        tmpValue = tmpValue.substring(idxMinus + 1, tmpValue.length);
    else if (idxMinus > 0)
        tmpValue = tmpValue.substring(0, idxMinus);
    /*/-----------------remove all dấu [-]-------------------*/
    /* -------- Xử lý các dấu chấm   ----------*/
    var idxM = tmpValue.indexOf("-");
    while (idxM > -1) {
        tmpValue = tmpValue.replace("-", "");
        idxM = tmpValue.indexOf("-");
    }
    /*----------------------------------------*/
    var k = 0;
    var i = 0;
    idx = tmpValue.indexOf(t2);
    var strTail = "";
    if (idx >= 0) {
        var strHead = tmpValue.substring(0, idx);

        var lH = strHead.length;
        if (lH > 3) {
            for (k = lH - 3; k > 0; k = k - 3) {
                arrString[i] = strHead.substring(k, k + 3);
                i++;
            }
            /* ------------------------------------ */
            if (k <= 0) {
                arrString[i] = strHead.substring(0, k + 3);
                i++;
            }
        } /* end lH */
        else {
            arrString[i] = strHead.substring(0, strHead.length);
            i++;
        }

        var strTail = tmpValue.substring(idx + 1, tmpValue.length);
        /* remove all comma (,) */
        var idx2 = strTail.indexOf(t2);
        while (idx2 > -1) {
            strTail = strTail.replace(t2, "");
            idx2 = strTail.indexOf(t2);
        }
    }
    else {
        var strHead = tmpValue;
        var lH = strHead.length;
        if (lH > 3) {
            for (k = lH - 3; k > 0; k = k - 3) {
                arrString[i] = strHead.substring(k, k + 3);
                i++;
            }
            /* ------------------------------------ */
            if (k <= 0) {
                arrString[i] = strHead.substring(0, k + 3);
                i++;
            }
        } /* end lH */
        else {
            arrString[i] = strHead.substring(0, strHead.length);
            i++;
        }
    }

    var j = 0; tmpValue = "";
    if (idxMinus >= 0)
        tmpValue += "-";

    /* concat Head */
    for (j = i - 1; j > 0; j--) {
        tmpValue += arrString[j];
        if (j > 0)
            tmpValue += t1;
    }
    if (i > 0)
        tmpValue += arrString[0];

    /* concar Tail */
    if (idx >= 0) {
        tmpValue += t2;
        tmpValue += strTail;
    }
    return tmpValue;
}

function toCharArray(str) {
    charArray = [];
    for (var i = 0; i < str.length; i++) {
        charArray.push(str[i]);
    }

    return charArray;
}
function  VNConvertVNKODAU(str)
{
    if (typeof (str) === "string") {
        //function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
        //}
    }
    else {
        //console.log(str +' không phải là kiểu chuỗi kiểm tra vì sao nha!!! - Hàm VNConvertVNKODAU');
<<<<<<< HEAD
        if (str === null)
            return null;
        return str.toString();
    }
}
function reloadJs(src) {
    console.log(window.location);
    src2 = $('script[src$="' + src + '"]').attr("src");
    $('script[src$="' + src2 + '"]').remove();
    
    $('<script/>').attr('src', src ).appendTo('head');
}
//reloadJs("~/js/ClassCore/CanteenDb.js");
//This will not have any path related issues.

/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

//jQuery using load here
//$("#divContent").load("demo_test.txt");
// this is your `load_home() function`
async function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText("home.html");
}

function getRQcode(id, str){
    $("#"+id).html('');
    var qrcode = new QRCode(document.getElementById(id), 
    {
        text:"http://qr.axmsoft.com/qrscan?id="+str+'&s='+md5(str+''),
        width:150,
        height:150,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });
    //qrcode.clear();
    //qrcode.makeCode("http://qr.axmsoft.com/qrscan?id="+str+'&s='+md5(str+''));
    
}

// Loop over them and prevent submission
function removeProp(object, keyParam){
        Object.keys(object).forEach(function(key) {  if(key===keyParam) delete object[key]; });
}

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  /************************************************************************
* Xử lý chuyển table html thành file excel                              *
*************************************************************************/
var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
            'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
            'xmlns="http://www.w3.org/TR/REC-html40"><head>' +
            '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>' +
            '<x:ExcelWorksheet><x:Name>{worksheet}</x:Name>' +
            '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>' +
            '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>' +
            '</xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body>' +
            '<table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = $(table)//table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.html() }
        window.location.href = uri + base64(format(template, ctx))
    }
})();
/************************************************************************
* Xử lý khi nhấn nút export trong report                                *
*************************************************************************/
function convertTableToExcel(el) {
    tableToExcel(el == null ? '#gc_DivReceiptContent' : el, 'Sheet 1');
};
function round(value, i) {
    var r = 0.0;
    if ($.isNumeric(value)) {
        var t = (value + "").split(".");
        if (t.length > 1 && t[1].length > 0) {
            r = parseFloat(t[0] + "." + t[1].substr(0, i))
        }
        else r = parseFloat(value + "");
    }
    return r;
}
=======
        return str.toString();
    }
}
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
