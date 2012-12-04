var map
window.onunload=GUnload
tn.gmap={e:{on_click:function(fn){GEvent.addListener(map,"click",fn)},on_mouse_move:function(fn){GEvent.addListener(map,"mousemove",fn)},on_right_click:function(fn){GEvent.addListener(map,"singlerightclick",fn)}},m:{left_click:{glatlng:null,lat:null,lng:null},right_click:{glatlng:null,lat:null,lng:null},zoom:{min:0,max:21}},c:{use_googlebar:0},f:{start:function(div_id,$lat_thai,$lng_thai,$zoom_5,$max_zoom_in_21,$max_zoom_out_0,$use_arrow_cursor_1,$use_googlebar_0){var lat=$lat_thai||13.77351
var lng=$lng_thai||100.56875
var zoom=$zoom_5||5
tn.gmap.m.zoom.max=$max_zoom_in_21||21
tn.gmap.m.zoom.min=$max_zoom_out_0||0
tn.gmap.c.use_googlebar=$use_googlebar_0||0
var option={}
if(!$use_arrow_cursor_1&&$use_arrow_cursor_1!=0)
option.draggableCursor="url(fcur.cur),default"
map=new GMap2(document.getElementById(div_id),option)
map.setCenter(new GLatLng(lat,lng),zoom)
map.enableContinuousZoom()
map.enableScrollWheelZoom()
map.addControl(new GLargeMapControl3D())
map.addControl(new GMenuMapTypeControl())
if(tn.gmap.c.use_googlebar)map.enableGoogleBar()
map.addControl(new GScaleControl())
var min=tn.gmap.m.zoom.min
var max=tn.gmap.m.zoom.max
G_PHYSICAL_MAP.getMinimumResolution=function(){return min}
G_NORMAL_MAP.getMinimumResolution=function(){return min}
G_SATELLITE_MAP.getMinimumResolution=function(){return min}
G_HYBRID_MAP.getMinimumResolution=function(){return min}
G_PHYSICAL_MAP.getMaximumResolution=function(){return max}
G_NORMAL_MAP.getMaximumResolution=function(){return max}
G_SATELLITE_MAP.getMaximumResolution=function(){return max}
G_HYBRID_MAP.getMaximumResolution=function(){return max}
GEvent.addListener(map,"click",function(goverlay,glatlng,overlay_glatlng){if(!glatlng)return
tn.gmap.m.left_click.glatlng=glatlng
tn.gmap.m.left_click.lat=glatlng.lat()
tn.gmap.m.left_click.lng=glatlng.lng()})
GEvent.addListener(map,"singlerightclick",function(gpoint){var glatlng=map.fromContainerPixelToLatLng(gpoint)
tn.gmap.m.right_click.glatlng=glatlng
tn.gmap.m.right_click.lat=glatlng.lat()
tn.gmap.m.right_click.lng=glatlng.lng()})},view:{zoom_in:function(){map.zoomIn()},zoom_out:function(){map.zoomOut()},zoom_in_here:function(glatlng){map.zoomIn(glatlng,true)},zoom_out_here:function(glatlng){map.setCenter(glatlng,map.getZoom()-1)},center_here:function(glatlng){map.setCenter(glatlng)}},show_info:function(lat,lng,html){map.openInfoWindowHtml(new GLatLng(lat,lng),html)}},polygon:{f:{create:function(args_latlng){var n=arguments.length
var arr_latlng=[]
for(var i=0;i<n;i+=2){var lat=arguments[i]
var lng=arguments[i+1]
arr_latlng.push(new GLatLng(lat,lng))}
arr_latlng.push(arr_latlng[0])
var border_width=2
var border_color="#ff0000"
var border_opacity=0.6
var bg_color="#ff0000"
var bg_opacity=0.2
var polygon=new GPolygon(arr_latlng,border_color,border_width,border_opacity,bg_color,bg_opacity);map.addOverlay(polygon)
return polygon},remove:function(polygon){map.removeOverlay(polygon)},remove_arr:function(arr_polygon){for(var i in arr_polygon)
map.removeOverlay(arr_polygon[i])}}},marker:{e:{on_click:function(marker,fn){GEvent.addListener(marker,"click",fn)}},f:{change_html:function(marker,html){GEvent.addListener(marker,"click",function(){marker.openInfoWindowHtml(html)})},create:function(lat,lng,$icon,$icon_width,$icon_height,$shadow,$shadow_width,$shadow_height,$html,$tooltip,$show_html_now_0,$show_marker_now_1){$icon=$icon||""
$shadow=$shadow||""
$shadow_width=$shadow_width||0
$shadow_height=$shadow_height||0
$html=$html||""
$tooltip=$tooltip||""
$show_html_now_0=$show_html_now_0||0
if(!$show_marker_now_1&&$show_marker_now_1!=0)$show_marker_now_1=1
var marker
if($icon!=""){var ico=new GIcon()
ico.image=$icon
ico.iconSize=new GSize($icon_width,$icon_height)
if($shadow!=""){ico.shadow=$shadow
ico.shadowSize=new GSize($shadow_width,$shadow_height)}
ico.iconAnchor=new GPoint($icon_width/2,$icon_height/2)
ico.infoWindowAnchor=new GPoint($icon_width/2,$icon_height/2)
var option={icon:ico,title:$tooltip}
marker=new GMarker(new GLatLng(lat,lng),option)}else{marker=new GMarker(new GLatLng(lat,lng))}
map.addOverlay(marker)
if(!$show_marker_now_1)marker.hide()
if($html!=""){GEvent.addListener(marker,"click",function(){marker.openInfoWindowHtml($html)})
if($show_html_now_0)marker.openInfoWindowHtml($html)}
return marker},create_noaddoverlay:function(lat,lng,$icon,$icon_width,$icon_height,$shadow,$shadow_width,$shadow_height,$html,$tooltip){$icon=$icon||""
$shadow=$shadow||""
$shadow_width=$shadow_width||0
$shadow_height=$shadow_height||0
$html=$html||""
$tooltip=$tooltip||""
var marker
if($icon!=""){var ico=new GIcon()
ico.image=$icon
ico.iconSize=new GSize($icon_width,$icon_height)
if($shadow!=""){ico.shadow=$shadow
ico.shadowSize=new GSize($shadow_width,$shadow_height)}
ico.iconAnchor=new GPoint($icon_width/2,$icon_height/2)
ico.infoWindowAnchor=new GPoint($icon_width/2,$icon_height/2)
var option={icon:ico,title:$tooltip}
marker=new GMarker(new GLatLng(lat,lng),option)}else{marker=new GMarker(new GLatLng(lat,lng))}
if($html!=""){GEvent.addListener(marker,"click",function(){marker.openInfoWindowHtml($html)})}
return marker},add:function(marker){map.addOverlay(marker)},remove:function(marker){map.removeOverlay(marker)},add_arr:function(arr_marker){for(var i in arr_marker)
map.addOverlay(arr_marker[i])},remove_arr:function(arr_marker){for(var i in arr_marker)
map.removeOverlay(arr_marker[i])}}},menu:{m:{menu:null,fn:[],title:[]},f:{add_fn:function(fn,title){tn.gmap.menu.m.fn.push(fn)
tn.gmap.menu.m.title.push(title)},start:function(){tn.gmap.menu.m.menu=document.createElement("div")
tn.gmap.menu.m.menu.className="TN_GMAP_DIV_MENU"
var html=""
for(var i in tn.gmap.menu.m.fn)
html+='<div><a href="javascript:tn.gmap.menu.$.call('+i+')">'+tn.gmap.menu.m.title[i]+'</a></div>'
tn.gmap.menu.m.menu.innerHTML=html
map.getContainer().appendChild(tn.gmap.menu.m.menu)
GEvent.addListener(map,"singlerightclick",function(gpoint){var x=gpoint.x
var y=gpoint.y
if(x>map.getSize().width-120){x=map.getSize().width-120}
if(y>map.getSize().height-100){y=map.getSize().height-100}
var pos=new GControlPosition(G_ANCHOR_TOP_LEFT,new GSize(x,y))
pos.apply(tn.gmap.menu.m.menu)
tn.gmap.menu.f.show()})
GEvent.addListener(map,"click",function(){tn.gmap.menu.f.hide()})},hide:function(){tn.gmap.menu.m.menu.style.visibility="hidden"},show:function(){tn.gmap.menu.m.menu.style.visibility="visible"}},$:{call:function(index){tn.gmap.menu.f.hide()
tn.gmap.menu.m.fn[index].call()}}},mapserv:{layer:{create:function(url_mapserv,url_mapfile,$opacity_100,$show_now_0){if(!$opacity_100&&$opacity_100!=0)$opacity_100=100
$show_now_0=$show_now_0||0
var url=url_mapserv
url+="?map="+url_mapfile
url+="&mode=tile"
url+="&tilemode=gmap"
url+="&tile={X}+{Y}+{Z}"
var layer=new GTileLayer(null,0,0,{tileUrlTemplate:url,isPng:true,opacity:$opacity_100/100})
layer=new GTileLayerOverlay(layer)
if($show_now_0)
map.addOverlay(layer)
return layer},show:function(layer){if(tn.gmap.c.use_googlebar)
map.enableGoogleBar()
else
map.disableGoogleBar()
map.addOverlay(layer)},hide:function(layer){map.removeOverlay(layer)}}}}
function tn_gmap_remove_all(){map.clearOverlays()
map.closeInfoWindow()}
function tn_gmap_kml($url,$fit_map_0){var default_kml="http://firefly.geog.umd.edu/kml/download.php?file=SouthEast_Asia_24h.kml"
if(!$url||$url=="")$url=default_kml
if(!$fit_map_0)$fit_map_0=0
var kml=new GGeoXml($url)
map.addOverlay(kml)
if($fit_map_0)kml.gotoDefaultViewport(map)
return kml}
function tn_gmap_kml_remove(kml){map.removeOverlay(kml)}
function tn_gmap_move_to(lat,lng,$zoom_dont_change){if(!$zoom_dont_change&&$zoom_dont_change!=0)
map.panTo(new GLatLng(lat,lng))
else
map.setCenter(new GLatLng(lat,lng),$zoom_dont_change)}
function tn_gmap_move_direction(dx,dy){map.panDirection(dx,dy)}
function tn_gmap_zoom_thai(){map.setCenter(new GLatLng(13.77351,100.56875),5)}
function tn_gmap_marker(lat,lng,$icon,$icon_width,$icon_height,$shadow,$shadow_width,$shadow_height,$tooltip,$html_info,$show_html_info_now_1,$show_marker_now_1,$tooltip_width_auto){$icon=$icon||""
$shadow=$shadow||""
$shadow_width=$shadow_width||0
$shadow_height=$shadow_height||0
$tooltip=$tooltip||""
$html_info=$html_info||""
if(!$show_html_info_now_1&&$show_html_info_now_1!=0)$show_html_info_now_1=1
if(!$show_marker_now_1&&$show_marker_now_1!=0)$show_marker_now_1=1
var marker
if($icon!=""){var icon=new GIcon()
icon.image=$icon
icon.iconSize=new GSize($icon_width,$icon_height)
if($shadow!=""){icon.shadow=$shadow
icon.shadowSize=new GSize($shadow_width,$shadow_height)}
icon.iconAnchor=new GPoint($icon_width/2,$icon_height/2)
icon.infoWindowAnchor=new GPoint($icon_width/2,$icon_height/2)
marker=new GMarker(new GLatLng(lat,lng),icon)}else{marker=new GMarker(new GLatLng(lat,lng))}
if($tooltip!=""){map.getPane(G_MAP_FLOAT_PANE).appendChild(gmap_tooltip)
marker.tooltip='<div class=TN_GMAP_DIV_TOOLTIP>'+$tooltip+'<\/div>'
GEvent.addListener(marker,"mouseover",function(){gmap_show_tooltip(marker,$tooltip_width_auto)})
GEvent.addListener(marker,"mouseout",function(){gmap_tooltip.style.visibility="hidden"})}
map.addOverlay(marker)
if(!$show_marker_now_1)
marker.hide()
if($html_info!=""){GEvent.addListener(marker,"click",function(){marker.openInfoWindowHtml($html_info)})
if($show_html_info_now_1)
marker.openInfoWindowHtml($html_info)}
return marker}
function tn_gmap_marker_click(marker){GEvent.trigger(marker,"click")}
function tn_gmap_marker_remove(marker){map.removeOverlay(marker)}
function tn_gmap_marker_remove_arr(arr_marker){for(var i in arr_marker)
map.removeOverlay(arr_marker[i])}
function tn_gmap_marker_show_arr(arr_marker){for(var i in arr_marker)
arr_marker[i].show()}
function tn_gmap_marker_hide_arr(arr_marker){for(var i in arr_marker)
arr_marker[i].hide()}
function tn_gmap_img(img,ne_lat,ne_lng,sw_lat,sw_lng){var ne=new GLatLng(ne_lat,ne_lng)
var sw=new GLatLng(sw_lat,sw_lng)
var bound=new GLatLngBounds(sw,ne)
var image=new GGroundOverlay(img,bound);map.addOverlay(image);return image}
function tn_gmap_img_remove_arr(arr_img){for(var i in arr_img)
map.removeOverlay(arr_img[i])}
function tn_gmap_raster(img,nw_lat,nw_lng,ne_lat,ne_lng,sw_lat,sw_lng,se_lat,se_lng){var ans_border=tn_gmap_rect(nw_lat,nw_lng,ne_lat,ne_lng,sw_lat,sw_lng,se_lat,se_lng)
if(nw_lng>sw_lng){if(ne_lat>nw_lat){}else{ne_lat=nw_lat
sw_lat=se_lat}}else{if(ne_lat>nw_lat){ne_lng=se_lng
sw_lng=nw_lng}else{ne_lat=nw_lat
ne_lng=se_lng
sw_lat=se_lat
sw_lng=nw_lng}}
var ans_img=tn_gmap_img(img,ne_lat,ne_lng,sw_lat,sw_lng)
return[ans_img,ans_border]}
function tn_gmap_div(div_id,position,pad_h,pad_v){if(position==1)position=G_ANCHOR_TOP_LEFT
else if(position==2)position=G_ANCHOR_TOP_RIGHT
else if(position==3)position=G_ANCHOR_BOTTOM_LEFT
else if(position==4)position=G_ANCHOR_BOTTOM_RIGHT
var pos=new GControlPosition(position,new GSize(pad_h,pad_v))
pos.apply(document.getElementById(div_id))
map.getContainer().appendChild(document.getElementById(div_id))}
function tn_gmap_div_em(ne_lat,ne_lng,sw_lat,sw_lng,$innerHTML,$boder_width_1,$boder_color_red){var ne=new GLatLng(ne_lat,ne_lng)
var sw=new GLatLng(sw_lat,sw_lng)
var bound=new GLatLngBounds(sw,ne)
map.addOverlay(new gmap_div(bound,$boder_width_1,$boder_color_red,$innerHTML));}
function tn_gmap_line(close_loop,args_latlng){var n=arguments.length
if(n<5)close_loop=0
var arr_point=[]
for(var i=1;i<n-1;i+=2){var lat=arguments[i]
var lng=arguments[i+1]
arr_point.push(new GLatLng(lat,lng))}
if(close_loop){var lat=arguments[1]
var lng=arguments[2]
arr_point.push(new GLatLng(lat,lng))}
var border_width=1
var border_color="#ff0000"
var border_opacity=0.5
var geo_curve=false
var polyline=new GPolyline(arr_point,border_color,border_width,border_opacity,{geodesic:geo_curve})
map.addOverlay(polyline)
return polyline}
function tn_gmap_rect(nw_lat,nw_lng,ne_lat,ne_lng,sw_lat,sw_lng,se_lat,se_lng){var nw=new GLatLng(nw_lat,nw_lng)
var ne=new GLatLng(ne_lat,ne_lng)
var sw=new GLatLng(sw_lat,sw_lng)
var se=new GLatLng(se_lat,se_lng)
var border_width=2
var border_color="#ff6600"
var border_opacity=1
var bg_color="#ff0000"
var bg_opacity=0
var rect=[sw,nw,ne,se,sw]
var polygon=new GPolygon(rect,border_color,border_width,border_opacity,bg_color,bg_opacity);map.addOverlay(polygon)
return polygon}
function tn_gmap_mapserv_getlayer(url_mapserv,url_mapfile){var url=url_mapserv
url+="?map="+url_mapfile
url+="&mode=tile"
url+="&tilemode=gmap"
url+="&tile={X}+{Y}+{Z}"
var layer=new GTileLayer(null,0,0,{tileUrlTemplate:url,isPng:true,opacity:0.6})
layer=new GTileLayerOverlay(layer)
map.addOverlay(layer)
return layer}
gmap_div.prototype=new GOverlay()
gmap_div.prototype.initialize=function(map){var div=document.createElement("div");div.style.border=this.weight_+"px solid "+this.color_;div.style.position="absolute";map.getPane(G_MAP_MAP_PANE).appendChild(div);this.map_=map;this.div_=div;}
gmap_div.prototype.remove=function(){this.div_.parentNode.removeChild(this.div_);}
gmap_div.prototype.copy=function(){return new gmap_div(this.bounds_,this.weight_,this.color_,this.backgroundColor_,this.opacity_);}
gmap_div.prototype.redraw=function(force){if(!force)return;var c1=this.map_.fromLatLngToDivPixel(this.bounds_.getSouthWest());var c2=this.map_.fromLatLngToDivPixel(this.bounds_.getNorthEast());this.div_.style.width=Math.abs(c2.x-c1.x)+"px";this.div_.style.height=Math.abs(c2.y-c1.y)+"px";this.div_.style.left=(Math.min(c2.x,c1.x)-this.weight_)+"px";this.div_.style.top=(Math.min(c2.y,c1.y)-this.weight_)+"px";this.div_.style.backgroundColor="#ff5555"
this.div_.style.filter="alpha(opacity=40)"
this.div_.innerHTML=this.tn_innerHTML||""}
function gmap_div(bounds,opt_weight,opt_color,innerHTML){this.bounds_=bounds;this.weight_=opt_weight||1;this.color_=opt_color||"#ff0000";this.tn_innerHTML=innerHTML}
var gmap_tooltip=document.createElement("div");gmap_tooltip.style.visibility="hidden";function createMarker(lat,lng,name,html){map.getPane(G_MAP_FLOAT_PANE).appendChild(gmap_tooltip);var marker=new GMarker(new GLatLng(lat,lng));marker.tooltip='<div class=TN_GMAP_DIV_TOOLTIP>'+name+'<\/div>';GEvent.addListener(marker,"click",function(){marker.openInfoWindowHtml(html);})
GEvent.addListener(marker,"mouseover",function(){gmap_show_tooltip(marker);})
GEvent.addListener(marker,"mouseout",function(){gmap_tooltip.style.visibility="hidden"})
map.addOverlay(marker);}
function gmap_show_tooltip(marker,$tooltip_width_auto){if(!$tooltip_width_auto&&$tooltip_width_auto!=0)
gmap_tooltip.style.width="auto"
else
gmap_tooltip.style.width=$tooltip_width_auto+"px"
gmap_tooltip.innerHTML=marker.tooltip
var point=map.getCurrentMapType().getProjection().fromLatLngToPixel(map.fromDivPixelToLatLng(new GPoint(0,0),true),map.getZoom())
var offset=map.getCurrentMapType().getProjection().fromLatLngToPixel(marker.getPoint(),map.getZoom())
var anchor=marker.getIcon().iconAnchor
var width=marker.getIcon().iconSize.width
var height=gmap_tooltip.clientHeight
var pos=new GControlPosition(G_ANCHOR_TOP_LEFT,new GSize(offset.x-point.x-anchor.x+width,offset.y-point.y-anchor.y-height))
pos.apply(gmap_tooltip)
gmap_tooltip.style.visibility="visible"}