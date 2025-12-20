<?php

namespace App\Http\Controllers;

use App\Models\Invitado;
use Illuminate\Http\Request;

class FamiliaController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'apellido' => 'required|string|max:255',
            'telefono' => 'required|string|max:20|unique:familias,telefono',
            'invitados' => 'required|array|min:1',
            'invitados.*.nombre' => 'required|string|max:255',
            'invitados.*.edad' => 'required|string|max:10',
        ]);

        \Illuminate\Support\Facades\DB::transaction(function () use ($request) {
            $familia = \App\Models\Familia::create([
                'apellido' => $request->apellido,
                'telefono' => $request->telefono,
            ]);

            $familia->invitados()->createMany($request->invitados);
        });

        return redirect()->back()->with('success', '¡Gracias por confirmar tu asistencia!');
    }

    public function index()
    {
        return \Inertia\Inertia::render('Families/Index', [
            'families' => \App\Models\Familia::withCount('invitados')->latest()->paginate(10)
        ]);
    }

    public function show(\App\Models\Familia $familia)
    {
        $invitados = Invitado::where('familia_id', $familia->id)->get();
        dd($invitados);


        return \Inertia\Inertia::render('Families/Show', [
            'familia' => $familia
        ]);
    }
}
