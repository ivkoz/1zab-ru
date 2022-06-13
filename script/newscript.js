let cena_dostavki = 0;
let priceDel = 0;
let costyl = 0;
let itogforuse = 0;

const constants = {
    razmer_nastila: 1.1,
    cena_metra_zabora: 180,
}


function get_form_data() {
    return {
        razmer_stolba: document.getElementById('u31').value,
        pokritie_stolba: document.getElementById('u164').value,
        porkitie_nastila: document.getElementById('u42').value,
        tolsina_nastila: document.getElementById('u36').value,
        marka_nastila: document.getElementById('u167').value,
        razmer_lagi: document.getElementById('u33').value,
        pokritie_lagi: document.getElementById('u164').value,
        shirina_kalitki: Number(document.getElementById('u18').value),
        tip_zamka: document.getElementById('u194').value,
        shirina_vorot: Number(document.getElementById('u16').value),
        tip_vorot: document.getElementById('u20').value,
        visota_zabora: Number(document.getElementById('u13').value),
        shirina_zabora: Number($('#u12').val()),
        tip_furnitury: document.getElementById('u196').value,
    }
}


function get_prices(form_data) {
    return {
        cena_stolbov: price_data["Pole"][form_data.razmer_stolba][form_data.pokritie_stolba],
        cena_nastila: price_data["Decking"][form_data.porkitie_nastila][form_data.tolsina_nastila][form_data.marka_nastila],
        cena_lagi: price_data["Lags"][form_data.razmer_lagi][form_data.pokritie_lagi],
        cena_kalitki: price_data["Wicket"][form_data.shirina_kalitki][form_data.tip_zamka],
        cena_vorot: price_data["Gate"][form_data.shirina_vorot][form_data.tip_vorot],
        cena_furnituri: price_data["Gate"][form_data.shirina_vorot][form_data.tip_furnitury],
    }
}




function calculate_results(form_data, prices) {
    let chistaya_dlina = form_data.shirina_zabora - form_data.shirina_vorot - form_data.shirina_kalitki;
    
    let kolvo_nastila = chistaya_dlina / constants.razmer_nastila;
    let total_cena_nastila = form_data.visota_zabora * prices.cena_nastila * kolvo_nastila;
    
    let kolvo_stolbov = (chistaya_dlina - form_data.shirina_vorot - form_data.shirina_kalitki) / 2.5 + 1;
    let total_cena_stolbov = kolvo_stolbov * prices.cena_stolbov * form_data.visota_zabora;

    let kolvo_lagi = (chistaya_dlina - form_data.shirina_vorot - form_data.shirina_kalitki) * 2;
    let total_cena_lagi = kolvo_lagi * prices.cena_lagi;

    let total_cena_zabora = form_data.shirina_zabora * constants.cena_metra_zabora;
    costyl = total_cena_zabora
    let total_price = total_cena_lagi + prices.cena_furnituri + total_cena_stolbov + total_cena_nastila + prices.cena_kalitki + prices.cena_vorot;
    console.log(prices.cena_furnituri)
    let skidka = total_price / 100 * 5;
    if (total_price < 80000) {
        skidka = 0;
    }

    let total_price_with_skidka = total_price - skidka;
    let total_price_za_uslugi = total_price_with_skidka + total_cena_zabora + itogforuse;

    return {
        skidka: skidka,
        total_price_with_skidka: total_price_with_skidka,
        total_cena_zabora: total_cena_zabora,
        total_price: total_price,
        total_price_za_uslugi: total_price_za_uslugi,
        total_cena_nastila: total_cena_nastila,
        kolvo_nastila: kolvo_nastila,
        total_cena_lagi: total_cena_lagi,
        kolvo_lagi: kolvo_lagi,
        kolvo_stolbov: kolvo_stolbov,
        total_cena_stolbov: total_cena_stolbov,
    }
}


function display_data(result, form_data, prices) {
    // отображение скидки
    if (result.skidka === 0) {
        $('#discountNumberLine').hide()
    } else {
        $('#discountNumbers').html(Math.round(result.skidka));
        console.log('hello');
        $('#discountNumberLine').show()
    }

    $('#itogMat').html(Math.round(result.total_price_with_skidka));
    $('#discountNumbers').html(Math.round(result.skidka) + " ₽");
    $('#setupZab ').html(Math.round(result.total_cena_zabora));
    $('#priceWithDisc').html(Math.round(result.total_price_with_skidka));
    $('#discountNumber').html(Math.round(result.total_price_with_skidka));
    $('#discountNumberLine').html(Math.round(result.total_price) + " ₽");
    $('#AllItog').html(Math.round(result.total_price));
    $('#ItogPrice').html(Math.round(result.total_price_za_uslugi));
    $('#PriceProfNsRes').html(Math.round(result.total_cena_nastila));
    $('#priceKalitka').html(Math.round(prices.cena_kalitki));
    $('#lengthZabConf').html(form_data.shirina_zabora);
    $('#TypeConf').html(form_data.tip_vorot);
    $('#widthDoorConf').html(form_data.shirina_vorot);
    $('#HightZabConf').html(form_data.visota_zabora);
    $('#DoorConf').html(form_data.shirina_kalitki);
    $('#profNs').html(Math.round(result.kolvo_nastila));
    $('#lagsResult').html(Math.round(result.total_cena_lagi) + " ₽");
    $('#priceDoor').html(Math.round(prices.cena_vorot));
    $('#u66').html(Math.round(result.kolvo_lagi));
    $('#u58').html(Math.round(result.kolvo_stolbov));
    $('#u60').html(Math.round(result.total_cena_stolbov));
    $('#AllResult').html(Math.round(prices.cena_vorot));
    $('#itog').html(Math.round(result.total_price_with_skidka) + 'руб.');
}


