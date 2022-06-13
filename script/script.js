let lenght = 0;
let itogMat = 0;
let ItogPrice = 0;
let itog = 0;
let setupZab = 0;
let priceForZabor = 180;
let discountNumber = 0;
let spanprice = 100;
let pricePosts = 0
let priceProfNs = 0
let lagsPrice = 0
let priceKalitka = 0

let priceDoor = 0
let feenceWidthRes =  0
let widthProf = 1.10;
let feenceHeight = 0
let dooorWidth = 0
function Calculator(){    
    lenght = Number($('#u12').val());
    pricePosts = price_data["Pole"][document.getElementById('u31').value][document.getElementById('u164').value];
    priceProfNs = price_data["Decking"][document.getElementById('u42').value][document.getElementById('u36').value][document.getElementById('u167').value];
    lagsPrice = price_data["Lags"][document.getElementById('u33').value][document.getElementById('u164').value]
    priceKalitka = price_data["Wicket"][document.getElementById('u18').value][document.getElementById('u194').value]

    priceDoor = price_data["Gate"][ document.getElementById('u16').value ][ document.getElementById('u20').value ]
    feenceWidthRes =  price_data["FeenceWidth"][ document.getElementById('u13').value ]  // visota zabora
    widthProf = 1.10;
    feenceHeight = price_data["FeenceHeight"][ document.getElementById('u16').value ]  // shirina vorot
    dooorWidth = price_data["DooorWidth"][ document.getElementById('u18').value ]  // shirina kalitki
    setupZab = lenght * priceForZabor;
    console.log(pricePosts)
    console.log(priceProfNs)
    feenceLenght = $('#u12').val() - $('#u16').val() - $('#u18').val();
    colProf = feenceLenght / widthProf;
    
    PriceProfNs = feenceWidthRes * priceProfNs;
    PriceProfNsRes = PriceProfNs * colProf;  // total cena nastila
    postColResult = (feenceLenght - feenceHeight - dooorWidth) / 2.5 + 1;
    posts_result = postColResult * pricePosts * feenceWidthRes;
    lagsCol = (feenceLenght - feenceHeight - dooorWidth) * 2;
    AllResult = priceDoor;  // cena vorot
    lagsResult = lagsCol * 180;
    AllItog = lagsResult + posts_result + PriceProfNsRes + priceKalitka + AllResult + setupZab;  // total price
    discountNumber = AllItog / 100 * 5;  // skid
    itog = AllItog - discountNumber;  // total price with skidka
    ItogPrice = itog + setupZab + Number.parseInt(spanprice);  // za usilguy
    itogMat = itog  // total price with skidka
    
    if (AllItog < 80000) {
        discountNumber = 0
        $('#discountNumberLine').hide()
    }
    if (AllItog > 80000){
        $('#discountNumbers').html(Math.round(discountNumber));
        console.log('hello');
        $('#discountNumberLine').show()
    }
    // document.getElementById("basicPrice").innerHTML = (Math.round(itog));
    console.log('Дошло')
    $('#itogMat').html(Math.round(itogMat));
    $('#discountNumbers').html(Math.round(discountNumber));
    $('#setupZab ').html(Math.round(setupZab));
    $('#priceWithDisc').html(Math.round(itog));

    $('#discountNumber').html(Math.round(itog));
    $('#discountNumberLine').html(Math.round(AllItog));
    $('#AllItog').html(Math.round(AllItog));
    $('#ItogPrice').html(Math.round(ItogPrice));
    $('#PriceProfNsRes').html(Math.round(PriceProfNsRes));
    $('#priceKalitka').html(Math.round(priceKalitka));
    $('#lengthZabConf').html($('#u12').val());
    $('#TypeConf').html($('#u20').val());
    $('#widthDoorConf').html($('#u16').val());
    $('#HightZabConf').html($('#u13').val());
    $('#DoorConf').html($('#u18').val());
    $('#profNs').html(Math.round(colProf));

    $('#lagsResult').html(Math.round(lagsResult));
    $('#priceDoor').html(Math.round(priceDoor));
    $('#u66').html(Math.round(lagsCol));
    $('#u58').html(Math.round(postColResult));
    $('#u60').html(Math.round(posts_result));
    $('#AllResult').html(Math.round(AllResult));
    $('#itog').html(Math.round(itog + 'руб.'));
}

function confCalc(priceKalitka, priceDoor, lagsPrice, feenceHeight, dooorWidth, widthProf, priceProfNs, feenceWidthRes, pricePosts, placeImp){
    
    lenght = Number($('#u12').val());
    setupZab = lenght * priceForZabor;
    console.log(pricePosts)
    console.log(priceProfNs)
    feenceLenght = $('#u12').val() - $('#u16').val() - $('#u18').val();
    colProf = feenceLenght / widthProf;
    
    PriceProfNs = feenceWidthRes * priceProfNs;
    PriceProfNsRes = PriceProfNs * colProf;
    postColResult = (feenceLenght - feenceHeight - dooorWidth) / 2.5 + 1;
    posts_result = postColResult * pricePosts * feenceWidthRes;
    lagsCol = (feenceLenght - feenceHeight - dooorWidth) * 2;
    AllResult = priceDoor;
    lagsResult = lagsCol * 180;
    AllItog = lagsResult + posts_result + PriceProfNsRes + priceKalitka + AllResult + setupZab;
    discountNumber = AllItog / 100 * 5;
    itog = AllItog - discountNumber;
    ItogPrice = itog + setupZab + Number.parseInt(spanprice);
    itogMat = itog
    $(placeImp).html(Math.round(itog));
    if (AllItog < 80000) {
        discountNumber = 0
        $('#discountNumberLine').hide()
    }
    if (AllItog > 80000){
        $('#discountNumbers').html(Math.round(discountNumber));
        console.log('hello');
        $('#discountNumberLine').show()
    }
}

