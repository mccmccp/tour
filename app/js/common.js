$(function() {
    // $('.slider').owlCarousel({
    //     loop: true,
    //     items: 1,
    //     //nav: true,
    //     //navText: ["<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-5x' aria-hidden='true'></i>"],
    //     dots: true,
    //     autoplay: true,
    //     smartSpeed: 3000,
    //     slideSpeed: 100,
    //     animateIn: 'fadeIn',
    //     animateOut: 'fadeOut'
    // });
    $('.currency-radio').on(
        'click',
        function () {
            $('.currency-radio').each(function () {
                $('.currency-radio').removeClass('check-currency')
            });
            $(this).addClass('check-currency');
        }
    )
    $('.check-people').on(
        'click',
        function () {
            var currentLabel = $("label[for='"+$(this).attr('id')+"']");
            $(this).siblings('.check-people').each(function () {
                var label = $("label[for='"+$(this).attr('id')+"']");
                label.removeClass('checked-category')
            });
            currentLabel.addClass('checked-category');
        }
    )
    $('.check-category').on(
        'click',
        function () {
            var label = $("label[for='"+$(this).attr('id')+"']");
            label.toggleClass('checked-category');
        }
    )
    $('.category-any').on(
        'click',
        function () {
            var labelAny = $("label[for='"+$(this).attr('id')+"']");
            labelAny.toggleClass('check-currency');
            var childInput = $(this).siblings('.category-container').children('input');
            if (this.checked) {
                childInput.each(function () {
                    var label = $("label[for='"+$(this).attr('id')+"']");
                    $(this).prop('checked', true)
                    label.addClass('checked-category')
                });
            } else {
                childInput.each(function () {
                    var label = $("label[for='"+$(this).attr('id')+"']");
                    $(this).prop('checked', false)
                    label.removeClass('checked-category')
                });
            }

        }
    )
    $('.select-all').on(
        'click',
        function () {
            var label = $("label[for='"+$(this).attr('id')+"']");
            label.toggleClass('check-currency');
            if (this.checked) {
                $(this).siblings('.multiple-container')
                    .children('.multiple-list')
                    .children('li')
                    .children('input').each(
                    function () {
                        $(this).prop('checked', true)
                    }
                )
            } else {
                $(this).siblings('.multiple-container')
                    .children('.multiple-list')
                    .children('li')
                    .children('input').each(
                    function () {
                        $(this).prop('checked', false)
                    }
                )
            }
        }
    );
    var defaultCalendar = $("#range-calendar").rangeCalendar({
        theme: "full-green-theme",
        changeRangeCallback: function(el, date){
            var newDate = new Date(date.start);
            $(".datepicker-when").datepicker('setDate', newDate);
        }
    });
    //var selectedDay = new Date();
    var actualDate = new Date();
    $('.datepicker-when').datepicker(
        {
            dateFormat: 'dd-mm-yy',
            onSelect: function() {
                //console.log(111, $(this).datepicker('getDate'))
                var selectedDay = $(this).datepicker('getDate');
                defaultCalendar.setStartDate(selectedDay)
            }
        }
    ).datepicker("setDate", new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()+1));

    var stickyNavTop = $('.main-head').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    };

    $(window).scroll( function(){
        stickyNav();
    });

    $('.circle-click').click(function(){
        $("html, body").animate({ scrollTop: $(window).height() - 70}, 600);
        return false;
    });
    var $quickSearchMap = $('.quick-search-map');
    $quickSearchMap.click(function() {
        console.log(222)
        $quickSearchMap.addClass('open')
    })
});
