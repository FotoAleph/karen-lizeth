<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvitadoController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('Invitados/Index', [
            'invitados' => \App\Models\Invitado::with('familia')->latest()->paginate(15)
        ]);
    }

    public function show(\App\Models\Invitado $invitado)
    {
        $invitado->load('familia');
        return \Inertia\Inertia::render('Invitados/Show', [
            'invitado' => $invitado
        ]);
    }
}
