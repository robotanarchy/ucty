"use strict";

// the variable 'map' is currently also global. It does not have a prefix.

var global_enhanced_map;


// TODO: Calculate these from the map!
var global_center_x = 11.42434;
var global_center_y = 48.76038;
var global_zoom = 20000;


// TODO: do this in an init function
var global_info   = document.getElementById("info");
var global_debug  = document.getElementById("debug");
var global_canvas = document.getElementById("mapc");
var global_c2     = global_canvas.getContext("2d");

global_c2.lineCap = "round";


// type:
// water,multipolygon,building,area,boundary,wood,,scrub,heath,grassland,tree_row,peak,tree,enforcement,Paketbox,E-Bike-Ladestation
// TODO: don't even add non-needed types: boundary, E-Bike-Ladestation, ...
var global_colors =
{
	"water" : "blue",
	"building": "grey",
	"wood" : "green",
	"scrub" : "green",
	"tree_row" : "green",
	"peak" : "brown",
	"street" : "#666666",
	"default" : "orange"
}


var global_zoom_timeout = null;