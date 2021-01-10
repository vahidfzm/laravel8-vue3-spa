<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', 'App\Http\Controllers\AuthController@login')->name('login');
Route::post('/register', 'App\Http\Controllers\AuthController@register')->name('register');


Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::post('/logout', 'App\Http\Controllers\AuthController@logout')->name('logout');
    Route::get('/events', 'App\Http\Controllers\EventController@list');
});