function clickConf(priceKalitka, priceDoor, lagsPrice, feenceHeight, dooorWidth, widthProf, priceProfNs, feenceWidthRes, pricePosts){
    lenght = Number($('#u12').val());
    setupZab = lenght * priceForZabor;
    console.log(pricePosts)
    console.log(priceProfNs)
    feenceLenght = $('#u12').val() - $('#u16').val() - $('#u18').val();
    colProf = feenceLenght / widthProf;
    
    PriceProfNs = feenceWidthRes * priceProfNs;
    PriceProfNsRes = PriceProfNs * colProf;
    postColResult = (feenceLenght - feenceHeight - dooorWidth) / 2.5 + 1;
    posts_result = postColResult * pricePosts * feenceWidthRes;
    lagsCol = (feenceLenght - feenceHeight - dooorWidth) * 2;
    AllResult = priceDoor;
    lagsResult = lagsCol * 180;
    AllItog = lagsResult + posts_result + PriceProfNsRes + priceKalitka + AllResult + setupZab;
    discountNumber = AllItog / 100 * 5;
    itog = AllItog - discountNumber;
    ItogPrice = itog + setupZab + Number.parseInt(spanprice);
    itogMat = itog
    if (AllItog < 80000) {
        discountNumber = 0
        $('#discountNumberLine').hide()
    }
    if (AllItog > 80000){
        $('#discountNumbers').html(Math.round(discountNumber));
        console.log('hello');
        $('#discountNumberLine').show()
    }
    $('#itogMat').html(Math.round(itogMat));
    $('#discountNumbers').html(Math.round(discountNumber));
    $('#setupZab ').html(Math.round(setupZab));
    $('#priceWithDisc').html(Math.round(itog));
    $('#discountNumber').html(Math.round(itog));
    $('#discountNumberLine').html(Math.round(AllItog));
    $('#AllItog').html(Math.round(AllItog));
    $('#ItogPrice').html(Math.round(ItogPrice));
    $('#PriceProfNsRes').html(Math.round(PriceProfNsRes));
    $('#priceKalitka').html(Math.round(priceKalitka));
    $('#lengthZabConf').html($('#u12').val());
    $('#TypeConf').html($('#u20').val());
    $('#widthDoorConf').html($('#u16').val());
    $('#HightZabConf').html($('#u13').val());
    $('#DoorConf').html($('#u18').val());
    $('#profNs').html(Math.round(colProf));
    $('#lagsResult').html(Math.round(lagsResult));
    $('#priceDoor').html(Math.round(priceDoor));
    $('#u66').html(Math.round(lagsCol));
    $('#u58').html(Math.round(postColResult));
    $('#u60').html(Math.round(posts_result));
    $('#AllResult').html(Math.round(AllResult));
    $('#itog').html(Math.round(itog + 'руб.'));
}

$( "#basic" ).click(function() {
    clickConf(8506, 16550, 180, 4, 1, 1.15, 431, 1.5, 337)
    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("1.5");
        $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C8");
        $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.3");
        $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
        $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Стандартный");
        $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Без замка");
        $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Без автоматики");
        $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Распашные");
});

$( "#stand" ).click(function() {
    clickConf(10806, 62768, 180, 2, 4, 1.15, 512, 1.8, 337)
    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("1.8");
        $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C8");
        $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.4");
        $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
        $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Стандартный");
        $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Врезной замок");
        $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Откатные");
        $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Без автоматики");
});

$( "#premium" ).click(function() {
    clickConf(10981, 128450, 180, 1.5, 4, 1.15, 856, 2, 337)
    $(".hight-zab").children(".ik_select").children(".ik_select_link").children("span").text("2");
        $(".marks-prof").children(".ik_select").children(".ik_select_link").children("span").text("C20");
        $(".tol-mat").children(".ik_select").children(".ik_select_link").children("span").text("0.5");
        $(".pokr-prof").children(".ik_select").children(".ik_select_link").children("span").text("Полимерное покрытие с одной стороны");
        $(".cvet-pokr").children(".ik_select").children(".ik_select_link").children("span").text("Нестандартный");
        $(".fur-kalt").children(".ik_select").children(".ik_select_link").children("span").text("Накладной замок");
        $(".fur-vor").children(".ik_select").children(".ik_select_link").children("span").text("Автоматика + фотоэлемент");
        $(".type--door").children(".ik_select").children(".ik_select_link").children("span").text("Откатные");
});

$('#u12').change(function () {
    confCalc(8506, 16550, 180, 4, 1, 1.15, 431, 1.5, 337, "#basicPrice");
confCalc(10806, 62768, 180, 2, 4, 1.15, 512, 1.8, 337, "#standicPrice")
confCalc(10981, 128450, 180, 1.5, 4, 1.15, 856, 2, 337, "#premPrice")
    Calculator();
});


console.log('Хз')
confCalc(8506, 16550, 180, 4, 1, 1.15, 431, 1.5, 337, "#basicPrice");
confCalc(10806, 62768, 180, 2, 4, 1.15, 512, 1.8, 337, "#standicPrice")
confCalc(10981, 128450, 180, 1.5, 4, 1.15, 856, 2, 337, "#premPrice")
Calculator();


$('select').on('change', function (e) {
    Calculator();
    console.log('селект сработал')
});