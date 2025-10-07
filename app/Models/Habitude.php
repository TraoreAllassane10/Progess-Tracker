<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitude extends Model
{
    /** @use HasFactory<\Database\Factories\HabitudeFactory> */
    use HasFactory;

    protected $fillable = [
        "titre",
        "frequence",
        "user_id"
    ];

}
