<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL ^ E_NOTICE);

header('Content-type: application/pdf');
header('Content-Disposition: inline; filename="1zab.ru.pdf"');
header('Content-Transfer-Encoding: binary');
header('Accept-Ranges: bytes');


$lenght = $_REQUEST['lenght'];
$hightDoor = $_REQUEST['hightDoor'];
$first_name = $_REQUEST['first_name'];
$number_phone = $_REQUEST['number_phone'];
$something = $_REQUEST['sort'];
$something = $_REQUEST['something'];
$typeDoor = $_REQUEST['typeDoor'];
$widthDoor = $_REQUEST['widthDoor'];
$something = $_REQUEST['something'];
$post = $_REQUEST['post'];
$lags = $_REQUEST['lags'];
$pokr_car = $_REQUEST['pokr_car'];
$mark_prof = $_REQUEST['mark_prof'];
$widthMaterial = $_REQUEST['widthMaterial'];
$pokr_list = $_REQUEST['pokr_list'];
$color_list = $_REQUEST['color_list'];
$border_dr = $_REQUEST['border_dr'];
$furniture_door = $_REQUEST['furniture_door'];
$colDoor = $_REQUEST['colDoor'];
$priceDoor = $_REQUEST['priceDoor'];
$lagsResult = $_REQUEST['lagsResult'];
$PriceProfNsRes = $_REQUEST['PriceProfNsRes'];
$profNs = $_REQUEST['profNs'];
$u58 = $_REQUEST['u58'];
$u60 = $_REQUEST['u60'];
$u66 = $_REQUEST['u66'];
$colKalitka = $_REQUEST['colKalitka'];
$priceKalitka = $_REQUEST['priceKalitka'];
$itogMat = $_REQUEST['itogMat'];
$setupZab = $_REQUEST['setupZab'];
$deliveryPrice = $_REQUEST['deliveryPrice'];
$ItogPrice = $_REQUEST['ItogPrice'];


require( 'php-html-to-pdf.php' );


$pdf_object = new HTMLtoPDF([
    'Author'=>'1zab.ru',
    'Title'=>'Калькуляция ограждения',
]);


$pdf_body = <<<EOF
<h3>Результаты расчёта </h3>

<p>Длина забора = $lenght м.</p>
<p>Высота забора = $hightDoor м.</p>
<p>Тип ворот = $typeDoor</p>
<p>Ширина ворот = $widthDoor м.</p>
<p>Количество ворот = $colDoor</p>
<p>Столбы (сечение и толщина металла) = $post</p>
<p>Лаги (сечение и толщина металла) = $lags</p>
<p>Покрытие каркаса = $pokr_car</p>
<p>Марки профлиста = $mark_prof</p>
<p>Толщина материала профлиста = $widthMaterial</p>
<p>Покрытие профлиста = $pokr_list</p>
<p>Цвет покрытия профлиста = $color_list</p> 
<p>Фурнитура для калитки = $border_dr</p>
<p>Фунитура для ворот = $furniture_door</p>
<br>
<h3>Итог</h3>
<p>Ворота - ($colDoor шт.) - $priceDoor р.</p>
<p>Столб - ($u58 шт.) - $u60 р.</p>
<p>Лаги - ($u66 шт.) - $lagsResult р.</p>
<p>Профнастил - ($profNs шт.) - $PriceProfNsRes р.</p>
<p>Калитка - ($colKalitka шт.) - $priceKalitka р.</p>
<p>Итого за материал - $itogMat р.</p>
<p>Установка забора - $setupZab р.</p>
<p>Стоимость доставки до участка - $deliveryPrice р.</p>
<p>Итоговая стоимость договора - $ItogPrice</p>
EOF;


$pdf_object->WriteHTML([
    'html'=>$pdf_body,
    'language'=>'ja',
]);

/*
$pdf_object->Output('file.pdf', "F", TRUE);

$HTML = <<<EOF
<a href="file.pdf?">PDF file</a>
EOF;

echo $HTML;
*/

/*
$pdf_object->Output('file.pdf', "F", TRUE);

@readfile('file.pdf');
*/


$pdf_object->Output();


?>