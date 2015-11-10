jQuery(function($){
	var glass_id = $('.image-container').attr('id');
	var decoration_id;
	var portion_id;
	var new_glass_id;

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
			window.close();
		}
	});

	$('ul.decoration li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		decoration_id = $(this).attr('id');
	});

	$('ul.portion li').click(function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		portion_id = $(this).attr('id');
	});
});
