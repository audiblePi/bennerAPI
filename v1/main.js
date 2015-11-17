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

	$(document).on("click","._bcg-cancel",function(e){ window.close(); }); 
	$(document).on("click","._bcg-print",function(e){ window.print(); });

	$(document).on("click","._bcg-accept",function(e){
		if (!decoration_id)
			window.alert('Please select a decoration.');
		else{
			new_glass_id = glass_id + "-" + decoration_id + "-" + portion_id;
			if (parent)
				parent.postMessage(new_glass_id, origin);
			window.close();
		}
	});

	$('ul._bcg-decoration li').hover(
		function(){
			temp_decoration_id = $(this).attr('id');
			addDecoration(temp_decoration_id);
		},
		function(){
			if (decoration_id)
				addDecoration(decoration_id);
			else
				overlay.html("");
		}
	);

	$('ul._bcg-decoration li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		decoration_id = $(this).attr('id');
		addDecoration(decoration_id);
		console.log(portion_id);
		if (!portion_id){
			portion_id = "8";
			$('ul._bcg-portion li#8').addClass('selected');
		}
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
		    case "5": overlay.css('top', '29%'); break;
		    case "6": overlay.css('top', '26%'); break;
		    case "7": overlay.css('top', '23%'); break;
		    case "8": overlay.css('top', '20%'); break;
		    default: overlay.css('top', '20%');
		}
	}

	function preLoad(code){
		decoration_id = code.substr(5,1);
		portion_id = code.substr(7,1);
		if (decoration_id){
			addDecoration(decoration_id);
			$('ul._bcg-decoration li#' + decoration_id).addClass('selected');
		}
		if (portion_id){
			setPortion(portion_id);
			$('ul._bcg-portion li#' + portion_id).addClass('selected');
		}
	}

	function receiveMessage(event){
  		if (allowed.indexOf(event.origin) !== -1){
  			console.log("success");
	  		parent = event.source;
	  		call = event.data;
	  		origin = event.origin;
	  		preLoad(call);
  		}
  		else{
  			console.log(event.origin + ' has been blocked');
    		return;
  		}
	}
	window.addEventListener("message", receiveMessage, false);
});