<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Objectifs (Provisoire)
    Route::get('objectifs', function () {
        return Inertia::render('objectif/Index');
    })->name('objectifs');

    // Habitats (Provisoire)
    Route::get('habitudes', function () {
        return Inertia::render('habitude/Index');
    })->name('habitudes');
    Route::get('habitudes/1', function () {
        return Inertia::render('habitude/Show');
    })->name('habitudes.show');

    // Actions (Provisoire)
    Route::get("actions", function() {
        return Inertia::render("action/Index");
    })->name("actions");
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
