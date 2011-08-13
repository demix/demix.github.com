/* Copyright (c) 2010 Baidu */
var baidu=baidu||{version:"1-3-2"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.json=baidu.json||{};
baidu.json.parse=window.JSON&&window.JSON.parse?window.JSON.parse:function(a){if(!/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return null
}return(new Function("return "+a))()};baidu.dom=baidu.dom||{};baidu.dom.g=function(a){if("string"==typeof a||a instanceof String){return document.getElementById(a)
}else{if(a&&a.nodeName&&(a.nodeType==1||a.nodeType==9)){return a}}return null};baidu.g=baidu.G=baidu.dom.g;baidu.string=baidu.string||{};
baidu.string.format=function(c,a){c=String(c);var b=Array.prototype.slice.call(arguments,1),d=Object.prototype.toString;if(b.length){b=b.length==1?(a!==null&&(/\[object Array\]|\[object Object\]/.test(d.call(a)))?a:b):b;
return c.replace(/#\{(.+?)\}/g,function(e,g){var f=b[g];if("[object Function]"==d.call(f)){f=f(g)}return("undefined"==typeof f?"":f)
})}return c};baidu.format=baidu.string.format;baidu.ajax=baidu.ajax||{};baidu.ajax.request=function(d,o){function j(){if(n.readyState==4){try{var q=n.status
}catch(p){e("failure");return}e(q);if((q>=200&&q<300)||q==304||q==1223){e("success")}else{e("failure")}window.setTimeout(function(){n.onreadystatechange=new Function();
if(g){n=null}},0)}}function c(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(p){try{return new ActiveXObject("Microsoft.XMLHTTP")
}catch(p){}}}if(window.XMLHttpRequest){return new XMLHttpRequest()}}function e(q){q="on"+q;var p=b[q],r=baidu.ajax[q];if(p){if(q!="onsuccess"){p(n)
}else{p(n,n.responseText)}}else{if(r){if(q=="onsuccess"){return}r(n)}}}o=o||{};var i=o.data||"",g=!(o.async===false),h=o.username||"",m=o.password||"",a=(o.method||"GET").toUpperCase(),f=o.headers||{},b={},l,n;
for(l in o){b[l]=o[l]}f["X-Request-By"]="baidu.ajax";try{n=c();if(a=="GET"){d+=(d.indexOf("?")>=0?"&":"?");if(i){d+=i+"&";
i=null}if(o.noCache){d+="b"+(new Date()).getTime()+"=1"}}if(h){n.open(a,d,g,h,m)}else{n.open(a,d,g)}if(g){n.onreadystatechange=j
}if(a=="POST"){n.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}for(l in f){if(f.hasOwnProperty(l)){n.setRequestHeader(l,f[l])
}}e("beforerequest");n.send(i);if(!g){j()}}catch(k){e("failure")}return n};baidu.ajax.get=function(b,a){return baidu.ajax.request(b,{onsuccess:a})
};