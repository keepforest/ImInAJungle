﻿/********************************************************************
* Author: Johannes Kebeck
* Website: http://jkebeck.wordpress.com
* Date: 
*
* Source: http://jkebeck.wordpress.com/2011/05/29/loading-georss-feeds-with-dynamic-modules-in-the-bing-maps-ajax-control-v7/
*
* Description:
*
* This is a light weight module that can load a Simple GeoRSS feed to Bing Maps. 
* Note that only a limited set of the GeoRSS tags are supported. This is a trade off for the small size.
*
* Supports:
*
* Feed Tags:
*   - item
*
* GeoRSS Tags:
*   - georss:point
*   - georss:line
*   - georss:polygon
*
* Metadata Tags:
*   - title
*   - description
*
********************************************************************/

function GeoRSSModule(map) {

    var myFillColor = new Microsoft.Maps.Color(200,153,255,102); 
    var myStrokeColor = new Microsoft.Maps.Color(230,153,255,102);
    var myStrokeThickness = 0;

    var myPolygonOptions = { fillColor: myFillColor,
        strokeColor: myStrokeColor,
        strokeThickness: myStrokeThickness,
        visible: true
    };

    var myPolylineOptions = { strokeColor: myStrokeColor,
        strokeThickness: myStrokeThickness,
        visible: true
    };

    Microsoft.Maps.Pushpin.prototype.title = null;
    Microsoft.Maps.Pushpin.prototype.description = null;
    Microsoft.Maps.Polyline.prototype.title = null;
    Microsoft.Maps.Polyline.prototype.description = null;
    Microsoft.Maps.Polyline.prototype.anchorLat = null;
    Microsoft.Maps.Polyline.prototype.anchorLon = null;
    Microsoft.Maps.Polygon.prototype.title = null;
    Microsoft.Maps.Polygon.prototype.description = null;
    Microsoft.Maps.Polygon.prototype.anchorLat = null;
    Microsoft.Maps.Polygon.prototype.anchorLon = null;

    this.ImportGeoRSS = function (MyFeed) {
        map.entities.clear();

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", MyFeed, false);
        xmlhttp.send();
        var xmlDoc = xmlhttp.responseXML;

        var featureTagName = "entry";

        var itemCount = xmlDoc.getElementsByTagName(featureTagName ).length;
        //var allLocs = new Array();

        for (i = 0; i <= itemCount - 1; i++) {
            var childNodeCount = xmlDoc.getElementsByTagName(featureTagName )[i].childNodes.length;
            var tagName = null;
            var geomType = null;
            var geom = null;
            var myTitle = null;
            var myDesc = null;
            var anchorLat = null;
            var anchorLon = null;
            for (j = 0; j <= childNodeCount - 1; j++) {
                tagName = xmlDoc.getElementsByTagName(featureTagName )[i].childNodes[j].nodeName;
                if (tagName in { 'georss:point': '', 'georss:line': '', 'georss:polygon': '' }) {
                    geomType = tagName;
                    geom = xmlDoc.getElementsByTagName(featureTagName )[i].childNodes[j].childNodes[0].nodeValue;
                }
                else if (tagName == "title") {
                    try {
                        myTitle = xmlDoc.getElementsByTagName(featureTagName )[i].childNodes[j].childNodes[0].nodeValue;
                    }
                    catch (err) {
                    }
                }
                else if (tagName == "description") {
                    try {
                        myDesc = xmlDoc.getElementsByTagName(featureTagName )[i].childNodes[j].childNodes[0].nodeValue;
                    }
                    catch (err) {
                    }
                }
            }
            var coords = new Array();
            coords = geom.split(" ");
            var thisLocs = new Array();

            var anchorCoord = null;
            if ((coords.length / 2) % 2) {
                anchorCoord = coords.length / 2 - 1;
            }
            else {
                anchorCoord = coords.length / 2;
            }

            for (k = 0; k <= coords.length - 1; k = k + 2) {
                var thisLoc = new Microsoft.Maps.Location(coords[k], coords[k + 1]);
                thisLocs.push(thisLoc);
                //allLocs.push(thisLoc);

                if (k == anchorCoord) {
                    anchorLat = coords[k];
                    anchorLon = coords[k + 1];
                }
            }

            var shape = null;
            switch (geomType) {
                case "georss:point":
                    shape = new Microsoft.Maps.Pushpin(thisLocs[0]);
                    break;
                case "georss:line":
                    shape = new Microsoft.Maps.Polyline(thisLocs, myPolylineOptions);
                    shape.anchorLat = anchorLat;
                    shape.anchorLon = anchorLon;
                    break;
                case "georss:polygon":
                    shape = new Microsoft.Maps.Polygon(thisLocs, myPolygonOptions);
                    shape.anchorLat = anchorLat;
                    shape.anchorLon = anchorLon;
                    break;
            }
            shape.title = myTitle;
            shape.description = myDesc;
//            pushpinClick = Microsoft.Maps.Events.addHandler(shape, 'click', showInfoBox);
            map.entities.push(shape);
        }

    }
}

//Call the Module Loaded method
Microsoft.Maps.moduleLoaded('SimpleGeoRSSModule');