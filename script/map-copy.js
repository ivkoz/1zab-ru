ymaps.ready(init);

function init() {
     
    var suggestView = new ymaps.SuggestView('suggest1'),
        map,
        placemark;
    // Стоимость за километр.
    var DELIVERY_TARIFF = 40,
    // Минимальная стоимость.
        MINIMUM_COST = 2500,
        myMap = new ymaps.Map('map', {
            center: [60.906882, 30.067233],
            zoom: 9,
            controls: []
        }),
    // Создадим панель маршрутизации.
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                title: 'Расчёт доставки'
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    // $('#suggest1').change{
    //   routePanelControl.routePanel.state.set({
    //     fromEnabled: true,
    //     from: 'Ногинск, Школьная, 1Б ',
    //      to: document.getElementById('suggest1').value
    //  });
  
    // }

    routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Ногинск, Школьная, 1Б ',
        // to: document.getElementById('suggest1').value
     });
     $( "#suggest1" ).change(function() {
        routePanelControl.routePanel.state.set({
            to: document.getElementById('suggest1').value
        });    
        setTimeout(function () {
           console.log(document.getElementById('suggest1').value)
           routePanelControl.routePanel.state.set({
            to: document.getElementById('suggest1').value
        });        
                }, 1500)
    });
     $("#buttonMap").click(function(){
        routePanelControl.routePanel.state.set({
            fromEnabled: true,
            from: 'Ногинск, Школьная, 1Б ',
            to: document.getElementById('suggest1').value
        });
        $('.ymaps-2-1-79-route-panel-input__input').change(function(){
            document.getElementById('suggest1').value = routePanelControl.routePanel.state._data.to; 
            console.log('hello')
        })
        
        // console.log(routePanelControl.routePanel.state._data.to)
       document.getElementById('suggest1').value = routePanelControl.routePanel.state._data.to;  
     });
      
     // $(".ymaps-2-1-79-route-panel-input__input").change(function(){
     //    document.getElementById('suggest1').value = $(".ymaps-2-1-79-route-panel-input__input").value     
     // });
    // var body = elem.getElementsByTagName('body')
    // $('body') .on('click', function (){
    //     routePanelControl.routePanel.state.set({
    //     fromEnabled: true,
    //     from: 'Ногинск, Школьная, 1Б ',
    //      to: document.getElementById('suggest1').value
    //  });
    // });

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                // Вычислим стоимость доставки.
                price = calculate(Math.round(length.value / 1000))
                // Создадим макет содержимого балуна маршрута.
                    balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<span>Расстояние: ' + length.text + '.</span><br/>' +
                        '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
                    $('#kmDelivery').html(Math.round(length.text));
                    $("#suggest1").change(function(){

                    });

                    $('#deliveryPrice').html(price);
                    itogforuse = setupZab + price;
                    console.log(price)
                    console.log(document.getElementById('suggest1').value)
                    $('#itogforus').html(itogforuse);
                    ItogPrice = itog + price + setupZab;
                    $('#ItogPrice').html(Math.round(ItogPrice));
                    premItogPrice = premitog + setupZab + price;
                    $('#premPrice').html(Math.round(premItogPrice));
                    standItogPrice = standitog + setupZab + price;
                    $('#standicPrice').html(Math.round(standItogPrice));
                    basItogPrice = basitog + setupZab + price;
                    $('#basicPrice').html(Math.round(basItogPrice));
                    spanprice = price;
                    $('#deliveryPrice').html(Math.round(spanprice));
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
            }
        });

    });
    // Функция, вычисляющая стоимость доставки.
    function calculate(routeLength) {
        return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    }
    
}