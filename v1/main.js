jQuery(function($){
	var glass_id = $('.image-container').attr('id');
	var decoration_id;
	var portion_id;
	var new_glass_id;
	var overlay = $('.deco-overlay');
	var parent;
	var call;
	var origin;

	$(document).on("click",".cancel",function(e){
		window.close();
	});

	$(document).on("click",".print",function(e){
		window.print();
	});

	$(document).on("click",".accept",function(e){
		if (decoration_id == undefined)
			window.alert('Please select a decoration.');
		else if (portion_id == undefined)
			window.alert('Please select a portion size');
		if (decoration_id && portion_id != undefined){
			new_glass_id = glass_id + "-" + decoration_id + "-" + portion_id;
			//window.alert(new_glass_id);
			parent.postMessage(new_glass_id, origin);
			window.close();
		}
	});

	// $('ul.decoration li').hover(function(){
	// 	// $(this).siblings().removeClass('selected');
	// 	// $(this).addClass('selected');
	// 	decoration_id = $(this).attr('id');
	// 	addDecoration(decoration_id);
	// });

	$('ul.decoration li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		decoration_id = $(this).attr('id');
		addDecoration(decoration_id);
	});

	$('ul.portion li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		portion_id = $(this).attr('id');
		setPortion(portion_id);
	});

	function addDecoration(id){
		var url = '//localhost.bennerapi/api/v1/images/deco' + id + '.png';
		var image = $('<img src="' + url + '">');
		overlay.html(image);
	}

	function setPortion(id){
		var overlay = $('.image-overlay .deco-overlay');
		switch(id) {
		    case "5": overlay.css('top', '25%'); break;
		    case "6": overlay.css('top', '24%'); break;
		    case "7": overlay.css('top', '23%'); break;
		    case "8": overlay.css('top', '22%'); break;
		    default: overlay.css('top', '25%');
		}
	}

	function receiveMessage(event){
  		if (event.origin !== "http://localhost.magentotest"){
  			console.log(event.origin + ' has been blocked');
    		return;
  		}
  		else 
  			console.log("success");
		
  		parent = event.source;
  		call = event.data;
  		origin = event.origin;
	}
	window.addEventListener("message", receiveMessage, false);
});