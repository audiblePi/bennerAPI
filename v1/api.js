jQuery(function($){
	var apiurl = 'http://localhost.bennerapi';
	//var apiurl = 'http://www.odysseyfl.com';

	var top;
	var left;
	var width = 500;
	var height = 600;
	var input = $('#_bcg-product-code');
	var glass_id = input.val();
	var url = apiurl + '/api/v1/' + glass_id;
	var button = $('<div class="_bcg-vsb">Decorate Now</div>');
    var response_code = $('<div class="_bcg-response-code"></div>');
    var buttonStyle = $("<style>._bcg-vsb{margin:10px 0px;background: -webkit-linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; background: -o-linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; background: linear-gradient(#1CA8E0 0px, #069EDB 1%, #0AA2DD 9%, #0B7CC1 100%) repeat scroll 0 0; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1CA8E0',endColorstr='#0B7CC1'); border: 1px solid #1ca8e0; border-radius: 5px; color: #fff; cursor: pointer; display: block; font-size: 21px; padding: 6px 40px; text-decoration: none; text-shadow: 2px 2px 2px #06639f; } ._bcg-vsb:hover{background: linear-gradient(to bottom,#1ca8e0 0px,#069edb 1%,#0588cb 9%,#0b7cc1 100%) repeat scroll 0 0; background: -moz-linear-gradient(to bottom,#1ca8e0 0px,#069edb 1%,#0588cb 9%,#0b7cc1 100%) repeat scroll 0 0; background: -webkit-gradient(linear,left top,left bottom,from(#0588cb),to(#0b7cc1)); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0B7CC1',endColorstr='#1CA8E0'); border: 1px solid #1ca8e0; border-radius: 5px; text-decoration: none; } </style>");
	var responseStyle = $("<style>._bcg-response-code{display:none; border-radius: 5px; border: 1px solid silver; margin-top: 20px; width: 100%; padding: 6px 40px; font-size: 21px;} </style>");
	var mask = $('<div class="_bcg-mask"><style>body ._bcg-mask{z-index: 20001;position: absolute; top: 0; left: 0; background-color: black; background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A); opacity: 0.80;}</style></div>');
	var label, select, selectWrapper;
	var textLabel, textField, textWrapper;

	var wooStyle = $('<style>table.wccpf_fields_table td.wccpf_label {width:inherit;}</style>');

	$('body').append(buttonStyle, responseStyle, wooStyle);
	input.after(button);
	findSelectOption();
	findTextField();

	if (window.outerWidth) {
        left = Math.round((window.outerWidth - width) / 2) + window.screenX;
        top = Math.round((window.outerHeight - height) / 2) + window.screenY;
    } else if (window.screen.width) {
        left = Math.round((window.screen.width - width) / 2);
        top = Math.round((window.screen.height - height) / 2);
    }

	button.click(function(e){
		$('body').append(mask);
		mask.css('width', document.body.scrollWidth + 'px');
		mask.css('height', document.body.scrollHeight + 'px');
		win = window.open (url, 'newwindow', config='top='+top+', left='+left+', height='+height+', width='+width+', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
		win.focus();
		var interval = setInterval(function () {
	        if (win) {
	            if (win.closed) {
	                clearInterval(interval);
	                mask.remove();
	            }
	        }
	    }, 100);
	    current_code = response_code.html();
	    if (!current_code)
		    current_code = textField.val();
	    setTimeout(function(){ win.postMessage(current_code, apiurl); }, 1000);
	});

	//Refactor this/ functionaility depends on finding the select option
	function findSelectOption(){
	  	label = $('body').find('label:contains("Custom Decoration")');
	  	if (label.length){
	  		console.log("select label found");
			select = label.parent().parent().find('select');
			if (select.length){
				console.log('select option found');
				selectWrapper = label.parent().parent();
				if (selectWrapper.length)
					console.log("select wrapper found");
			}	
		}
		else
			console.log('unable to find the right select label');
	}

	function findTextField(){
	  	textLabel = $('body').find('label:contains("Decoration Code")');
	  	if (textLabel.length){
	  		console.log("text label found");
			textField = textLabel.parent().parent().find('input');
			if (textField.length){
				console.log('text field found');
				textWrapper = label.parent().parent();
				if (textWrapper.length)
					console.log("text wrapper found");
			}	
		}
		else
			console.log('unable to find the right text label');
	}

	function receiveMessage(event){
	  	if (event.origin !== apiurl){
  			console.log(event.origin + ' has been blocked');
	    	return;
	    }
	    else 
	    	console.log('success');
	    if (event.data){
		    showResponse(event.data);
		    //try to programmatically change the select option to yes
		    //select.val("Yes").change();	//may not work
		}
	}

	function showResponse(data){
		button.after(response_code);
		response_code.html(data);
		// response_code.show();
		textField.val(data);
	}

	window.addEventListener("message", receiveMessage, false);
});
