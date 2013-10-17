jQuery(document).ready(function($){
	"use-strict";

	var myOptions = {
		// you can declare a default color here,
		// or in the data-default-color attribute on the input
		defaultColor: false,
		// a callback to fire whenever the color changes to a valid color
		change: function(event, ui){},
		// a callback to fire when the input is emptied or an invalid color
		clear: function() {},
		// hide the color picker controls on load
		hide: true,
		// show a group of common colors beneath the square
		// or, supply an array of colors to customize further
		palettes: false,
		color: false,
	    mode: 'hsl',
	    controls: {
			horiz: 's', // horizontal defaults to saturation
	        vert: 'l', // vertical defaults to lightness
	        strip: 'h' // right strip defaults to hue
	    },
	    border: true, // draw a border around the collection of UI elements
	    target: false, // a DOM element / jQuery selector that the element will be appended within. Only used when called on an input.
//		width: 125,
	};
 
	$('.teccc-color-picker').wpColorPicker(myOptions);
	
	// this option doesn't seem to be picked up above
	$('.teccc-color-picker').iris({
		width: 125,
	});

});

