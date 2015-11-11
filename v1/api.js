jQuery(function($){
	var top;
	var left;
	var width = 500;
	var height = 650;
	var glass_id = $('#product-code').val();
	var url = '//localhost.bennerAPI/api/v1/' + glass_id;
	var maskWidth = document.body.scrollWidth;
    var maskHeight = document.body.scrollHeight;
    
    var button = $('.virtual-sample-btn');
    var response_code = $('<div class="response-code"><br></div>');
    var buttonStyle = $("<style>.virtual-sample-btn{background: -webkit-linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; background: -o-linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; background: linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1CA8E0',endColorstr='#0B7CC1'); border: 1px solid #1ca8e0; border-radius: 5px; color: #fff; cursor: pointer; display: block; font-size: 21px; padding: 6px 40px; text-decoration: none; text-shadow: 2px 2px 2px #06639f; } .virtual-sample-btn:hover{background: linear-gradient(to bottom,#1ca8e0 0px,#069edb 1%,#0588cb 9%,#0b7cc1 100%) repeat scroll 0 0; background: -moz-linear-gradient(to bottom,#1ca8e0 0px,#069edb 1%,#0588cb 9%,#0b7cc1 100%) repeat scroll 0 0; background: -webkit-gradient(linear,left top,left bottom,from(#0588cb),to(#0b7cc1)); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0B7CC1',endColorstr='#1CA8E0'); border: 1px solid #1ca8e0; border-radius: 5px; text-decoration: none; } </style>");
	var responseStyle = $("<style>.response-code{display:none; border-radius: 5px; border: 1px solid silver; margin-top: 20px; width: 100%; padding: 6px 40px; font-size: 21px;} </style>");
	
	// var label = $('body').find('label:contains("Custom Decoration")');
	// var select = label.parent().parent().find('select');
	// var labelSelectWrapper = label.parent().parent();
	
	var mask = $('<div class="mask"><style>body .mask{z-index: 20001;position: absolute; top: 0; left: 0; background-color: black; background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A); opacity: 0.80;}</style></div>');

	button.after(response_code, buttonStyle, responseStyle);

	$('.mask').css('width', maskWidth + 'px');
	$('.mask').css('height', maskHeight + 'px');
	
	debug();
    
	if (window.outerWidth) {
        left = Math.round((window.outerWidth - width) / 2) + window.screenX;
        top = Math.round((window.outerHeight - height) / 2) + window.screenY;
    } else if (window.screen.width) {
        left = Math.round((window.screen.width - width) / 2);
        top = Math.round((window.screen.height - height) / 2);
    }

	button.click(function(e){
		$('body').append('<div class="mask"><style>body .mask{z-index: 20001;position: absolute; top: 0; left: 0; background-color: black; background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A); opacity: 0.80;}</style></div>');
		$('.mask').css('width', maskWidth + 'px');
		$('.mask').css('height', maskHeight + 'px');
		win = window.open (url, 'newwindow', config='top='+top+', left='+left+', height='+height+', width='+width+', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
		win.focus();
		var interval = setInterval(function () {
	        if (win) {
	            if (win.closed) {
	                clearInterval(interval);
	                $('body .mask').remove();
	            }
	        }
	    }, 100);
	    setTimeout(function(){ 
	    	win.postMessage("Hello", "http://localhost.bennerapi");
	   	}, 3000);
	});

	function receiveMessage(event){
	  	if (event.origin !== "http://localhost.bennerapi"){
  			console.log(event.origin + ' has been blocked');
	    	return;
	    }
	    else
	    	console.log('success');
	    showResponse(event.data);
	}
	window.addEventListener("message", receiveMessage, false);

	function showResponse(data){
		$('.response-code').html("Your decoration code: " + data);
		$('.response-code').show();
	}

	function debug(){
		//console.log('=debug=');
		//console.log('glass_id: ' + glass_id);
		//console.log('button: ' + button);
		//console.log(url);
	}
});
