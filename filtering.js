    $(function() {
		$("#filter button").each(function() {
			$('#filter button:nth-child(1)').addClass('active');
			$('#filter button:nth-child(1)').click(function(){
			  $('.post').show();
			});
		    $(this).on("click", function(){
		        var filtertag = $(this).attr('class');
		        $('.post').show();
		        $('.post:not(.' + filtertag + ')').hide();
		        $(this).siblings().removeClass('active');
		    	$(this).addClass('active'); 
		    });
		});

    });