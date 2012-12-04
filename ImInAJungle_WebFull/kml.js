/*******************************************************************************
CALENDAR
*******************************************************************************/
//config
calendar.conf.dir_img = "main_mod/calendar/img/"	//default: "img/"
calendar.conf.format = "d mmm yyyy"			        //default: "dd/mm/yyyy"
calendar.conf.language = "th"			    		//"th","en" -> default: "en"
calendar.conf.default_today = 1			    		//0,1 -> default: 1
calendar.conf.txt_width = 75			    		//default: 160 (pixel)
calendar.conf.z_index = 1				    		//default: 999999
calendar.conf.style_dropdown = 1		    		//0,1 -> default: 0
calendar.conf.style_dropdown_offset_year = 3     	//default: 2

//method
calendar.fn.add("div_cal_3","date3",0)
calendar.fn.add("div_cal_4","date4",0)

/*******************************************************************************
GMAP
*******************************************************************************/
//set start map -> Thailand
var lat = 13.77351 //more -> up, less -> down
var lng = 100.56875 //more-> right, less -> left
var zoom = 5

//mem kml
var kml

//show point string	[for start]
spn_cursor()

//for win7 + safari -> fieldset height more than 10 px;
if (tn.app.is_safari() && tn.app.is_win7())
    G("fid_layer").style.height = tn.css.get("#fid_layer", "height", 1) + 10 + "px"

window.onload = function(){
    if (GBrowserIsCompatible()){
        //create map into div --------------------------------------------------
        tn.gmap.f.start("div_map",0,0,5,15,5,1,0)
        
        //load kml auto
        kml = tn_gmap_kml()
        
        //set event ------------------------------------------------------------
        GEvent.addListener(map, "mousemove", function(latlng){
            lat = latlng.lat()
            lng = latlng.lng()
            spn_cursor()
        })
        
        //plot all marker ------------------------------------------------------
        s.marker_unit.f.plot()
        s.marker_gov.f.plot()
        
        //create mapserv layer -------------------------------------------------
        s.layer.e.add_event()
        s.layer.create()
        
        //create raster layer --------------------------------------------------
        s.raster.add_event()
        
        //set right click function ---------------------------------------------
        var get_forest_info = function(){
            var fn = function(z){
                z = z.split("(tunui)")
                if (z[2]=="") z[2] = "ไม่มีป่าสงวนที่จุดนี้"
                tn.gmap.f.show_info(z[0],z[1],z[2])
            }
            var z = "mode=get_forest_info"
            + "&lat="+tn.gmap.m.right_click.lat
            + "&lng="+tn.gmap.m.right_click.lng
            J("http://protection.forest.go.th/gis/common.ajax.php",z,fn)
        }
        tn.gmap.e.on_right_click(get_forest_info)
    }
}
/*******************************************************************************
METHOD LINK FOR ghost.php
*******************************************************************************/
function kml_open(file){
    //clear text in input file
    G("form").reset()
    
    //remove old kml
    tn_gmap_kml_remove(kml)
    
    //import new kml from local
    file = TP(file,"//","/")
    file = "http://protection.forest.go.th/gis/kml/"+file
    kml = tn_gmap_kml(file, 1)
    
    //hide img loading
    GS("img_loading",0)
    
    //show span wait kml loading
    G("spn_wait").style.display = "inline"
    
    //set timer for hide
    setTimeout('G("spn_wait").style.display = "none"', 3000)
}
function kml_err(){
    //hide img loading
    GS("img_loading",0)
    
    //clear text in input file
    G("form").reset()
}

/*******************************************************************************
PRIVATE
*******************************************************************************/
function spn_cursor(){
    GI("spn_lat", lat)
    GI("spn_lng", lng)
}

/*******************************************************************************
GENERAL
*******************************************************************************/
G("file").onchange = function(){
    G("form").submit()
    
    //show img loading
    G("img_loading").style.display = "inline"
}


