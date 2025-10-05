<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objectif extends Model
{
    /** @use HasFactory<\Database\Factories\ObjectifFactory> */
    use HasFactory;

    public const EN_COURS = "en cours";
    public const TERMINE = "terminé";
    public const ABANDONNE = "abandonné";
}
