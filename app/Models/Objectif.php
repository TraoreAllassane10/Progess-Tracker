<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Objectif extends Model
{
    /** @use HasFactory<\Database\Factories\ObjectifFactory> */
    use HasFactory;

    public const EN_COURS = "en cours";
    public const TERMINE = "terminé";
    public const ABANDONNE = "abandonné";

    protected $fillable = [
        "titre",
        "date_commencement",
        "date_echeance",
        "user_id"
    ];

    //Nombre total d'objectif
    public function totalObjectif()
    {
        return $this->where("user_id", Auth::user()->id)->get()->count();
    }

    //Nombre d'objectif atteint
    public function nombreObjectifAtteint()
    {
        return $this->where("user_id", Auth::user()->id)->where("statut", self::TERMINE)->get()->count();
    }

    // Calcule du pourcentage d'objectifs terminés
    public function tauxObjectifTermine(){
        return $this->totalObjectif() > 0 ? round(($this->nombreObjectifAtteint() / $this->totalObjectif()) * 100, 2) : 0;
    }
}
