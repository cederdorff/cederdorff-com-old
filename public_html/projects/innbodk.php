<?php
$args = http_build_query($_GET, '', '&');
$url = "https://api.dba.dk/api/v2/ads/cassearch?" . $args;
header('Content-Type: application/json');
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_ENCODING, '');

$headers = array();
$headers[] = 'X-Apple-Tz: 0';
$headers[] = 'X-Apple-Store-Front: 143444,12';
$headers[] = 'Accept: application/json';
$headers[] = 'Accept-Language: en-US,en;q=0.5';
$headers[] = 'Cache-Control: no-cache';
$headers[] = 'dbaapikey: 087157d7-84d5-4f2b-1d02-08d282f6c857'; //Your referrer address
$headers[] = 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0';
$headers[] = 'X-MicrosoftAjax: Delta=true';

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$server_output = curl_exec ($ch);

curl_close ($ch);

print $server_output ;
?>
