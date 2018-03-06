//creating the top menu
$('.dws-menu ul li').hover(function () {

    $(this).children('ul').stop(false, true).show('slow');
}, function () {

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

});

//creating the left side bar
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

//getting the array with cities
var self = this;
var array = [];
$.getJSON("https://raw.githubusercontent.com/stska/test/master/kladr.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        array.push(val);
    });
});

/* Не использовал готовое api или autocomplete из принципа, хотелось самому что-то организовать, но к сажалению не успел закончить. Но идея следующая. Я зараннее при загрузки страницы получаю массив из Json файла в массив array затем набирая от 3х символов и выше, при каждом новом символе прохожу по массиву и хахожу
соответствия, найденные города подгружал бы в список который вываливался из инпута. Сейчас же он просто записывает все с один li и доделать уже не успеваю, так как каждый раз переделывал по другому.   */
$('#query').keyup(function () {
    var Value = $('#query').val();
    var reg = new RegExp("^(" + Value + ")");
    console.log(reg);
    if (Value.length >= 3) {
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



