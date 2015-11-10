jQuery(function($){
	//$('.virtual-sample').click(function(){
	function showWindow(){
		var top;
		var left;
		var width = 500;
		var height = 650;
		var glass_id = $('#virtual-sample').val();
		var url = '//localhost.bennerAPI/api/v1/';
		$('body').append('<div class="mask"><style>body .mask{z-index: 20001;position: absolute; top: 0; left: 0; background-color: black; background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A); opacity: 0.80;}</style></div>');
		url += glass_id; 

		//console.log(document.body.scrollHeight);
		maskWidth = document.body.scrollWidth;
        maskHeight = document.body.scrollHeight;
        $('.mask').css('width', maskWidth + 'px');
        $('.mask').css('height', maskHeight + 'px');

		if (window.outerWidth) {
            left = Math.round((window.outerWidth - width) / 2) + window.screenX;
            top = Math.round((window.outerHeight - height) / 2) + window.screenY;
        } else if (window.screen.width) {
            left = Math.round((window.screen.width - width) / 2);
            top = Math.round((window.screen.height - height) / 2);
        }
		win = window.open (url, 'newwindow', config='top='+top+', left='+left+', height='+height+', width='+width+', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
		win.focus();

		var interval = setInterval(function () {
            if (win) {
                if (win.closed) {
                    clearInterval(interval);
                    console.log('window closed');
                    $('body .mask').remove();
                }
            }
        }, 500);
    }
	//});

	//refactor for lower case
	var label = $('body').find('label:contains("Custom Decoration")');
	var select = label.parent().parent().find('select');

	//console.log(label);
	console.log(select.attr('id'));
	
	label.parent().parent().on("change", select, function(e){
		var val = select.children('option:selected').val();
		var text = select.children('option:selected').text();
		console.log(val);
		console.log(text);
		if (text == "Yes")
			showWindow();
	});


	// select.change(function(){
	// 	//console.log($(this));
	// 	var val = $(this).val();
	// 	var text = $(this).children('option:selected').text();
	// 	console.log(text);
	// 	if (text == "Yes")
	// 		showWindow();

	// });

	//console.log(select.parent().parent().find('select'));
	//console.log(document.body.scrollHeight);

});
