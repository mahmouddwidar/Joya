<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//**************************************** Reviews ********************************/

Route::get('/reviews', [ReviewController::class, 'index'])
->name("reviews.index");

Route::get('/reviews/create', [ReviewController::class, 'create'])->name('reviews.create');


Route::post('/reviews', [ReviewController::class, 'store'])
->name('reviews.store');

// Route::get('/reviews/{id}', [ReviewController::class, 'show'])
// ->name('reviews.show');
Route::get('/reviews/getbyproduct', [ReviewController::class, 'getProductReviews'])
->name('reviews.getbyproduct');

Route::get('/reviews/{id}/edit', [ReviewController::class, 'edit'])
->name('reviews.edit');

Route::put('/reviews/{id}', [ReviewController::class, 'update'])
->name('reviews.update');

Route::delete('/reviews/{id}', [ReviewController::class, 'destroy'])
->name('reviews.destroy');

/**************************************** Messages ************************************************/

Route::get('/messages', [MessageController::class, 'index'])
->name("messages.index");

Route::get('/messages/create', [MessageController::class, 'create'])
->name('messages.create');


Route::post('/messages', [MessageController::class, 'store'])
->name('messages.store');

Route::get('/messages/{id}', [MessageController::class, 'show'])
->name('messages.show');

Route::get('/messages/{id}/edit', [MessageController::class, 'edit'])
->name('messages.edit');

Route::put('/messages/{id}', [MessageController::class, 'update'])
->name('messages.update');

Route::delete('/messages/{id}', [MessageController::class, 'destroy'])
->name('messages.destroy');