function build_form_data_for_tariff_basic(form_data) {
    // принимает объект form_data и подставляет нужные параметры для тарифа
    form_data.visota_zabora = 1.5;
    form_data.marka_nastila = 'C8';
    form_data.tolsina_nastila = '03';
    form_data.porkitie_nastila = 'Polimer1side';
    form_data.tip_zamka = 'NoLock';
    form_data.tip_vorot = 'Double-leaf';
    return form_data;
}


function build_form_data_for_tariff_standart(form_data) {
    // принимает объект form_data и подставляет нужные параметры для тарифа
    form_data.visota_zabora = 1.8;
    form_data.marka_nastila = 'C8';
    form_data.tolsina_nastila = '04';
    form_data.porkitie_nastila = 'Polimer1side';
    form_data.tip_zamka = 'EmbeddedLock';
    form_data.tip_vorot = 'SlidingManual';
    return form_data;
}


function build_form_data_for_tariff_premium(form_data) {
    // принимает объект form_data и подставляет нужные параметры для тарифа
    form_data.visota_zabora = 2;
    form_data.shirina_kalitki = 1.2;
    form_data.marka_nastila = 'C2021';
    form_data.tolsina_nastila = '05';
    form_data.porkitie_nastila = 'Polimer2side';
    form_data.tip_zamka = 'PadLock';
    form_data.tip_vorot = 'SlidingManual';
    return form_data;
}


let tariff_div_id_method_mapping = {
    '#basicPrice': build_form_data_for_tariff_basic,
    '#standicPrice': build_form_data_for_tariff_standart,
    '#premPrice': build_form_data_for_tariff_premium,
}



function calculate_and_display_tariff_price(form_data, div_id) {
    let tariff_form_data = structuredClone(form_data);
    tariff_form_data = tariff_div_id_method_mapping[div_id](tariff_form_data);
    let tariff_prices = get_prices(tariff_form_data);
    let tariff_results = calculate_results(tariff_form_data, tariff_prices);
    $(div_id).html(Math.round(tariff_results.total_price_za_uslugi));
}


function calculate_and_display(form_data) {
    let prices = get_prices(form_data);
    let results = calculate_results(form_data, prices);
    display_data(results, form_data, prices);
    
    console.log(form_data);
    console.log(prices);
    console.log(results);
}


// handlers

$(document).ready(function() {
    let form_data = get_form_data();
    calculate_and_display(form_data);
    calculate_and_display_tariff_price(form_data, "#basicPrice");
    calculate_and_display_tariff_price(form_data, "#standicPrice");
    calculate_and_display_tariff_price(form_data, "#premPrice");
});


$('#u12').change(function () {  // изменение длины забора
    let form_data = get_form_data();
    calculate_and_display(form_data);
    calculate_and_display_tariff_price(form_data, "#basicPrice");
    calculate_and_display_tariff_price(form_data, "#standicPrice");
    calculate_and_display_tariff_price(form_data, "#premPrice");
});

// $('input').on('change', function () {
//     let form_data = get_form_data();
//     calculate_and_display(form_data);
//     calculate_and_display_tariff_price(form_data, "#basicPrice");
//     calculate_and_display_tariff_price(form_data, "#standicPrice");
//     calculate_and_display_tariff_price(form_data, "#premPrice");
// });

$('select').on('change', function () {  // изменение селектов
    let form_data = get_form_data();
    calculate_and_display(form_data);
});

$('#u33').on('change', function () {  // изменение селектов
    let form_data = get_form_data();
    calculate_and_display(form_data);
});

// $("body").click(function(){
//     let form_data = get_form_data();
//     calculate_and_display(form_data);
//     calculate_and_display_tariff_price(form_data, "#basicPrice");
//     calculate_and_display_tariff_price(form_data, "#standicPrice");
//     calculate_and_display_tariff_price(form_data, "#premPrice");
// });


$( "#basic" ).click(function() {
    let form_data = get_form_data();
    let tariff_form_data = build_form_data_for_tariff_basic(form_data);
    calculate_and_display(tariff_form_data);

    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("1.5");
    $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C8");
    $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.3");
    $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
    $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Стандартный");
    $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Без замка");
    $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Без автоматики");
    $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Распашные");
    $("#u13").val(1.5);
    $("#u42").val("Polimer1side");
    $("#u36").val("03");
    $("#u167").val("C8");
    $("#u194").val("NoLock");
    $("#u20").val("Double-leaf");
});


$( "#stand" ).click(function() {
    let form_data = get_form_data();
    let tariff_form_data = build_form_data_for_tariff_standart(form_data);
    calculate_and_display(tariff_form_data);
    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("1.8");
    $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C8");
    $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.4");
    $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
    $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Стандартный");
    $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Врезной замок");
    $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Откатные");
    $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Без автоматики");
    $("#u13").val(1.8);
    $("#u42").val("Polimer1side");
    $("#u36").val("04");
    $("#u167").val("C8");
    $("#u194").val("EmbeddedLock");
    $("#u20").val("SlidingManual");
});


$( "#premium" ).click(function() {
    let form_data = get_form_data();
    let tariff_form_data = build_form_data_for_tariff_premium(form_data);
    calculate_and_display(tariff_form_data);
    
    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("2");
    $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C20");
    $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.5");
    $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
    $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Нестандартный");
    $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Накладной замок");
    $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Автоматика + фотоэлемент");
    $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Откатные");
    $("#u13").val(2);
    $("#u42").val("Polimer2side");
    $("#u36").val("05");
    $("#u167").val("C2021");
    $("#u194").val("PadLock");
    $("#u20").val("SlidingManual");
    $("#u18").val(1.2);
});
