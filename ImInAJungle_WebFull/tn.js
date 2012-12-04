var tn={app:{is_ie:function(){return(navigator.appName=="Microsoft Internet Explorer")?true:false},is_ie8:function(){var rv=-1
var ua=navigator.userAgent
var re=new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})")
if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1)
return(rv==4)},is_ff:function(){return(tn.app.get_browser()=="Firefox")?true:false},is_opera:function(){return(navigator.appName=="Opera")?true:false},is_chrome:function(){return(tn.app.get_browser()=="Google Chrome")?true:false},is_safari:function(){return(tn.app.get_browser()=="Safari")?true:false},get_browser:function(){var test=navigator.userAgent
if(test.search(new RegExp("Chrome","i"))>-1)
return"Google Chrome"
else if(test.search(new RegExp("Firefox","i"))>-1)
return"Firefox"
else if(test.search(new RegExp("Safari","i"))>-1)
return"Safari"
return navigator.appName},is_winxp:function(){return(tn.app.get_os()=="WinXP")?true:false},is_win7:function(){return(tn.app.get_os()=="Win7")?true:false},get_os:function(){var os=navigator.appVersion
var ans="unknown"
if(os.indexOf("Win")!=-1){if((os.indexOf("Windows NT 5.1")!=-1)||(os.indexOf("Windows XP")!=-1))
ans="WinXP"
else if((os.indexOf("Windows NT 7.0")!=-1)||(os.indexOf("Windows NT 6.1")!=-1))
ans="Win7"
else if((os.indexOf("Windows NT 6.0")!=-1))
ans="WinVista/WinServer2008"
else if(os.indexOf("Windows ME")!=-1)
ans="WinME"
else if((os.indexOf("Windows NT 4.0")!=-1)||(os.indexOf("WinNT4.0")!=-1)||(os.indexOf("WinNT")!=-1))
ans="WinNT"
else if((os.indexOf("Windows NT 5.2")!=-1))
ans="WinServer2003"
else if((os.indexOf("Windows NT 5.0")!=-1)||(os.indexOf("Windows 2000")!=-1))
ans="Win2000"
else if((os.indexOf("Windows 98")!=-1)||(os.indexOf("Win98")!=-1))
ans="Win98"
else if((os.indexOf("Windows 95")!=-1)||(os.indexOf("Win95")!=-1)||(os.indexOf("Windows_95")!=-1))
ans="Win95"
else if((os.indexOf("Win16")!=-1))
ans="Win3.1"
else
ans="WinUnknown"}else if(os.indexOf("Mac")!=-1)
ans="Mac"
else if(os.indexOf("X11")!=-1)
ans="Unix"
else if(os.indexOf("Linux")!=-1)
ans="Linux"
return ans},get_bit:function(){return((os.indexOf("WOW64")!=-1)||(os.indexOf("x64")!=-1)||(os.indexOf("Win64")!=-1)||(os.indexOf("IA64")!=-1))?64:32}},css:{get:function(class_name,$attribute,$cut_pixel){var n_sheet=document.styleSheets.length
for(var i=0;i<n_sheet;i++){var sheet=document.styleSheets[i]
var n_class=(sheet.cssRules)?sheet.cssRules.length:sheet.rules.length
for(var j=0;j<n_class;j++){var cls=(sheet.cssRules)?sheet.cssRules[j]:sheet.rules[j]
if(cls.selectorText){var arr_cls_name=cls.selectorText.split(", ")
for(var k in arr_cls_name){if(arr_cls_name[k]==class_name){if(!$attribute)
return cls.style
else{var ans=cls.style[$attribute]
return(!$cut_pixel)?ans:parseInt(ans.replace("px",""),10)}}}}}}
return null}},key:{is_enter:function(e){return(tn.key.get_key(e)==13)?1:0},is_esc:function(e){return(tn.key.get_key(e)==27)?1:0},get_key:function(e){if(window.event)
return event.keyCode
else if(e.keyCode)
return e.keyCode
else if(e.which)
return e.which
else
return"unknown"}},obj:{g:function(id){return document.getElementById(id)},e:{on_click:function(id,fn){var obj=tn.obj.g(id)
if(window.addEventListener)
obj.addEventListener("click",fn,false)
else
obj.onclick=fn},on_dblclick:function(id,fn){var obj=tn.obj.g(id)
if(window.addEventListener)
obj.addEventListener("click",fn,false)
else
obj.ondblclick=fn}},text:function(id,$value){var obj=tn.obj.g(id)
var type=obj.tagName
if(!$value&&$value!=0){if(type=="SPAN"||type=="DIV")
return obj.innerHTML
else
return obj.value}else{if(type=="SPAN"||type=="DIV")
obj.innerHTML=$value
else
obj.value=$value}
return null},visible:function(id,$logic){var obj=tn.obj.g(id)
if(!$logic&&$logic!=0)return(obj.style.display=='none')?0:1
if($logic){obj.style.display="block"
obj.style.visibility="visible"}else{obj.style.display="none"
obj.style.visibility="hidden"}
return null},zindex:function(id,$zindex){if(!$zindex&&$zindex!=0)
return tn.obj.g(id).style.zIndex
else
tn.obj.g(id).style.zIndex=$zindex
return null}},win:{e:{on_load:{m:{fn:[],fn_name:[]},add_fn:function(fn,$fn_name){if(!$fn_name&&$fn_name!=0)$fn_name=""
tn.win.e.on_load.m.fn.push(fn)
tn.win.e.on_load.m.fn_name.push($fn_name)
window.onload=function(){for(var i in tn.win.e.on_load.m.fn)
tn.win.e.on_load.m.fn[i].call()}},debug:function(){alert(tn.win.e.on_load.m.fn_name.join("\n"))}}}},num:{str2float:function(str,$digit_2){if(!$digit_2&&$digit_2!=0)$digit_2=2
str+=""
str=str.split(",")
str=str.join("")
var ans=parseFloat(str)
if($digit_2>0)ans=ans.toFixed($digit_2)
return parseFloat(ans)}},mod:{input_float:function(textbox_id,$max_unlimited,$fn_callback){if(!$max_unlimited&&$max_unlimited!=0)$max_unlimited="unlimited"
var obj=document.getElementById(textbox_id)
obj.onkeyup=function(){var value=this.value.replace(/^\s+|\s+$/g,"")
var test=parseFloat(value)
if(test!=0&&(test==""||isNaN(test))){this.value=0
this.select()
value=0}else{if(test!=value){this.value=test
value=test}
if($max_unlimited!="unlimited"){var max=$max_unlimited
if(value>max){this.value=max
this.select()
value=max}}}
if(typeof($fn_callback)=="function")$fn_callback(value,$max_unlimited)}},input_int:function(textbox_id,$max_unlimited,$fn_callback){if(!$max_unlimited&&$max_unlimited!=0)$max_unlimited="unlimited"
var obj=document.getElementById(textbox_id)
obj.onkeyup=function(){var value=this.value.replace(/^\s+|\s+$/g,"")
var test=parseInt(value,10)
if(test!=0&&(test==""||isNaN(test))){this.value=0
this.select()
value=0}else{if(test!=value||value.search(/\./)>-1){this.value=test
value=test}
if($max_unlimited!="unlimited"){var max=$max_unlimited
if(value>max){this.value=max
this.select()
value=max}}}
if(typeof($fn_callback)=="function")$fn_callback(value,$max_unlimited)}},input_text:function(textbox_id,$fn_callback){var obj=document.getElementById(textbox_id)
obj.title="A name cannot contain any of the following characters:  +  ;  &  '  "+'"'
obj.onkeyup=function(){var v=this.value
if(v.search(/\+/)>-1)
this.value=v.replace(/\+/,"")
if(v.search(/\;/)>-1)
this.value=v.replace(/\;/,"")
if(v.search(/\&/)>-1)
this.value=v.replace(/\&/,"")
if(v.search(/\'/)>-1)
this.value=v.replace(/\'/,"")
if(v.search(/\"/)>-1)
this.value=v.replace(/\"/,"")
if(typeof($fn_callback)=="function")$fn_callback(value,$max_unlimited)}}},jq:{fade_in:function(id,$fade_delay_msec,$fn_on_successed){if(!$fade_delay_msec)$fade_delay_msec="slow"
if(!$fn_on_successed)$fn_on_successed=null
$("#"+id).fadeIn($fade_delay_msec,$fn_on_successed);},fade_out:function(id,$fade_delay_msec,$fn_on_successed){if(!$fade_delay_msec)$fade_delay_msec="slow"
if(!$fn_on_successed)$fn_on_successed=null
$("#"+id).fadeOut($fade_delay_msec,$fn_on_successed);},plugin:{ui:{dialog:{alert:function(empty_div_id,msg,title,$num_icon_0,$width_260,$fn_ok,$fn_onclosed){var ico=$num_icon_0||0
var width=$width_260||260
if(ico==1)
msg='<span class="ui-icon ui-icon-check" style="float:left; margin:0 7px 20px 0;"></span>'+msg
else if(ico==2)
msg='<span class="ui-icon ui-icon-close" style="float:left; margin:0 7px 20px 0;"></span>'+msg
else if(ico==3)
msg='<span class="ui-icon ui-icon-info" style="float:left; margin:0 7px 20px 0;"></span>'+msg
G(empty_div_id).innerHTML=msg
$("#"+empty_div_id).dialog({autoOpen:true,modal:true,buttons:{Ok:function(){if($fn_ok)$fn_ok()
$(this).dialog("close")}},title:title,resizable:false,position:"center",width:width,open:function(){var fn=function(){$("#"+empty_div_id).closest('.ui-dialog').find('.ui-dialog-buttonpane button:eq(0)').focus()}
setTimeout(fn,1)}})
if($fn_onclosed){$("#"+empty_div_id).dialog({close:$fn_onclosed})}},confirm:function(empty_div_id,msg,title,fn_on_ok,$width_300){var width=$width_300||300
msg='<span class="ui-icon ui-icon-help" style="float:left; margin:0 7px 20px 0;"></span>'+msg
G(empty_div_id).innerHTML=msg
$("#"+empty_div_id).dialog({autoOpen:true,modal:true,buttons:{Ok:function(){fn_on_ok()
$(this).dialog("close")},Cancel:function(){$(this).dialog("close")}},title:title,resizable:false,position:"center",width:width,open:function(){var fn=function(){$("#"+empty_div_id).closest('.ui-dialog').find('.ui-dialog-buttonpane button:eq(0)').focus()}
setTimeout(fn,1)}})},f:{set_focus_button:function($index_0){$index_0=$index_0||0
return function(){$(this).closest('.ui-dialog').find('.ui-dialog-buttonpane button:eq('+$index_0+')').focus()}}}},datepicker:{set2datepicker:function(txt_id_1,txt_id_2,a_id_1,a_id_2,$select_other_month_0,$disable_all_weekend_0,$min_date,$max_date){$select_other_month_0=($select_other_month_0)?true:false
$disable_all_weekend_0=($disable_all_weekend_0)?$.datepicker.noWeekends:null
$min_date=$min_date||""
$max_date=$max_date||""
var fn_check_date=function(dateText,inst){var d1=GV(txt_id_1)
var d2=GV(txt_id_2)
if(DC(d1,d2)==1){var id1=inst.id
var id2=(id1==txt_id_1)?txt_id_2:txt_id_1
GV(id2,dateText)}}
var create_cal=function(txt_id,a_id){$("#"+txt_id).datepicker({dateFormat:"dd/mm/yy",showOn:"focus",showAnim:"slideDown",showOtherMonths:$select_other_month_0,selectOtherMonths:$select_other_month_0,minDate:$min_date,maxDate:$max_date,onSelect:fn_check_date,beforeShowDay:$disable_all_weekend_0})
G(a_id).href='javascript:void $("#'+txt_id+'").datepicker("show")'}
create_cal(txt_id_1,a_id_1)
create_cal(txt_id_2,a_id_2)},set2datepicker_disable:function(txt_id_1,txt_id_2,a_id_1,a_id_2,arr_disable_date,$select_other_month_0){$select_other_month_0=($select_other_month_0)?true:false
$("#"+txt_id_1).datepicker("destroy")
$("#"+txt_id_2).datepicker("destroy")
var fn_check_date=function(dateText,inst){var d1=GV(txt_id_1)
var d2=GV(txt_id_2)
if(DC(d1,d2)==1){var id1=inst.id
var id2=(id1==txt_id_1)?txt_id_2:txt_id_1
GV(id2,dateText)}}
var fn_x_date=null
if(arr_disable_date!=null&&arr_disable_date!=""){if(arr_disable_date.constructor==Array){arr_disable_date=[arr_disable_date]
fn_x_date=function(d){for(var i=0;i<arr_disable_date.length;i++){if($.isArray(arr_disable_date[i])){for(var j=0;j<arr_disable_date[i].length;j++){var r=arr_disable_date[i][j].split(" to ");r[0]=r[0].split("-");r[1]=r[1].split("-");if(new Date(r[0][0],(r[0][1]-1),r[0][2])<=d&&d<=new Date(r[1][0],(r[1][1]-1),r[1][2])){return[false];}}}else{var test_date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
if(test_date==arr_disable_date[i]){return[false];}}}
return[true];}}}
var create_cal=function(txt_id,a_id){$("#"+txt_id).datepicker({dateFormat:"dd/mm/yy",showOn:"focus",showAnim:"slideDown",showOtherMonths:$select_other_month_0,selectOtherMonths:$select_other_month_0,onSelect:fn_check_date,beforeShowDay:fn_x_date})
G(a_id).href='javascript:void $("#'+txt_id+'").datepicker("show")'}
create_cal(txt_id_1,a_id_1)
create_cal(txt_id_2,a_id_2)}},timepicker:{set2timepicker:function(txt_start_id,txt_end_id,$step_hour_1,$step_min_5,$use_fn_check_time_1){$step_hour_1=$step_hour_1||1
$step_min_5=$step_min_5||5
if(!$use_fn_check_time_1&&$use_fn_check_time_1!=0)$use_fn_check_time_1=1
var fn_check_time=null
if($use_fn_check_time_1==1){fn_check_time=function(id,value){var id1=txt_start_id
var id2=txt_end_id
var ans=tn.time.compare(GV(id1),GV(id2))
if(ans>0){var id1=id
var id2=(id==txt_start_id)?txt_end_id:txt_start_id
GV(id2,GV(id1))}}}
var opt={stepHour:$step_hour_1,stepMinute:$step_min_5,tn_fn_onclosed:fn_check_time}
$("#"+txt_start_id).timepicker(opt)
$("#"+txt_end_id).timepicker(opt)}}},color_tip:function(id,$title,$fade_out_delay_500,$theme_yellow){if(!$fade_out_delay_500)$fade_out_delay_500=500
if(!$theme_yellow)$theme_yellow="yellow"
G(id).title=$title||""
$('#'+id).colorTip({color:$theme_yellow,timeout:$fade_out_delay_500});}}},time:{compare:function(time1,time2){var t1=time1
var t2=time2
if(t1==""||t2=="")return-2
t1=t1.split(":")
t1=parseInt(t1[0],10)*60+parseInt(t1[1],10)
t2=t2.split(":")
t2=parseInt(t2[0],10)*60+parseInt(t2[1],10)
if(t1<t2)return-1
else if(t1==t2)return 0
else return 1}}}