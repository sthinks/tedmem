<?php
return [
    'scout_elastic' => [
        'driver' => 'elastic',
        'hosts' => [env('ELASTICSEARCH_HOST', 'http://localhost')],
    ],
];
