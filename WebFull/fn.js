function A(txt,$sp,$sensitive_0){if(!$sp&&$sp!=0)$sp=","
if($sensitive_0)$sp=txt.match(new RegExp($sp,"i"))
return txt.split($sp)}
function Ais(obj){if(obj==null)return 0
return obj.constructor==Array}
function AU(arr){arr.sort()
var ans=[],m=""
while(arr.length>0){if(arr[0]!=m)ans.push(arr[0])
m=arr.shift()}
return ans}
function AI(arr1,arr2){var n1=arr1.length
var n2=arr2.length
if(n1==0)return arr2
if(n2==0)return arr1
var ans=new Array
for(var i=0;i<n1;i++)
for(var j=0;j<n2;j++)
if(arr1[i]==arr2[j])ans.push(arr2[j])
return ans}
function AC(arr){return arr.length}
function AF(arr,find){var ans=-1
for(var i=0;i<arr.length;i++){if(arr[i]==find){ans=i
break}}
return ans}
function AS(arr){arr.sort()
var n=new Array
var t=new Array
for(var i in arr){if(!Iis(arr[i])){n=arr.slice(0,i)
t=arr.slice(i)
n.sort(function(a,b){return a-b})
arr=n.concat(t)
break}}
return arr}
function ASr(arr){arr=AS(arr)
return arr.reverse()}
function Acopy(arr){var ans=new Array
for(var i in arr)ans.push(arr[i])
return ans}
function BI(id,row,col,$value){if(!$value&&$value!=0)return G(id).rows[row].cells[col].innerHTML
G(id).rows[row].cells[col].innerHTML=$value}
function BIrow(id,row,$value){if(!$value&&$value!=0){var ans=new Array
for(var i=0;i<Bcol(id);i++)ans.push(BI(id,row,i))
return ans}
for(var i=0;i<Bcol(id);i++)
G(id).rows[row].cells[i].innerHTML=$value[i]}
function BIcol(id,col,$value,$shiftRow){if(!$value&&$value!=0){var ans=new Array
for(var i=0;i<Brow(id);i++)ans.push(BI(id,i,col))
return ans}
if(!$shiftRow)$shiftRow=0
for(var i=0;i<Brow(id)-$shiftRow;i++)
G(id).rows[i+$shiftRow].cells[col].innerHTML=$value[i]}
function Brow(id){return G(id).rows.length}
function Bcol(id){return G(id).rows[0].cells.length}
function BD(id){var n=Brow(id)
for(var i=0;i<n;i++)G(id).deleteRow(0)}
function BP(id,$cOdd,$cEven,$startRow){if($cOdd==''||!$cOdd)$cOdd='#FFFFFF'
if(!$cEven)$cEven='#FFFFFF'
if(!$startRow)$startRow=0
var n=Brow(id)-$startRow
for(var i=0;i<n;i++)G(id).rows[i+$startRow].bgColor=(i%2==1)?$cEven:$cOdd}
function BM(id,oldRow,newRow){G(id).moveRow(oldRow,newRow)}
function C(txt){if(window.clipboardData)window.clipboardData.setData("Text",txt)}
function CSS(class_name,$attribute,$cut_pixel){var n_sheet=document.styleSheets.length
for(var i=0;i<n_sheet;i++){var sheet=document.styleSheets[i]
var n_class=sheet.rules.length
for(var j=0;j<n_class;j++){var cls=sheet.rules[j]
if(cls.selectorText==class_name){if(!$attribute)
return cls.style
else{var ans=cls.style[$attribute]
return(!$cut_pixel)?ans:I(TP1(ans,"px",""))}}}}
return""}
function D($formatType,$shiftDate){if(!$formatType)$formatType=1
if(!$shiftDate)$shiftDate=0
var now=new Date
now.setDate(now.getDate()+$shiftDate)
var d=now.getDate()
var m=now.getMonth()+1
var y=now.getFullYear()+""
d=$_chkZero(d)
m=$_chkZero(m)
var week=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
week=week[now.getDay()]
var month=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
month=month[now.getMonth()]
var f=$formatType
if(f==1)return d+"/"+m+"/"+y
else if(f==2)return y+"-"+m+"-"+d
else if(f==3)return y.slice(2,4)+m+d
else if(f==4)return week
else if(f==5)return week+" "+d+"/"+m+"/"+y
else return now.getDate()+" "+month+" "+y}
function Dth(date2){var m=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]
var d=A(date2,"-")
return I(d[2])+" "+m[I(d[1])-1]+" "+d[0]}
function DT($showSecond){var now=new Date
var h=$_chkZero(now.getHours())
var m=$_chkZero(now.getMinutes())
var s=""
if($showSecond==1)s=":"+$_chkZero(now.getSeconds())
return h+":"+m+s}
function DIM(month,year){var d=new Array(31,28,31,30,31,30,31,31,30,31,30,31)
if(month==2)
return((year%400==0)||((year%4==0)&&(year%100!=0)))?29:28
else
return d[month-1]}
function DF(date,$transformToFormat_1){var transformToFormat=$transformToFormat_1||1
if(date=="")return""
if(transformToFormat<1||transformToFormat>3)return date
var aDate=$_get_dmy(date)
if(aDate.length==0)return date
var d=aDate[0]
var m=aDate[1]
var y=aDate[2]
var f=transformToFormat
if(f==1)return d+"/"+m+"/"+y
else if(f==2)return y+"-"+m+"-"+d
else if(f==3)return y.slice(2,4)+m+d}
function DC(date1,date2){var ans=-2
var aDate=$_get_dmy(date1)
if(aDate.length==0)return ans
var d=aDate[0]
var m=aDate[1]
var y=aDate[2]
var aDate=$_get_dmy(date2)
if(aDate.length==0)return ans
var D=aDate[0]
var M=aDate[1]
var Y=aDate[2]
var d1=new Date
d1.setFullYear(y,m-1,d)
var d2=new Date
d2.setFullYear(Y,M-1,D)
var ans=0
if(d1>d2)
ans=1
else if(d1<d2)
ans=-1
return ans}
function DS(date,shift){var aDate=$_get_dmy(date)
if(aDate.length==0)return"Date Input Error"
var d=aDate[0]
var m=aDate[1]
var y=aDate[2]
var formatNo=aDate[3]
var msec=(new Date(y,m-1,d)).getTime()
var obj=new Date
obj.setTime(msec+86400000*shift)
m=obj.getMonth()+1
d=obj.getDate()
y=obj.getFullYear()
if(m<10)m="0"+m
if(d<10)d="0"+d
return DF(d+"/"+m+"/"+y,formatNo)}
function DD(date1,date2){var aDate=$_get_dmy(date1)
if(aDate.length==0)return ans
var d=aDate[0]
var m=aDate[1]
var y=aDate[2]
var d1=new Date(y,m-1,d)
var aDate=$_get_dmy(date2)
if(aDate.length==0)return ans
var d=aDate[0]
var m=aDate[1]
var y=aDate[2]
var d2=new Date(y,m-1,d)
var one_day=1000*60*60*24
return Math.ceil((d2.getTime()-d1.getTime())/one_day)}
function Fis(fn){return(typeof(fn)=="function")?1:0}
function S(argMsg){var txt=""
for(var i=0;i<arguments.length;i++){var obj=arguments[i]
if(obj.constructor==Array){for(var j=0;j<obj.length;j++)
txt+='['+j+'] = '+obj[j]+'\n'}else
txt+=obj.toString()+"\n"}
alert(txt)}
function ST(Msg){document.title=Msg}
function T(obj){return obj.toString()}
function TC(txt,i){return txt.charAt(i)}
function TL(txt,n){if(n<=0)return""
var L=txt.length
return txt.slice(0,n)}
function TR(txt,n){var L=txt.length
return txt.slice(L-n,L)}
function TP(txt,Old,New,$sensitive_0){if(Old=="")return txt
txt=txt+""
if($sensitive_0)Old=txt.match(new RegExp(Old,"i"))
var arr=txt.split(Old)
return arr.join(New)}
function TP1(txt,Old,New,$sensitive_0){if(Old=="")return txt
txt=txt+""
if($sensitive_0)Old=txt.match(new RegExp(Old,"i"))
return txt.replace(Old,New)}
function TF(txt,find,$sensitive_0){return(!$sensitive_0)?txt.search(find):txt.search(new RegExp(find,"i"))}
function TD(txt){txt=$_trans_space(txt)
while(txt.search(/ /)>-1)
txt=txt.replace(/ /,"")
return txt}
function TM(txt){return txt.replace(/^\s+|\s+$/g,"");}
function TML(txt){return txt.replace(/^\s+/,"");}
function TMR(txt){return txt.replace(/\s+$/,"");}
function Tcom(txt){txt=txt+""
var x=txt.split(".")
var x1=x[0]
var x2=x.length>1?"."+x[1]:""
var rgx=/(\d+)(\d{3})/;while(rgx.test(x1))
x1=x1.replace(rgx,'$1'+','+'$2')
return x1+x2}
function TDG(num,digit){num=num.toString()
n=num.length
digit-=n;for(var i=0;i<digit;i++)num="0"+num
return num}
function TCH(txt){txt=txt+""
return txt.replace(/(<([^>]+)>)/ig,"")}
function T2I(txt){var x=""
txt=T(txt)
txt=TD(txt)
for(var i=0;i<txt.length;i++){try{var chr=txt.charAt(i)
if(isNaN(chr)==0)x+=I(x)}catch(ex){}}
if(x=="")return""
return I(x)}
function T2T(txt){txt=TD(txt)
txt=TP(txt,".",":")
var ans=""
var found_colon=0
for(var i=0;i<txt.length;i++){try{var chr=txt.charAt(i)
if(chr==':'){if(found_colon==0){ans+=chr
found_colon=1}else
return""}else if(isNaN(chr)==0)
ans+=I(chr)}catch(ex){}}
return ans}
function I(txt){txt=TP(txt,",","")
if(isNaN(txt)==1||txt==""||TD(txt)=="")
return 0
else
return parseInt(txt,10)}
function Iis(txt){if(typeof(txt)=="number")return 1
if(typeof(txt)!="string")return 0
if(txt.length==0)return 0
txt=TP(txt,",","")
for(var i=0;i<txt.length;i++){var CODE=txt.charCodeAt(i)
if(i==0&&CODE==45){}else if(CODE<48||CODE>57)
return 0}
return 1}
function Imax(arr){return Math.max.apply(Math,arr)}
function Imin(arr){return Math.min.apply(Math,arr)}
function IF(num,n){if(!n)n=2
n=Math.pow(10,n)
return Math.round(num*n)/n}
function IR(num){return Math.round(num)}
function IRF(num){return Math.floor(num)}
function IRC(num){return Math.ceil(num)}
function IP(num,n){return Math.pow(num,n)}
function Iabs(num){return Math.abs(I(num))}
function Isum(arr){var ans=0
for(var i in arr)ans+=I(arr[i])
return ans}
function G(id){return document.getElementById(id)}
function GS(id,$Logic){if(!$Logic&&$Logic!=0)return(G(id).style.display=='none')?0:1
if($Logic)G(id).style.display='block'
else G(id).style.display='none'}
function GE(id,$Logic){if(!$Logic&&$Logic!=0)return!G(id).disabled
if($Logic)G(id).disabled=false
else G(id).disabled=true}
function GF(id){G(id).focus()}
function GSL(id){try{G(id).select()}catch(ex){}
G(id).focus()}
function GV(id,$value){if(!$value&&$value!=0)return G(id).value
G(id).value=$value}
function GI(id,$value){if(!$value&&$value!=0)return G(id).innerHTML
G(id).innerHTML=$value}
function GA(id,$value){if(!$value&&$value!=0)return G(id).alt
G(id).alt=$value}
function GT(id,$value){if(!$value&&$value!=0)return G(id).title
G(id).title=$value}
function GP(id,$Img,$Width,$Height){if(!$Img)return G(id).src
G(id).src=$Img
if($Width)G(id).width=$Width
if($Height)G(id).height=$Height}
function GTS(id){var s1=G(id)
return s1.options[s1.selectedIndex].text}
function GTA(id){var s1=G(id)
return s1.options[s1.selectedIndex].alt}
function GTI(id){var s1=G(id)
return s1.selectedIndex}
function GC(id,$Logic){if(!$Logic&&$Logic!=0)return G(id).checked
if($Logic)G(id).checked=true
else G(id).checked=false}
function GPL(id,$Left){if(!$Left&&$Left!=0)return I(G(id).offsetLeft)
G(id).style.left=$Left}
function GPT(id,$Top){if(!$Top&&$Top!=0)return I(G(id).offsetTop)
G(id).style.top=$Top}
function GPH(id,$Height){if(!$Height&&$Height!=0)return I(TP(G(id).style.height,"px",""))
G(id).style.height=$Height}
function GPW(id,$Width){if(!$Width&&$Width!=0)return I(TP(G(id).style.width,"px",""))
G(id).style.width=$Width}
function GCN(id,$ClsName){if(!$ClsName&&$ClsName!=0)return G(id).getAttribute('className')
G(id).setAttribute("className",$ClsName)}
function GBP(id,Pic){G(id).background=Pic}
function GBC(id,Color){G(id).style.backgroundColor=Color}
function GG(id){return window.opener.document.getElementById(id)}
function GGV(id,$value){if(!$value&&$value!=0)return GG(id).value
GG(id).value=$value}
function GGI(id,$value){if(!$value&&$value!=0)return GG(id).innerHTML
GG(id).innerHTML=$value}
function GGP(){return window.parent}
function J(FileName,Data,$Fn,$ShowSendData,$ShowResponseData){if($ShowSendData)alert(Data)
var xmlHttp=$_create_ajax()
xmlHttp.open("Post",FileName,true)
xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
if($Fn){xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4&&xmlHttp.status==200){if($ShowResponseData){alert(xmlHttp.responseText)
C(xmlHttp.responseText)}
$Fn(xmlHttp.responseText)
delete xmlHttp
xmlHttp=null}}}
xmlHttp.send(Data)}
function MX(){return event.clientX+document.body.scrollLeft}
function MY(){return event.clientY+document.body.scrollTop}
function Mm(){document.body.style.cursor='move'}
function Mh(){document.body.style.cursor='hand'}
function M(){document.body.style.cursor=''}
function Mw(){document.body.style.cursor='wait'}
function DTPM(time,minute)
{if(time==""||AC(time)<5)return""
var h=$_getH(time)
var m=$_getMin(time)+I(minute)
var sp=TC(time,2)
h+=IRF(m/60)
m=m%60
h=T(h)
m=T(m)
if(AC(h)==1)h="0"+h
if(AC(m)==1)m="0"+m
return h+sp+m}
function DTPH(time,hour)
{if(time==""||AC(time)<5)return""
var h=$_getH(time)+I(hour)
var m=TC(time,3)+TC(time,4)
var sp=TC(time,2)
h=T(h)
if(AC(h)==1)h="0"+h
return h+sp+m}
function DTMM(time1,time2)
{if(time1==""||AC(time1)<5||time2==""||AC(time2)<5)return""
var sp=TC(time1,2)
var h=$_getH(time1)-$_getH(time2)
var m=$_getMin(time1)-$_getMin(time2)
return Iabs(h*60+m)}
function DTMHF(time1,time2)
{if(time1==""||AC(time1)<5||time2==""||AC(time2)<5)return""
var m=DTMM(time1,time2)
return IRF(m/60)}
function DTMHC(time1,time2)
{if(time1==""||AC(time1)<5||time2==""||AC(time2)<5)return""
var m=DTMM(time1,time2)
var HourInt=IRF(m/60)
if(m%60>0)HourInt++
return HourInt}
function DTH2T(hour)
{var h=T(hour)
if(AC(h)==1)h="0"+h
return h+":00"}
function min2hour(minute){return Math.floor(minute/60)+"."+minute%60}
function K(){return event.keyCode}
function Kent(){return(K()==13)?1:0}
function Kesc(){return(K()==27)?1:0}
function Kint(){if(K()>=48&&K()<=57)return 1
return 0}
function O(id,txt,$value,$title){if(!$value&&$value!=0)$value=txt
var op=document.createElement('option')
op.text=txt
op.value=$value
if($title&&$title!="")op.title=title
var s=G(id)
try{s.add(op,null)}catch(ex){s.add(op)}}
function OA(id,arrTxt,$arrValue,$arrTitle){if(!$arrValue)$arrValue=arrTxt
if($arrTitle){for(var i in arrTxt)
O(id,arrTxt[i],$arrValue[i],$arrTitle)}else{for(var i in arrTxt)
O(id,arrTxt[i],$arrValue[i])}}
function OD(id){var op=G(id)
for(var i=op.length-1;i>=0;i--)
op.remove(i)}
function OD1(id){var op=G(id)
op.remove(op.selectedIndex)}
function OD_not1(id){var op=G(id)
var index=G(id).selectedIndex
for(var i=op.length-1;i>=0;i--)
if(i!=index)op.remove(i)}
function OC(id){return G(id).length}
function OGA(id){var op=G(id)
var ans=new Array
for(var i=0;i<op.length;i++)
ans[i]=op.options[i].text
return ans}
function OFI(id,txt){var arr=OGA(id)
return AFI(arr,txt)}
function OS1(id){if(!OC(id))return
var v=G(id).options[0].value
GV(id,v)}
function WR(){location.reload(1)}
function WL(url){window.location.href=url}
function WO(url){window.open(url)}
function WOs(url,w,h,$scroll,$resize,$menu,$name){if(!$name)$name=""
if(!$scroll)$scroll=0
if(!$resize)$resize=0
if(!$menu)$menu=0
window.open(url,$name,"width="+w+",height="+h+",scrollbars="+$scroll+",resizable="+$resize+",menubar="+$menu)}
function WC(){window.open('','_parent','')
window.close()}
function WW(){return document.body.clientWidth}
function WH(){return document.body.clientHeight}
function W(txt){document.write(txt+"<br>")}
function P(){window.print()}
function PP(){var OLECMDID=7;var PROMPT=1
var WebBrowser='<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>'
document.body.insertAdjacentHTML('beforeEnd',WebBrowser);WebBrowser1.ExecWB(OLECMDID,PROMPT);WebBrowser1.outerHTML="";}
function $_trans_space(txt){var t=T(txt)
while(t.search(/ /)>-1)
t=t.replace(/ /," ")
while(t.search(/ /)>-1)
t=t.replace(/ /," ")
var ans=""
for(var i=0;i<t.length;i++){if(t.charCodeAt(i)==32||t.charCodeAt(i)==160)
ans+=" "
else
ans+=t.charAt(i)}
return ans}
function $_create_ajax(){var xmlHttp
if(window.ActiveXObject)
xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")
else if(window.XMLHttpRequest)
xmlHttp=new XMLHttpRequest()
return xmlHttp}
function $_chkZero(i){if(i<10)i="0"+i
return i}
function $_getH(time){var h=TC(time,0)+TC(time,1)
return I(h)}
function $_getMin(time){var m=TC(time,3)+TC(time,4)
return I(m)}
function $_get_dmy(dateAllFormat){var ans=new Array
var date=dateAllFormat
var x=date.split("/")
if(x.length==3&&x[0].length==2&&x[1].length==2&&x[2].length==4){ans.push(x[0])
ans.push(x[1])
ans.push(x[2])
ans.push(1)
return ans}
var x=date.split("-")
if(x.length==3&&x[0].length==4&&x[1].length==2&&x[2].length==2){ans.push(x[2])
ans.push(x[1])
ans.push(x[0])
ans.push(2)
return ans}
var x=date
if(x.length==6){ans.push(x.slice(4,6))
ans.push(x.slice(2,4))
ans.push("20"+x.slice(0,2))
ans.push(3)
return ans}
return ans}