/*******************************************************************************
STRUCTURE [Copied From Trial]
*******************************************************************************/
var s={
    /***************************************************************************
    GMAP
    ***************************************************************************/
    //set start map -> Thailand
    lat: 13.77351 //more -> up, less -> down
    ,lng: 100.56875 //more-> right, less -> left
    ,zoom: 5
    
    ,ajax: "http://protection.forest.go.th/gis/trial/ajax.php"
    ,marker_unit:{
        a:{
            //marker -----------------------------------------------------------
            icon: "img/flag.png"
            ,icon_width: 16
            ,icon_height: 16
            //------------------------------------------------------------------
        }
        ,m:{
            marker: []
            ,lat: []
            ,lng: []
            ,html:[]
            
            ,clear: function(){
                s.marker_unit.m.marker = []
                s.marker_unit.m.lat = []
                s.marker_unit.m.lng = []
                s.marker_unit.m.html = []
            }
        }
        ,f:{
            add: function(lat, lng,html){
                s.marker_unit.m.lat.push(lat)
                s.marker_unit.m.lng.push(lng)
                s.marker_unit.m.html.push(html)
            }
            ,plot: function(){
                for (var i in s.marker_unit.m.lat){
                    var lat = s.marker_unit.m.lat[i]
                    var lng = s.marker_unit.m.lng[i]
                    var html = s.marker_unit.m.html[i]
                    
                    var icon = s.marker_unit.a.icon
                    var w = s.marker_unit.a.icon_width
                    var h = s.marker_unit.a.icon_height
                    
                    var marker = tn_gmap_marker(
                        lat, lng
                        ,icon,w,h
                        ,'',0,0
                        ,html, '', 0, 0,195
                    )
                    
                    //mem marker
                    s.marker_unit.m.marker.push(marker)
                }
                
                //clear some memory
                s.marker_unit.m.lat = []
                s.marker_unit.m.lng = []
                s.marker_unit.m.html = []
            }
        }
    }
    ,marker_gov:{//government
        a:{
            //marker -----------------------------------------------------------
            icon: "img/map_red.png"
            ,icon_width: 16
            ,icon_height: 16
            //------------------------------------------------------------------
        }
        ,m:{
            marker: []
            ,lat: []
            ,lng: []
            ,html:[]
            
            ,clear: function(){
                s.marker_gov.m.marker = []
                s.marker_gov.m.lat = []
                s.marker_gov.m.lng = []
                s.marker_gov.m.html = []
            }
        }
        ,f:{
            add: function(lat, lng,html){
                s.marker_gov.m.lat.push(lat)
                s.marker_gov.m.lng.push(lng)
                s.marker_gov.m.html.push(html)
            }
            ,plot: function(){
                for (var i in s.marker_gov.m.lat){
                    var lat = s.marker_gov.m.lat[i]
                    var lng = s.marker_gov.m.lng[i]
                    var html = s.marker_gov.m.html[i]
                    
                    var icon = s.marker_gov.a.icon
                    var w = s.marker_gov.a.icon_width
                    var h = s.marker_gov.a.icon_height
                    
                    var marker = tn_gmap_marker(
                        lat, lng
                        ,icon,w,h
                        ,'',0,0
                        ,html, '', 0, 0, 150
                    )
                    
                    //mem marker
                    s.marker_gov.m.marker.push(marker)
                }
                
                //clear some memory
                s.marker_gov.m.lat = []
                s.marker_gov.m.lng = []
                s.marker_gov.m.html = []
            }
        }
    }
    ,raster:{
        m:{
            img:[]
            ,border:[]
            ,visible: 0
        }
        ,add_event: function(){
            G("btn_raster_show").onclick = s.raster.show
            G("btn_raster_hide").onclick = s.raster.hide
            G("sel_raster_opac").onchange = function(){
                if (s.raster.m.visible)
                    setTimeout(s.raster.show, 1)
            }
        }
        ,create: function(img, nw_lat,nw_lng, ne_lat,ne_lng, sw_lat,sw_lng, se_lat,se_lng){
            var sx = 0.008
            var sy = 0.0029
            
            var arr = tn_gmap_raster(img, nw_lat+sy, nw_lng+sx, ne_lat+sy, ne_lng+sx, sw_lat+sy, sw_lng+sx, se_lat+sy, se_lng+sx)
            s.raster.m.img.push(arr[0])
            s.raster.m.border.push(arr[1])
        }
        ,show: function(){//tn_gmap_move_to(8.345, 98.494, 12)
            s.raster.hide()
            
            //mem status
            s.raster.m.visible = 1
            
            //create img -------------------------------------------------------
            var v = GV("sel_raster_opac")
            s.raster.create("mf/raster/PAN10_"+v+".png",8.46416666667,98.4038888889,8.43166666667,98.6255555556,8.24027777778,98.3552777778,8.2075,98.5769444444)
            s.raster.create("mf/raster/PAN11_"+v+".png",8.25888888889,98.3594444444,8.22611111111,98.5811111111,8.03472222222,98.3108333333,8.00194444444,98.5325)
            s.raster.create("mf/raster/PAN12_"+v+".png",8.05333333333,98.315,8.02083333333,98.5363888889,7.82916666667,98.2663888889,7.79666666667,98.4877777778)
            s.raster.create("mf/raster/PAN13_"+v+".png",7.84805555556,98.2702777778,7.81527777778,98.4916666667,7.62388888889,98.2219444444,7.59111111111,98.4433333333)
        }
        ,hide: function(){
            //mem status
            s.raster.m.visible = 0
            
            if (s.raster.m.img.length > 0){
                //remove layer
                tn_gmap_img_remove_arr(s.raster.m.img)
                tn_gmap_img_remove_arr(s.raster.m.border)
                
                //clear mem
                s.raster.m.img = []
                s.raster.m.border = []
            }
        }
    }
    ,fieldset:{
        toggle: function(a_id, fieldset_id, table_id, fieldset_h){
            var logic = !GS(table_id)
            
            //show/hide table data
            GS(table_id, logic)
            
            //show/hide fieldset
            var h = (logic) ? fieldset_h+"px" : "19px"
            
            G(fieldset_id).style.height = h
            
            //change innerHTML of tag a
            G(a_id).innerHTML = (logic) ? "ซ่อน" : "แสดง"
        }
    }
    ,layer:{
        c:{
            url_mapserv: "http://protection.forest.go.th/cgi-bin/mapserv.exe"
            ,path_mapfile: "c:/wwwroot/gis/mf/"
            
            ,url_mapfile:{
                forest: "tn_shp_forest.map"
                ,thailand: "tn_shp_thailand.map"
                ,province: "tn_shp_province.map"
                ,amp: "tn_shp_amp.map"
                ,tam: "tn_shp_tam.map"
                ,rail: "tn_shp_rail.map"
                ,road: "tn_shp_road.map"
                ,hydro: "tn_shp_hydro.map"
                ,p7017: "tn_L7017_MIX.map"
            }
        }
        ,m:{
            forest: null
            ,thailand: null
            ,province: null
            ,amp: null
            ,tam: null
            ,rail: null
            ,road: null
            ,hydro: null
            ,p7017: null
            
            ,unit: []
        }
        ,create: function(){
            var x = s.layer.c.url_mapserv
            var y = s.layer.c.path_mapfile
            
            s.layer.m.thailand = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.thailand)
            s.layer.m.province = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.province)
            s.layer.m.amp = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.amp)
            s.layer.m.tam = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.tam)
            s.layer.m.forest = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.forest)
            s.layer.m.rail = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.rail)
            s.layer.m.road = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.road)
            s.layer.m.hydro = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.hydro)
            s.layer.m.p7017 = tn.gmap.mapserv.layer.create(x, y+ s.layer.c.url_mapfile.p7017)
        }
        ,e:{
            add_event: function(){
                G("chk_forest").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.forest)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.forest)
                }
                G("chk_unit").onclick = function(){
                    if (this.checked)
                        tn_gmap_marker_show_arr(s.marker_unit.m.marker)
                    else
                        tn_gmap_marker_hide_arr(s.marker_unit.m.marker)
                }
                G("chk_thailand").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.thailand)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.thailand)
                }
                G("chk_province").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.province)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.province)
                }
                G("chk_amp").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.amp)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.amp)
                }
                G("chk_tam").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.tam)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.tam)
                }
                G("chk_rail").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.rail)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.rail)
                }
                G("chk_road").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.road)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.road)
                }
                G("chk_hydro").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.hydro)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.hydro)
                }
                G("chk_gov").onclick = function(){
                    if (this.checked)
                        tn_gmap_marker_show_arr(s.marker_gov.m.marker)
                    else
                        tn_gmap_marker_hide_arr(s.marker_gov.m.marker)
                }
                G("chk_7017").onclick = function(){
                    if (this.checked)
                        tn.gmap.mapserv.layer.show(s.layer.m.p7017)
                    else
                        tn.gmap.mapserv.layer.hide(s.layer.m.p7017)
                }
            }
        }
    }
}