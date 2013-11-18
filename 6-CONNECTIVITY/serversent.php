<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('d/m/Y H:i:s');
echo "data: Conferencia web.br Data do servidor é: {$time}" . PHP_EOL;
echo PHP_EOL;
ob_flush();
flush();

//sleep(3);
?> 