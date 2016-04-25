!function(window,document,undefined){"use strict";var worked=false;window.addEventListener('load',function(){if(!worked)
TrackingROIWidget();},false);document.addEventListener('readystatechange',function(){if(document.readyState==='loaded'||document.readyState==='complete'){if(!worked)
TrackingROIWidget();}},false);document.addEventListener('DOMContentLoaded',function(){if(!worked)
TrackingROIWidget();},false);if(typeof jQuery!=='undefined'){jQuery(document).ready(function(){if(!worked)
TrackingROIWidget();});};window.addEventListener('pageshow',function(){if(!worked)
TrackingROIWidget();},false);var emailAddressField=null;var referrer=document.referrer;if(referrer&&referrer.trim()!='undefined')referrer=encodeURIComponent(referrer);else referrer='';function SetTrackROIItem(name,value){localStorage.setItem(name,value);SetTrackROICookie(name,value,1,'/',GetTrackROIRootDomain());}
function GetTrackROIItem(name){var value=localStorage.getItem(name);if(value==null)
value=decodeURIComponent(ReadTrackROICookie(name));return value;}
function GetTrackROIRootDomain(){var temp=location.host.split('.').reverse();var root_domain='.'+temp[1]+'.'+temp[0];return root_domain;}
function SetupFieldChangeEvents(){try{var fields=document.getElementsByTagName("input");var onChange=function(event){console.log(event);if(validateEmail(event.target.value)){emailAddressField=event.target;ProcessEmailCapture(false);}};for(var i=0;i<fields.length;i++){var field=fields[i];if(field.type=="text"||field.type=="email"||field.type=="hidden"){if(field.addEventListener){field.addEventListener("input",onChange);field.addEventListener("propertychange",onChange);}else{field.oninput=onChange;field.onpropertychange=onChange;}
if(!isNullOrEmpty(field.value)){if(validateEmail(field.value)){emailAddressField=field;ProcessEmailCapture(false);}}}}}catch(e){console.log(e);}}
function validateEmail(email,partOfString){if(isNullOrEmpty(email)){return false;}
if(partOfString)
var re=/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/i;else
var re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return re.test(email);}
function parseEmail(string){var re=/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/i;var res=string.match(re);if(res&&res.length>0)
return res[0];else
return false;}
function fieldIsHidden(field){if(field.style.display=="none"){return true;}
var parent=field.parentElement;while(parent!=null){if(parent.style.display=="none"){return true;}
parent=parent.parentElement;}
return false;}
function ProcessEmailCapture(noEmail){console.log(noEmail);try{if((emailAddressField!=null&&emailAddressField.value.length>0)||noEmail){var xmlhttp;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
var trackfu=JSON.parse(GetTrackROIItem('trackfu'));var wickedUrl=document.location.href;if(trackfu!==null&&typeof trackfu==='object'){wickedUrl=(trackfu.url!=null&&trackfu.c=='14'&&parseInt(new Date().getTime())-parseInt(trackfu.time)<1000*60*60*24)?trackfu.url:wickedUrl;}
var encodedUrl=encodeURIComponent(wickedUrl);var now=new Date;var utcDate=now.getTime();var capturedEmail=(emailAddressField)?emailAddressField.value:'';var queryString="?WickedClientID=14&WickedEmail="+capturedEmail+"&WickedTrackingDate="+utcDate+"&WickedURL="+encodedUrl+"&WickedReferrerURL="+referrer;var submitUrl=location.protocol+"//my.wickedreports.com/track"+queryString;console.log(submitUrl);xmlhttp.open("GET",submitUrl,true);xmlhttp.send();}}catch(e){console.log(e);}}
function TrackingROIWidget(){try{if(validateEmail(decodeURIComponent(window.location.href),true)){emailAddressField={'value':parseEmail(decodeURIComponent(window.location.href))};}
worked=true;var parser=document.createElement('a');parser.href=window.location.href.replace('%20#','?');var pattern=/utm_|wickedid|wickedsource/i;if(pattern.test(parser.href)){var lifeTime=1000*60;var doit=true;var trackfu=JSON.parse(GetTrackROIItem('trackfu'));if(trackfu!==null&&typeof trackfu==='object'){if(parseInt(new Date().getTime())-parseInt(trackfu.time)<lifeTime)
doit=false;}
if(doit){var params={'url':parser.href,'time':new Date().getTime(),'c':'14'};SetTrackROIItem('trackfu',JSON.stringify(params));ProcessEmailCapture(true);}}
if(emailAddressField!==null&&!doit){ProcessEmailCapture(true);}
SetupFieldChangeEvents();}catch(err){console.log(err);}}
function ReadTrackROICookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function SetTrackROICookie(name,value,expires,path,domain,secure){var today=new Date();today.setTime(today.getTime());if(expires){expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+
((expires)?";expires="+expires_date.toGMTString():"")+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+
((secure)?";secure":"");}
function isEmpty(obj){for(var prop in obj){if(obj.hasOwnProperty(prop))
return false;}
return true;}
function isNullOrEmpty(val){return val==null||val=="";}}(window,document);