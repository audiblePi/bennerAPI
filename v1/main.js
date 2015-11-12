jQuery(function($){
	var apiurl = 'http://localhost.bennerapi';
	//var apiurl = 'http://www.odysseyfl.com';
	var allowed = [ apiurl, "http://localhost.magentotest", "http://www.getyourgrowler.com.php56-11.dfw3-1.websitetestlink.com"];

	var glass_id = $('._bcg-image-container').attr('id');
	var decoration_id;
	var portion_id;
	var new_glass_id;
	var overlay = $('._bcg-deco-overlay');
	var parent;
	var call;
	var origin;

	$(document).on("click","._bcg-cancel",function(e){
		window.close();
	});

	$(document).on("click","._bcg-print",function(e){
		window.print();
	});

	$(document).on("click","._bcg-accept",function(e){
		if (decoration_id == undefined)
			window.alert('Please select a decoration.');
		else if (portion_id == undefined)
			window.alert('Please select a portion size');
		if (decoration_id && portion_id != undefined){
			new_glass_id = glass_id + "-" + decoration_id + "-" + portion_id;
			if (parent)
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

	$('ul._bcg-decoration li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		decoration_id = $(this).attr('id');
		addDecoration(decoration_id);
	});

	$('ul._bcg-portion li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		portion_id = $(this).attr('id');
		setPortion(portion_id);
	});

	function addDecoration(id){
		var url = apiurl + '/api/v1/images/deco' + id + '.png';
		var image = $('<img src="' + url + '">');
		overlay.html(image);
	}

	function setPortion(id){
		var overlay = $('._bcg-image-overlay ._bcg-deco-overlay');
		switch(id) {
		    case "5": overlay.css('top', '25%'); break;
		    case "6": overlay.css('top', '24%'); break;
		    case "7": overlay.css('top', '23%'); break;
		    case "8": overlay.css('top', '22%'); break;
		    default: overlay.css('top', '25%');
		}
	}

	function receiveMessage(event){
  		if (allowed.indexOf(event.origin) !== -1){
  			console.log("success");
	  		parent = event.source;
	  		call = event.data;
	  		origin = event.origin;
  		}
  		else{
  			console.log(event.origin + ' has been blocked');
    		return;
  		}
	}
	window.addEventListener("message", receiveMessage, false);
});