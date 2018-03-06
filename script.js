$('.dws-menu ul li').hover(function () {
    // $('.dws-menu li ul').show('slow');
    $(this).children('ul').stop(false, true).show('slow');
}, function () {
    //$('.dws-menu li ul').hide('slow');
    $(this).children('ul').stop(false, true).hide('slow');
});
$('.tab_left li').on('click', function (event) {

    $('.tab').stop(false, true).hide('slow');

    if ($(this).data('tab') === "one") {
        $('#tab1').stop(false, true).show('slow');

    } else if ($(this).data('tab') === "two") {
        $('#tab2').stop(false, true).show('slow');
    } else if ($(this).data('tab') === "three") {
        $('#tab3').stop(false, true).show('slow');
    } else $('#tab4').stop(false, true).show('slow');


    //$('.tab').stop(false, true).show('slow');
});
$('.pull_tab').on('click', function (event) {
    var p = $('.nav-side');
    var position = p.position();
    console.log(position.left);
    if (position.left > 0) {
        $('.nav-side').animate({

            right: 3000,
            left: -2000
        }, 1000),
            $('.pull_tab').animate({
                left: 458.500,
                right: 1411.500
            }, 100);
    }


    else {
        $('.nav-side').animate({

            right: 1300,
            left: 453
        }, 1000),
            $('.pull_tab').animate({
                left: 950
            }, 100);
    }


});
var self = this;
var array = [];
$.getJSON("https://raw.githubusercontent.com/stska/test/master/kladr.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        array.push(val);
    });
});

$('#query').keyup(function () {
    var Value = $('#query').val();
    //var reg= new RegExp(""+Value+"");
    var reg = new RegExp("^(" + Value + ")");
    console.log(reg);
    if (Value.length >= 2) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i].City);
            console.log(reg);
            var te = array[i].City;
            var test = reg.test(te);
            if (test == true) {
                console.log(te);
                $('.list_new li a').append(te);

                let list = (e) =>
                {
                    let list = e.children[1], step = list.clientHeight;
                    [...list_1.querySelectorAll("[data-scroll]")
                ].
                    forEach(e => e.addEventListener("click", () => list.scrollTop += Number(e.dataset.scroll) ? step : -step
                ))
                    ;
                }

                list(list_1);

            }


        }
        $('.list_res').remove();
    }

})



