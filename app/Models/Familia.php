<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Familia extends Model
{
    protected $fillable = ['apellido', 'telefono'];

    public function invitados()
    {
        return $this->hasMany(Invitado::class);
    }
}
