<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
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

Route::post('/login', [LoginController::class, 'store'])->middleware('guest');

Route::get('/teachers', [TeacherController::class, 'index']);

Route::get('/students/{id}', [StudentController::class, 'show']);

Route::get('groups/{groupId}/students', [GroupController::class, 'getStudentsInGroup']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('schedules/notes', [ScheduleController::class, 'getSchedulesWithNotes']);

    Route::get('/profile', [StudentController::class, 'profile']);

    Route::get('/grades/average', [GradeController::class, 'getAverageGradesForGroup']);
}); 