<?php
header("Content-Type: text/javascript");

$if_data = file_get_contents('price.json');

echo <<<EOF
var price_data = JSON.parse(`$if_data`);
EOF;
?>