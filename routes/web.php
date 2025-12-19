<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'familiesCount' => \App\Models\Familia::count(),
        'guestsCount' => \App\Models\Invitado::count(),
        'families' => \App\Models\Familia::withCount('invitados')->latest()->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Resource Routes
    Route::resource('families', App\Http\Controllers\FamiliaController::class)->only(['index', 'show']);
    Route::resource('invitados', App\Http\Controllers\InvitadoController::class)->only(['index', 'show']);
});

Route::post('/rsvp', [App\Http\Controllers\FamiliaController::class, 'store'])->name('rsvp.store');

require __DIR__.'/auth.php';
