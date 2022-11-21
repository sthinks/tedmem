<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//İletişim
Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'store']);


//Blog
Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'getBlogs']);
Route::get('/blog-details/{slug}', [\App\Http\Controllers\BlogController::class, 'getBlogDetails']);
Route::get('/author', [\App\Http\Controllers\BlogController::class, 'getAuthors']);
Route::get('/author-details/{slug}', [\App\Http\Controllers\BlogController::class, 'getAuthorsDetails']);

//Yayınlar
Route::get('/publics', [\App\Http\Controllers\BlogController::class, 'getPublics']);
Route::get('/publics/{slug}', [\App\Http\Controllers\BlogController::class, 'getPublicsSlugged']);
Route::get('/public-details/{slug}', [\App\Http\Controllers\BlogController::class, 'getPublicsDetails']);

//Etkinlik
Route::get('/events', [\App\Http\Controllers\EventController::class, 'getEvents']);
Route::get('/event-details/{slug}', [\App\Http\Controllers\EventController::class, 'getEventDetails']);

//Kurumsal
Route::get('/kurumsal', [\App\Http\Controllers\EventController::class, 'getAbout']);
Route::get('/kadromuz', [\App\Http\Controllers\EventController::class, 'getKadro']);

//Yazilar
Route::get('/yazilar/{slug}', [\App\Http\Controllers\WritesController::class, 'getWrites']);
Route::get('/yazilar-detay/{slug}', [\App\Http\Controllers\WritesController::class, 'getWritesDetails']);

//Anasayfa<<<<
Route::get('/latest-bulten', [\App\Http\Controllers\HomeController::class, 'getLatestBulten']);
Route::get('/latest-writes', [\App\Http\Controllers\HomeController::class, 'getLatestWrites']);
Route::get('/latest-publics', [\App\Http\Controllers\HomeController::class, 'getLatestPublics']);

// Bülten
Route::get('/bulten', [\App\Http\Controllers\HomeController::class, 'getBultens']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
