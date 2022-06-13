<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL ^ E_NOTICE);

require( "$_SERVER[DOCUMENT_ROOT]/bitrix/header.php" );
$APPLICATION->SetTitle("Калькулятор");

$HTML = '';


$HTML .= <<<EOF
<script src="pricesettings.php?"></script>

<style type="text/css">
    @import url("style/style-calc.css");
</style>
<div class="wrapper">

    <div class="header">
        <div class="middle_calc">
            <form action="" class="middle_calc">
                <label>
                    <input type="radio" name="radio" checked/>
                    <div class="box">
                        <img src="img/2.png" alt="">
                        <span>Забор из проф-листа</span>
                    </div>
                </label>

                <label>
                    <input type="radio" name="radio"/>
                    <div class="box">
                        <img src="img/1.png" alt="">
                        <span>Забор из евро- штакетника</span>
                    </div>
                </label>
                <label>
            </form>
            <input type="radio" name="radio"/>
            <div class="box">
                <img src="img/3.png" alt="">
                <span>Забор из сетки Рабица</span>
            </div>
            </label>
        </div>
    </div>
</div>
<div class="main">
    <div class="main_span">
        <span class="main_span_res">Результаты рассчёта носят ознакомительный характер и не учитывают множества индивидуальных запросов клиентов, скидок и действующих акций, влияющих на окончательную цену. Итоговый рассчет вам сделает менеджер после уточнения всех деталей заказа.</span>
    </div>
    <form id="form" action="pdf.php" method="post" target=_blank>
        <div class="blocks">

            <div class="right-side">
                <div class="first-row">
                    <div class="first-row-item_1">
                        <div class="d-flex">
                        <span>Длина забора (м)</span>
                        </div>
                        <span class="non-hide_text">
                            Минимальная длина забора 15 метров
                        </span>
                        <input type="number" class="form" id="u12" value="15" name="lenght" min="15">

                    </div>
                    <div class="first-row-item_1 hight-zab">
                        <span>Высота забора (м)</span>
                        <select id="u13" class="form" name="hightDoor">
                            <option selected value="1.5" id="bas">1.5</option>
                            <option value="1.8" id="standart">1.8</option>
                            <option value="2" id="prem">2</option>
                            <option value="2.2">2.2</option>
                            <option value="2.5">2.5</option>
                            <option value="3">3</option>

                        </select>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1 type--door">
                        <span>Тип ворот</span>
                        <select id="u20" class="form" name="typeDoor">
                            <option selected value="Double-leaf" id="bas">Распашные</option>
                            <option value="SlidingManual" id="standart">Откатные</option>
                        </select>
                    </div>
                    <div class="first-row-item_1">
                        <span>Ширина ворот</span>
                        <SELECT id="u16" class="form" name="widthDoor">
                            <OPTION selected value="4">4</OPTION>
                            <OPTION value="4.5">4.5</OPTION>
                            <OPTION value="5">5</OPTION>
                        </SELECT>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1">
                        <span>Ширина калитки</span>
                        <select id="u18" class="form">
                            <option selected value="1">1 м</option>
                            <option value="1.2">1,2 м</option>
                        </select>
                    </div>
                </div>
                <div class="d-flex j-b">
                    <span>Адрес доставки</span>
                    <a href="#" class="js-open-modal" data-modal="1" id="buttonMap">Указать на карте</a>
                </div>


                <div class="modals" data-modal="1">
                    <!--   Svg иконка для закрытия окна  -->
                    <svg class="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                    </svg>
                    <p class="modal__title">Выберите адрес доставки на карте ниже</p>
                    <div id="map" style="width: 100%; height: 400px"></div>
                </div>

                <!-- Подложка под модальным окном -->
                <div class="overlay js-overlay-modal"></div>
                <div class="first-row">
                    <input type="text" class="form form-map" id="suggest1" value="" onchange="">

                </div>
                <h2 class="main_h1">Готовые конфигурации по вашим параметрам</h2>
                <div class="blocks_items">
                    <div class="item_conf_row">
                        <div class="item_conf">
                            <img src="img/5.png" alt="">
                            <span>Длина забора <span id="lengthZabConf"></span>;</span>
                        </div>
                        <div class="item_conf">
                            <img src="img/7.png" alt="">
                            <span>Ворота - <span id="TypeConf"></span>-<span id="widthDoorConf"></span></span>
                        </div>
                    </div>
                    <div class="item_conf_row">
                        <div class="item_conf">
                            <img src="img/4.png" alt="">
                            <span>Высота <span id="HightZabConf"></span>;</span>
                        </div>
                        <div class="item_conf">
                            <img src="img/6.png" alt="">
                            <span>Калитка - <span id="DoorConf"></span>;</span>
                        </div>
                    </div>
                </div>

                <div class="conf_blocks">
                    <label>
                        <input type="radio" name="radio" checked id="basic"/>
                        <div class="block fig1">
                            <div class="stars">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                            </div>
                            <p class="box-name">Базовый</p>
                            <span class="price" id="basicPrice"></span>
                            <p class="after-price">2260 ₽ за 1 м.п.</p>
                        </div>
                        <div class="quest quest_label" data-title="Всплывающий текст">?</div>
                    </label>
                    <label>
                        <input type="radio" name="radio" id="stand"/>
                        <div class="block fig1">
                            <div class="stars">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                            </div>
                            <p class="box-name">Стандарт</p>
                            <span class="price" id="standicPrice"></span>
                            <p class="after-price">3040 ₽ за 1 м.п.</p>
                        </div>
                        <div class="quest quest_label" data-title="Всплывающий текст">?</div>
                    </label>
                    <label>
                        <input type="radio" name="radio" id="premium"/>
                        <div class="block fig1">
                            <div class="stars">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                                <img src="img/9.png" alt="">
                            </div>
                            <p class="box-name">Премиум</p>
                            <span class="price" id="premPrice"></span>
                            <p class="after-price">3750 ₽ за 1 м.п.</p>
                        </div>
                        <div class="quest quest_label" data-title="Всплывающий текст">?</div>
                    </label>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1">
                        <div class="row_text">
                            <span>Столбы</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <span>(Сечение и толщина металла)</span>
                        <select name="post" id="u31" class="form">
                            <option selected value="60x60x2">60х60х2</option>
                            <option value="80x80x2">80x80x2</option>
                            <option value="100x100x3">100x100x3</option>
                        </select>
                    </div>
                    <div class="first-row-item_1">
                        <div class="row_text">
                            <span>Лаги</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <span>(сечение и толщина металла)</span>
                        <select name="lags" id="u33" class="form">
                            <option selected value="40x20x15">40x20x1.5</option>
                            <option value="60x30x15">60х30х1.5</option>
                        </select>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1">
                        <div class="row_text">
                            <span class="margin_20">Покрытие каркаса:</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="pokr_car" id="u164" class="form">
                            <option selected value="Primer">Грунт</option>
                            <option value="Enamel">Эмаль по металлу</option>
                        </select>
                    </div>
                    <div class="first-row-item_1 marks-prof">
                        <div class="row_text">
                            <span class="margin_20">Марки профлиста:</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="mark_prof" id="u167" class="form">
                            <option selected value="C8" id="standart">C8</option>
                            <option value="C2021" id="prem">C20-21</option>
                        </select>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1 tol-mat">
                        <div class="row_text">
                            <span class="margin_20">Толщина материала профлиста</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="widthMaterial" id="u36" class="form">
                            <option selected value="03" id="bas">0.3 мм</option>
                            <option value="03.5">0.35 мм</option>
                            <option value="04" id="standart">0.4 мм</option>
                            <option value="04.5">0.45 мм</option>
                            <option value="05" id="prem">0.5 мм</option>
                            <option value="07">0.7 мм</option>
                        </select>
                    </div>
                    <div class="first-row-item_1 pokr-prof">
                        <div class="row_text">
                            <span class="margin_20">Покрытие профлиста</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="pokr_list" id="u42" class="form">
                            <option  value="Zink">Цинк</option>
                            <option selected value="Polimer1side" id="bas">Полимерное покрытие с одной
                                стороны
                            </option>
                            <option value="Polimer2side" id="dvuh">Полимерное покрытие с двух сторон</option>
                        </select>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1 cvet-pokr">
                        <div class="row_text">
                            <span class="margin_20">Цвет покрытия профлиста</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="color_list" id="u168" class="form">
                            <option selected value="Без покрытия" id="clear">Без покрытия</option>
                            <option value="Стандартный" id="standart">Стандартный</option>
                            <option value="Нестандартный" id="prem">Нестандартный</option>
                            <option value="Премиум">Премиум</option>
                        </select>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-item_1 fur-kalt">
                        <div class="row_text">
                            <span class="margin_20">Фурнитура для калитки</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="border_dr" id="u194" class="form">
                            <option selected value="NoLock" id="bas">Без замка</option>
                            <option value="EmbeddedLock" id="standart">Врезной замок</option>
                            <option value="PadLock" id="prem">Накладной замок</option>
                        </select>
                    </div>
                    <div class="first-row-item_1 fur-vor">
                        <div class="row_text">
                            <span class="margin_20">Фунитура для ворот</span>
                            <div class="quest quest_text" data-title="Всплывающий текст">?</div>
                        </div>
                        <select name="furniture_door" id="u196" class="form">
                            <option selected value="Non" id="standart">Без автоматики</option>
                            <option value="SlidingAuto">Автоматика</option>
                            <option value="SlidingAutoSensor" id="prem">Автоматика + фотоэлемент</option>
                        </select>
                    </div>
                </div>
            </div>


            <div class="left-side">
                <table>
                    <tr>
                        <td class="border_left_right">Ворота</td>
                        <td class="border_left_right text_center">шт.</td>
                        <td class="border_left_right text_center"><span id="colDoor" name="colDoor">1</span></td>
                        <td class="border_left_right"><span id="priceDoor" name="priceDoor"></span><span>&ensp;₽</span></td>
                    </tr>
                    <tr>
                        <td class="border_left_right">Столб</td>
                        <td class="border_left_right text_center">шт.</td>
                        <td class="border_left_right text_center"><span id="u58" name="u58"></span></td>
                        <td class="border_left_right text_center"><span id="u60" name="u60"></span><span>&ensp;₽</span></td>
                    </tr>
                    <tr>
                        <td class="border_left_right">Лаги проф. труба</td>
                        <td class="border_left_right text_center">п.м.</td>
                        <td class="border_left_right text_center"><span id="u66" name="u66"></span></td>
                        <td class="border_left_right text_center"><span id="lagsResult" name="lagsResult"><span>&ensp;₽</span></td>
                    </tr>
                    <tr>
                        <td class="border_left_right ">Профнастил</td>
                        <td class="border_left_right text_center">п.м.</td>
                        <td class="border_left_right text_center"><span id="profNs" name="profNs"></span></td>
                        <td class="border_left_right text_center"><span id="PriceProfNsRes" name="PriceProfNsRes"></span><span>&ensp;₽</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="border_left_right ">Калитка</td>
                        <td class="border_left_right text_center">шт.</td>
                        <td class="border_left_right text_center"><span name id="colKalitka" name="colKalitka">1</span></td>
                        <td class="border_left_right text_center"><span id="priceKalitka" name="priceKalitka"></span><span>&ensp;₽</span>
                        </td>
                    </tr>
                </table>
                <div class="edn">
                    <span class="discount">Скидка 5% от стоимости материала (от 80000 ₽)</span>
                    <span id="discountNumbers"></span>
                </div>
                <div class="edn align-center">
                    <span class="itogMat">Итого за материал</span>
                    <div class="discount_block">
                        <div class="d-flex">
                            <span class="discount" id="discountNumberLine"></span>
                        </div>
                        <div class="d-flex">
                            <span class="discount" id="itogMat" name="itogMat"></span>
                            <span>&ensp;₽</span>
                        </div>
                    </div>
                </div>
                <div class="block-two">
                    <div class="edn">
                        <span>Установка забора</span>
                        <div class="d-flex">
                            <span id="setupZab" name="setupZab"></span>
                            <span>&ensp;₽</span>
                        </div>
                    </div>

                    <div class="edn bc-w">
                        <span class="delivery-price">Стоимость доставки до участка</span>
                        <div class="d-flex">
                            <span class="" id="deliveryPrice" name="deliveryPrice"></span>
                            <span>&ensp;₽</span>
                        </div>
                    </div>
                    <div class="edn bold_grey">
                        <span>Итого за услуги</span>
                        <div class="d-flex">
                            <span id="itogforus"></span>
                            <span>&ensp;₽</span>
                        </div>
                    </div>

                    <div class="edn first itogMain">
                        <span class="itog_main">Итоговая стоимость договора</span>
                        <div class="discount_block itogblock">
                            <span id="ItogPrice" name="ItogPrice" class="itog"></span>
                            <span>&ensp;₽</span>
                        </div>
                    </div>
                    <div class="d-flex space-b">
                        <span>Скачать результаты pdf файлом</span>
                        <input type="submit" class="button_input"  value="Скачать"  target=_blank></div>

                    <div class="callback">
                        <div class="callback_content">
                            Узнайте окончательную стоимость по телефону<br><span
                                    class="number_phone">+7 999 333-14-05</span><br><br>или<br><br><span
                                    class="span_send">Отправить заявку на итоговый расчёт</span>
                            <div class="forms">
                                <div class="form_contact">
                                    <span>Ваше имя</span>
                                    <input type="text" class="form" name="first_name" >
                                </div>
                                <div class="form_contact">
                                    <span>Телефон</span>
                                    <input value="" class="tel form " placeholder="+7" name="number_phone">
                                </div>
                            </div>
                        </div>
                        <a href="" class="button">
                            <div><span>Отправить</span></div>
                        </a>
                    </div>
                    <div class="actii">
                        <span>Стоимость указана без действующих акций</span>
                        <a href="" class="button">
                            <span>Акции</span>
                        </a>
                    </div>
                </div>
            </div>
    </form>
</div>
</div>
</div>

<script>
    function myFoo() {
        document.querySelector("ymaps-2-1-79-route-panel-input__input").id = "duble";
    }
</script>

<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>  -->

<script src="script/map.js"></script>
<script src="script/newscript.js"></script>
<script src="script/phone.js"></script>
<script src="script/modal.js"></script>

EOF;


echo $HTML;

require( "$_SERVER[DOCUMENT_ROOT]/bitrix/footer.php" );

?>