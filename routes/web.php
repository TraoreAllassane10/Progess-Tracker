<?php

use App\Http\Controllers\HabitudeController;
use App\Http\Controllers\ObjectifController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Les routes de l'objectif
    Route::resource("objectifs", ObjectifController::class);
    Route::post("objectifs/{objectif}/toggle-statut", [ObjectifController::class, "toggleStatut"])->name("objectifs.toogle-statut");

    // Habitats (Provisoire)
    Route::resource("habitudes", HabitudeController::class);
    Route::post("habitudes/{habitude}/checkin", [HabitudeController::class, "checkin"])->name("habitudes.checkin");

    // Actions (Provisoire)
    Route::get("actions", function () {
        return Inertia::render("action/Index");
    })->name("actions");
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
