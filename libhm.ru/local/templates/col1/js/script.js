$(document).ready(function() {
	
	/* partners slider */
	 $('.b-pr-slider').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  dots: false
	});

	/* club slider */
	$('.b-clubs-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  dots: false
	});

	$('.b-zgal').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  dots: false
	});


	$('.b-mgrid').isotope({
	  itemSelector: '.b-mitem'
	});


	/* placeholder */
	$('input[placeholder], textarea[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();

	
	/* input highlight */
	$('.pp-form .b-inp input, .pp-form .b-tarea textarea').focus(function() {
	  $(this).parent().addClass('i-light');
	}).blur(function() {
	  $(this).parent().removeClass('i-light');
	}).blur();

	
	/*textarea*/
	autosize($('textarea'));
	

	/* select */
	$('.sselect').sSelect({ddMaxHeight: '240px'});
	$('.SSContainerDivWrapper').each( function() {
		if ($(this).height()>=240)
		{
			$(this).addClass('max-height-ss');
		}
	});

	
	/* cycle slider plugin */
	$('.b-shedul-slider').after('<div class="b-shedul-slider-nav"></div>').cycle({ 
		slides: '> .b-shd-item',
		pager: '.b-shedul-slider-nav',
		timeout: 0
	});

	
	
	/* fancybox */
	$('.c-pop-link').fancybox({
		padding : 0,
		margin : 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		tpl : {closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>'}
	});

	$('.c-pop-link-photo').fancybox({
		padding : 10,
		margin : 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		wrapCSS: 'photo-fancy',
		tpl : {closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close fancybox-close2" href="javascript:;"></a>'}
	});

	$('.breg-car li a').click(function() {
		if (!($(this).hasClass('breg-p-active')))
		{
				$('.breg-car li a').removeClass('breg-p-active');
				var newpic = $(this).attr('href');
				$('#brb-pic').attr('src',newpic);
				$(this).addClass('breg-p-active');
				return false;
			
		}
		else {
				return false;
		}
	});
	
	/* datepicker */
	$.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '',
        nextText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	        'Июл','Авг','Сен','Окт','Ноя','Дек'],
	        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	        weekHeader: 'Нед',
	        dateFormat: 'dd.mm.yy',
	        firstDay: 1,
	        isRTL: false,
	        showMonthAfterYear: false,
	        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['ru']);
	$('.b-inp-date input').datepicker({
		showOtherMonths: true,
		selectOtherMonths: false
	});
	
	$('.b-top-nav > li').each( function() {
		if ($(this).find('.b-sub-menu').length != 0)
		{
			$(this).addClass('is-parent');
		}
	});
	$('.b-top-nav li.is-parent').hover(function() {
			$(this).find('a:first').addClass('nav-hover');
			$(this).find('.b-sub-menu').show();
		}, function(){
			$(this).find('a:first').removeClass('nav-hover');
			$(this).find('.b-sub-menu').hide();
	});

	// switch to blind view
	$(document).on('click', '.b-virt-tour', function(){
		var link = $(this).attr("data-url");
		$.ajax({
			type: "POST",
			url: "/content/setblind.php",
			data: "BLIND=1",
			success: function(msg) {
				document.location = link; 
			}
		});
	});

	// vote
	
	$('.b-btn-vote').click(function() {
		$.post(
			"/content/vote.php", 
			$('#formVote').serialize(), 
			function(data){
				if(data == "ok") {
					$('.b-listvote').hide();
					$('.b-listvoteresults').show();
					$('.b-btn-vote').addClass('b-btn-vote-already').removeClass('b-btn-vote');
					$('.b-btn-result').remove();
				}
			}, 
			"html"
		);
	});
	$('.b-btn-result').click(function() {
		$('.b-listvote').toggle();
		$('.b-listvoteresults').toggle();
	});

});