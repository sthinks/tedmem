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
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'store',
]);

//Blog
Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'getBlogs']);
Route::get('/blog-details/{slug}', [
    \App\Http\Controllers\BlogController::class,
    'getBlogDetails',
]);
Route::get('/author', [
    \App\Http\Controllers\BlogController::class,
    'getAuthors',
]);
Route::get('/author-details/{slug}', [
    \App\Http\Controllers\BlogController::class,
    'getAuthorsDetails',
]);

//Yayınlar
Route::get('/publics', [
    \App\Http\Controllers\BlogController::class,
    'getPublics',
]);
Route::get('/publics/{slug}', [
    \App\Http\Controllers\BlogController::class,
    'getPublicsSlugged',
]);
Route::get('/public-details/{slug}', [
    \App\Http\Controllers\BlogController::class,
    'getPublicsDetails',
]);

//Etkinlik
Route::get('/events', [
    \App\Http\Controllers\EventController::class,
    'getEvents',
]);
Route::get('/events/{slug}', [
    \App\Http\Controllers\EventController::class,
    'getEventsSlugged',
]);
Route::get('/event-details/{slug}', [
    \App\Http\Controllers\EventController::class,
    'getEventDetails',
]);

//Kurumsal
Route::get('/kurumsal', [
    \App\Http\Controllers\EventController::class,
    'getAbout',
]);
Route::get('/kadromuz', [
    \App\Http\Controllers\EventController::class,
    'getKadro',
]);
Route::get('/kadromuz/{slug}', [
    \App\Http\Controllers\EventController::class,
    'getKadroSlug',
]);

//Yazilar
Route::get('/yazilar', [
    \App\Http\Controllers\WritesController::class,
    'getAllWrites',
]);
Route::get('/yazilar/{slug}', [
    \App\Http\Controllers\WritesController::class,
    'getWrites',
]);
Route::get('/yazilar-detay/{slug}', [
    \App\Http\Controllers\WritesController::class,
    'getWritesDetails',
]);
Route::get('/home-write', [
    \App\Http\Controllers\WritesController::class,
    'getHomeWrite',
]);

//Anasayfa<<<<
Route::get('/latest-bulten', [
    \App\Http\Controllers\HomeController::class,
    'getLatestBulten',
]);
Route::get('/latest-writes', [
    \App\Http\Controllers\HomeController::class,
    'getLatestWrites',
]);
Route::get('/latest-publics', [
    \App\Http\Controllers\HomeController::class,
    'getLatestPublics',
]);

// Bülten
Route::get('/bulten', [
    \App\Http\Controllers\HomeController::class,
    'getBultens',
]);
//Categories

Route::get('/public-category', [
    \App\Http\Controllers\CategoryController::class,
    'getPublicCategory',
]);
Route::get('/event-category', [
    \App\Http\Controllers\CategoryController::class,
    'getEventCategory',
]);
Route::get('/write-category', [
    \App\Http\Controllers\CategoryController::class,
    'getWriteCategory',
]);
Route::get('/merhaba', [
    \App\Http\Controllers\TagWriteController::class,
    'getAllTagPivot',
]);
Route::get('/alltag', [
    \App\Http\Controllers\TagWriteController::class,
    'getAllTag',
]);
Route::get('/write-tag/{slug}', [
    \App\Http\Controllers\TagWriteController::class,
    'getAllTagWriteSlug',
]);
Route::get('/event-tag/{slug}', [
    \App\Http\Controllers\TagWriteController::class,
    'getAllTagEventSlug',
]);
//For search data
Route::get('/searchWrite', [
    \App\Http\Controllers\HomeController::class,
    'getSearchWriteData',
]);
Route::get('/searchPublic', [
    \App\Http\Controllers\HomeController::class,
    'getSearchPublicData',
]);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
