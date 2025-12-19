<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitado extends Model
{
    protected $fillable = ['nombre', 'edad', 'familia_id'];

    public function familia()
    {
        return $this->belongsTo(Familia::class);
    }
}
